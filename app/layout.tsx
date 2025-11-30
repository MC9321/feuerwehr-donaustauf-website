import '@salzpate/react-ui/dist/style.css';
import '@/styles/globals.css';
import '@/styles/print.css';

import { Metadata } from 'next';
import { JSX, PropsWithChildren } from 'react';

import Footer from '@/components/Footer';
import ImageOverlayProvider from '@/components/ImageOverlay';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import SkipLink from '@/components/SkipLink';
import SnackBarProvider from '@/components/SnackBar';
import { MenuData } from '@/data/MenuData';
import { SITE_DESC, SITE_KEYWORDS, SITE_TITLE } from '@/lib/constants';

const footerText = '© 2025 Feuerwehr Markt Donaustauf';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESC,
  keywords: SITE_KEYWORDS,
  metadataBase: new URL('https://www.feuerwehr-donaustauf.de'),
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    url: 'https://www.feuerwehr-donaustauf.de',
    siteName: SITE_TITLE,
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'shortcut icon', url: '/favicon.ico' },
  ],
};

function RootLayout({ children }: PropsWithChildren<object>): JSX.Element {
  const footerMainMenuItems = MenuData.main;
  const footerMenuItems = MenuData.footer;

  return (
    <html lang="de">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#dc2626" />
      </head>
      <body>
        <SkipLink />
        <ScrollToTop />
        <SnackBarProvider>
          <ImageOverlayProvider>
            {children}
            <Footer text={footerText} menuItems={footerMenuItems} mainMenuItems={footerMainMenuItems} />
          </ImageOverlayProvider>
        </SnackBarProvider>
      </body>
    </html>
  );
}
export default RootLayout;
