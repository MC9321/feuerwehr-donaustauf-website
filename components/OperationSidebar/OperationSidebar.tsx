import { JSX } from 'react';
import path from 'node:path';
import { parseCategory } from '@/lib/operationUtils';
import OperationCatLink from '../OperationCatLink';


type OperationSidebarProps = {
  categories: readonly string[];
  year: number;
  years: readonly number[];
  operationPath: string;
  activeCategory: string;
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
        <h3 className="mb-2 text-lg font-medium text-secondary uppercase sm:text-xl lg:text-2xl dark:text-secondary-dark">FILTER</h3>
        {showCategory && (
          <>
            <OperationCatLink href={path.join(`/${operationPath}`, year.toString()) + '/'} active={activeCategory === 'ALL'}>
              Alle
            </OperationCatLink>

            <div className="pt-2">
              <h4 className="mb-2 text-lg font-medium text-secondary uppercase sm:text-lg lg:text-xl dark:text-secondary-dark">KATEGORIE</h4>
              {categories.map(category => (
                <OperationCatLink
                  key={parseCategory(category)}
                  href={path.join(`/${operationPath}`, year.toString(), encodeURIComponent(parseCategory(category))) + '/'}
                  active={activeCategory === parseCategory(category)}
                >
                  {category}
                </OperationCatLink>
              ))}
            </div>
          </>
        )}
        {showYear && (
          <div className="pt-2">
            <h4 className="mb-2 text-lg font-medium text-secondary uppercase sm:text-lg lg:text-xl dark:text-secondary-dark">JAHR</h4>
            {years.map(opsYear => (
              <OperationCatLink key={opsYear} href={path.join(`/${operationPath}`, opsYear.toString()) + '/'} active={activeCategory === opsYear.toString()}>
                {opsYear}
              </OperationCatLink>
            ))}
          </div>
        )}
      </div>
    </div >
  );
}
export default OperationSidebar;
