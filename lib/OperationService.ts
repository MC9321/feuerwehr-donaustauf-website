import { defineQuery, FilteredResponseQueryOptions } from 'next-sanity';
import { client } from './sanityClient';
import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import { getOperationsOfYear, parseToNumber } from './operationUtils';

const OPERATION_QUERY = defineQuery('*[_type == "einsatz"] | order(date desc) { _id, title, locality, date, category, incident, slug }');

const OPERATION_BY_YEAR_QUERY = defineQuery('*[_type == "einsatz" && date >= $dateFrom && date <= $dateUntil] | order(date asc) { _id, title, locality, date, category, incident, slug }');

const OPERATION_LATEST_FR_THL_QUERY = defineQuery('*[_type == "einsatz" && category == "First Responder THL"] | order(date desc) [0...5] { _id, title, locality, date, category, incident, slug }');

const OPERATION_LATEST_NON_FR_THL_QUERY = defineQuery('*[_type == "einsatz" && category != "First Responder THL"] | order(date desc) [0...5] { _id, title, locality, date, category, incident, slug }');

const OPERATION_YEARS_QUERY = defineQuery('array::unique(*[_type == "einsatz" && defined(date)] { "year": string::split(date, "-")[0]}.year)');

const options: FilteredResponseQueryOptions = { next: { revalidate: 60 } };

class OperationService {
  getOperations = async (): Promise<OPERATION_QUERYResult> => {
    return client.fetch<OPERATION_QUERYResult>(OPERATION_QUERY, {}, options);
  };

  getOperationsOfYear = async (year: number): Promise<OPERATION_QUERYResult | undefined> => {
    const dateFrom = `${year - 1}-12-31`;
    const dateUntil = `${year + 1}-01-01`;
    const operations = await client.fetch<OPERATION_QUERYResult>(OPERATION_BY_YEAR_QUERY, { dateFrom, dateUntil }, options);
    return getOperationsOfYear(operations, year);
  };

  getLatestFrOperations = async (): Promise<OPERATION_QUERYResult> => {
    return client.fetch<OPERATION_QUERYResult>(OPERATION_LATEST_FR_THL_QUERY, {}, options);
  };

  getLatestFfOperations = async (): Promise<OPERATION_QUERYResult> => {
    return client.fetch<OPERATION_QUERYResult>(OPERATION_LATEST_NON_FR_THL_QUERY, {}, options);
  };

  getAvailableYears = async (): Promise<number[]> => {
    const dates = await client.fetch<string[]>(OPERATION_YEARS_QUERY, {}, options);

    return dates.map(d => parseToNumber(d));
  };
}

const operationService = new OperationService();

export default operationService;
export { OPERATION_QUERY, OPERATION_BY_YEAR_QUERY, OPERATION_LATEST_FR_THL_QUERY, OPERATION_LATEST_NON_FR_THL_QUERY, OPERATION_YEARS_QUERY };
