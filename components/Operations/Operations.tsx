import { JSX } from 'react';

import { OPERATION_QUERYResult } from '@/types/sanityTypes';

import Operation from '../Operation/Operation';

interface OperationsProps {
  operations?: OPERATION_QUERYResult;
  alternate?: boolean;
  glass?: boolean;
}

function Operations(props: Readonly<OperationsProps>): JSX.Element {
  const { operations, alternate, glass } = props;

  return (
    <>
      {operations?.map(operation => (
        <div key={operation._id}>
          <Operation {...operation} alternate={alternate} glass={glass} />
        </div>
      ))}
    </>
  );
}

export default Operations;
