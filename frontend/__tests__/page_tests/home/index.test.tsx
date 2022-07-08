import { render, screen } from '@testing-library/react'
import Home from '../../../pages'
import '@testing-library/jest-dom'
import { ISubmission } from '../../../lib/requests';

const submissions: ISubmission[] = [{
  "id": "12345",
  "submissionType": "link",
  "isReviewed": false,
  "createdAt": new Date(),
  "submissionContent": {
    "title": "Test Submission",
    "createdAt": new Date(),
    "description": "This is a test submission.",
    "link": "https://example.com/link1"
  },
  "isPremium": false
},
{
  "id": "23456",
  "submissionType": "link",
  "isReviewed": false,
  "createdAt": new Date(),
  "submissionContent": {
    "title": "Test Submission 2",
    "createdAt": new Date(),
    "description": "This is a test submission.",
    "link": "https://example.com/link2"
  },
  "isPremium": false
}];

describe('Home', () => {''
  describe('how it renders', () => {
    it('uses BaseLayout', () => {
      const {container} = render(<Home submissions={submissions}/>);

      const baseLayout = container.querySelector('#BaseLayout');

      expect(baseLayout).toBeInTheDocument();
    });

    it('renders a welcome message', () => {
      render(<Home submissions={submissions} />);
  
      const heading = screen.getByRole('heading', {
        name: /Welcome to Critboard/i,
      });
  
      expect(heading).toBeInTheDocument();
    });

    it('renders a hottest submission panel', () => {
      render(<Home submissions={submissions} />);

      const hottestSubmission = screen.getByRole('heading', {
        name: /Hottest Submission/i
      });

      expect(hottestSubmission).toBeInTheDocument();
    })

    it('renders recent submissions', () => {
      render(<Home submissions={submissions} />);

      const recentSubmissions = screen.getByRole('heading', {
        name: /Recent Submissions/i
      });

      expect(recentSubmissions).toBeInTheDocument();
    })
  });
});