'use client';

import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import { ResponsivePie, PieCustomLayerProps } from '@nivo/pie';
import { JSX, useEffect, useState } from 'react';
import { getCategoryColor } from '../Operations';
import CenteredMetric from './components/CenteredMetric/CenteredMetric';
import { OperationChartDataType } from './types/operationPiaChartTypes';

interface OperationPieChartProps {
  operations?: OPERATION_QUERYResult;
  year?: number;
}

function OperationPieChart(props: Readonly<OperationPieChartProps>): JSX.Element {
  const { operations, year } = props;
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

  const ffChartData = operations?.reduce<Array<OperationChartDataType>>((acc, op) => {
    const category = op.category ?? 'Unbekannt';
    const existing = acc.find((item) => item.id === category);

    if (existing) {
      existing.value += 1;
    } else {
      acc.push({
        id: category,
        label: category,
        value: 1,
        color: getCategoryColor(category),
      });
    }

    return acc;
  }, []) ?? [];

  const totalOperations = operations?.length ?? 0;

  const CenteredMetricWrapper = (props: PieCustomLayerProps<OperationChartDataType>) => (
    <CenteredMetric {...props} totalOperations={totalOperations} isDarkMode={isDarkMode} year={year} />
  );

  return <ResponsivePie
    data={ffChartData}
    margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
    innerRadius={0.5}
    padAngle={0.6}
    cornerRadius={2}
    activeOuterRadiusOffset={8}
    arcLabel={(data) => `${data.label} (${data.value})`}
    arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
    enableArcLinkLabels={false}
    arcLabelsSkipAngle={10}
    colors={(data) => data.data.color}
    layers={['arcs', 'arcLabels', 'arcLinkLabels', CenteredMetricWrapper]}
  />;
}

export default OperationPieChart;
