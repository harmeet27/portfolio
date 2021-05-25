import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/HI!, I am Harmeet/i);
  expect(linkElement).toBeInTheDocument();
});
