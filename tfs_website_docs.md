# TFS Aerial Solutions - Website Development Documentation

## Project Overview
Create three distinct, dynamic websites for TFS Aerial Solutions featuring scroll animations, parallax effects, and interactive before/after image comparisons for mapping services. Each version should be built with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui components.

## Company Information
- **Company**: TFS Aerial Solutions (A Tirama Foto Studios Company)
- **Contact**: Adam Gan, Operations Manager & CAAM Licensed UAV Pilot
- **Phone**: +60183505268
- **Email**: adamgan@tiramafoto.com
- **Address**: 2.01C Menara BRDB, Jalan Maarof, 59000, Kuala Lumpur

## Services to Include

### 1. Aerial Mapping
- **Description**: High-resolution aerial mapping for accurate, up-to-date farm maps including boundaries
- **Deliverables**: Digital maps in PDF/GIS formats, clearly defined boundaries
- **Pricing**: 
  - RM 18/acre (up to 500 acres)
  - RM 15/acre (500-1,000 acres)
  - Custom pricing (1,000+ acres)

### 2. Tree Count and Yield Estimation
- **Description**: Aerial survey to count fruit trees with unique IDs and yield estimation
- **Deliverables**: Tree count report with IDs, yield estimation report
- **Pricing**: RM 10/acre

### 3. Topography Mapping
- **Description**: Topographic maps with elevation data at 5-10m increments
- **Deliverables**: AutoCAD and contour map formats, elevation data
- **Pricing**: RM 5/acre

### 4. 3D Model
- **Description**: 3D farm model for terrain visualization, slope analysis, erosion detection
- **Deliverables**: Interactive 3D model, feature analysis report
- **Pricing**: RM 5/acre

### 5. Repetitive Monitoring
- **Description**: Recurring aerial surveys for farm change monitoring
- **Deliverables**: Periodic reports (maps, tree counts, erosion assessments)
- **Pricing**: Custom based on size, complexity, frequency

## Additional Services (from business card)
- Photogrammetry Mapping
- Boundary Mapping
- 3D Site Digitization
- Facade Inspections
- Construction Progress
- Agricultural Tree Counts
- Stockpile & Volume Calculation
- Aerial Photo & Videography

## Technical Requirements

### Core Technologies
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion (animations)
- Lucide React (icons)

### Key Features Required
1. **Scroll Animations**: Elements animate into view on scroll
2. **Parallax Effects**: Background elements move at different speeds
3. **Interactive Before/After Comparisons**: Drag slider to compare two map images
4. **Responsive Design**: Mobile-first approach
5. **Modern UI**: Contemporary design with micro-animations
6. **Contact Forms**: Lead generation forms
7. **Service Cards**: Interactive service showcases

---

## VERSION 1: MODERN DARK THEME

### Design Concept
Sleek, professional dark theme with red accents matching the TFS brand. Features geometric shapes, subtle gradients, and smooth transitions.

