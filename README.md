# Learnic - Online Learning Platform

An online learning and tutoring experience built with Next.js 14+, TypeScript, Tailwind CSS, and a central design-token system.

## Features

- 🎓 **Homepage** – Hero slider, learning tools, categories, tutors, success stories, CTA + newsletter
- 🎥 **Video Library** – Search, sort, and filter rich video catalog cards with responsive layouts
- 🧑‍🏫 **Live Classes** – Listing + detail flow with course metrics, schedules, and instructor spotlight
- 📖 **Course Detail** – Batch selection, curriculum accordion, reviews, and enrollment CTAs
- 💳 **Checkout** – Order summary, price breakdown, payment method selector, success modal
- 📱 **Fully Responsive** – Optimized for desktop, tablet, and mobile breakpoints
- 🎨 **Modern UI** – Token-driven typography, colors, shadows, and gradients for consistency

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom design tokens
- **Icons**: Lucide React, React Icons
- **UI Components**: Custom reusable components (Buttons, Cards, Inputs, Modal, etc.)

## Project Structure

```
LearnicTutor/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── error.tsx           # Error boundary
│   ├── loading.tsx         # Loading state
│   ├── not-found.tsx       # 404 page
│   ├── global-error.tsx    # Global error boundary
│   ├── checkout/           # Checkout experience
│   ├── courses/[id]/       # Course detail route
│   ├── live-classes/       # Live classes listing + detail routes
│   └── videos/             # Video library listing + detail routes
├── components/
│   ├── home/               # Homepage sections
│   ├── layout/             # Header, Footer
│   ├── live/               # Live class UI components
│   ├── pages/              # Page-level shells (Home, Course detail)
│   ├── ui/                 # Reusable UI primitives
│   └── videos/             # Video library UI components
├── data/                   # Centralized mock datasets
│   ├── checkout.ts
│   ├── courseDetails.ts
│   ├── footer.ts
│   ├── home.ts
│   ├── liveClasses.ts
│   ├── liveClassesList.ts
│   └── videoLibrary.ts
├── lib/                    # Utility helpers
│   └── utils.ts            # className merger, shared utils
└── public/                 # Static assets
    └── robots.txt
```

## Data Modules

- `data/home.ts` – hero slides, categories, learning tools, tutors, newsletter content
- `data/courseDetails.ts` – canonical course detail record + helpers
- `data/liveClasses.ts` / `data/liveClassesList.ts` – live class listing + detail datasets
- `data/videoLibrary.ts` – curated video catalog metadata
- `data/checkout.ts` – checkout order summary, payment methods, inclusions
- `data/footer.ts` – footer link groups, stats, social accounts

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Responsive Design

All pages are fully responsive with:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized layouts for all screen sizes

## Professional Features

### ✅ Implemented

- **Design Tokens**: Colors, typography, gradients, shadows, layout radii
- **Error Handling**: Error boundaries and global error handling
- **Loading States**: Skeleton fallbacks for dynamic sections
- **Utility Helpers**: Shared helpers in `lib/utils.ts`
- **Tokenized Theme**: Centralized colors, typography, layout tokens in `theme/`
- **SEO Optimization**: Metadata for all pages, Open Graph tags
- **404 Page**: Custom not-found page
- **Configuration**: Optimized Next.js configuration

### 🔧 Key Improvements

1. **Design System**: Centralized token architecture for visual consistency
2. **Error Handling**: Comprehensive error boundaries and error pages
3. **SEO**: Optimized metadata for all pages
4. **Performance**: Code splitting and optimizations

## Error Handling

The project includes comprehensive error handling:
- `app/error.tsx` - Route-level error boundary
- `app/global-error.tsx` - Global error boundary
- `app/not-found.tsx` - 404 page
- `app/loading.tsx` - Loading state

## SEO

All pages include:
- Page-specific metadata
- Open Graph tags
- Twitter cards
- Proper page titles and descriptions

## Analysis & Recommendations

See `PROJECT_ANALYSIS.md` for a comprehensive analysis of the project structure and recommendations for further improvements.

## License

MIT

