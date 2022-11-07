import { render, screen } from '@testing-library/react';

import Home from './Home';

test('Should display the Home component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Sports/i);
  expect(linkElement).toBeInTheDocument();
});