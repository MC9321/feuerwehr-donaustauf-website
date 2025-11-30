'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

function ThemeProvider({ children }: Readonly<PropsWithChildren>) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="theme">
      {children}
    </NextThemesProvider>
  );
}

export default ThemeProvider;
