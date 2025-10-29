import { JSX, PropsWithChildren } from 'react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';
import SnackBarProvider from '@/components/SnackBar';
import { MenuData } from '@/data/MenuData';
import { SITE_DESC, SITE_KEYWORDS, SITE_TITLE } from '@/lib/constants';

import '@salzpate/react-ui/dist/style.css';
import '@/styles/globals.css';

const footerText = '© 2025 Feuerwehr Markt Donaustauf';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESC,
  keywords: SITE_KEYWORDS,
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'shortcut icon', url: '/favicon.ico' },
  ],
};

function RootLayout({ children }: PropsWithChildren<object>): JSX.Element {
  const footerMenuItems = MenuData.footer;
  return (
    <html lang="de">
      <head />
      <body>
        <SnackBarProvider>
          {children}
          <Footer text={footerText} menuItems={footerMenuItems} />
        </SnackBarProvider>
      </body>
    </html>
  );
}
export default RootLayout;
