
/* @vitest-environment jsdom */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App';

describe('React Application', () => {
  it('renders the Get started heading', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /get started/i })
    ).toBeInTheDocument();
  });
});
