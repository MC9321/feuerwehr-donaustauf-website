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
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [previousImage, setPreviousImage] = useState<ImageData | null>(null);
  const [thumbnailsVisible, setThumbnailsVisible] = useState(true);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const isAtFirstImage = currentIndex === 0;
  const isAtLastImage = currentIndex === imageSeries.length - 1;

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageError = () => {
    setHasError(true);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setHasError(false);
    setSlideDirection('right');
    setPreviousImage(image);
    setTimeout(() => {
      if (isAtLastImage) {
        onSelectImage?.(0);
      } else {
        onNext();
      }
      setIsTransitioning(true);
    }, 10);
    setTimeout(() => {
      setIsTransitioning(false);
      setSlideDirection(null);
      setPreviousImage(null);
    }, 750);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setHasError(false);
    setSlideDirection('left');
    setPreviousImage(image);
    setTimeout(() => {
      if (isAtFirstImage) {
        onSelectImage?.(imageSeries.length - 1);
      } else {
        onPrevious();
      }
      setIsTransitioning(true);
    }, 10);
    setTimeout(() => {
      setIsTransitioning(false);
      setSlideDirection(null);
      setPreviousImage(null);
    }, 750);
  };

  const handleThumbnailClick = (index: number) => {
    if (index === currentIndex || !onSelectImage || isTransitioning) return;
    setHasError(false);
    setSlideDirection(index > currentIndex ? 'right' : 'left');
    setPreviousImage(image);
    setTimeout(() => {
      onSelectImage(index);
      setIsTransitioning(true);
    }, 10);
    setTimeout(() => {
      setIsTransitioning(false);
      setSlideDirection(null);
      setPreviousImage(null);
    }, 750);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (isZoomed || isTransitioning) return;
      handleNext();
    },
    onSwipedRight: () => {
      if (isZoomed || isTransitioning) return;
      handlePrevious();
    },
    onTouchStartOrOnMouseDown: eventData => {
      if (eventData.event && 'touches' in eventData.event && eventData.event.touches.length > 1) {
        return false;
      }
    },
    trackMouse: true,
    preventScrollOnSwipe: true,
    delta: 50,
  });

  const thumbnailHandlers = useSwipeable({
    onSwipedDown: () => {
      setThumbnailsVisible(false);
    },
    trackMouse: false,
    preventScrollOnSwipe: true,
    delta: 30,
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

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    globalThis.addEventListener('keydown', handleKeyDown);
    return () => globalThis.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const getOldImageClasses = () => {
    const baseClasses = 'absolute inset-0 transition-all duration-700 ease-out';
    if (!isTransitioning) {
      return `${baseClasses} translate-x-0 opacity-100`;
    }
    if (slideDirection === 'left') {
      return `${baseClasses} translate-x-full opacity-0`;
    }
    if (slideDirection === 'right') {
      return `${baseClasses} -translate-x-full opacity-0`;
    }
    return `${baseClasses} opacity-0`;
  };

  const getNewImageClasses = () => {
    const baseClasses = 'relative transition-all duration-700 ease-out';

    if (!previousImage) {
      return `${baseClasses} translate-x-0 opacity-100`;
    }

    if (!isTransitioning) {
      // Initial position: outside viewport
      if (slideDirection === 'left') {
        return `${baseClasses} -translate-x-full opacity-0`;
      }
      if (slideDirection === 'right') {
        return `${baseClasses} translate-x-full opacity-0`;
      }
    }

    // Final position: center
    return `${baseClasses} translate-x-0 opacity-100`;
  };

  return (
    <div
      {...handlers}
      role="dialog"
      aria-modal="true"
      aria-label="Image overlay"
      className="animate-fadeIn fixed inset-0 z-9999 flex items-center justify-center bg-black/90"
      onClick={handleBackdropClick}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleBackdropClick(e as unknown as MouseEvent);
        }
      }}
    >
      <div className={`relative transition-all duration-300 ${imageSeries.length > 1 && thumbnailsVisible ? 'max-h-[calc(85vh-120px)] sm:max-h-[calc(90vh-120px)]' : 'max-h-[85vh] sm:max-h-[90vh]'} max-w-[95vw] sm:max-w-[90vw]`}>
        {hasError ? (
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white/10 p-8 text-white">
            <svg className="size-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-center text-lg font-medium">Fehler beim Laden des Bildes</p>
            <p className="text-center text-sm text-white/70">Das Bild kann nicht angezeigt werden</p>
          </div>
        ) : (
          <div className="relative">
            {previousImage && (
              <div className={getOldImageClasses()}>
                <CloudinaryImage
                  src={previousImage.src}
                  alt={previousImage.alt}
                  width={previousImage.width}
                  height={previousImage.height}
                  className={`object-contain transition-all duration-300 ${imageSeries.length > 1 && thumbnailsVisible ? 'max-h-[calc(85vh-120px)] sm:max-h-[calc(90vh-120px)]' : 'max-h-[85vh] sm:max-h-[90vh]'} max-w-[95vw] sm:max-w-[90vw]`}
                />
              </div>
            )}
            <div className={getNewImageClasses()}>
              <CloudinaryImage
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={`object-contain transition-all duration-300 ${imageSeries.length > 1 && thumbnailsVisible ? 'max-h-[calc(85vh-120px)] sm:max-h-[calc(90vh-120px)]' : 'max-h-[85vh] sm:max-h-[90vh]'} max-w-[95vw] sm:max-w-[90vw]`}
                onError={handleImageError}
              />
            </div>
          </div>
        )}
      </div>
      <button onClick={onClose} aria-label="Close overlay" className="absolute top-2 right-2 z-50 cursor-pointer rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus:outline-none">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" stroke="black" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {loaded && imageSeries.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            aria-label="Previous image"
            className={`absolute inset-y-0 left-0 flex w-16 cursor-pointer items-center justify-center hover:bg-white/10 focus:bg-white/10 focus:outline-none ${isAtFirstImage ? 'text-gray-400' : 'text-white'}`}
          >
            <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" stroke="black" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next image"
            className={`absolute inset-y-0 right-0 flex w-16 cursor-pointer items-center justify-center hover:bg-white/10 focus:bg-white/10 focus:outline-none ${isAtLastImage ? 'text-gray-400' : 'text-white'}`}
          >
            <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" stroke="black" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      {imageSeries.length > 1 && (
        <>
          <div className="absolute top-2 left-2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
            {currentIndex + 1} / {imageSeries.length}
          </div>
          <div {...thumbnailHandlers} className={`absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pb-4 transition-transform duration-300 ${thumbnailsVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="flex gap-2 rounded-lg bg-black/70 p-2 backdrop-blur-sm" style={{ transform: `translateX(calc(50% - ${currentIndex * 88 + 44}px))`, transition: 'transform 0.3s ease-out' }}>
              {imageSeries.map((img, index) => (
                <button
                  key={img.src}
                  ref={el => {
                    thumbnailRefs.current[index] = el;
                  }}
                  onClick={() => handleThumbnailClick(index)}
                  className={`shrink-0 cursor-pointer overflow-hidden rounded transition-all ${index === currentIndex ? 'scale-110 opacity-100 ring-2 ring-gray-400' : 'opacity-50 hover:opacity-85'}`}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <CloudinaryImage src={img.src} alt={img.alt || `Thumbnail ${index + 1}`} width={80} height={60} className="h-16 w-20 object-cover" onLoad={() => setLoaded(true)} />
                </button>
              ))}
            </div>
          </div>
          {!thumbnailsVisible && (
            <button
              onClick={() => setThumbnailsVisible(true)}
              aria-label="Show thumbnails"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer rounded-full bg-black/70 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/90"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          )}
        </>
      )}
      {image.caption && <div className="absolute bottom-24 left-1/2 max-w-[90vw] -translate-x-1/2 rounded-lg bg-black/70 px-4 py-2 text-center text-sm text-white sm:max-w-[80vw]">{image.caption}</div>}
    </div>
  );
}

export default ImageOverlayViewer;
