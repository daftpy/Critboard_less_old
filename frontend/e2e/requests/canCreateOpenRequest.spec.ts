import { test, expect, type Page } from '@playwright/test';
import axios from 'axios'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});
test.afterEach(async ({ page}) => {
  await axios.get('http://localhost:8001/cmd\=python%20manage.py%20flush%20--no-input')
})

test.describe('A user can request feedback.', () => {
  test('user can create an open request', async ({ page }) => {

    // The user clicks on the request feedback button.
    await Promise.all([
      page.waitForNavigation(),
      await page.locator('role=button', {hasText: 'Request'}).click(),
    ])

    // The user is taken to the requests page.
    await expect(page.locator('role=heading', {hasText: 'Open Requests'})).toBeVisible();
    await expect(page.url()).toBe('http://localhost:3000/requests');
    await expect(page.locator('text=Requested less than a minute ago')).toBeVisible();
  })
});
