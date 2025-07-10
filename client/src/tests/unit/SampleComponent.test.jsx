import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleComponent from '../../components/SampleComponent';

test('renders a button with text', () => {
  render(<SampleComponent />);
  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toBeInTheDocument();
}); 