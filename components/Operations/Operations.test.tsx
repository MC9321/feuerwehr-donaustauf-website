import { render, screen } from '@testing-library/react';

import Operations from './Operations';

vi.mock('@/lib/operationUtils', () => ({
  getCategoryColor: vi.fn(() => '#000000'),
  parseOperationTitle: vi.fn((title: string | null) => title || ''),
  parseOperationAlert: vi.fn(() => null),
}));

describe('Operations', () => {
  const mockOperations = [
    {
      _id: '1',
      title: 'Einsatz 1',
      locality: 'Ort 1',
      date: '2024-11-30T14:30:00Z',
      category: 'THL' as const,
      incident: 1,
      slug: { current: 'einsatz-1', _type: 'slug' as const },
    },
    {
      _id: '2',
      title: 'Einsatz 2',
      locality: 'Ort 2',
      date: '2024-11-29T10:00:00Z',
      category: 'Brände' as const,
      incident: 2,
      slug: { current: 'einsatz-2', _type: 'slug' as const },
    },
  ];

  it('rendert alle Einsätze', () => {
    render(<Operations operations={mockOperations} />);

    expect(screen.getByText('Einsatz 1')).toBeInTheDocument();
    expect(screen.getByText('Einsatz 2')).toBeInTheDocument();
  });

  it('rendert nichts wenn keine Einsätze vorhanden', () => {
    const { container } = render(<Operations operations={[]} />);

    expect(container.firstChild).toBeNull();
  });

  it('rendert nichts wenn operations undefined', () => {
    const { container } = render(<Operations />);

    expect(container.firstChild).toBeNull();
  });

  it('gibt alternate prop an Operation weiter', () => {
    const { container } = render(<Operations operations={mockOperations} alternate />);

    const articles = container.querySelectorAll('article');
    articles.forEach(article => {
      expect(article).toHaveClass('bg-white', 'dark:bg-black');
    });
  });

  it('gibt glass prop an Operation weiter', () => {
    const { container } = render(<Operations operations={mockOperations} glass />);

    const articles = container.querySelectorAll('article');
    articles.forEach(article => {
      expect(article).toHaveClass('backdrop-blur-xs');
    });
  });

  it('verwendet _id als key', () => {
    const { container } = render(<Operations operations={mockOperations} />);

    const divs = container.querySelectorAll('div');
    expect(divs.length).toBeGreaterThan(0);
  });
});
