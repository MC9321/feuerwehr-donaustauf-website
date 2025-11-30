import path from 'node:path';

import { JSX } from 'react';

import { parseCategory } from '@/lib/operationUtils';

import OperationCatLink from '../OperationCatLink';

type OperationSidebarProps = {
  categories: readonly string[];
  year: number;
  years: readonly number[];
  operationPath: string;
  activeCategory?: string;
};

function OperationSidebar(props: Readonly<OperationSidebarProps>): JSX.Element {
  const { categories, years, year, operationPath, activeCategory } = props;
  const showCategory = categories.length > 1;
  const showYear = years.length > 1;

  if (!showCategory && !showYear) {
    return <></>;
  }

  return (
    <div className="h-full overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div className="p-4">
        {showCategory && (
          <>
            <h3 className="mb-2 text-lg font-medium text-secondary uppercase sm:text-lg lg:text-xl dark:text-secondary-dark">KATEGORIE</h3>
            <OperationCatLink href={path.join(`/${operationPath}`, year.toString()) + '/'} active={!activeCategory}>
              Alle
            </OperationCatLink>
            <hr className="text-gray-300 dark:text-gray-700" />
            {categories.map(category => (
              <OperationCatLink key={parseCategory(category)} href={path.join(`/${operationPath}`, year.toString(), encodeURIComponent(parseCategory(category))) + '/'} active={activeCategory === parseCategory(category)}>
                {category}
              </OperationCatLink>
            ))}
          </>
        )}
        {showYear && (
          <>
            {showCategory && <div className="pt-2" />}
            <>
              <h3 className="mb-2 text-lg font-medium text-secondary uppercase sm:text-lg lg:text-xl dark:text-secondary-dark">JAHR</h3>
              {years.map(opsYear => (
                <OperationCatLink key={opsYear} href={path.join(`/${operationPath}`, opsYear.toString()) + '/'} active={year === opsYear}>
                  {opsYear}
                </OperationCatLink>
              ))}
            </>
          </>
        )}
      </div>
    </div>
  );
}
export default OperationSidebar;
