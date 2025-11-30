import { ReactNode } from 'react';

import { NavMenuItem } from '@/components/types/Menu/Menu';

function getHeaderNavLinkItemKey(item: NavMenuItem, index: number): string {
  if (item.id) {
    return `mobile-menu-${item.id}`;
  }
  if (typeof item.href === 'string') {
    return `mobile-menu-${item.href}-${index}`;
  }
  return `mobile-menu-${index}`;
}

function buildHeaderNavHeadline(menuStack1: NavMenuItem[], index: number, parentHeader?: ReactNode): ReactNode {
  let headline = menuStack1.at(index)?.children;
  if (menuStack1.at(index - 1)) {
    headline = buildHeaderNavHeadline(menuStack1, index - 1, headline);
  }
  if (parentHeader) {
    return (
      <>
        {headline} / {parentHeader}
      </>
    );
  }

  return headline;
}

export { buildHeaderNavHeadline, getHeaderNavLinkItemKey };
