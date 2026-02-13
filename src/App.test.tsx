// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from './App';
import '@testing-library/jest-dom';

describe('App counter behavior', () => {
  it('renders initial count as 0', () => {
    render(<App />);
    expect(screen.getByText(/hello world 0/i)).toBeInTheDocument();
  });

  it('shows both Increment and Decrement buttons', () => {
    render(<App />);
    expect(
      screen.getByRole('button', { name: /increment/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /decrement/i })
    ).toBeInTheDocument();
  });

  it('increments count by 1 when Increment is clicked once', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /increment/i });
    await user.click(button);

    expect(screen.getByText(/hello world 1/i)).toBeInTheDocument();
  });

  it('increments multiple times when Increment is clicked repeatedly', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /increment/i });
    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(screen.getByText(/hello world 3/i)).toBeInTheDocument();
  });

  it('does not go below 0 when Decrement is clicked at 0', async () => {
    const user = userEvent.setup();
    render(<App />);

    const decrement = screen.getByRole('button', { name: /decrement/i });
    await user.click(decrement);

    // Still 0
    expect(screen.getByText(/hello world 0/i)).toBeInTheDocument();
  });

  it('decrements after incrementing first', async () => {
    const user = userEvent.setup();
    render(<App />);

    const increment = screen.getByRole('button', { name: /increment/i });
    const decrement = screen.getByRole('button', { name: /decrement/i });

    await user.click(increment);
    await user.click(increment);
    await user.click(decrement);

    expect(screen.getByText(/hello world 1/i)).toBeInTheDocument();
  });

  it('disables Decrement button at 0', () => {
    render(<App />);

    const decrement = screen.getByRole('button', { name: /decrement/i });
    expect(decrement).toBeDisabled();
  });

  it('enables Decrement button when count is greater than 0', async () => {
    const user = userEvent.setup();
    render(<App />);

    const increment = screen.getByRole('button', { name: /increment/i });
    const decrement = screen.getByRole('button', { name: /decrement/i });

    await user.click(increment);

    expect(decrement).not.toBeDisabled();
  });

  it('re-disables Decrement button after decrementing back to 0', async () => {
    const user = userEvent.setup();
    render(<App />);

    const increment = screen.getByRole('button', { name: /increment/i });
    const decrement = screen.getByRole('button', { name: /decrement/i });

    await user.click(increment); // 1
    await user.click(decrement); // back to 0

    expect(screen.getByText(/hello world 0/i)).toBeInTheDocument();
    expect(decrement).toBeDisabled();
  });

  it('keeps count unchanged when clicking disabled Decrement button', async () => {
    const user = userEvent.setup();
    render(<App />);

    const decrement = screen.getByRole('button', { name: /decrement/i });
    await user.click(decrement);

    // Should remain at 0
    expect(screen.getByText(/hello world 0/i)).toBeInTheDocument();
  });
});
