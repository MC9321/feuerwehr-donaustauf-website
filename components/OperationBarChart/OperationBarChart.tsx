'use client';

import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import { JSX } from 'react';
import { OperationBarChartDataType } from './types/operationBarChartTypes';
import { ResponsiveBar } from '@nivo/bar';

interface OperationBarChartProps {
  operations?: OPERATION_QUERYResult;
  year?: number;
}

function OperationBarChart(props: Readonly<OperationBarChartProps>): JSX.Element {
  const { operations } = props;

  const ffChartData =
    operations?.reduce<Array<OperationBarChartDataType>>((acc, op) => {
      const locality = op.locality ?? 'Unbekannt';
      const existing = acc.find(item => item.id === locality);

      if (existing) {
        existing.Ort += 1;
      } else {
        acc.push({
          id: locality,
          label: locality,
          Ort: 1,
        });
      }

      return acc;
    }, []) ?? [];

  return (
    <ResponsiveBar
      theme={{
        labels: {
          text: {
            fontSize: '0.75rem',
          },
        },
      }}
      data={ffChartData}
      margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
      indexBy="id"
      keys={['Ort']}
    />
  );
}

export default OperationBarChart;
