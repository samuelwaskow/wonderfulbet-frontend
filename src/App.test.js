import { render, screen } from '@testing-library/react';
import App from './App';

test('Should display the App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Join us and enter a world full of emotions/i);
  expect(linkElement).toBeInTheDocument();
});