'use client';

import { type PageSectionProps } from '@salzpate/react-ui';
import { JSX, PropsWithChildren } from 'react';

import { FfPageSection } from '../FfPageSection';

function PageSection(props: PropsWithChildren<PageSectionProps>): JSX.Element {
  const { id, headline, className, subSection = false, children } = props;

  return (
    <FfPageSection id={id} headline={headline} className={className} level={subSection ? 'h2' : 'h1'}>
      {children}
    </FfPageSection>
  );
}

export default PageSection;
