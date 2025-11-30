'use client';

import { createContext } from 'react';

import { ImageData } from '../types/imageOverlayTypes';

export interface ImageOverlayContextType {
  showOverlay: (image: ImageData, series?: ImageData[], startIndex?: number) => void;
  hideOverlay: () => void;
  nextImage: () => void;
  previousImage: () => void;
  isOpen: boolean;
}

export const ImageOverlayContext = createContext<ImageOverlayContextType | undefined>(undefined);
