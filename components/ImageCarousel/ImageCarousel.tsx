'use client';

import { CSSProperties, JSX, useEffect, useState } from 'react';

import { cn } from '@/lib/cn';

import CloudinaryImage from '../Image/CloudinaryImage';
import { ImageData } from '../ImageOverlay/types/imageOverlayTypes';

interface ImageCarouselProps {
  images: ImageData[];
  enableOverlay?: boolean;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  height?: string;
  width?: string;
  style?: CSSProperties;
}

function ImageCarousel(props: Readonly<ImageCarouselProps>): JSX.Element {
  const { images, enableOverlay = false, className, autoPlay = false, autoPlayInterval = 5000, style } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  if (!images || images.length === 0) {
    return <div className="text-center text-gray-500">Keine Bilder verfügbar</div>;
  }

  const currentImage = images[currentIndex];

  return (
    <div className={cn('relative w-full overflow-hidden', className)} style={style}>
      <div className="w-full">
        <CloudinaryImage
          src={currentImage.src}
          alt={currentImage.alt}
          width={currentImage.width || 1920}
          height={currentImage.height || 1080}
          className="h-auto w-full object-cover"
          enableOverlay={enableOverlay}
          imageSeries={enableOverlay ? images : undefined}
          imageIndex={currentIndex}
          loading="lazy"
          fill
        />
      </div>
      {images.length > 1 && (
        <div className="absolute top-4 right-4 flex gap-2">
          {images.map((image, index) => (
            <button
              key={image.id || `${image.src}-${index}`}
              onClick={() => goToSlide(index)}
              className={cn('h-3 w-3 rounded-full transition-all focus:ring-2 focus:ring-primary focus:outline-none', index === currentIndex ? 'scale-110 bg-white' : 'bg-white/50 hover:bg-white/75')}
              aria-label={`Gehe zu Bild ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;
export type { ImageCarouselProps };
