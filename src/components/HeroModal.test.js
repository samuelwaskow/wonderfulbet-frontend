import { render, screen } from '@testing-library/react';
import HeroModal from './HeroModal';

test('Should display the HeroModal component', () => {
  render(<HeroModal />);
  const linkElement = screen.getByText(/Sign up for free/i);
  expect(linkElement).toBeInTheDocument();
});