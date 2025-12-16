# Learnic - Online Learning Platform

An online learning and tutoring experience built with Next.js 14+, TypeScript, Tailwind CSS, and a central design-token system.

## 🚀 Features

### Core Features

- 🎓 **Homepage** – Hero slider, learning tools, categories, tutors, success stories, CTA + newsletter
- 🎥 **Video Library** – Search, sort, and filter rich video catalog cards with responsive layouts
- 🧑‍🏫 **Live Classes** – Listing + detail flow with course metrics, schedules, and instructor spotlight
- 📚 **Test Series** – Comprehensive test series with quiz functionality and detailed analytics
- 📖 **Course Detail** – Batch selection, curriculum accordion, reviews, and enrollment CTAs
- 💳 **Checkout** – Order summary, price breakdown, payment method selector, success modal
- 👥 **Tutors** – Tutor profiles, ratings, and detailed information
- 📱 **Fully Responsive** – Optimized for desktop, tablet, and mobile breakpoints
- 🎨 **Modern UI** – Token-driven typography, colors, shadows, and gradients for consistency

### User Features

- 🔐 **Authentication** – Login, signup, OTP verification, password management
- 📚 **My Learning** – User dashboard for enrolled courses and progress tracking
- 🔔 **Notifications** – Real-time notification system with categorized alerts
- 👤 **User Profile** – Profile management with dropdown navigation
- 🎯 **Role Selection** – Student, Tutor, and Coordinator role selection on first visit

### Content Pages

- 📰 **Blog** – Educational articles and news
- 📞 **Contact Us** – Contact form and information
- ❓ **Help Center** – FAQ and support resources
- 👔 **Careers** – Job openings and company information
- 💼 **Become a Teacher** – Teacher application and information
- 👨‍💼 **Become a Coordinator** – Coordinator application and information
- 📊 **Affiliate Program** – Partnership and affiliate information
- 💰 **Investors** – Investor relations and information
- 📄 **Legal Pages** – Privacy Policy, Terms & Conditions

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom design tokens
- **Icons**: Lucide React, React Icons
- **UI Library**: Material-UI (MUI) for form components
- **State Management**: React Hooks (useState, useEffect, useMemo, useCallback)
- **Storage**: localStorage for client-side persistence

## 📁 Project Structure

