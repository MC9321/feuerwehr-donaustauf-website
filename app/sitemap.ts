import { SITE_URL } from '@/lib/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/feuerwehr/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/first-responder/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/verein/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/kontakt/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/datenschutz/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/impressum/`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/spenden/`,
      lastModified: new Date(),
    },
  ];
}
