import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('Should display the Hero component', () => {
  render(<Hero />);
  const linkElement = screen.getByText(/Join us and enter a world full of emotions/i);
  expect(linkElement).toBeInTheDocument();
});