import { CloudinaryResource } from '@cloudinary-util/types';
import { describe, expect, it } from 'vitest';

import { buildImageData } from './cloudinaryUtils';

describe('cloudinaryUtils', () => {
  describe('buildImageData', () => {
    it('should transform cloudinary resources to image data', () => {
      const resources: CloudinaryResource[] = [
        {
          public_id: 'test/image1',
          display_name: 'Test Image 1',
          width: 800,
          height: 600,
          context: {
            custom: {
              alt: 'Alt text 1',
              caption: 'Caption 1',
            },
          },
        } as CloudinaryResource,
      ];

      const result = buildImageData(resources);

      expect(result).toHaveLength(1);
      expect(result?.[0]).toEqual({
        id: 'test/image1',
        src: 'test/image1',
        alt: 'Alt text 1',
        title: 'Caption 1',
        width: 800,
        height: 600,
        caption: 'Caption 1',
      });
    });

    it('should use display_name as fallback for alt text', () => {
      const resources: CloudinaryResource[] = [
        {
          public_id: 'test/image2',
          display_name: 'Fallback Name',
          width: 1024,
          height: 768,
        } as CloudinaryResource,
      ];

      const result = buildImageData(resources);

      expect(result?.[0]?.alt).toBe('Fallback Name');
    });

    it('should handle empty resources array', () => {
      const result = buildImageData([]);

      expect(result).toEqual([]);
    });

    it('should handle missing context', () => {
      const resources: CloudinaryResource[] = [
        {
          public_id: 'test/image3',
          width: 500,
          height: 400,
        } as CloudinaryResource,
      ];

      const result = buildImageData(resources);

      expect(result?.[0]).toEqual({
        id: 'test/image3',
        src: 'test/image3',
        alt: '',
        title: undefined,
        width: 500,
        height: 400,
        caption: undefined,
      });
    });

    it('should handle multiple resources', () => {
      const resources: CloudinaryResource[] = [
        {
          public_id: 'test/image1',
          display_name: 'Image 1',
          width: 800,
          height: 600,
        } as CloudinaryResource,
        {
          public_id: 'test/image2',
          display_name: 'Image 2',
          width: 1024,
          height: 768,
        } as CloudinaryResource,
      ];

      const result = buildImageData(resources);

      expect(result).toHaveLength(2);
      expect(result?.[0]?.id).toBe('test/image1');
      expect(result?.[1]?.id).toBe('test/image2');
    });
  });
});
