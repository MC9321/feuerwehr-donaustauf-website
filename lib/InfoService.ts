import { defineQuery, FilteredResponseQueryOptions } from 'next-sanity';
import { client } from './sanityClient';
import { INFO_QUERYResult } from '@/types/sanityTypes';

const INFO_QUERY = defineQuery('*[_type == "info"]{ _id, title, message, index }');

const options: FilteredResponseQueryOptions = { next: { revalidate: 60 } };

class InfoService {
  getInfos = async (): Promise<INFO_QUERYResult> => {
    return client.fetch<INFO_QUERYResult>(INFO_QUERY, {}, options);
  };
}

const infoService = new InfoService();

export default infoService;
export { INFO_QUERY };
