import { render, screen } from '@testing-library/react';

import OperationCatLink from './OperationCatLink';

describe('OperationCatLink', () => {
  it('rendert Link mit Text', () => {
    render(<OperationCatLink href="/test">Test Link</OperationCatLink>);

    const link = screen.getByRole('link', { name: 'Test Link' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('wendet Standard-Styling an wenn nicht aktiv', () => {
    render(<OperationCatLink href="/test">Test Link</OperationCatLink>);

    const link = screen.getByRole('link', { name: 'Test Link' });
    expect(link).toHaveClass('text-gray-600');
    expect(link).not.toHaveClass('text-secondary');
  });

  it('wendet aktives Styling an wenn active=true', () => {
    render(
      <OperationCatLink href="/test" active>
        Test Link
      </OperationCatLink>,
    );

    const link = screen.getByRole('link', { name: 'Test Link' });
    expect(link).toHaveClass('text-secondary');
    expect(link).toHaveClass('bg-gray-300');
  });

  it('akzeptiert UrlObject als href', () => {
    const urlObject = { pathname: '/test', query: { id: '123' } };
    render(<OperationCatLink href={urlObject}>Test Link</OperationCatLink>);

    const link = screen.getByRole('link', { name: 'Test Link' });
    expect(link).toBeInTheDocument();
  });

  it('rendert mit key prop', () => {
    render(
      <OperationCatLink href="/test" key="unique-key">
        Test Link
      </OperationCatLink>,
    );

    expect(screen.getByRole('link', { name: 'Test Link' })).toBeInTheDocument();
  });
});
