'use client';

import { JSX, PropsWithChildren, ReactNode, useEffect, useState } from 'react';

interface InfoArticleProps {
  id?: number;
  headline: string;
}

function InfoArticle(props: Readonly<PropsWithChildren<InfoArticleProps>>): JSX.Element {
  const { headline, id = 1, children } = props;
  const [content, setContent] = useState<ReactNode>();
  const articleId = `article-${id}`;

  useEffect(() => setContent(children), [children]);

  return (
    <article className="mx-auto mb-8 max-w-screen-xl text-gray-900 dark:text-gray-300" id={articleId}>
      <p className="font-bold">{headline}</p>
      <p>&nbsp;</p>
      <div>{content}</div>
    </article>
  );
}

export default InfoArticle;
