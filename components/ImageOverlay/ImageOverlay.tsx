'use client';

import { ReactNode, useState, useEffect, useCallback, useMemo } from 'react';
import { ImageData } from './types/imageOverlayTypes';
import ImageOverlayViewer from './components/ImageOverlayViewer/ImageOverlayViewer';
import { ImageOverlayContext, ImageOverlayContextType } from './context/ImageOverlayContext';

interface ImageOverlayProviderProps {
  children: ReactNode;
}

interface OverlayState {
  isOpen: boolean;
  selectedImage: ImageData | null;
  imageSeries: ImageData[];
  currentIndex: number;
}

function ImageOverlayProvider(props: Readonly<ImageOverlayProviderProps>) {
  const { children } = props;

  // State management - single state object
  const [state, setState] = useState<OverlayState>({
    isOpen: false,
    selectedImage: null,
    imageSeries: [],
    currentIndex: 0,
  });

  // Overlay control functions
  const showOverlay = useCallback((image: ImageData, series?: ImageData[], startIndex?: number) => {
    setState({
      isOpen: true,
      selectedImage: image,
      imageSeries: series || [],
      currentIndex: startIndex || 0,
    });
  }, []);

  const hideOverlay = useCallback(() => {
    setState({
      isOpen: false,
      selectedImage: null,
      imageSeries: [],
      currentIndex: 0,
    });
  }, []);

  const nextImage = useCallback(() => {
    setState(prev => {
      const newIndex = prev.currentIndex < prev.imageSeries.length - 1 ? prev.currentIndex + 1 : 0;
      return {
        ...prev,
        currentIndex: newIndex,
        selectedImage: prev.imageSeries[newIndex],
      };
    });
  }, []);

  const previousImage = useCallback(() => {
    setState(prev => {
      const newIndex = prev.currentIndex > 0 ? prev.currentIndex - 1 : prev.imageSeries.length - 1;
      return {
        ...prev,
        currentIndex: newIndex,
        selectedImage: prev.imageSeries[newIndex],
      };
    });
  }, []);

  const selectImage = useCallback((index: number) => {
    setState(prev => {
      if (index >= 0 && index < prev.imageSeries.length) {
        return {
          ...prev,
          currentIndex: index,
          selectedImage: prev.imageSeries[index],
        };
      }
      return prev;
    });
  }, []);

  // Keyboard event handling
  useEffect(() => {
    if (!state.isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          hideOverlay();
          break;
        case 'ArrowLeft':
          previousImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [state.isOpen, hideOverlay, previousImage, nextImage]);

  // Scroll lock
  useEffect(() => {
    if (state.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [state.isOpen]);

  const contextValue: ImageOverlayContextType = useMemo(
    () => ({
      showOverlay,
      hideOverlay,
      nextImage,
      previousImage,
      isOpen: state.isOpen,
    }),
    [showOverlay, hideOverlay, nextImage, previousImage, state.isOpen],
  );

  return (
    <ImageOverlayContext.Provider value={contextValue}>
      {children}
      {state.isOpen && state.selectedImage && (
        <ImageOverlayViewer image={state.selectedImage} imageSeries={state.imageSeries} currentIndex={state.currentIndex} onClose={hideOverlay} onNext={nextImage} onPrevious={previousImage} onSelectImage={selectImage} />
      )}
    </ImageOverlayContext.Provider>
  );
}

export default ImageOverlayProvider;
