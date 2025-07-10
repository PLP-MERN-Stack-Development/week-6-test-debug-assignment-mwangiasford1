import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PostsList from '../../components/PostsList';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        { _id: '1', title: 'First Post' },
        { _id: '2', title: 'Second Post' },
      ]),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test('renders posts fetched from API', async () => {
  render(<PostsList />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText('First Post')).toBeInTheDocument());
  expect(screen.getByText('Second Post')).toBeInTheDocument();
}); 