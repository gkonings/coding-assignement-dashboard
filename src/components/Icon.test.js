import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';

describe('Icon', () => {
  it('should render null without id', () => {
    const { container } = render(
      <Icon />,
    );
    expect(container).toBeEmpty();
  });

  it('should render ideal', () => {
    const { getByText } = render(
      <Icon id="ideal" />,
    );
    expect(getByText('ideal.svg')).toBeInTheDocument();
  });

  it('should pass custom class', () => {
    const { container } = render(
      <Icon id="paypal" className="customClass" />,
    );

    expect(container.firstChild.classList.contains('customClass')).toBe(true);
  });

  it('should render spinner', () => {
    const { container, getByText } = render(
      <Icon id="spinner" />,
    );
    expect(getByText('spinner.svg')).toBeInTheDocument();
    expect(container.firstChild.classList.contains('rotate')).toBe(true);
  });
});
