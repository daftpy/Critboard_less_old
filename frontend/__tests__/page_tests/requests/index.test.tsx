import { render, screen } from '@testing-library/react'
import Requests from '../../../pages/requests';
import '@testing-library/jest-dom'

describe('Requests', () => {
  describe('how it renders', () => {
    it('uses BaseLayout', () => {
      const {container} = render(<Requests />);

      const baseLayout = container.querySelector('#BaseLayout');

      expect(baseLayout).toBeInTheDocument();
    });

    it('renders a welcome message', () => {
      render(<Requests />);
  
      const heading = screen.getByRole('heading', {
        name: /Open Requests/i,
      });
  
      expect(heading).toBeInTheDocument();
    });

    it('renders the users open requests', () => {
      let data = [{
        id: '123456',
        createdAt: new Date(),
        submissionType: null,
        isPremium: false
      },
      {
        id: '789101',
        createdAt: new Date(),
        submissionType: null,
        isPremium: false
      }];
      const {container} = render(<Requests openRequests={data} />);
      const requestOne = container.querySelector('#ID123456');
      const requestTwo = container.querySelector('#ID789101');
      expect(requestOne).toBeInTheDocument();
      expect(requestTwo).toBeInTheDocument();
    });
  });
});