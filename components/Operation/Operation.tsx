import { Slug } from '@/types/sanityTypes';
import { JSX } from 'react';
import cn from 'classnames';
import { getCategoryColor, parseOperationAlert, parseOperationTitle } from '@/lib/operationUtils';

interface OperationsProps {
  _id: string;
  title: string | null;
  locality: string | null;
  date: string | null;
  category: string | null;
  ffNr: number | null;
  frNr: number | null;
  slug: Slug | null;
  alternate?: boolean;
  kind?: 'FF' | 'FR';
}

function Operation(props: Readonly<OperationsProps>): JSX.Element {
  const { title, locality, date, category, frNr, ffNr, alternate, kind = 'FF' } = props;

  const dateObject = new Date(date ?? '');
  const opDate = `${dateObject.getDate().toString().padStart(2, '0')}.${(dateObject.getMonth() + 1).toString().padStart(2, '0')}.${dateObject.getFullYear()} ${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}`;
  const opNr = kind === 'FF' && ffNr ? ffNr : frNr;
  const opTitle = parseOperationTitle(title);
  const alert = parseOperationAlert(title);

  return (
    <div className={cn('mb-2 border-l-4 p-2', { 'bg-gray-100 dark:bg-gray-900': !alternate, 'bg-white dark:bg-black': alternate })} style={{ borderColor: getCategoryColor(category ?? '') }}>
      <div className="mb-2 text-base font-bold">
        <span className="border border-gray-300 p-0.5 text-sm">{opNr}</span> {opTitle}
      </div>
      {alert && (
        <div className="flex items-center text-sm">
          <div className="pr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path d="M3.6 1.7A.75.75 0 1 0 2.4.799a6.978 6.978 0 0 0-1.123 2.247.75.75 0 1 0 1.44.418c.187-.644.489-1.24.883-1.764ZM13.6.799a.75.75 0 1 0-1.2.9 5.48 5.48 0 0 1 .883 1.765.75.75 0 1 0 1.44-.418A6.978 6.978 0 0 0 13.6.799Z" />
              <path
                fillRule="evenodd"
                d="M8 1a4 4 0 0 1 4 4v2.379c0 .398.158.779.44 1.06l1.267 1.268a1 1 0 0 1 .293.707V11a1 1 0 0 1-1 1h-2a3 3 0 1 1-6 0H3a1 1 0 0 1-1-1v-.586a1 1 0 0 1 .293-.707L3.56 8.44A1.5 1.5 0 0 0 4 7.38V5a4 4 0 0 1 4-4Zm0 12.5A1.5 1.5 0 0 1 6.5 12h3A1.5 1.5 0 0 1 8 13.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>{alert}</div>
        </div>
      )}
      <div className="flex items-center text-sm">
        <div className="pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path
              fillRule="evenodd"
              d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>{opDate}</div>
      </div>
      <div className="flex items-center text-sm">
        <div className="pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path
              fillRule="evenodd"
              d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>{locality}</div>
      </div>
    </div>
  );
}

export default Operation;
