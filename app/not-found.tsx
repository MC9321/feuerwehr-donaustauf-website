import { Metadata } from 'next';
import Link from 'next/link';
import { JSX } from 'react';

import HeaderImage from '@/components/Header/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import PageSection from '@/components/PageSection/PageSection';
import QuickSearch from '@/components/QuickSearch';
import SiteMap from '@/components/SiteMap';
import { MenuData } from '@/data/MenuData';

export const metadata: Metadata = {
  title: '404 - Seite nicht gefunden',
  description: 'Die angeforderte Seite konnte nicht gefunden werden.',
};

function FileNotFound(): JSX.Element {
  const popularPages = [
    { title: 'Startseite', href: '/', icon: 'home' },
    { title: 'Einsätze', href: '/feuerwehr/einsaetze/', icon: 'fire' },
    { title: 'Fahrzeuge', href: '/feuerwehr/fahrzeuge/', icon: 'truck' },
    { title: 'Kontakt', href: '/kontakt/', icon: 'mail' },
  ];

  return (
    <HeaderMainLayout>
      <HeaderImage imageClass="bg-[url(https://res.cloudinary.com/dzirm6srd/image/upload/v1762605631/main_yydisz.jpg)]" />
      <PageSection headline="Seite nicht gefunden" id="notfound">
        <div className="pb-6 text-lg text-paragraph sm:pb-8 dark:text-paragraph-dark">Die gewünschte Seite wurde leider nicht gefunden. Möglicherweise wurde sie verschoben oder gelöscht.</div>
        <div className="pb-6 sm:pb-8">
          <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Beliebte Seiten</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularPages.map(page => (
              <Link key={page.href} href={page.href} className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-all hover:border-secondary hover:shadow-md dark:border-gray-700 dark:hover:border-secondary">
                {page.icon === 'home' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary dark:text-secondary-dark">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                )}
                {page.icon === 'fire' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary dark:text-secondary-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                  </svg>
                )}
                {page.icon === 'truck' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary dark:text-secondary-dark">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                )}
                {page.icon === 'mail' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary dark:text-secondary-dark">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                )}
                <span className="font-medium text-paragraph dark:text-paragraph-dark">{page.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="pb-6 sm:pb-8">
          <QuickSearch menuItems={MenuData.main} />
        </div>
        <div className="pb-6 sm:pb-8">
          <SiteMap menuItems={MenuData.main} title="Alle Seiten" compact />
        </div>
      </PageSection>
    </HeaderMainLayout>
  );
}

export default FileNotFound;
