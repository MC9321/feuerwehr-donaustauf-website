'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Only scroll if pathname actually changed
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;

      // Immediate scroll
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      // Multiple attempts for iOS Safari
      const timeouts = [
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 0),
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 10),
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 50),
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 100),
      ];

      return () => timeouts.forEach(clearTimeout);
    }
  }, [pathname]);

  return null;
}
