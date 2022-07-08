import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BaseLayout from '../../../components/layout/BaseLayout'

describe('BaseLayout', () => {
  describe('how it renders', () => {
    it('renders navigation', () => {
      const {container} = render(<BaseLayout />);

      const navigation = container.querySelector('#Navigation');

      expect(navigation).toBeInTheDocument();
    });

    it('renders a statusbar', () => {
      const {container} = render(<BaseLayout />);

      const statusBar = container.querySelector('#StatusBar');

      expect(statusBar).toBeInTheDocument();
    });

    it('renders a footer', () => {
        render(<BaseLayout />);

        const footer = screen.getByText(/Powered by/i);

        expect(footer).toBeInTheDocument();
    });
  });
})