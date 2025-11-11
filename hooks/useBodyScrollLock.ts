import { useEffect } from 'react';

/**
 * Custom Hook für Body-Scroll-Lock
 * Blockiert das Scrollen des Body-Elements wenn aktiv
 */
export function useBodyScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) return;

    const scrollY = window.scrollY;
    const body = document.body;

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';

    return () => {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      window.scrollTo(0, Number.parseInt(scrollY || '0') * -1);
    };
  }, [isLocked]);
}
