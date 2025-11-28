# 📁 NEXT.JS PROJECT STRUCTURE

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/
│   └── resume.pdf
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (Home)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── skills/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── experience/
│   │   │   └── page.tsx
│   │   ├── resume/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── testimonials/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Input.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── SkillBadge.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── TestimonialCarousel.tsx
│   │   │   └── ContactForm.tsx
│   │   └── common/
│   │       ├── DarkModeToggle.tsx
│   │       ├── ScrollToTop.tsx
│   │       └── SEO.tsx
│   │
│   ├── lib/
│   │   ├── data/
│   │   │   ├── projects.ts
│   │   │   ├── skills.ts
│   │   │   ├── experience.ts
│   │   │   └── testimonials.ts
│   │   ├── utils/
│   │   │   ├── cn.ts
│   │   │   └── emailjs.ts
│   │   └── constants.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── hooks/
│   │   ├── useDarkMode.ts
│   │   ├── useScrollPosition.ts
│   │   └── useInView.ts
│   │
│   └── types/
│       ├── project.ts
│       ├── experience.ts
│       └── testimonial.ts
│
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 📦 PACKAGE.JSON

```json
{
  "name": "nikhil-chandan-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export"
  },
  "dependencies": {
    "next": "14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.312.0",
    "emailjs-com": "^3.2.0",
    "react-type-animation": "^3.2.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

---

## ⚙️ CONFIGURATION FILES

### **tailwind.config.ts**
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0A84FF',
        secondary: '#00D9FF',
        accent: '#FF453A',
        dark: '#1C1C1E',
        light: '#F2F2F7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

### **next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  output: 'export', // For static export
}

module.exports = nextConfig
```

### **tsconfig.json**
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 🎨 GLOBALS.CSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Color Variables */
  --color-primary: #0A84FF;
  --color-secondary: #00D9FF;
  --color-accent: #FF453A;
  --color-dark: #1C1C1E;
  --color-light: #F2F2F7;
  
  /* Spacing */
  --space-unit: 1rem;
  
  /* Transitions */
  --transition-speed: 0.3s;
}

/* Dark Mode Variables */
.dark {
  --bg-primary: #1C1C1E;
  --bg-secondary: #2C2C2E;
  --text-primary: #FFFFFF;
  --text-secondary: #98989D;
}

/* Light Mode Variables */
:root:not(.dark) {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F2F2F7;
  --text-primary: #1C1C1E;
  --text-secondary: #98989D;
}

/* Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Selection */
::selection {
  background-color: var(--color-primary);
  color: white;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-secondary);
}

/* Custom Utilities */
@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent;
  }
  
  .glassmorphism {
    @apply bg-white/10 backdrop-blur-lg border border-white/20;
  }
  
  .dark .glassmorphism {
    @apply bg-black/10 backdrop-blur-lg border border-white/10;
  }
}

/* Component Styles */
@layer components {
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .section-padding {
    @apply py-16 md:py-24;
  }
  
  .btn {
    @apply px-6 py-3 rounded-lg font-semibold transition-all duration-300;
    @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;
  }
  
  .btn-primary {
    @apply bg-gradient-to-r from-primary to-secondary text-white;
    @apply hover:shadow-lg hover:scale-105;
  }
  
  .btn-secondary {
    @apply bg-gray-200 text-gray-800;
    @apply dark:bg-gray-700 dark:text-white;
    @apply hover:bg-gray-300 dark:hover:bg-gray-600;
  }
  
  .btn-outline {
    @apply border-2 border-primary text-primary;
    @apply hover:bg-primary hover:text-white;
  }
  
  .card {
    @apply bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md;
    @apply border border-gray-200 dark:border-gray-700;
    @apply transition-all duration-300;
  }
  
  .card:hover {
    @apply shadow-xl transform -translate-y-2;
  }
  
  .input {
    @apply w-full px-4 py-3 rounded-lg;
    @apply border-2 border-gray-300 dark:border-gray-600;
    @apply bg-white dark:bg-gray-800;
    @apply text-gray-900 dark:text-white;
    @apply focus:border-primary focus:outline-none;
    @apply transition-colors duration-300;
  }
  
  .heading-1 {
    @apply text-4xl md:text-5xl lg:text-6xl font-bold;
    @apply mb-4;
  }
  
  .heading-2 {
    @apply text-3xl md:text-4xl lg:text-5xl font-bold;
    @apply mb-4;
  }
  
  .heading-3 {
    @apply text-2xl md:text-3xl font-bold;
    @apply mb-3;
  }
  
  .body-text {
    @apply text-base md:text-lg;
    @apply text-gray-600 dark:text-gray-400;
    @apply leading-relaxed;
  }
}

/* Animations */
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animated-gradient {
  background: linear-gradient(
    -45deg,
    var(--color-primary),
    var(--color-secondary),
    var(--color-accent),
    var(--color-primary)
  );
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Print Styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  body {
    background: white;
    color: black;
  }
}
```

---

## 📋 INSTALLATION INSTRUCTIONS

### **Step 1: Create Project**
```bash
npx create-next-app@latest portfolio --typescript --tailwind --app
cd portfolio
```

### **Step 2: Install Dependencies**
```bash
npm install framer-motion lucide-react emailjs-com react-type-animation
```

### **Step 3: Copy Files**
- Copy all files from this structure to your project
- Replace the content in `tailwind.config.ts`, `next.config.js`, and `globals.css`

### **Step 4: Run Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### **Step 5: Build for Production**
```bash
npm run build
npm start
```

---

## 🌐 ENVIRONMENT VARIABLES

Create `.env.local`:
```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://nikhilchandan.dev
```

---

*This structure provides a complete, production-ready Next.js portfolio.*
