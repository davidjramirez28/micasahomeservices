import { act, render, screen } from '@testing-library/react';
import App, { LOADING_MESSAGES, MESSAGE_INTERVAL_MS } from './App';

afterEach(() => {
  jest.useRealTimers();
});

test('shows the under construction notice and logo', () => {
  render(<App />);
  expect(screen.getByText(/website under construction/i)).toBeInTheDocument();
  expect(screen.getByAltText(/mi casa home services logo/i)).toBeInTheDocument();
});

test('cycles through the fake loading messages', () => {
  jest.useFakeTimers();
  render(<App />);
  expect(screen.getByRole('status')).toHaveTextContent(LOADING_MESSAGES[0]);

  act(() => {
    jest.advanceTimersByTime(MESSAGE_INTERVAL_MS);
  });
  expect(screen.getByRole('status')).toHaveTextContent(LOADING_MESSAGES[1]);
});
