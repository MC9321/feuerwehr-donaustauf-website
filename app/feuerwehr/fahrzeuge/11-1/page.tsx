import { JSX } from 'react';

import MzfContent from '@/features/MzfContent/MzfContent';
import cloudinaryService from '@/lib/CloudinaryService';
import { buildImageData } from '@/lib/cloudinaryUtils';

async function getGalleryImages() {
  return cloudinaryService.getImagesByFolder('pages/feuerwehr/fahrzeuge/11-1');
}

async function FeuerwehrFahrzeuge111(): Promise<JSX.Element> {
  const images = buildImageData(await getGalleryImages());

  return <MzfContent images={images} />;
}

export default FeuerwehrFahrzeuge111;
