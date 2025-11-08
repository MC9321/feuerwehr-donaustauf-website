import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import { JSX } from 'react';
import Operation from '../Operation/Operation';

interface OperationsProps {
  operations?: OPERATION_QUERYResult;
  alternate?: boolean;
  kind?: 'FF' | 'FR';
}

function Operations(props: Readonly<OperationsProps>): JSX.Element {
  const { operations, alternate, kind } = props;

  return (
    <>
      {operations?.map(operation => (
        <div key={operation._id}>
          <Operation {...operation} alternate={alternate} kind={kind} />
        </div>
      ))}
    </>
  );
}

export default Operations;
