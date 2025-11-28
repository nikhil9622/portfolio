# 🚀 Nikhil Chandan - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features include dark mode, smooth animations, contact form integration, and full SEO optimization.

![Portfolio Preview](https://via.placeholder.com/800x400/0A84FF/FFFFFF?text=Portfolio+Preview)

## ✨ Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations and page transitions
- **Contact Form**: EmailJS integration for contact inquiries
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Performance**: Optimized for Core Web Vitals
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📂 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js 14 app directory (pages)
│   ├── components/     # React components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and data
│   ├── styles/         # Global styles
│   └── types/          # TypeScript type definitions
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: EmailJS
- **Fonts**: Google Fonts (Inter, JetBrains Mono)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nikhilchandan/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

   Get EmailJS credentials from [EmailJS.com](https://www.emailjs.com/)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 EmailJS Setup

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
4. Copy your Service ID, Template ID, and User ID to `.env.local`

## 🎨 Customization

### Personal Information

Edit `src/lib/constants.ts`:
```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  email: 'your@email.com',
  phone: '+1234567890',
  location: 'Your City, Country',
};
```

### Projects

Edit `src/lib/data/projects.ts` to add/modify your projects

### Skills

Edit `src/lib/data/skills.ts` to update your technical skills

### Experience

Edit `src/lib/data/experience.ts` to add your work experience

### Colors & Branding

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0A84FF',    // Main brand color
  secondary: '#00D9FF',  // Secondary color
  accent: '#FF453A',     // Accent color
}
```

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Export as static site (for hosting on GitHub Pages, Netlify, etc.)
npm run export
```

The exported site will be in the `out/` directory.

## 🌐 Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. New site from Git
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `out`
7. Add environment variables
8. Deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "next build && next export && gh-pages -d out"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages in repository settings

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Export static site
npm run export
```

## 📱 Pages

- `/` - Home page with hero, featured projects, and skills
- `/about` - About me, education, and certifications
- `/skills` - Technical skills categorized by type
- `/projects` - Portfolio of projects
- `/experience` - Work experience and leadership roles
- `/resume` - Downloadable resume
- `/contact` - Contact form and social links

## 🎯 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Font Optimization**: Google Fonts with Next.js optimization

## 🔒 Security

- Content Security Policy headers
- HTTPS enforced
- Environment variables for sensitive data
- XSS protection
- CSRF protection

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

**Nikhil Chandan**
- Email: nikhil@example.com
- LinkedIn: [linkedin.com/in/nikhilchandan](https://linkedin.com/in/nikhilchandan)
- GitHub: [github.com/nikhilchandan](https://github.com/nikhilchandan)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons

---

Made with ❤️ by Nikhil Chandan
