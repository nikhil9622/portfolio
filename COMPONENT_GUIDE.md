# 🧩 COMPONENT LIBRARY GUIDE

---

## 📦 REUSABLE COMPONENTS

All components are built with:
- **React** (functional components with hooks)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **TypeScript** for type safety

---

## 1️⃣ NAVBAR COMPONENT

### **Component: `Navbar.tsx`**

**Purpose:** Primary navigation with responsive mobile menu and dark mode toggle

**Features:**
- Sticky navigation
- Smooth scroll to sections
- Active link highlighting
- Mobile hamburger menu
- Dark mode toggle
- Glassmorphism effect on scroll

**Props:**
```typescript
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
```

**Structure:**
```tsx
<nav className="fixed top-0 w-full z-50">
  <div className="container mx-auto">
    {/* Logo */}
    <Logo />
    
    {/* Desktop Navigation */}
    <ul className="hidden md:flex">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/skills">Skills</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/experience">Experience</NavLink>
      <NavLink href="/resume">Resume</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </ul>
    
    {/* Dark Mode Toggle */}
    <DarkModeToggle />
    
    {/* Mobile Menu Button */}
    <MobileMenuButton />
  </div>
  
  {/* Mobile Menu Overlay */}
  <MobileMenu isOpen={menuOpen} />
</nav>
```

**Styling:**
```css
/* Glassmorphism on scroll */
.navbar-scrolled {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

/* Dark mode */
.dark .navbar-scrolled {
  background: rgba(28, 28, 30, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
```

**Animation:**
```tsx
<motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.3 }}
>
```

---

## 2️⃣ FOOTER COMPONENT

### **Component: `Footer.tsx`**

**Purpose:** Site-wide footer with links, social media, and copyright

**Structure:**
```tsx
<footer className="bg-dark text-light py-12">
  <div className="container mx-auto grid md:grid-cols-3 gap-8">
    
    {/* Column 1: Brand */}
    <div>
      <h3>Nikhil Chandan</h3>
      <p>Building Security That Thinks and Acts</p>
    </div>
    
    {/* Column 2: Quick Links */}
    <div>
      <h4>Quick Links</h4>
      <ul>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
    
    {/* Column 3: Social Links */}
    <div>
      <h4>Connect</h4>
      <div className="flex space-x-4">
        <SocialIcon platform="github" />
        <SocialIcon platform="linkedin" />
        <SocialIcon platform="email" />
      </div>
    </div>
  </div>
  
  {/* Copyright */}
  <div className="text-center mt-8">
    <p>&copy; 2025 Nikhil Chandan. All rights reserved.</p>
  </div>
</footer>
```

**Styling:**
- Background: Dark with subtle gradient
- Hover effects on links
- Social icons with brand colors

---

## 3️⃣ PROJECT CARD COMPONENT

### **Component: `ProjectCard.tsx`**

**Purpose:** Reusable card for project display

**Props:**
```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  metrics: { icon: string; label: string; value: string }[];
  link: string;
  featured?: boolean;
}
```

**Structure:**
```tsx
<motion.div
  className="project-card"
  whileHover={{ y: -8, scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
  {/* Icon/Image */}
  <div className="icon-container">
    {icon}
  </div>
  
  {/* Title */}
  <h3 className="text-xl font-bold mb-2">{title}</h3>
  
  {/* Description */}
  <p className="text-gray-600 dark:text-gray-400 mb-4">
    {description}
  </p>
  
  {/* Tech Stack Badges */}
  <div className="flex flex-wrap gap-2 mb-4">
    {techStack.map(tech => (
      <TechBadge key={tech} label={tech} />
    ))}
  </div>
  
  {/* Metrics Grid */}
  <div className="grid grid-cols-2 gap-2 mb-4">
    {metrics.map(metric => (
      <MetricItem key={metric.label} {...metric} />
    ))}
  </div>
  
  {/* CTA Button */}
  <Button href={link} variant="primary">
    View Project →
  </Button>
</motion.div>
```

**Styling:**
```css
.project-card {
  @apply bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md;
  @apply border border-gray-200 dark:border-gray-700;
  @apply transition-all duration-300;
}

.project-card:hover {
  @apply shadow-xl;
}
```

**Variants:**
- **Featured:** Larger size, gradient border, highlighted
- **Standard:** Regular size, standard styling

---

## 4️⃣ SKILL BADGE COMPONENT

### **Component: `SkillBadge.tsx`**

**Purpose:** Pill-shaped badge for tech skills

**Props:**
```typescript
interface SkillBadgeProps {
  label: string;
  icon?: React.ReactNode;
  level?: 'beginner' | 'intermediate' | 'advanced';
  category?: 'language' | 'framework' | 'tool' | 'database';
}
```

