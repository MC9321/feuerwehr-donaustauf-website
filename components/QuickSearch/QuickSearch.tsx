'use client';

import Link from 'next/link';
import { JSX, useMemo, useState } from 'react';

import { NavMenuItem } from '@/components/types/Menu/Menu';

interface QuickSearchProps {
  menuItems: NavMenuItem[];
}

interface SearchResult {
  title: string;
  href: string;
  breadcrumb: string;
}

function QuickSearch({ menuItems }: Readonly<QuickSearchProps>): JSX.Element {
  const [query, setQuery] = useState('');

  const allPages = useMemo(() => {
    const pages: SearchResult[] = [];

    const traverse = (items: NavMenuItem[], breadcrumb: string[] = []) => {
      for (const item of items) {
        const currentBreadcrumb = [...breadcrumb, item.children as string];
        const href = typeof item.href === 'string' ? item.href : '/';
        pages.push({
          title: item.children as string,
          href,
          breadcrumb: currentBreadcrumb.join(' > '),
        });

        if (item.subMenue && item.subMenue.length > 0) {
          traverse(item.subMenue, currentBreadcrumb);
        }
      }
    };

    traverse(menuItems);
    return pages;
  }, [menuItems]);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase();
    return allPages.filter(page => page.title.toLowerCase().includes(searchTerm) || page.breadcrumb.toLowerCase().includes(searchTerm)).slice(0, 5); // Maximal 5 Ergebnisse
  }, [query, allPages]);

  return (
    <div className="bg-gray-100 p-6 dark:bg-gray-900">
      <h3 className="mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Schnellsuche</h3>
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Seite suchen..."
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 pr-10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          aria-label="Seite suchen"
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-1/2 right-3 size-6 h-5 w-5 -translate-y-1/2 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>

      {results.length > 0 && (
        <ul className="mt-4 space-y-2" aria-label="Suchergebnisse">
          {results.map(result => (
            <li key={result.href}>
              <Link href={result.href} className="block border border-gray-200 p-3 transition-colors hover:bg-white dark:border-gray-700 dark:hover:bg-gray-800">
                <div className="font-medium text-heading uppercase dark:text-heading-dark">{result.title}</div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{result.breadcrumb}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {query.trim() && results.length === 0 && <div className="mt-4 text-center text-gray-600 dark:text-gray-400">Keine Ergebnisse gefunden</div>}
    </div>
  );
}

export default QuickSearch;
