'use client';

import { JSX, PropsWithChildren } from 'react';
import { type PageSectionProps, PageSection as UiPageSection } from '@salzpate/react-ui';

function PageSection(props: PropsWithChildren<PageSectionProps>): JSX.Element {
  const { id, headline, className, subSection = false, children } = props;

  return (
    <UiPageSection id={id} headline={headline} className={className} subSection={subSection}>
      {children}
    </UiPageSection>
  );
}

export default PageSection;
