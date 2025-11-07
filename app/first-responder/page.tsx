'use client';

import { JSX } from 'react';
import { PageSection } from '@salzpate/react-ui';
import Link from 'next/link';

function FirstResponder(): JSX.Element {
  return <PageSection headline="First Responder" id="first-responder">
    <Link href='/first-responder/einsaetze/'>Einsätze</Link>

  </PageSection>;
}

export default FirstResponder;
