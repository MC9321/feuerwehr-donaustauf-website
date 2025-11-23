'use client';

import { JSX, useState, useEffect, useRef, MouseEvent } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { useSwipeable } from 'react-swipeable';
import { ImageData } from '../../types/imageOverlayTypes';
import CloudinaryImage from '@/components/Image/CloudinaryImage';

interface LightboxProps {
  image: ImageData;
  imageSeries: ImageData[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSelectImage?: (index: number) => void;
}

function Lightbox(props: Readonly<LightboxProps>): JSX.Element {
  const { image, imageSeries, currentIndex, onClose, onNext, onPrevious, onSelectImage } = props;

  const [hasError, setHasError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [thumbnailsVisible, setThumbnailsVisible] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const isAtFirstImage = currentIndex === 0;
  const isAtLastImage = currentIndex === imageSeries.length - 1;

  // Backdrop fade-in animation
  const backdropSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.default,
  });

  const rightDirection = direction === 'right' ? 'translateX(100%)' : 'translateX(0%)';

  // Image slide animation - only animate when direction changes (image navigation)
  const imageSpring = useSpring({
    from: {
      opacity: direction ? 0 : 1,
      transform: direction === 'left' ? 'translateX(-100%)' : direction === 'right' ? 'translateX(100%)' : 'translateX(0%)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
    config: config.gentle,
    reset: !!direction,
  });

  // Close button animation
  const closeButtonSpring = useSpring({
    from: { scale: 0, rotate: -180 },
    to: { scale: 1, rotate: 0 },
    config: config.wobbly,
    delay: 100,
  });

  // Navigation buttons animation
  const navButtonSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.default,
    delay: 200,
  });

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
    setDirection('right');
    if (isAtLastImage) {
      onSelectImage?.(0);
    } else {
      onNext();
    }
  };

  const handlePrevious = () => {
    setHasError(false);
    setDirection('left');
    if (isAtFirstImage) {
      onSelectImage?.(imageSeries.length - 1);
    } else {
      onPrevious();
    }
  };

  const handleThumbnailClick = (index: number) => {
    if (index === currentIndex || !onSelectImage) return;
    setHasError(false);
    setDirection(index > currentIndex ? 'right' : 'left');
    onSelectImage(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (isZoomed) return;
      handleNext();
    },
    onSwipedRight: () => {
      if (isZoomed) return;
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

  // Zoom detection
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

  // Preload adjacent images
  useEffect(() => {
    if (imageSeries.length === 0) return;

    const preloadImage = (src: string) => {
      const img = new globalThis.Image();
      img.src = src;
    };

    if (currentIndex + 1 < imageSeries.length) {
      const nextImage = imageSeries[currentIndex + 1];
      preloadImage(nextImage.src);
    }

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
    <animated.div {...handlers} style={backdropSpring} className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90" onClick={handleBackdropClick}>
      <div className="relative">
        {hasError ? (
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white/10 p-8 text-white">
            <svg className="size-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-center text-lg font-medium">Fehler beim Laden des Bildes</p>
            <p className="text-center text-sm text-white/70">Das Bild kann nicht angezeigt werden</p>
          </div>
        ) : (
          <animated.div style={imageSpring} key={image.src}>
            <CloudinaryImage src={image.src} alt={image.alt} width={image.width} height={image.height} className={`max-h-[95vh] max-w-[95vw] rounded-lg object-contain`} onError={handleImageError} />
          </animated.div>
        )}
      </div>

      {/* Close Button */}
      <animated.button onClick={onClose} aria-label="Close overlay" style={closeButtonSpring} className="absolute top-2 right-2 z-50 cursor-pointer rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus:outline-none">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" stroke="black" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </animated.button>

      {/* Navigation Buttons */}
      {imageSeries.length > 1 && (
        <>
          <animated.button
            onClick={handlePrevious}
            aria-label="Previous image"
            style={navButtonSpring}
            className={`absolute inset-y-0 left-0 z-10 flex w-16 cursor-pointer items-center justify-center hover:bg-white/10 focus:bg-white/10 focus:outline-none ${isAtFirstImage ? 'text-gray-400' : 'text-white'}`}
          >
            <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" stroke="black" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </animated.button>
          <animated.button
            onClick={handleNext}
            aria-label="Next image"
            style={navButtonSpring}
            className={`absolute inset-y-0 right-0 z-10 flex w-16 cursor-pointer items-center justify-center hover:bg-white/10 focus:bg-white/10 focus:outline-none ${isAtLastImage ? 'text-gray-400' : 'text-white'}`}
          >
            <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" stroke="black" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </animated.button>
        </>
      )}

      {/* Thumbnails */}
      {imageSeries.length > 1 && (
        <>
          <div {...thumbnailHandlers} className={`absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pb-4 ${thumbnailsVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="flex gap-2 rounded-lg p-2 backdrop-blur-sm" style={{ transform: `translateX(calc(50% - ${currentIndex * 88 + 44}px))`, transition: 'transform 0.3s ease-out' }}>
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
                  <CloudinaryImage src={img.src} alt={img.alt || `Thumbnail ${index + 1}`} width={80} height={60} className="h-16 w-20 object-cover" />
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

      {/* Image Counter */}
      {imageSeries.length > 1 && (
        <div className={`absolute right-4 rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-all duration-300 ${thumbnailsVisible ? 'bottom-24' : 'bottom-4'}`}>
          {currentIndex + 1} / {imageSeries.length}
        </div>
      )}

      {/* Caption */}
      {image.caption && <div className="absolute top-2 left-2 max-w-[90vw] rounded-lg bg-white/10 px-4 py-2 text-left text-sm text-white sm:max-w-[80vw]">{image.caption}</div>}
    </animated.div>
  );
}

export default Lightbox;
