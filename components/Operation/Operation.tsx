import { JSX } from 'react';

import { cn } from '@/lib/cn';
import { getCategoryColor, parseOperationAlert, parseOperationTitle } from '@/lib/operationUtils';
import { Slug } from '@/types/sanityTypes';

import BellAlertSvgIcon from '../SvgIcons/BellAlertSvgIcon';
import CalendarSvgIcon from '../SvgIcons/CalendarSvgIcon';
import MapPinSvgIcon from '../SvgIcons/MapPinSvgIcon';

interface OperationsProps {
  _id: string;
  title: string | null;
  locality: string | null;
  date: string | null;
  category: string | null;
  incident: number | null;
  slug: Slug | null;
  alternate?: boolean;
  glass?: boolean;
}

function Operation(props: Readonly<OperationsProps>): JSX.Element {
  const { title, locality, date, category, incident, alternate, glass } = props;

  const dateObject = new Date(date ?? '');
  const opDate = `${dateObject.getDate().toString().padStart(2, '0')}.${(dateObject.getMonth() + 1).toString().padStart(2, '0')}.${dateObject.getFullYear()} ${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}`;
  const opTitle = parseOperationTitle(title);
  const alert = parseOperationAlert(title);

  return (
    <article
      className={cn('mb-2 border-l-4 p-2', {
        'bg-gray-100 dark:bg-gray-900': !alternate && !glass,
        'bg-white dark:bg-black': alternate && !glass,
        'bg-white/30 backdrop-blur-xs hover:backdrop-blur-sm dark:bg-black/30': !alternate && glass,
        'bg-white/60 backdrop-blur-xs hover:backdrop-blur-sm dark:bg-black/60': alternate && glass,
      })}
      style={{ borderColor: getCategoryColor(category ?? '') }}
    >
      <div className="mb-2 text-base font-bold">
        <span className="border border-gray-300 p-0.5 text-sm">{incident}</span> {opTitle}
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
