import { Slug } from '@/types/sanityTypes';
import { JSX } from 'react';
import cn from 'classnames';
import { getCategoryColor, parseOperationAlert, parseOperationTitle } from '@/lib/operationUtils';
import BellAlertSvgIcon from '../SvgIcons/BellAlertSvgIcon';
import CalendarSvgIcon from '../SvgIcons/CalendarSvgIcon';
import MapPinSvgIcon from '../SvgIcons/MapPinSvgIcon';

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
    <article className={cn('mb-2 border-l-4 p-2', { 'bg-gray-100 dark:bg-gray-900': !alternate, 'bg-white dark:bg-black': alternate })} style={{ borderColor: getCategoryColor(category ?? '') }}>
      <div className="mb-2 text-base font-bold">
        <span className="border border-gray-300 p-0.5 text-sm">{opNr}</span> {opTitle}
      </div>
      {alert && (
        <div className="flex items-center text-sm">
          <div className="pr-2">
            <BellAlertSvgIcon />
          </div>
          <div>{alert}</div>
        </div>
      )}
      <div className="flex items-center text-sm">
        <div className="pr-2">
          <CalendarSvgIcon />
        </div>
        <div>{opDate}</div>
      </div>
      <div className="flex items-center text-sm">
        <div className="pr-2">
          <MapPinSvgIcon />
        </div>
        <div>{locality}</div>
      </div>
    </article>
  );
}

export default Operation;
