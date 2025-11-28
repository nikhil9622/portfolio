# 🎨 UI/UX LAYOUT DESIGN GUIDE

---

## 📐 DESIGN SYSTEM

### **Spacing Scale**
```css
--space-1: 0.25rem  /* 4px */
--space-2: 0.5rem   /* 8px */
--space-3: 0.75rem  /* 12px */
--space-4: 1rem     /* 16px */
--space-6: 1.5rem   /* 24px */
--space-8: 2rem     /* 32px */
--space-12: 3rem    /* 48px */
--space-16: 4rem    /* 64px */
--space-24: 6rem    /* 96px */
```

### **Border Radius**
```css
--radius-sm: 0.375rem   /* 6px - buttons, badges */
--radius-md: 0.5rem     /* 8px - cards */
--radius-lg: 0.75rem    /* 12px - larger cards */
--radius-xl: 1rem       /* 16px - hero sections */
--radius-full: 9999px   /* circles */
```

### **Shadows (Depth System)**
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

---

## 🏠 HOME PAGE LAYOUT

### **Hero Section**

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              [Animated Gradient Background]             │
│                                                         │
│                   Hi, I'm Nikhil Chandan               │
│                                                         │
│              [Rotating Subtitle Animation]              │
│            > Cybersecurity Engineer                     │
│                                                         │
│          Building Security That Thinks and Acts         │
│                                                         │
│      I create intelligent security systems that detect  │
│      threats, reason through risks, and remediate...    │
│                                                         │
│       [View Projects →]  [Download Resume]             │
│                                                         │
│                    [Scroll Indicator ↓]                 │
└─────────────────────────────────────────────────────────┘
```

**Layout Specs:**
- **Container:** Max-width 1280px, centered
- **Height:** 100vh (full viewport)
- **Padding:** 6rem top/bottom, 2rem sides (mobile: 3rem/1rem)
- **Text Alignment:** Center
- **Background:** Gradient overlay + subtle particle animation
- **CTA Spacing:** 1.5rem gap between buttons

**Animations:**
- **Heading:** Fade in + slide up (0.3s delay)
- **Subtitle:** Type-writer effect, rotating every 3s
- **Description:** Fade in (0.5s delay)
- **CTAs:** Scale on hover (1.05x)
- **Background:** Floating particles (CSS/SVG)

**Responsive Breakpoints:**
```css
/* Mobile (< 640px) */
- Font size: Heading 2.5rem, Body 1rem
- Buttons stack vertically
- Padding reduced to 1rem

/* Tablet (641-1024px) */
- Font size: Heading 3.5rem, Body 1.125rem
- Buttons side-by-side

/* Desktop (1025px+) */
- Font size: Heading 4.5rem, Body 1.25rem
- Full spacing applied
```

**Dark Mode Variant:**
- Background: Dark gradient (#1C1C1E → #0A0A0A)
- Text: White (#FFFFFF)
- Accent: Bright blue (#0A84FF)
- Overlay: Subtle glow effect on text

---

### **Featured Projects Section**

```
┌─────────────────────────────────────────────────────────┐
│                   Featured Projects                      │
│     Real-world security challenges, solved with code     │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │  ZERA    │  │  Cancer  │  │ Phishing │             │
│  │          │  │  Drug    │  │ Email    │             │
│  │  [Icon]  │  │  [Icon]  │  │ [Icon]   │             │
│  │          │  │          │  │          │             │
│  │ Agentic  │  │ Deep     │  │ ML-Based │             │
│  │ Security │  │ Learning │  │ Detection│             │
│  │          │  │          │  │          │             │
│  │ Python   │  │ TensorF  │  │ Scikit   │             │
│  │ LLM      │  │ CNN/RNN  │  │ SVM/RF   │             │
│  │          │  │          │  │          │             │
│  │ [View →] │  │ [View →] │  │ [View →] │             │
│  └──────────┘  └──────────┘  └──────────┘             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Layout Specs:**
- **Grid:** 3 columns (desktop), 1 column (mobile)
- **Gap:** 2rem between cards
- **Card Padding:** 2rem
- **Card Border:** 1px solid (light gray / dark gray in dark mode)
- **Card Radius:** 0.75rem
- **Hover Effect:** Lift (translateY -8px), shadow increase

