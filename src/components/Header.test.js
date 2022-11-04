import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Should display the Header component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Wonderful Bet/i);
  expect(linkElement).toBeInTheDocument();
});