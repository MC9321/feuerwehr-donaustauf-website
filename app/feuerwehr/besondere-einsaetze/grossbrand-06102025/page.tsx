import GrossbrandJagdschlossContent from '@/features/GrossbrandJagdschlossContent/GrossbrandJagdschlossContent';
import cloudinaryService from '@/lib/CloudinaryService';
import { buildImageData } from '@/lib/cloudinayUtils';
import { JSX } from 'react';

async function getBannerImages() {
  return cloudinaryService.getImagesByFolder('pages/einsaetze/grossbrand-am-06102025');
}

async function Grossbrand06102025(): Promise<JSX.Element> {
  const images = buildImageData(await getBannerImages());

  return <GrossbrandJagdschlossContent images={images} />;
}

export default Grossbrand06102025;
