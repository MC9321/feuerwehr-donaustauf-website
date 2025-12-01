import { CloudinaryResource } from '@cloudinary-util/types';
import axios from 'axios';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import cloudinaryService from './CloudinaryService';

vi.mock('axios');

describe('CloudinaryService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getImagesByFolder', () => {
    it('should fetch images by folder', async () => {
      const mockResources: CloudinaryResource[] = [
        {
          public_id: 'test/image1',
          width: 800,
          height: 600,
        } as CloudinaryResource,
      ];

      vi.mocked(axios.get).mockResolvedValue({
        data: { resources: mockResources },
      });

      const result = await cloudinaryService.getImagesByFolder('test-folder');

      expect(axios.get).toHaveBeenCalledWith(
        expect.stringContaining('api.cloudinary.com/v1_1/'),
        expect.objectContaining({
          params: {
            asset_folder: 'test-folder',
            context: true,
            max_results: 500,
            direction: 1,
          },
        }),
      );
      expect(result).toEqual(mockResources);
    });

    it('should return empty array on error', async () => {
      vi.mocked(axios.get).mockRejectedValue(new Error('API Error'));

      const result = await cloudinaryService.getImagesByFolder('test-folder');

      expect(result).toEqual([]);
    });

    it('should use custom maxResults', async () => {
      vi.mocked(axios.get).mockResolvedValue({
        data: { resources: [] },
      });

      await cloudinaryService.getImagesByFolder('test-folder', 100);

      expect(axios.get).toHaveBeenCalledWith(expect.any(String), {
        params: expect.objectContaining({
          max_results: 100,
        }),
      });
    });
  });

  describe('getImagesByTag', () => {
    it('should fetch images by tag', async () => {
      const mockResources: CloudinaryResource[] = [
        {
          public_id: 'test/image1',
          width: 800,
          height: 600,
        } as CloudinaryResource,
      ];

      vi.mocked(axios.get).mockResolvedValue({
        data: { resources: mockResources },
      });

      const result = await cloudinaryService.getImagesByTag('banner');

      expect(axios.get).toHaveBeenCalledWith(
        expect.stringContaining('api.cloudinary.com/v1_1/'),
        expect.objectContaining({
          params: {
            max_results: 500,
            context: true,
            direction: 1,
          },
        }),
      );
      expect(result).toEqual(mockResources);
    });

    it('should return empty array on error', async () => {
      vi.mocked(axios.get).mockRejectedValue(new Error('API Error'));

      const result = await cloudinaryService.getImagesByTag('banner');

      expect(result).toEqual([]);
    });

    it('should use custom maxResults', async () => {
      vi.mocked(axios.get).mockResolvedValue({
        data: { resources: [] },
      });

      await cloudinaryService.getImagesByTag('banner', 200);

      expect(axios.get).toHaveBeenCalledWith(expect.any(String), {
        params: expect.objectContaining({
          max_results: 200,
        }),
      });
    });
  });
});
