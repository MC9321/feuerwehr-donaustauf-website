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

export { getHeaderNavLinkItemKey };
