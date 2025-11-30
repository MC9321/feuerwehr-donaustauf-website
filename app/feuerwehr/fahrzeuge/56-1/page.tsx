import { JSX } from 'react';

import GlwContent from '@/features/GlwContent/GlwContent';
import cloudinaryService from '@/lib/CloudinaryService';
import { buildImageData } from '@/lib/cloudinaryUtils';

async function getGalleryImages() {
  return cloudinaryService.getImagesByFolder('pages/feuerwehr/fahrzeuge/56-1');
}

async function FeuerwehrFahrzeuge561(): Promise<JSX.Element> {
  const images = buildImageData(await getGalleryImages());

  return <GlwContent images={images} />;
}

export default FeuerwehrFahrzeuge561;