```
LearnicTutor/
├── app/                          # Next.js app directory
│   ├── layout.tsx                # Root layout with fonts and metadata
│   ├── page.tsx                  # Homepage with role-based redirection
│   ├── error.tsx                 # Error boundary
│   ├── loading.tsx               # Loading state
│   ├── not-found.tsx             # 404 page
│   ├── global-error.tsx          # Global error boundary
│   ├── get-started/              # Role selection page
│   ├── login/                    # Login page
│   ├── signup/                   # Signup page
│   ├── verify-otp/               # OTP verification
│   ├── forgot-password/          # Password recovery
│   ├── change-password/          # Password change
│   ├── checkout/                 # Checkout experience
│   ├── courses/[id]/             # Course detail route
│   ├── live-classes/             # Live classes listing + detail routes
│   │   └── [id]/                 # Individual class detail
│   ├── videos/                   # Video library listing + detail routes
│   │   └── [id]/                 # Individual video detail
│   ├── test-series/              # Test series listing + detail routes
│   │   └── [id]/                 # Individual test detail
│   ├── tutors/                   # Tutors listing + detail routes
│   │   └── [id]/                 # Individual tutor profile
│   ├── my-learning/              # User learning dashboard
│   ├── notifications/           # Notifications page
│   ├── about/                    # About us page
│   ├── contact-us/               # Contact page
│   ├── help-center/              # Help center page
│   ├── blog/                     # Blog listing + detail routes
│   │   └── [id]/                 # Individual blog post
│   ├── careers/                  # Careers page
│   ├── become-a-teacher/         # Teacher application page
│   ├── become-a-coordinator/     # Coordinator application page
│   ├── affiliate/                # Affiliate program page
│   ├── investors/                # Investors page
│   ├── press/                    # Press page
│   ├── privacy-policy/           # Privacy policy page
│   └── terms-and-conditions/     # Terms and conditions page
├── components/
│   ├── home/                     # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── LearningTools.tsx
│   │   ├── Categories.tsx
│   │   ├── CourseSection.tsx
│   │   ├── CourseCard.tsx
│   │   ├── TopTutors.tsx
│   │   ├── SuccessStories.tsx
│   │   ├── JoinSection.tsx
│   │   └── CtaBanner.tsx
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx            # Navigation with auth state
│   │   └── Footer.tsx            # Footer with links
│   ├── live/                     # Live class UI components
│   │   ├── LiveClassesContent.tsx
│   │   ├── AcademicCourseCard.tsx
│   │   └── ClassDetailContent.tsx
│   ├── videos/                   # Video library UI components
│   │   ├── VideosContent.tsx
│   │   └── VideoCard.tsx
│   ├── test-series/              # Test series UI components
│   │   ├── TestSeriesContent.tsx
│   │   └── TestSeriesCard.tsx
│   ├── tutors/                   # Tutor UI components
│   ├── my-learning/              # My learning dashboard
│   ├── pages/                    # Page-level shells
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   └── NotificationsPage.tsx
│   ├── ui/                       # Reusable UI primitives
│   │   ├── Button.tsx            # Button with variants
│   │   ├── Card.tsx              # Card component
│   │   ├── Input.tsx             # Input field
│   │   ├── Badge.tsx             # Badge component
│   │   ├── Modal.tsx             # Modal dialog
│   │   ├── Checkbox.tsx          # Checkbox input
│   │   ├── CategoryChip.tsx      # Category chip/tab component
│   │   ├── StatCard.tsx          # Stats/metric card component
│   │   ├── FilterButton.tsx      # Filter button component
│   │   ├── SearchInput.tsx      # Search input component
│   │   ├── FormContainer.tsx     # Form container wrapper
│   │   ├── SubmitButton.tsx     # Submit button with gradient
│   │   ├── CardGridContainer.tsx # Grid container for cards
│   │   ├── SectionHeader.tsx     # Section header component
│   │   ├── StarRating.tsx        # Star rating component
│   │   ├── ImageWithFallback.tsx # Image with fallback handling
│   │   ├── SideDrawer.tsx        # Side drawer component
│   │   ├── Logo.tsx              # Logo component
│   │   └── ...                   # Other UI components
│   └── [feature]/                # Feature-specific components
│       ├── about/
│       ├── blog/
│       ├── contact/
│       ├── help/
│       ├── become-teacher/
│       ├── become-coordinator/
│       └── ...
├── data/                         # Centralized mock datasets
│   ├── checkout.ts
│   ├── courseDetails.ts
│   ├── footer.ts
│   ├── home.ts
│   ├── liveClasses.ts
│   ├── liveClassesList.ts
│   ├── videoLibrary.ts
│   ├── testSeries.ts
│   ├── tutorDetails.ts
│   ├── myLearning.ts
│   ├── blog.ts
│   ├── helpCenter.ts
│   ├── affiliate.ts
│   └── investors.ts
├── theme/                        # Design token system
│   ├── index.ts                  # Theme exports
│   ├── colors.ts                 # Color palette
│   ├── typography.ts             # Typography system
│   ├── gradients.ts              # Gradient definitions
│   ├── shadows.ts                # Shadow definitions
│   ├── layout.ts                 # Layout tokens
│   ├── textEffects.ts            # Text effects
│   └── mui.ts                    # MUI theme configuration
├── lib/                          # Utility helpers
│   └── utils.ts                  # className merger, shared utils
└── public/                       # Static assets
    ├── images/                   # Image assets
    ├── logos/                    # Logo files
    ├── icons/                    # Icon files
    └── robots.txt
```

## 🎨 Design System

### Theme Tokens

The project uses a centralized design token system located in the `theme/` directory:

- **Colors**: Primary, secondary, brand, text, background colors
- **Typography**: Font families (Poppins, Inter), sizes, weights, line heights
- **Gradients**: Predefined gradient combinations
- **Shadows**: Elevation and shadow definitions
- **Layout**: Spacing, radii, breakpoints
- **Text Effects**: Text styling utilities

### Reusable Components

The project includes a comprehensive set of reusable UI components:

#### Navigation & Layout

- `CategoryChip` - Category chip/tab component with default and tab variants
- `SectionHeader` - Consistent section headers
- `CardGridContainer` - Responsive grid container for cards

#### Forms & Inputs

- `Input` - Text input field
- `SearchInput` - Search input with default and minimal variants
- `Checkbox` - Checkbox input
- `FormContainer` - Form wrapper with consistent styling
- `FormLabel` - Form label component
- `SubmitButton` - Submit button with gradient styling
- `FileUpload` - File upload component

#### Display Components

- `Button` - Button component with multiple variants
- `Card` - Card component
- `Badge` - Badge component
- `StatCard` - Stats/metric card with default and glass variants
- `FeatureCard` - Feature card component
- `StarRating` - Star rating display
- `ImageWithFallback` - Image component with fallback handling

#### Interactive Components

- `Modal` - Modal dialog
- `SideDrawer` - Side drawer component
- `FilterButton` - Filter button with icon
- `ProcessSteps` - Process steps indicator

## 📊 Data Modules