### Color Palette
- Primary: Dark grays (#1a1a1a, #2a2a2a)
- Accent: TFS Red (#dc2626, #b91c1c)
- Text: White/light gray
- Background: Dark gradients

### Key Features
- Dark hero section with floating drone animation
- Geometric pattern overlays
- Glowing red accent highlights
- Smooth scroll-triggered animations
- Modern card designs with hover effects

### Folder Structure
```
tfs-website-v1/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── favicon.ico
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── BeforeAfterSlider.tsx
│   ├── Contact.tsx
│   └── Navigation.tsx
├── lib/
│   └── utils.ts
├── public/
│   ├── images/
│   │   ├── hero-drone.png
│   │   ├── service-1-before.jpg
│   │   ├── service-1-after.jpg
│   │   └── [additional service images]
│   └── logo.svg
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## VERSION 2: BRIGHT MODERN THEME

### Design Concept
Clean, bright design with white backgrounds, vibrant colors, and playful animations. Features the TFS red as primary accent with blue secondary colors.

### Color Palette
- Primary: TFS Red (#dc2626)
- Secondary: Sky blue (#0ea5e9)
- Background: White/light gray (#f8fafc)
- Text: Dark grays (#1e293b)

### Key Features
- Bright hero with animated elements
- Colorful service cards with hover animations
- Floating elements and micro-interactions
- Clean typography with plenty of white space
- Vibrant call-to-action sections

### Folder Structure
```
tfs-website-v2/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── favicon.ico
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── BeforeAfterSlider.tsx
│   ├── Contact.tsx
│   └── Navigation.tsx
├── lib/
│   └── utils.ts
├── public/
│   ├── images/
│   │   ├── hero-drone.png
│   │   ├── service-maps/
│   │   └── backgrounds/
│   └── logo.svg
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## VERSION 3: NATURE-INSPIRED THEME

### Design Concept
Earth-toned design inspired by agriculture and nature. Features organic shapes, gradient backgrounds, and smooth, natural animations.

### Color Palette
- Primary: Forest green (#16a34a)
- Secondary: TFS Red (#dc2626)
- Accent: Golden yellow (#eab308)
- Background: Cream/earth tones (#fef7ed, #f5f5dc)
- Text: Dark brown (#451a03)

### Key Features
- Nature-inspired hero with organic shapes
- Earth-tone gradients and textures
- Smooth, flowing animations
- Agricultural imagery integration
- Warm, welcoming design aesthetic

### Folder Structure
```
tfs-website-v3/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── favicon.ico
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── BeforeAfterSlider.tsx
│   ├── Contact.tsx
│   └── Navigation.tsx
├── lib/
│   └── utils.ts
├── public/
│   ├── images/
│   │   ├── hero-farm.jpg
│   │   ├── service-maps/
│   │   └── textures/
│   └── logo.svg
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## Common Dependencies for All Versions

### package.json dependencies
```json
{
  "dependencies": {
    "next": "14.0.0",
    "react": "^18",
    "react-dom": "^18",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "typescript": "^5",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.263.1",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^1.14.0",
    "react-intersection-observer": "^9.5.0"
  }
}
```

## Key Components to Implement

### 1. BeforeAfterSlider Component
Interactive drag slider for comparing two map images:
- Draggable divider with smooth animations
- Touch/mouse support
- Responsive design
- Smooth transitions

### 2. ScrollReveal Animations
Elements that animate into view on scroll:
- Fade in from bottom
- Slide in from sides
- Scale up effects
- Stagger animations for lists

### 3. Hero Section Features
- Animated drone/aerial imagery
- Parallax background effects
- Floating elements
- Call-to-action buttons with hover effects

### 4. Service Cards
- Hover animations
- Interactive pricing displays
- Before/after image integration
- Detailed service descriptions

### 5. Contact Section
- Animated contact form
- Interactive map integration
- Company information display
- Social proof elements

## Animation Guidelines

### Scroll Animations
- Use Intersection Observer API
- Trigger animations at 20% visibility
- Smooth easing curves (ease-out)
- Stagger delays for multiple elements

### Hover Effects
- Subtle scale transforms (1.02-1.05)
- Smooth color transitions
- Shadow animations
- Icon movements

### Page Load Animations
- Progressive element loading
- Hero text animation sequences
- Logo entrance effects

## Image Requirements

### Placeholder Images Needed
For each service, provide placeholder images:
1. **Aerial Mapping**: Raw aerial photo vs. processed map
2. **Tree Count**: Normal aerial view vs. tree-marked version
3. **Topography**: Flat aerial vs. contour overlay
4. **3D Model**: 2D view vs. 3D visualization
5. **Monitoring**: Time-lapse comparison

### Image Specifications
- Format: JPG/PNG
- Resolution: 1920x1080 minimum
- Optimized for web delivery
- Consistent aspect ratios

## Development Instructions for Claude Terminal

### Step 1: Initialize Each Project
```bash
# Create three separate folders
mkdir tfs-websites
cd tfs-websites

# Version 1
npx create-next-app@latest tfs-website-v1 --typescript --tailwind --eslint --app
cd tfs-website-v1
npm install framer-motion lucide-react @radix-ui/react-slot class-variance-authority clsx tailwind-merge react-intersection-observer

# Version 2  
cd ..
npx create-next-app@latest tfs-website-v2 --typescript --tailwind --eslint --app
cd tfs-website-v2
npm install framer-motion lucide-react @radix-ui/react-slot class-variance-authority clsx tailwind-merge react-intersection-observer

# Version 3
cd ..
npx create-next-app@latest tfs-website-v3 --typescript --tailwind --eslint --app
cd tfs-website-v3
npm install framer-motion lucide-react @radix-ui/react-slot class-variance-authority clsx tailwind-merge react-intersection-observer
```

### Step 2: Project Structure
For each version, create the following structure:
- `/app` - Next.js app router pages
- `/components` - React components
- `/components/ui` - shadcn/ui components
- `/lib` - Utilities and helpers
- `/public/images` - Image assets

### Step 3: Core Features Implementation

#### Required Components:
1. **Navigation** - Sticky header with smooth scroll links
2. **Hero** - Animated landing section with CTA
3. **Services** - Service cards with before/after comparisons
4. **BeforeAfterSlider** - Interactive image comparison
5. **Contact** - Contact form and company info
6. **Footer** - Company details and links

#### Animation Features:
1. **Scroll Reveal** - Elements animate in on scroll
2. **Parallax** - Background movement effects
3. **Hover Animations** - Interactive feedback
4. **Loading Animations** - Smooth page transitions

### Step 4: Styling Guidelines

#### Version 1 (Dark): 
- Dark backgrounds (#1a1a1a)
- Red accents (#dc2626)
- Geometric overlays
- Glowing effects

#### Version 2 (Bright):
- White/light backgrounds (#f8fafc)
- Red primary (#dc2626)
- Blue secondary (#0ea5e9)
- Vibrant gradients

#### Version 3 (Nature):
- Earth tones (#fef7ed)
- Green primary (#16a34a)
- Red secondary (#dc2626)
- Organic shapes

## Content Structure

### Page Sections:
1. **Header/Navigation**
2. **Hero Section** - Company introduction with animated elements
3. **About Section** - Brief company overview
4. **Services Section** - All 5 main services with before/after sliders
5. **Additional Services** - Quick overview of other offerings
6. **Process Section** - How TFS works (flight mission details)
7. **Contact Section** - Contact form and company information
8. **Footer**

### Service Detail Requirements:
Each service card should include:
- Service title and description
- Pricing information
- Deliverables list
- Before/after image comparison
- Call-to-action button

## Interactive Features

### Before/After Image Slider:
```typescript
// Component should allow:
- Drag interaction (mouse/touch)
- Smooth animations
- Responsive design
- Accessible controls
- Image loading states
```

### Scroll Animations:
```typescript
// Animation triggers:
- Fade in from bottom (text elements)
- Slide in from sides (cards)
- Scale up (icons)
- Stagger effects (lists)
- Parallax backgrounds
```

## Development Priorities

### Phase 1: Core Structure
1. Set up Next.js projects with TypeScript
2. Configure Tailwind CSS with custom animations
3. Create basic page layouts
4. Implement navigation and routing

### Phase 2: Components
1. Build reusable UI components
2. Create service cards with animations
3. Implement before/after slider component
4. Add scroll reveal functionality

### Phase 3: Styling & Animation
1. Apply theme-specific styling
2. Add scroll-triggered animations
3. Implement hover effects
4. Optimize for mobile devices

### Phase 4: Content Integration
1. Add all service information
2. Include pricing details
3. Integrate contact information
4. Add placeholder images for demonstrations

## File Templates

### globals.css (common for all versions)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', sans-serif;
  }
}

@layer utilities {
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

### tailwind.config.js (base configuration)
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'parallax': 'parallax 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        parallax: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
```

## Implementation Instructions for Claude Terminal

### Command Sequence:
1. **Initialize Projects**: Create three Next.js projects with TypeScript and Tailwind
2. **Install Dependencies**: Add Framer Motion, Lucide React, and shadcn/ui components
3. **Setup Base Structure**: Create component folders and basic layouts
4. **Implement Core Components**: Build navigation, hero, services, and contact sections
5. **Add Animations**: Integrate scroll-triggered animations and hover effects
6. **Create Before/After Slider**: Implement interactive image comparison component
7. **Style Each Version**: Apply unique themes and color schemes
8. **Optimize and Test**: Ensure responsive design and smooth performance

### Key Implementation Notes:
- Use App Router for Next.js 14+
- Implement intersection observer for scroll animations
- Create reusable animation hooks
- Ensure all images have loading states
- Add proper TypeScript typing
- Include accessibility features
- Optimize for mobile-first design

### Sample Component Structure:
```typescript
// BeforeAfterSlider.tsx example structure
interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

// Hero.tsx with animations
// Services.tsx with scroll reveals
// Contact.tsx with form validation
```

Each version should be fully functional, visually distinct, and showcase the dynamic, modern web design trends while maintaining professional credibility for the aerial mapping business.

## Final Deliverables
Three complete Next.js projects, each in its own folder, ready to run with `npm run dev`, featuring all requested animations, interactivity, and content from the TFS service documentation.