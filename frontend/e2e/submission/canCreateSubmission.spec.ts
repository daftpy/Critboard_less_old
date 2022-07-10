import { test, expect, type Page } from '@playwright/test';
import axios from 'axios'

test.beforeEach(async ({ page }) => {
  await axios.get(
    'http://localhost:8001/cmd\=python%20manage.py%20loaddata%20critboard/submissions/fixtures/openRequests.json'
  );
  await page.goto('http://localhost:3000/requests');
});
test.afterEach(async ({ page}) => {
  await axios.get('http://localhost:8001/cmd\=python%20manage.py%20flush%20--no-input')
})

test.describe('A user can turn open requests into submissions', () => {

  test('user can create a link submission', async ({ page }) => {
    await page.locator('role=heading', {hasText: /Premium: false/}).click();

    // The user is taken to the requests page.
    await expect(page.locator('role=heading', {hasText: /Choose a submission type/})).toBeVisible();
    await expect(page.url()).toContain('http://localhost:3000/submissions/create?id=');

    // The user chooses to subit a link submission
    await page.locator('role=button', {hasText: 'Link Submission'}).click()
    // The page transitions and shows the link form
    await expect(page.locator('role=heading', {hasText: /Link Submission/})).toBeVisible();

    // The user fills out the form fields
    await page.locator('#title').type('Test Submission');
    await page.locator('#description').type('This is a test submission');
    await page.locator('#link').type('https://soundcloud.com');
    await page.locator('#permission').check();
    await page.locator('role=button', {hasText: /Submit/}).click()

    // The user is taken back to the home page
    await expect(page.locator('text=Welcome to Critboard')).toBeVisible();
    await expect(page.url()).toEqual('http://localhost:3000/');
    // The user notices their submission entry with title
    await expect(page.locator('role=heading', {hasText: /Test Submission/})).toBeVisible();
  });

  test('user can create a file submission', async ({ page }) => {
    await page.locator('role=heading', {hasText: /Premium: false/}).click();

    // The user is taken to the requests page.
    await expect(page.locator('role=heading', {hasText: /Choose a submission type/})).toBeVisible();
    await expect(page.url()).toContain('http://localhost:3000/submissions/create?id=');

    // The user chooses to subit a link submission
    await page.locator('role=button', {hasText: 'File Submission'}).click()
    // The page transitions and shows the link form
    await expect(page.locator('role=heading', {hasText: /File Submission/})).toBeVisible();

    // The user fills out the form fields
    await page.locator('#title').type('Test File Submission');
    await page.locator('#description').type('This is a test submission');

    const [fileChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      page.locator('#file').click()
    ])

    await fileChooser.setFiles('testfile.png');

    await page.locator('#permission').check();
    await page.locator('role=button', {hasText: /Submit/}).click()

    // The user is taken back to the home page
    await expect(page.locator('text=Welcome to Critboard')).toBeVisible();
    await expect(page.url()).toEqual('http://localhost:3000/');
    // The user notices their submission entry with title
    await expect(page.locator('role=heading', {hasText: /Test File Submission/})).toBeVisible();
  })
});
