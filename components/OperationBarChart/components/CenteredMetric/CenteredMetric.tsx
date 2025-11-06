import { JSX } from 'react';

import { PieCustomLayerProps } from "@nivo/pie";
import { OperationChartDataType } from '@/components/OperationPieChart/types/operationPieChartTypes';

interface CenteredMetricProps extends PieCustomLayerProps<OperationChartDataType> {
  totalOperations: number;
  isDarkMode: boolean;
  year?: number;
}

function CenteredMetric(props: Readonly<CenteredMetricProps>): JSX.Element {
  const { centerX, centerY, totalOperations, isDarkMode, year } = props;

  return <text
    x={centerX}
    y={centerY}
    textAnchor="middle"
    dominantBaseline="central"
    style={{
      fontSize: '12px',
      fontWeight: 'bold',
      fill: isDarkMode ? '#d1d5dc' : '#101828',
    }}
  >
    {year && `${year}:`} {totalOperations} Einsätze
  </text>
}

export default CenteredMetric;
