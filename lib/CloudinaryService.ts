import { CloudinaryResource } from '@cloudinary-util/types';
import axios from 'axios';

const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cloudinaryApiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET;

interface CloudinaryResponse {
  resources: CloudinaryResource[];
  next_cursor?: string;
}

class CloudinaryService {
  getImagesByFolder = async (folder: string, maxResults = 500): Promise<CloudinaryResource[]> => {
    try {
      const response = await axios.get<CloudinaryResponse>(`https://${cloudinaryApiKey}:${cloudinaryApiSecret}@api.cloudinary.com/v1_1/${cloudinaryCloudName}/resources/by_asset_folder`, {
        params: {
          asset_folder: folder,
          context: true,
          max_results: maxResults,
          direction: 1,
        },
      });

      return response.data.resources;
    } catch {
      return [];
    }
  };

  getImagesByTag = async (tag: string, maxResults = 500): Promise<CloudinaryResource[]> => {
    try {
      const response = await axios.get<CloudinaryResponse>(`https://${cloudinaryApiKey}:${cloudinaryApiSecret}@api.cloudinary.com/v1_1/${cloudinaryCloudName}/resources/image/tags/${tag}`, {
        params: {
          max_results: maxResults,
          context: true,
          direction: 1,
        },
      });

      return response.data.resources;
    } catch {
      return [];
    }
  };
}

const cloudinaryService = new CloudinaryService();

export default cloudinaryService;
