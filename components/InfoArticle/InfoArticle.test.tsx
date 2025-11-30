import { render, screen } from '@testing-library/react';

import InfoArticle from './InfoArticle';

describe('InfoArticle', () => {
  it('rendert Headline und Children', () => {
    render(
      <InfoArticle headline="Test Headline">
        <p>Test Content</p>
      </InfoArticle>,
    );

    expect(screen.getByText('Test Headline')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('generiert Standard-ID wenn keine ID übergeben wird', () => {
    const { container } = render(<InfoArticle headline="Test">Content</InfoArticle>);

    const article = container.querySelector('article');
    expect(article).toHaveAttribute('id', 'article-1');
  });

  it('verwendet übergebene ID', () => {
    const { container } = render(
      <InfoArticle headline="Test" id={5}>
        Content
      </InfoArticle>,
    );

    const article = container.querySelector('article');
    expect(article).toHaveAttribute('id', 'article-5');
  });

  it('hat article als semantisches Element', () => {
    const { container } = render(<InfoArticle headline="Test">Content</InfoArticle>);

    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
  });

  it('hat korrekte CSS-Klassen', () => {
    const { container } = render(<InfoArticle headline="Test">Content</InfoArticle>);

    const article = container.querySelector('article');
    expect(article).toHaveClass('mx-auto', 'mb-8', 'max-w-7xl');
  });

  it('rendert komplexe Children', () => {
    render(
      <InfoArticle headline="Test">
        <div>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
        </div>
      </InfoArticle>,
    );

    expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
    expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
  });
});