**Structure:**
```tsx
<span className={`skill-badge ${category} ${level}`}>
  {icon && <span className="icon">{icon}</span>}
  {label}
</span>
```

**Styling:**
```css
.skill-badge {
  @apply inline-flex items-center gap-2 px-3 py-1 rounded-full;
  @apply text-sm font-medium transition-all;
}

/* Category colors */
.skill-badge.language {
  @apply bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200;
}

.skill-badge.framework {
  @apply bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200;
}

.skill-badge.tool {
  @apply bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200;
}

/* Hover effect */
.skill-badge:hover {
  @apply scale-110 cursor-default;
}
```

**Level Indicator:**
```tsx
{level && (
  <span className="level-dots">
    <span className={level === 'advanced' ? 'active' : ''}></span>
    <span className={level !== 'beginner' ? 'active' : ''}></span>
    <span className={level === 'advanced' ? 'active' : ''}></span>
  </span>
)}
```

---

## 5️⃣ TIMELINE COMPONENT

### **Component: `Timeline.tsx`**

**Purpose:** Interactive vertical/horizontal timeline for experience

**Props:**
```typescript
interface TimelineProps {
  events: TimelineEvent[];
  orientation?: 'vertical' | 'horizontal';
}

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  expandable?: boolean;
}
```

**Structure:**
```tsx
<div className={`timeline ${orientation}`}>
  {events.map((event, index) => (
    <motion.div
      key={event.id}
      className="timeline-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      {/* Dot */}
      <div className="timeline-dot">
        {event.icon || <DefaultIcon />}
      </div>
      
      {/* Content Card */}
      <div className="timeline-content">
        <span className="date">{event.date}</span>
        <h4 className="title">{event.title}</h4>
        <p className="description">{event.description}</p>
        
        {event.expandable && (
          <button onClick={() => toggleExpand(event.id)}>
            Read More ↓
          </button>
        )}
      </div>
    </motion.div>
  ))}
</div>
```

**Styling:**
```css
/* Vertical Timeline */
.timeline.vertical {
  @apply relative pl-8 border-l-4 border-primary;
}

.timeline-dot {
  @apply absolute left-0 w-4 h-4 rounded-full bg-primary;
  @apply -ml-2 transition-all;
}

.timeline-dot:hover {
  @apply scale-150;
}

/* Horizontal Timeline (Desktop) */
@media (min-width: 1024px) {
  .timeline.horizontal {
    @apply flex items-center border-t-4 border-primary;
  }
}
```

---

## 6️⃣ TESTIMONIAL CAROUSEL COMPONENT

### **Component: `TestimonialCarousel.tsx`**

**Purpose:** Rotating testimonials with smooth transitions

**Props:**
```typescript
interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}
```

**Structure:**
```tsx
<div className="testimonial-carousel">
  <AnimatePresence mode="wait">
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="testimonial-card"
    >
      {/* Quote Icon */}
      <QuoteIcon />
      
      {/* Quote Text */}
      <blockquote className="text-lg italic mb-4">
        "{testimonials[currentIndex].quote}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        {avatar && <img src={avatar} className="w-12 h-12 rounded-full" />}
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
  
  {/* Navigation Dots */}
  <div className="flex justify-center gap-2 mt-6">
    {testimonials.map((_, index) => (
      <button
        key={index}
        className={`dot ${index === currentIndex ? 'active' : ''}`}
        onClick={() => setCurrentIndex(index)}
      />
    ))}
  </div>
  
  {/* Prev/Next Buttons */}
  <button onClick={handlePrev}>←</button>
  <button onClick={handleNext}>→</button>
</div>
```

**Auto-Play Logic:**
```tsx
useEffect(() => {
  if (autoPlay) {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval || 5000);
    
    return () => clearInterval(timer);
  }
}, [autoPlay, interval, testimonials.length]);
```

---

## 7️⃣ CTA BUTTON COMPONENT

### **Component: `Button.tsx`**

**Purpose:** Reusable button with multiple variants

**Props:**
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}
```

**Structure:**
```tsx
<motion.button
  className={`btn btn-${variant} btn-${size} ${fullWidth ? 'w-full' : ''}`}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={onClick}
  disabled={disabled}
>
  {icon && <span className="icon">{icon}</span>}
  {children}
</motion.button>
```

**Variants:**
```css
/* Primary */
.btn-primary {
  @apply bg-gradient-to-r from-primary to-secondary;
  @apply text-white font-semibold;
  @apply px-6 py-3 rounded-lg;
  @apply shadow-lg hover:shadow-xl;
}

/* Secondary */
.btn-secondary {
  @apply bg-gray-200 dark:bg-gray-700;
  @apply text-gray-800 dark:text-white;
  @apply px-6 py-3 rounded-lg;
}

