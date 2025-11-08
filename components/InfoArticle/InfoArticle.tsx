'use client';

import { JSX, PropsWithChildren } from 'react';

interface InfoArticleProps {
  id?: number;
  headline: string;
}

function InfoArticle(props: Readonly<PropsWithChildren<InfoArticleProps>>): JSX.Element {
  const { headline, id = 1, children } = props;
  const articleId = `article-${id}`;

  return (
    <article className="mx-auto mb-8 max-w-7xl text-gray-900 last:mb-0 dark:text-gray-300" id={articleId}>
      <p className="font-bold">{headline}</p>
      <p>&nbsp;</p>
      <div>{children}</div>
    </article>
  );
}

export default InfoArticle;
