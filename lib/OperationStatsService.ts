import { defineQuery, FilteredResponseQueryOptions } from 'next-sanity';
import { client } from './sanityClient';
import { OPERATION_STATS_QUERYResult } from '@/types/sanityTypes';

const OPERATION_STATS_QUERY = defineQuery('*[_type == "einsatzStats"]{ _id, year, ff, fr }');

const options: FilteredResponseQueryOptions = { next: { revalidate: 30 } };

class OperationStatsService {
  cachedOperationStats: OPERATION_STATS_QUERYResult | undefined;

  getOperationStats = async (): Promise<OPERATION_STATS_QUERYResult> => {
    this.cachedOperationStats = await client.fetch<OPERATION_STATS_QUERYResult>(OPERATION_STATS_QUERY, {}, options);

    return this.cachedOperationStats;
  };
}

const operationStatsService = new OperationStatsService();

export default operationStatsService;
export { OPERATION_STATS_QUERY };
