import { JSX } from 'react';
import cn from 'classnames';

interface FunctionCardProps {
  role?: string;
  name?: string;
  leadership?: boolean;
  className?: string;
}

function FunctionCard(props: Readonly<FunctionCardProps>): JSX.Element {
  const { role, name, leadership, className } = props;

  if (!role && !name) {
    return <></>;
  }

  return (
    <div className={cn('bg-gray-100 p-4 text-center dark:bg-gray-900', className)}>
      {role && <div className={cn('mb-2 font-bold', { 'text-xl': !leadership, 'text-2xl': leadership })}>{role}</div>}
      {name && <div className={cn({ 'text-base': !leadership, 'text-lg': leadership })}>{name}</div>}
    </div>
  );
}

export default FunctionCard;
