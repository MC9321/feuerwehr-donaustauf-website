import { JSX } from 'react';

import MzbContent from '@/features/MzbContent/MzbContent';
import cloudinaryService from '@/lib/CloudinaryService';
import { buildImageData } from '@/lib/cloudinaryUtils';

async function getBannerImages() {
  return cloudinaryService.getImagesByFolder('pages/feuerwehr/fahrzeuge/99-1');
}

async function FeuerwehrFahrzeuge991(): Promise<JSX.Element> {
  const images = buildImageData(await getBannerImages());

  return <MzbContent images={images} />;
}

export default FeuerwehrFahrzeuge991;
