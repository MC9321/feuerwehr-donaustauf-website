'use client';

import { JSX, PropsWithChildren } from 'react';
import { type PageSectionProps } from '@salzpate/react-ui';
import { FfPageSection } from '../FfPageSection';

function PageSection(props: PropsWithChildren<PageSectionProps>): JSX.Element {
  const { id, headline, className, subSection = false, children } = props;

  return (
    <FfPageSection id={id} headline={headline} className={className} subSection={subSection}>
      {children}
    </FfPageSection>
  );
}

export default PageSection;
