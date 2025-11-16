import { JSX, useState, useEffect, MouseEvent, useRef } from 'react';
import { ImageData } from '../../types/imageOverlayTypes';
import CloudinaryImage from '@/components/Image/CloudinaryImage';
import { useSwipeable } from 'react-swipeable';

interface ImageOverlayViewerProps {
  image: ImageData;
  imageSeries: ImageData[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSelectImage?: (index: number) => void;
}

function ImageOverlayViewer(props: Readonly<ImageOverlayViewerProps>): JSX.Element {
  const { image, imageSeries, currentIndex, onClose, onNext, onPrevious, onSelectImage } = props;

  const [hasError, setHasError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const hasPrevious = true;
  const hasNext = true;

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageError = () => {
    setHasError(true);
  };

  const handleNext = () => {
    setHasError(false);
    setIsTransitioning(true);
    setTimeout(() => {
      onNext();
      setIsTransitioning(false);
    }, 200);
  };

  const handlePrevious = () => {
    setHasError(false);
    setIsTransitioning(true);
    setTimeout(() => {
      onPrevious();
      setIsTransitioning(false);
    }, 200);
  };

  const handleThumbnailClick = (index: number) => {
    if (index === currentIndex) return;
    setHasError(false);
    setIsTransitioning(true);
    setTimeout(() => {
      onSelectImage?.(index);
      setIsTransitioning(false);
    }, 200);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (isZoomed || !hasNext) return;
      handleNext();
    },
    onSwipedRight: () => {
      if (isZoomed || !hasPrevious) return;
      handlePrevious();
    },
    onTouchStartOrOnMouseDown: eventData => {
      if (eventData.event && 'touches' in eventData.event && eventData.event.touches.length > 1) {
        return false;
      }
    },
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  useEffect(() => {
    const updateZoomState = () => {
      try {
        const scale = window.visualViewport ? window.visualViewport.scale : 1;
        setIsZoomed(!!scale && scale > 1);
      } catch {
        setIsZoomed(false);
      }
    };
    updateZoomState();
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateZoomState);
      window.visualViewport.addEventListener('scroll', updateZoomState);
    }
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateZoomState);
        window.visualViewport.removeEventListener('scroll', updateZoomState);
      }
    };
  }, []);

  useEffect(() => {
    if (imageSeries.length === 0) return;

    const preloadImage = (src: string) => {
      const img = new globalThis.Image();
      img.src = src;
    };

    // Preload next image if it exists
    if (currentIndex + 1 < imageSeries.length) {
      const nextImage = imageSeries[currentIndex + 1];
      preloadImage(nextImage.src);
    }

    // Preload previous image if it exists
    if (currentIndex - 1 >= 0) {
      const previousImage = imageSeries[currentIndex - 1];
      preloadImage(previousImage.src);
    }
  }, [currentIndex, imageSeries]);

  // Auto-scroll thumbnail to center
  useEffect(() => {
    const currentThumbnail = thumbnailRefs.current[currentIndex];
    if (currentThumbnail) {
      currentThumbnail.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentIndex]);

  return (
    <div
      className="animate-fadeIn fixed inset-0 z-9999 flex items-center justify-center bg-black/90"
      onClick={handleBackdropClick}
      onKeyDown={e => {
        if (e.key === 'Escape') {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      <div className="relative max-h-[85vh] max-w-[95vw] sm:max-h-[90vh] sm:max-w-[90vw]">
        {hasError ? (
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white/10 p-8 text-white">
            <svg className="size-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-center text-lg font-medium">Fehler beim Laden des Bildes</p>
            <p className="text-center text-sm text-white/70">Das Bild kann nicht angezeigt werden</p>
          </div>
        ) : (
          <div {...handlers} className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <CloudinaryImage src={image.src} alt={image.alt} width={image.width} height={image.height} className="max-h-[85vh] max-w-[95vw] object-contain sm:max-h-[90vh] sm:max-w-[90vw]" onError={handleImageError} />
          </div>
        )}
      </div>
      <button onClick={onClose} aria-label="Close overlay" className="absolute top-2 right-2 z-50 cursor-pointer rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus:outline-none">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" stroke="black" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {hasPrevious && loaded && (
        <button onClick={handlePrevious} aria-label="Previous image" className="absolute inset-y-0 left-0 flex w-16 cursor-pointer items-center justify-center text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none">
          <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" stroke="black" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {hasNext && loaded && (
        <button onClick={handleNext} aria-label="Next image" className="absolute inset-y-0 right-0 flex w-16 cursor-pointer items-center justify-center text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none">
          <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" stroke="black" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
      {imageSeries.length > 1 && (
        <>
          <div className="absolute right-4 bottom-4 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
            {currentIndex + 1} / {imageSeries.length}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4">
            <div className="flex max-w-[90vw] gap-2 overflow-x-auto rounded-lg bg-black/70 p-2 backdrop-blur-sm">
              {imageSeries.map((img, index) => (
                <button
                  key={img.src}
                  ref={el => {
                    thumbnailRefs.current[index] = el;
                  }}
                  onClick={() => handleThumbnailClick(index)}
                  className={`shrink-0 cursor-pointer overflow-hidden rounded transition-all ${index === currentIndex ? 'opacity-100 ring-2 ring-gray-400' : 'opacity-50 hover:opacity-85'}`}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <CloudinaryImage src={img.src} alt={img.alt || `Thumbnail ${index + 1}`} width={80} height={60} className="h-16 w-20 object-cover" onLoad={() => setLoaded(true)} />
                </button>
              ))}
            </div>
          </div>
        </>
      )}
      {image.caption && <div className="absolute bottom-24 left-1/2 max-w-[90vw] -translate-x-1/2 rounded-lg bg-black/70 px-4 py-2 text-center text-sm text-white sm:max-w-[80vw]">{image.caption}</div>}
    </div>
  );
}

export default ImageOverlayViewer;
