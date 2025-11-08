'use client';

import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import { ResponsivePie, PieCustomLayerProps } from '@nivo/pie';
import { JSX, useEffect, useState } from 'react';
import { OperationChartDataType } from './types/operationPieChartTypes';
import CenteredMetric from '../OperationPieChart/components/CenteredMetric/CenteredMetric';

interface OperationPieChartProps {
  operations?: OPERATION_QUERYResult;
  year?: number;
}

function OperationLocationPieChart(props: Readonly<OperationPieChartProps>): JSX.Element {
  const { operations } = props;
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeQuery = globalThis.matchMedia('(prefers-color-scheme: dark)');

    const updateDarkMode = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDarkMode(e.matches);
    };

    updateDarkMode(darkModeQuery);

    darkModeQuery.addEventListener('change', updateDarkMode);

    return () => darkModeQuery.removeEventListener('change', updateDarkMode);
  }, []);

  const ffChartData =
    operations?.reduce<Array<OperationChartDataType>>((acc, op) => {
      const locality = op.locality ?? 'Unbekannt';
      const existing = acc.find(item => item.id === locality);

      if (existing) {
        existing.value += 1;
      } else {
        acc.push({
          id: locality,
          label: locality,
          value: 1,
          color: '',
        });
      }

      return acc;
    }, []) ?? [];

  const CenteredMetricWrapper = (props: PieCustomLayerProps<OperationChartDataType>): JSX.Element => <CenteredMetric {...props} text="Ort" isDarkMode={isDarkMode} />;

  return (
    <ResponsivePie
      theme={{
        labels: {
          text: {
            fontSize: '0.75rem',
          },
        },
      }}
      data={ffChartData}
      margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
      innerRadius={0.5}
      padAngle={0.6}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      arcLabel={data => `${data.label} (${data.value})`}
      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 4]] }}
      enableArcLinkLabels={false}
      arcLabelsSkipAngle={10}
      colors={{ scheme: 'pastel1' }}
      layers={['arcs', 'arcLabels', 'arcLinkLabels', CenteredMetricWrapper]}
    />
  );
}

export default OperationLocationPieChart;
