import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WelcomeMessage from '../../components/WelcomeMessage';

describe('SubmissionStatus Component', () => {
  describe('how it renders', () => {
    it('welcomes the user', () => {
      render(<WelcomeMessage />);

      const welcomeMessage = screen.getByRole('heading', {
        name: /Welcome to Critboard/i
      });

      expect(welcomeMessage).toBeInTheDocument();
    });

    it('renders a call to action message', () => {
      render(<WelcomeMessage />);

      const callToAction = screen.getByText(/Need constructive and informed feedback\?/i)

      expect(callToAction).toBeInTheDocument();
    });

    it('renders an action button', () => {
      render(<WelcomeMessage />);

      const actionButton = screen.getByRole('button', {
          name: /Request/i
      });

      expect(actionButton).toBeInTheDocument();
    });
  });
});