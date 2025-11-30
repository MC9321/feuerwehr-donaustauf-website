import { PieCustomLayerProps } from '@nivo/pie';
import { JSX } from 'react';

import { OperationChartDataType } from '../../types/operationPieChartTypes';

interface CenteredMetricProps extends PieCustomLayerProps<OperationChartDataType> {
  text: string;
  isDarkMode: boolean;
}

function CenteredMetric(props: Readonly<CenteredMetricProps>): JSX.Element {
  const { centerX, centerY, text, isDarkMode } = props;

  return (
    <text
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
      {text}
    </text>
  );
}

export default CenteredMetric;
