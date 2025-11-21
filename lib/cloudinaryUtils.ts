import { ImageData } from '@/components/ImageOverlay';
import { CloudinaryResource } from '@cloudinary-util/types';

function buildImageData(cloudinaryResource: CloudinaryResource[]): ImageData[] | undefined {
  return cloudinaryResource.map(img => ({
    id: img.public_id,
    src: img.public_id ?? '',
    alt: img.context?.custom?.alt ?? img.display_name ?? '',
    title: img.context?.custom?.caption,
    width: img.width,
    height: img.height,
    caption: img.context?.custom?.caption,
  }));
}

export { buildImageData };
