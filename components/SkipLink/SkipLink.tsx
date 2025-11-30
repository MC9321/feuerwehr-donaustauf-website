import Link from 'next/link';
import { JSX } from 'react';

/**
 * Skip-Link Komponente für bessere Accessibility
 * Ermöglicht Keyboard-Nutzern, direkt zum Hauptinhalt zu springen
 */
function SkipLink(): JSX.Element {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-secondary focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
    >
      Zum Hauptinhalt springen
    </Link>
  );
}

export default SkipLink;
