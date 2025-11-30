'use client';

import { JSX } from 'react';

import { ImageData } from '@/components/ImageOverlay/types/imageOverlayTypes';

import CloudinaryImage from '../CloudinaryImage/CloudinaryImage';

interface CloudinaryImageGalleryProps {
  imageSeries: ImageData[];
}

function CloudinaryImageGalleryImage(props: Readonly<CloudinaryImageGalleryProps>): JSX.Element {
  const { imageSeries } = props;

  return (
    <ul className="block columns-2 gap-x-4 sm:columns-2 md:columns-4 xl:columns-3 2xl:columns-4">
      {imageSeries.map(({ id, src, alt, title, width, height }, index) => (
        <li key={`gallery-${id ?? src}`} className="mb-4">
          <CloudinaryImage src={src} alt={alt} title={title} width={width} height={height} enableOverlay imageSeries={imageSeries} imageIndex={index} loading="lazy" />
        </li>
      ))}
    </ul>
  );
}

export default CloudinaryImageGalleryImage;
