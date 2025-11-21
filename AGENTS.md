# Agent Context: Feuerwehr Markt Donaustauf

## Projektübersicht

Next.js 16 Website für die Feuerwehr Markt Donaustauf mit App Router, TypeScript und Tailwind CSS 4.

## Tech Stack

- **Framework**: Next.js 16 (App Router, React 19, Server Components)
- **Sprache**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4, Custom UI Library `@salzpate/react-ui`
- **CMS**: Sanity (next-sanity)
- **Bilder**: Cloudinary (next-cloudinary)
- **Charts**: Nivo (@nivo/bar, @nivo/pie)
- **Testing**: Vitest

## Projektstruktur

```
/app                    # Next.js App Router (Seiten & Layouts)
/components             # Wiederverwendbare UI-Komponenten
/features               # Feature-basierte Seitenkomponenten
/lib                    # Services & Utilities
  ├── *Service.ts       # Data-Fetching Services (Sanity, Cloudinary)
  └── *Utils.ts         # Helper-Funktionen
/data                   # Statische Daten (z.B. MenuData)
/types                  # TypeScript Type Definitions
/styles                 # Globale Styles
/public                 # Statische Assets
```

## Path Aliases

```typescript
@/components/*  → components/*
@/data/*        → data/*
@/features/*    → features/*
@/hooks/*       → hooks/*
@/lib/*         → lib/*
@/styles/*      → styles/*
@/types/*       → types/*
```

## Wichtige Komponenten

### Services (lib/)

- `InfoService.ts` - Aktuelle Meldungen von Sanity
- `OperationService.ts` - Einsatzdaten von Sanity
- `OperationStatsService.ts` - Einsatzstatistiken
- `CloudinaryService.ts` - Bildverwaltung
- `sanityClient.ts` - Sanity CMS Client

### Features (features/)

- `MainContent/` - Hauptseite Content
- `OperationContent/` - Einsatzübersicht
- `ContactContent/` - Kontaktformular
- Fahrzeug-Features: `HlfContent/`, `MzbContent/`, `MzfContent/`, etc.

### Komponenten (components/)

- `Operation*/` - Einsatz-bezogene Komponenten
- `Image*/` - Bild-Komponenten mit Cloudinary
- `Header*/` - Header & Navigation
- `Footer/` - Footer mit Menüs
- Chart-Komponenten für Statistiken

## Development Commands

```bash
npm run dev          # Development Server (Port 3000)
npm run build        # Production Build
npm run start        # Production Server
npm run lint         # ESLint + TypeScript Check
npm run lint:style   # Stylelint für CSS
npm run prettier     # Code Formatting
npm run typegen      # Sanity Type Generation
```

## Konfiguration

### Next.js (next.config.ts)

- Cloudinary Remote Patterns konfiguriert
- Security Headers (X-Frame-Options, CSP, etc.)
- Image Optimization (AVIF, WebP)
- Package Imports Optimization für `@salzpate/react-ui`
- Production: Console Logs entfernt (außer error/warn)
- Experimental: `dynamicIO: true` für Component-Level Caching

### Environment Variables (.env.local)

```bash
# Sanity CMS
SANITY_PROJECT_ID=xxx
SANITY_DATASET=production

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=xxx
NEXT_PUBLIC_CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx

# Email (MailerSend)
MAILERSEND_API_KEY=xxx

# Newsletter (Sendinblue/Brevo)
NEWSLETTER=https://...
```

### TypeScript (tsconfig.json)

- Strict Mode aktiviert
- Path Aliases konfiguriert
- React JSX Transform

### Styling

- Tailwind CSS 4 mit PostCSS
- Custom Theme Color: `#dc2626` (Rot)
- Dark Mode Support
- Print Styles verfügbar

## Routen-Struktur

### Statische Routen
- `/` - Homepage
- `/datenschutz`, `/impressum`, `/kontakt`, `/spenden`
- `/feuerwehr/*` - Feuerwehr-Seiten (Beitritt, Jugend, Mannschaft, Fahrzeuge)
- `/first-responder/*` - First Responder Seiten
- `/verein/*` - Vereinsseiten (Chronik, Satzung, Vorstandschaft)

### Dynamische Routen
- `/feuerwehr/einsaetze/[year]` - Einsätze nach Jahr
- `/feuerwehr/einsaetze/[year]/[cat]` - Einsätze nach Jahr + Kategorie
- `/first-responder/einsaetze/[year]` - FR-Einsätze nach Jahr
- Alle dynamischen Routen haben `generateMetadata` und `generateStaticParams`

### Fahrzeuge (statische Routen)
- `/feuerwehr/fahrzeuge/40-1` - HLF (Hilfeleistungslöschfahrzeug)
- `/feuerwehr/fahrzeuge/11-1` - MZF (Mannschaftstransportfahrzeug)
- `/feuerwehr/fahrzeuge/99-1` - MZB (Mehrzweckboot)
- `/feuerwehr/fahrzeuge/59-1` - UTF (Umweltschutzfahrzeug)
- `/feuerwehr/fahrzeuge/56-1` - Audi
- `/feuerwehr/fahrzeuge/79-1`

## Besonderheiten

1. **Mehrsprachigkeit**: Primär Deutsch (`lang="de"`)
2. **SEO**: `generateMetadata` für dynamische Routen, OpenGraph, Twitter Cards
3. **PWA**: Manifest.json vorhanden
4. **Accessibility**: SkipLink, semantisches HTML
5. **Performance**: Server Components, Image Optimization, Compression, dynamicIO Caching
6. **Sanity Integration**: Portable Text für Rich Content
7. **Cloudinary**: Tag-basierte Bildverwaltung (z.B. "banner")
8. **Email**: MailerSend für Kontaktformular
9. **Newsletter**: Sendinblue/Brevo Integration

## Datenfluss

1. **Sanity CMS** → Services (`*Service.ts`) → Server Components → UI
2. **Cloudinary** → `CloudinaryService` → Image Components
3. Einsatzdaten werden nach Jahr/Monat gefiltert und statistisch ausgewertet

## Code Style

- Prettier für Formatting
- ESLint mit Next.js Config
- Stylelint für CSS
- Funktionale Komponenten mit TypeScript
- Async Server Components für Data Fetching
- Props mit `PropsWithChildren` oder explizite Interfaces

## Deployment

- Production Build: `npm run build`
- Trailing Slashes aktiviert
- Source Maps in Production deaktiviert
- Compression aktiviert
