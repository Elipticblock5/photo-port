import React from 'react';
import { render, cleanup } from '@testing-library/react';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
   // First Test
  it('renders', () => {
    render(<About />);
  });

  // Second Test
  const { asFragment } = render(<About />);
  expect(asFragment()).toMatchSnapshot();

  })