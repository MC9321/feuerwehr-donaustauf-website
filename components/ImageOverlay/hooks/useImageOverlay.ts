import { useContext } from 'react';

import { ImageOverlayContext } from '../context/ImageOverlayContext';

export function useImageOverlay() {
  const context = useContext(ImageOverlayContext);
  if (!context) {
    throw new Error('useImageOverlay must be used within ImageOverlayProvider');
  }
  return context;
}
