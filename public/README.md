# Public Assets Folder

Yeh folder static assets ke liye hai - images, logos, icons, etc.

## Folder Structure

```
public/
├── images/
│   ├── courses/          # Course thumbnails
│   ├── instructors/     # Instructor profile images
│   ├── tutors/          # Tutor profile images
│   ├── students/        # Student profile images
│   └── banners/         # Banner/Hero images
├── logos/
│   ├── logo.png         # Main logo
│   ├── logo-white.png   # White version for dark backgrounds
│   └── favicon.ico      # Favicon
└── icons/               # Additional icons if needed
```

## Usage in Code

Next.js mein images use karne ke liye:

### Option 1: Using Next.js Image Component (Recommended)
```tsx
import Image from 'next/image';

<Image 
  src="/images/courses/math.jpg" 
  alt="Course image"
  width={400}
  height={300}
/>
```

### Option 2: Direct Path (for background images, etc.)
```tsx
<div style={{ backgroundImage: 'url(/images/banners/hero.jpg)' }}>
```

### Option 3: In CSS/Tailwind
```tsx
<div className="bg-[url('/images/banners/hero.jpg')]">
```

## Notes

- Sabhi files directly accessible honge `/images/...` path se
- Next.js automatically optimize karta hai images ko
- Large images ke liye `next/image` component use karein for optimization