- `data/home.ts` – Hero slides, categories, learning tools, tutors, newsletter content
- `data/courseDetails.ts` – Canonical course detail record + helpers
- `data/liveClasses.ts` / `data/liveClassesList.ts` – Live class listing + detail datasets
- `data/videoLibrary.ts` – Curated video catalog metadata
- `data/testSeries.ts` – Test series data
- `data/tutorDetails.ts` – Tutor profiles and information
- `data/myLearning.ts` – User learning dashboard data
- `data/checkout.ts` – Checkout order summary, payment methods, inclusions
- `data/footer.ts` – Footer link groups, stats, social accounts
- `data/blog.ts` – Blog posts and articles
- `data/helpCenter.ts` – Help center FAQ and content
- `data/affiliate.ts` – Affiliate program information
- `data/investors.ts` – Investor relations content

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd LearnicTutor

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Note**: On first visit, you'll be redirected to `/get-started` to select your role (Student, Tutor, or Coordinator). After selection, you'll be redirected to the homepage.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 🔐 Authentication Flow

1. **First Visit**: User is redirected to `/get-started` to select a role
2. **Role Selection**: Selected role is stored in `localStorage`
3. **Homepage Access**: After role selection, user can access the homepage
4. **Login/Signup**: Users can authenticate via `/login` or `/signup`
5. **Auth State**: Authentication state is managed via `localStorage` and reflected in the navbar
6. **Protected Routes**: Some routes may require authentication (future implementation)

### localStorage Keys

- `selectedRole` - User's selected role (student/tutor/coordinator)
- `isAuthenticated` - Authentication status
- `userName` - User's name
- `userAvatar` - User's avatar URL

## 📱 Responsive Design

All pages are fully responsive with:

- **Mobile-first approach**
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
- **Touch-friendly interactions**
- **Optimized layouts** for all screen sizes
- **Dynamic imports** for code splitting and performance

## ✨ Key Features & Improvements

### ✅ Implemented

- **Design Tokens**: Centralized color, typography, gradient, shadow, and layout tokens
- **Reusable Components**: 15+ reusable UI components for consistent design
- **Error Handling**: Error boundaries and global error handling
- **Loading States**: Skeleton fallbacks for dynamic sections
- **Utility Helpers**: Shared helpers in `lib/utils.ts`
- **Tokenized Theme**: Centralized theme system in `theme/` directory
- **SEO Optimization**: Metadata for all pages, Open Graph tags
- **404 Page**: Custom not-found page
- **Authentication UI**: Logged-in/logged-out navbar states
- **User Profile Dropdown**: Profile menu with navigation options
- **Notifications System**: Notification page with categorized alerts
- **Role-based Routing**: Role selection and redirection flow
- **Image Fallback**: Graceful handling of broken images
- **Dynamic Imports**: Code splitting for better performance

### 🔧 Component Refactoring

The project has been refactored to use reusable components:

1. **CategoryChip** - Replaces manual category buttons in LiveClassesContent, TestSeriesContent, VideosContent, and Categories
2. **StatCard** - Replaces manual stat cards in EarningsStructure and FutureEarningsInsights
3. **FilterButton** - Replaces manual filter buttons across content pages
4. **SearchInput** - Replaces manual search inputs with consistent styling
5. **FormContainer** - Standardizes form container styling
6. **SubmitButton** - Provides consistent submit button styling
7. **CardGridContainer** - Standardizes grid layouts for cards

### 🎯 Navigation Structure

- **Homepage** (`/`) - Main landing page
- **Get Started** (`/get-started`) - Role selection (initial redirect)
- **Live Classes** (`/live-classes`) - Browse and filter live classes
- **Videos** (`/videos`) - Video library
- **Test Series** (`/test-series`) - Test series and quizzes
- **Tutors** (`/tutors`) - Browse tutors
- **My Learning** (`/my-learning`) - User dashboard
- **Notifications** (`/notifications`) - User notifications
- **Blog** (`/blog`) - Educational articles
- **About** (`/about`) - About us page
- **Contact** (`/contact-us`) - Contact page
- **Help Center** (`/help-center`) - Support and FAQ

## 🐛 Error Handling

The project includes comprehensive error handling:

- `app/error.tsx` - Route-level error boundary
- `app/global-error.tsx` - Global error boundary
- `app/not-found.tsx` - 404 page
- `app/loading.tsx` - Loading state

## 🔍 SEO

All pages include:

- Page-specific metadata
- Open Graph tags
- Twitter cards
- Proper page titles and descriptions
- Semantic HTML structure

## 📝 Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting with Next.js config
- **Component Architecture**: Modular, reusable components
- **Design System**: Consistent styling through tokens
- **Performance**: Code splitting, dynamic imports, optimized images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
