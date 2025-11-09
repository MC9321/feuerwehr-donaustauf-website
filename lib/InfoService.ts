import { defineQuery, FilteredResponseQueryOptions } from 'next-sanity';
import { client } from './sanityClient';
import { INFO_QUERYResult } from '@/types/sanityTypes';

const INFO_QUERY = defineQuery('*[_type == "info"]{ _id, title, message, index }');

const options: FilteredResponseQueryOptions = { next: { revalidate: 30 } };

class InfoService {
  cachedInfos: INFO_QUERYResult | undefined;

  getInfos = async (): Promise<INFO_QUERYResult> => {
    this.cachedInfos ??= await client.fetch<INFO_QUERYResult>(INFO_QUERY, {}, options);

    return this.cachedInfos;
  };
}

const infoService = new InfoService();

export default infoService;
export { INFO_QUERY };
