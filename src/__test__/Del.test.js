import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Del from '../pages/Del';

test('renders welcome message', () => {
  render(<Del />);
  expect(screen.getByText('Hi')).toBeInTheDocument();
});
