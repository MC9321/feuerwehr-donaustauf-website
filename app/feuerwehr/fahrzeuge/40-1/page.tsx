import { JSX } from 'react';

import HlfContent from '@/features/HlfContent/HlfContent';
import cloudinaryService from '@/lib/CloudinaryService';
import { buildImageData } from '@/lib/cloudinaryUtils';

async function getGalleryImages() {
  return cloudinaryService.getImagesByFolder('pages/feuerwehr/fahrzeuge/40-1');
}

async function FeuerwehrFahrzeuge401(): Promise<JSX.Element> {
  const images = buildImageData(await getGalleryImages());

  return <HlfContent images={images} />;
}

export default FeuerwehrFahrzeuge401;