**Card Structure:**
```
┌─────────────────────┐
│  [Icon/Emoji]       │  ← 64px icon
│                     │
│  Project Title      │  ← H3, Bold
│  Short Description  │  ← 2 lines max
│                     │
│  [Tech Badges]      │  ← Pill-shaped tags
│                     │
│  📊 Metrics         │  ← 2-3 key stats
│                     │
│  [CTA Button →]     │  ← Primary style
└─────────────────────┘
```

**Animations:**
- **On Scroll:** Stagger fade-in (each card 0.2s apart)
- **Hover:** Card lifts, shadow grows, icon scales
- **Tech Badges:** Hover changes color

---

### **Skills Snapshot Section**

```
┌─────────────────────────────────────────────────────────┐
│                  Technical Arsenal                       │
│     Tools and technologies I use to build secure...      │
│                                                         │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐     │
│  │ 🐍  │ │ C++ │ │ 🧠  │ │ 🔬  │ │ 🔒  │ │ 📊  │     │
│  │Pythn│ │     │ │ ML  │ │Sckt │ │Wire │ │MySQL│     │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘     │
│                                                         │
│            [Explore All Skills →]                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Layout Specs:**
- **Grid:** 6 columns (desktop), 3 (tablet), 2 (mobile)
- **Icon Size:** 48px
- **Card Size:** 120px x 120px
- **Hover:** Rotate slightly (5deg), scale (1.1x)
- **Animation:** Pop in on scroll

---

### **Final CTA Section**

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│            [Gradient Background with Blur]              │
│                                                         │
│              Let's Build Something Secure               │
│                                                         │
│     I'm currently open to internships, research...      │
│                                                         │
│       [Get In Touch →]  [View My Resume]               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Layout Specs:**
- **Height:** 400px (mobile: 300px)
- **Background:** Gradient with glassmorphism effect
- **Text Alignment:** Center
- **Button Style:** Outlined + Filled combo

---

## 👤 ABOUT PAGE LAYOUT

### **Hero + Photo Section**

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ┌──────────┐           About Me                       │
│  │          │                                           │
│  │  Photo   │   Security engineer, AI enthusiast,      │
│  │  Avatar  │   and problem solver                     │
│  │          │                                           │
│  └──────────┘   [Personal story text...]               │
│                                                         │
│                  I'm Nikhil Chandan, a final-year...    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Layout Specs:**
- **Grid:** 2 columns (desktop), 1 column (mobile)
- **Photo:** 300px circle, border with gradient
- **Text Column:** Max-width 600px
- **Spacing:** 3rem between photo and text

---

### **Timeline Section (Technical Journey)**

```
┌─────────────────────────────────────────────────────────┐
│              My Technical Journey                        │
│                                                         │
│  2022 ───●─────────────────────────                    │
│          │ Started B.Tech                              │
│          │ Learned Python, C++                         │
│                                                         │
│  2023 ───●─────────────────────────                    │
│          │ Dived into ML                               │
│          │ Built phishing detector                     │
│                                                         │
│  2024 ───●─────────────────────────                    │
│          │ Security + AI Fusion                        │
│          │ Led Live-in-Labs                            │
│                                                         │
│  2025 ───●─────────────────────────                    │
│          │ Advanced Automation                         │
│          │ Built ZERA                                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Layout Specs:**
- **Line:** Vertical, 4px wide, gradient color
- **Dots:** 16px circle, filled with accent color
- **Content:** Left-aligned text blocks
- **Spacing:** 3rem between milestones
- **Animation:** Dots fill on scroll

