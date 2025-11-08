import { JSX } from 'react';

interface OperationCounterProps {
  year: number;
  count: number;
}

function OperationCounter(props: Readonly<OperationCounterProps>): JSX.Element {
  const { year, count } = props;

  return (
    <div className="mb-4 text-sm">
      {year}: {count} Einsätze
    </div>
  );
}

export default OperationCounter;
