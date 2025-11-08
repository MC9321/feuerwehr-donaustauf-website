import { OperationStatsBarChartDataType } from '@/components/OperationStatsBarChart/types/operationBarChartTypes';
import { OPERATION_STATS_QUERYResult } from '@/types/sanityTypes';

function statsToChartDataFf(operationStats?: OPERATION_STATS_QUERYResult): OperationStatsBarChartDataType[] | undefined {
  return operationStats?.toSorted((o1, o2) => (o1.year ?? 0) - (o2.year ?? 0)).map(stats => ({ id: stats._id, label: stats.year?.toString() ?? '', count: stats.ff ?? 0 }));
}

function statsToChartDataFr(operationStats?: OPERATION_STATS_QUERYResult): OperationStatsBarChartDataType[] | undefined {
  return operationStats?.toSorted((o1, o2) => (o1.year ?? 0) - (o2.year ?? 0)).map(stats => ({ id: stats._id, label: stats.year?.toString() ?? '', count: stats.fr ?? 0 }));
}

export { statsToChartDataFf, statsToChartDataFr };