---

## 🛠️ SKILLS PAGE LAYOUT

### **Skills Grid**

```
┌─────────────────────────────────────────────────────────┐
│               Programming Languages                      │
│                                                         │
│  ┌──────────────────────┐  ┌──────────────────────┐   │
│  │  Python              │  │  C++                 │   │
│  │  ███████████░░░ 90%  │  │  ██████░░░░░░ 70%    │   │
│  │                      │  │                      │   │
│  │  ML, Security, Data  │  │  System Programming  │   │
│  └──────────────────────┘  └──────────────────────┘   │
│                                                         │
│             Frameworks & Libraries                      │
│                                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                 │
│  │TensorF│ │Scikit│ │NumPy │ │Matplot│                │
│  │  low  │ │ learn│ │      │ │  lib  │                │
│  └──────┘ └──────┘ └──────┘ └──────┘                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Layout Specs:**
- **Progress Bars:** Animated fill on scroll
- **Tool Cards:** Grid 4 columns (desktop), 2 (mobile)
- **Hover:** Card glows, icon animates
- **Certifications:** Badge display with logos

---

## 💼 PROJECTS PAGE LAYOUT

### **Project Detail Page**

```
┌─────────────────────────────────────────────────────────┐
│  [← Back to Projects]                                   │
│                                                         │
│              ZERA - Agentic Security Chatbot           │
│          Zero-Endpoint Risk Agent for Remediation       │
│                                                         │
│  ┌────────────────────────────────────────────────┐   │
│  │   [Project Hero Image / Diagram]               │   │
│  └────────────────────────────────────────────────┘   │
│                                                         │
│  Overview                                              │
│  ZERA is an intelligent security agent that...         │
│                                                         │
│  The Problem                                           │
│  Traditional endpoint security tools...                │
│                                                         │
│  The Solution                                          │
│  1. Real-Time Risk Scoring                            │
│  2. MITRE ATT&CK Mapping                              │
│  3. AI-Driven Remediation                             │
│                                                         │
│  Tech Stack                                            │
│  [Python] [LLM] [MITRE] [JWT] [MongoDB]               │
│                                                         │
│  Impact                                                │
│  📉 Reduced response time from hours to minutes        │
│  🎯 90% auto-remediation rate                          │
│                                                         │
│  [View on GitHub →]  [Live Demo →]                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Layout Specs:**
- **Max Width:** 900px (readable line length)
- **Typography:** Larger body text (1.125rem)
- **Section Spacing:** 4rem between sections
- **Code Blocks:** Syntax highlighted
- **Images:** Full-width with captions

---

## 📈 EXPERIENCE PAGE LAYOUT

### **Interactive Timeline**

```
┌─────────────────────────────────────────────────────────┐
│           Experience & Leadership                        │
│                                                         │
│  2025 ━━━━●━━━━━●━━━━━●━━━━━━━━━━━━━━━━ Present      │
│           │      │      │                              │
│           │      │      └─ AWS Certified               │
│           │      └─ Live-in-Labs                       │
│           └─ IndustriAI Hackathon                      │
│                                                         │
│  [Expandable Cards Below Timeline]                      │
│                                                         │
│  ┌──────────────────────────────────────────────┐     │
│  │  📅 Apr 2025 - Jun 2025                      │     │
│  │  Team Lead – Live-in-Labs, Assam             │     │
│  │                                               │     │
│  │  • Led 8-member team                         │     │
│  │  • Conducted 50+ surveys                     │     │
│  │  • Co-authored research paper                │     │
│  │                                               │     │
│  │  [Read More ↓]                                │     │
│  └──────────────────────────────────────────────┘     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Layout Specs:**
- **Timeline:** Horizontal on desktop, vertical on mobile
- **Dots:** Clickable, expands detail card
- **Cards:** Accordion-style expand/collapse
- **Animation:** Timeline draws on scroll

---

## 📧 CONTACT PAGE LAYOUT

### **Split Layout (Form + Info)**

```
┌─────────────────────────────────────────────────────────┐
│                  Let's Connect                           │
│                                                         │
│  ┌──────────────────┐    ┌──────────────────┐         │
│  │  Contact Form    │    │  Contact Info    │         │
│  │                  │    │                  │         │
│  │  [Name]          │    │  📧 Email        │         │
│  │  [Email]         │    │  📱 Phone        │         │
│  │  [Subject]       │    │  📍 Location     │         │
│  │  [Message]       │    │                  │         │
│  │                  │    │  🔗 Social Links │         │
│  │  [Send →]        │    │  [LinkedIn]      │         │
│  │                  │    │  [GitHub]        │         │
│  └──────────────────┘    └──────────────────┘         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Layout Specs:**
- **Grid:** 2 columns (desktop), 1 column (mobile)
- **Form Styling:** Floating labels, rounded inputs
- **Validation:** Real-time with error messages
- **Submit Button:** Full-width, gradient background

