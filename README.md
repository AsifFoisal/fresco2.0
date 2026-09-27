# Fresco — Italian Restaurant
A contemporary single-page editorial website for an Italian trattoria, featuring dramatic food photography, warm typography, and a Pomodoro Orange accent palette.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Installation & Setup](#installation--setup)
- [Folder Structure](#folder-structure)
- [Contributions](#contributions)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Contact](#contact)

---

## About the Project

Fresco is a modern Italian restaurant website that tells a visual dining story through a carefully composed single-page layout. The design combines rustic trattoria warmth with editorial restraint — charcoal-black food photography establishes theater, while ivory paper panels and warm-white backgrounds keep the experience welcoming. A saturated tomato-orange (#F77A16) leads all calls to action, creating a cohesive invitation rather than visual noise.

The project solves the common problem of restaurant websites feeling generic or overly app-like by treating the page as a vertical narrative — each section functions as a "course" in the visitor's journey from curiosity to reservation.

---

## Project Overview

This is a Vite-powered full-stack application with a React frontend and Express backend. The site features a sophisticated single-page layout with:

- **Hero Section** — Dramatic charcoal background with decorative cutlery silhouettes and large Berkshire Swash typography
- **Welcome Section** — Asymmetric three-column layout with editorial copy, a hospitality photograph, and a dark hours card
- **Menu Mosaic** — A precise 3×3 grid alternating between food photography and text-based menu tiles on a dark dining backdrop
- **Happy Hours** — Split layout highlighting Wednesday specials with half-price wine and a $29 three-course lunch
- **Editorial Notes** — Small details section with social links
- **Reservation Footer** — Full-bleed dark footer with phone CTA and address

---

## Key Features

- **Fixed navigation** with scroll-triggered shadow and height transition
- **Mobile-responsive** hamburger menu with smooth open/close states
- **Asymmetric grid layouts** for the welcome and happy hours sections
- **3×3 menu mosaic** with alternating image and text tiles, subtle hover lift effects
- **Decorative elements** — Fleurish ornaments, cutlery wireframes in the hero, editorial rules and dividers
- **Scroll-aware header** that transitions from transparent to solid on scroll
- **Photography-first design** with layered gradient overlays and lazy-loaded images
- **Express server** for production static file serving and client-side routing fallback
- **TypeScript throughout** with strict mode enabled and path aliases (`@/`, `@shared`)

---

## Tech Stack

**Frontend:** React 19 · TypeScript · Tailwind CSS v4 · Vite  
**UI Components:** Radix UI primitives · shadcn/ui patterns  
**Animations:** Framer Motion · tw-animate-css  
**Routing:** Wouter  
**Forms & Validation:** React Hook Form · Zod  
**Icons:** Lucide React  
**Backend:** Node.js · Express.js  
**Build Tools:** esbuild (server bundling) · pnpm

---

## Dependencies

```json
{
  "react": "^19.2.1",
  "react-dom": "^19.2.1",
  "typescript": "5.6.3",
  "vite": "^7.1.7",
  "tailwindcss": "^4.1.14",
  "@tailwindcss/vite": "^4.1.3",
  "wouter": "^3.3.5",
  "framer-motion": "^12.23.22",
  "lucide-react": "^0.453.0",
  "express": "^4.21.2",
  "zod": "^4.1.12",
  "react-hook-form": "^7.64.0",
  "@hookform/resolvers": "^5.2.2",
  "sonner": "^2.0.7",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.3.1",
  "next-themes": "^0.4.6"
}
```

---

## Installation & Setup

1. Clone the repo and install dependencies:

```bash
git clone <repository-url>
cd fresco-restaurant
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

3. Build for production:

```bash
pnpm build
```

4. Start the production server:

```bash
pnpm start
```

---

## Folder Structure

```
fresco-restaurant/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # shadcn/ui component primitives
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ManusDialog.tsx
│   │   │   └── Map.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── Home.tsx         # Main single-page layout
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css            # Global styles & design tokens
│   └── index.html
│
├── server/
│   └── index.ts                 # Express production server
│
├── shared/
│   └── const.ts                 # Shared constants
│
├── patches/
│   └── wouter@3.7.1.patch       # Patched dependency
│
├── package.json
├── tsconfig.json
├── vite.config.ts               # Vite config with custom plugins
└── README.md
```

---

## Contributions


| Name       | Role     | Contributions                                      |
|------------|----------|----------------------------------------------------|
| G.M Asif Foisal  | Developer | design system, implementation |

---

## How to Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---


## Contact

**Live URL:** [Fresco Demo](https://fresco.demo)  
**Email:** [asiffoisalaisc@email.com](mailto:asiffoisalaisc@email.com)  
**Portfolio:** [GitHub Profile](https://github.com/AsifFoisal)