/* Outline */
.btn-outline {
  @apply border-2 border-primary text-primary;
  @apply px-6 py-3 rounded-lg;
  @apply hover:bg-primary hover:text-white;
}

/* Ghost */
.btn-ghost {
  @apply text-primary hover:bg-primary/10;
  @apply px-4 py-2 rounded;
}
```

**Sizes:**
```css
.btn-sm { @apply text-sm px-4 py-2; }
.btn-md { @apply text-base px-6 py-3; }
.btn-lg { @apply text-lg px-8 py-4; }
```

---

## 8️⃣ CONTACT FORM COMPONENT

### **Component: `ContactForm.tsx`**

**Purpose:** Contact form with validation and submission

**Features:**
- Real-time validation
- Error messages
- Success/failure states
- EmailJS integration
- Accessibility-compliant

**Structure:**
```tsx
<form onSubmit={handleSubmit} className="space-y-6">
  {/* Name Field */}
  <div>
    <label htmlFor="name" className="form-label">
      Name *
    </label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className={`form-input ${errors.name ? 'error' : ''}`}
      required
    />
    {errors.name && <span className="error-message">{errors.name}</span>}
  </div>
  
  {/* Email Field */}
  <div>
    <label htmlFor="email" className="form-label">
      Email *
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className={`form-input ${errors.email ? 'error' : ''}`}
      required
    />
    {errors.email && <span className="error-message">{errors.email}</span>}
  </div>
  
  {/* Subject Field */}
  <div>
    <label htmlFor="subject" className="form-label">
      Subject *
    </label>
    <input
      type="text"
      id="subject"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      className="form-input"
      required
    />
  </div>
  
  {/* Message Field */}
  <div>
    <label htmlFor="message" className="form-label">
      Message *
    </label>
    <textarea
      id="message"
      name="message"
      rows={6}
      value={formData.message}
      onChange={handleChange}
      className="form-input"
      required
    />
  </div>
  
  {/* Submit Button */}
  <Button
    type="submit"
    variant="primary"
    fullWidth
    disabled={isSubmitting}
  >
    {isSubmitting ? 'Sending...' : 'Send Message →'}
  </Button>
  
  {/* Success/Error Messages */}
  {submitStatus === 'success' && (
    <SuccessMessage>
      ✅ Thanks for reaching out! I'll get back to you soon.
    </SuccessMessage>
  )}
  
  {submitStatus === 'error' && (
    <ErrorMessage>
      ❌ Oops! Something went wrong. Please try again.
    </ErrorMessage>
  )}
</form>
```

**Validation Logic:**
```tsx
const validateForm = () => {
  const newErrors: Record<string, string> = {};
  
  if (!formData.name.trim()) {
    newErrors.name = 'Name is required';
  }
  
  if (!formData.email.trim()) {
    newErrors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = 'Invalid email format';
  }
  
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

**Styling:**
```css
.form-label {
  @apply block text-sm font-medium mb-2;
  @apply text-gray-700 dark:text-gray-300;
}

.form-input {
  @apply w-full px-4 py-3 rounded-lg;
  @apply border-2 border-gray-300 dark:border-gray-600;
  @apply focus:border-primary focus:outline-none;
  @apply transition-colors;
}

.form-input.error {
  @apply border-red-500;
}

.error-message {
  @apply text-red-500 text-sm mt-1;
}
```

---

## 🎨 COMPONENT USAGE EXAMPLES

### **Example 1: Project Grid**
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map(project => (
    <ProjectCard key={project.id} {...project} />
  ))}
</div>
```

### **Example 2: Skill Showcase**
```tsx
<div className="flex flex-wrap gap-2">
  <SkillBadge label="Python" category="language" level="advanced" />
  <SkillBadge label="TensorFlow" category="framework" level="intermediate" />
  <SkillBadge label="WireShark" category="tool" level="intermediate" />
</div>
```

### **Example 3: Experience Timeline**
```tsx
<Timeline
  events={experienceData}
  orientation="vertical"
/>
```

---

## 🔧 COMPONENT BEST PRACTICES

1. **Accessibility First**
   - Use semantic HTML
   - Add ARIA labels
   - Ensure keyboard navigation

2. **Performance**
   - Lazy load images
   - Memoize expensive computations
   - Use React.memo for static components

3. **Responsiveness**
   - Mobile-first approach
   - Test on multiple devices
   - Use Tailwind's responsive classes

4. **Dark Mode**
   - Use CSS variables for colors
   - Test contrast ratios
   - Smooth transitions between modes

5. **Animation**
   - Keep animations subtle
   - Respect `prefers-reduced-motion`
   - Use hardware-accelerated properties

---

*All components are production-ready and follow modern React best practices.*
