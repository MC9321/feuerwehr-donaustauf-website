import { render } from '@testing-library/react';

import FfLogoSvgIcon from './FfLogoSvgIcon';

describe('FfLogoSvgIcon', () => {
  it('rendert SVG-Element', () => {
    const { container } = render(<FfLogoSvgIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('hat korrekte viewBox', () => {
    const { container } = render(<FfLogoSvgIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 2725 972');
  });

  it('wendet className an', () => {
    const { container } = render(<FfLogoSvgIcon className="custom-class" />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-class');
  });

  it('wendet height an', () => {
    const { container } = render(<FfLogoSvgIcon height={100} />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('height', '100');
  });

  it('wendet width an', () => {
    const { container } = render(<FfLogoSvgIcon width={200} />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '200');
  });

  it('hat zwei path Elemente', () => {
    const { container } = render(<FfLogoSvgIcon />);

    const paths = container.querySelectorAll('path');
    expect(paths).toHaveLength(2);
  });

  it('hat currentColor als fill', () => {
    const { container } = render(<FfLogoSvgIcon />);

    const paths = container.querySelectorAll('path');
    paths.forEach(path => {
      expect(path).toHaveAttribute('fill', 'currentColor');
    });
  });
});