---

## 📱 MOBILE RESPONSIVE RULES

### **Key Breakpoints**

```css
/* Mobile (< 640px) */
- Single column layouts
- Stack navigation (hamburger menu)
- Larger touch targets (44px minimum)
- Reduced font sizes
- Full-width CTAs

/* Tablet (641-1024px) */
- 2-column grids where appropriate
- Maintain desktop nav if space allows
- Medium font sizes
- Balance between mobile/desktop spacing

/* Desktop (1025px+) */
- Multi-column grids
- Horizontal navigation
- Full typography scale
- Generous spacing
```

### **Touch-Friendly Design**

- **Button Height:** Minimum 44px
- **Input Height:** Minimum 48px
- **Tap Spacing:** Minimum 8px between elements
- **Font Size:** Minimum 16px (prevents iOS zoom)

---

## 🌗 DARK MODE DESIGN

### **Color Adjustments**

```css
/* Light Mode */
--bg-primary: #FFFFFF
--bg-secondary: #F2F2F7
--text-primary: #1C1C1E
--text-secondary: #98989D

/* Dark Mode */
--bg-primary: #1C1C1E
--bg-secondary: #2C2C2E
--text-primary: #FFFFFF
--text-secondary: #98989D
```

### **Element Adjustments**

- **Cards:** Slightly lighter bg in dark mode
- **Borders:** Reduce opacity by 50%
- **Shadows:** Use glow instead of drop shadows
- **Images:** Reduce brightness by 10%

### **Toggle Component**

```
┌─────────────────┐
│  ☀️  ●━━━○  🌙 │  ← Animated toggle
└─────────────────┘
```

**Position:** Top-right of navbar

---

## ✨ ANIMATION GUIDELINES

### **On Scroll Animations (Framer Motion)**

```javascript
// Fade In Up
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.5 }

// Stagger Children
staggerChildren: 0.2

// Scale On Hover
whileHover: { scale: 1.05 }
whileTap: { scale: 0.95 }
```

### **Micro-Interactions**

- **Buttons:** Scale on hover, ripple on click
- **Cards:** Lift on hover, border glow
- **Links:** Underline slide effect
- **Form Inputs:** Focus ring with smooth transition
- **Icons:** Subtle bounce on hover

### **Page Transitions**

```javascript
// Page enter
initial: { opacity: 0 }
animate: { opacity: 1 }
exit: { opacity: 0 }
transition: { duration: 0.3 }
```

---

## 🎯 ACCESSIBILITY

### **Requirements**

- **Contrast Ratio:** Minimum 4.5:1 for text
- **Focus States:** Visible on all interactive elements
- **Alt Text:** All images and icons
- **Keyboard Navigation:** Full support
- **ARIA Labels:** Form inputs, buttons, navigation
- **Screen Reader:** Semantic HTML structure

---

*This layout guide ensures consistency, responsiveness, and excellent UX across all devices.*
