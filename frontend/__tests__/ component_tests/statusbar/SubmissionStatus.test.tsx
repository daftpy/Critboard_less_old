import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SubmissionStatus from '../../../components/layout/statusbar/SubmissionStatus';

describe('SubmissionStatus Component', () => {
  describe('how it renders', () => {
    it('informs the user when submissions are open', () => {
      render(<SubmissionStatus submissionsOpen={true} />);

      const submissionStatus = screen.getByText(/Submissions Open/i);

      expect(submissionStatus).toBeInTheDocument();
    });

    it('informs the user when submissions are closed', () => {
      render(<SubmissionStatus submissionsOpen={false} />);

      const submissionStatus = screen.getByText(/Submissions Closed/i);

      expect(submissionStatus).toBeInTheDocument();
    });
  });

  describe('how it behaves', () => {
    it('uses green text when submissions are open', () => {
      render(<SubmissionStatus submissionsOpen={true} />);

      const submissionStatus = screen.getByText(/Submissions Open/i);
      expect(submissionStatus).toHaveStyle('color: #059669;')
    });

    it('uses red text when submissions are closed', () => {
      render(<SubmissionStatus submissionsOpen={false} />);

      const submissionStatus = screen.getByText(/Submissions Closed/i);
      
      expect(submissionStatus).toHaveStyle('color: #f43f5e;');
    })
  });
})