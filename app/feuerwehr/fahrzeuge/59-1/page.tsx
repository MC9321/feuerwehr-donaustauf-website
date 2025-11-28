import { JSX } from 'react';

import UtvContent from '@/features/UtfContent/UtvContent';
import cloudinaryService from '@/lib/CloudinaryService';
import { buildImageData } from '@/lib/cloudinaryUtils';

async function getGalleryImages() {
  return cloudinaryService.getImagesByFolder('pages/feuerwehr/fahrzeuge/59-1');
}

async function FeuerwehrFahrzeuge591(): Promise<JSX.Element> {
  const images = buildImageData(await getGalleryImages());

  return <UtvContent images={images} />;
}

export default FeuerwehrFahrzeuge591;
