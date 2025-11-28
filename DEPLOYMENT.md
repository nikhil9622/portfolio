# 📋 DEPLOYMENT GUIDE

Complete step-by-step instructions for deploying your Next.js portfolio to various platforms.

---

## 🎯 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All environment variables are set up
- [ ] Resume PDF is in `/public/resume.pdf`
- [ ] Profile image is in `/public/images/profile.jpg`
- [ ] EmailJS is configured and tested
- [ ] All personal information is updated in `src/lib/constants.ts`
- [ ] Projects, skills, and experience data is complete
- [ ] Dark mode toggle works correctly
- [ ] Contact form sends emails successfully
- [ ] All links work (social media, GitHub, etc.)
- [ ] Site looks good on mobile, tablet, and desktop
- [ ] Build completes without errors: `npm run build`

---

## 1️⃣ Vercel Deployment (Recommended - Easiest)

### Why Vercel?
- Created by Next.js team
- Zero configuration
- Automatic HTTPS
- Global CDN
- Preview deployments for PRs
- Free tier available

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Add environment variables:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
     NEXT_PUBLIC_EMAILJS_USER_ID
     NEXT_PUBLIC_SITE_URL (your vercel domain)
     ```
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed
   - SSL certificate auto-generated

4. **Automatic Updates**
   - Every push to `main` branch auto-deploys
   - Pull requests get preview URLs

**Your site will be live at**: `https://your-project.vercel.app`

---

## 2️⃣ Netlify Deployment

### Why Netlify?
- Easy drag-and-drop deployment
- Form handling built-in
- Split testing
- Free tier available

### Steps:

1. **Build Static Site**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**

   **Option A: Drag & Drop**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `out/` folder to deploy

   **Option B: Git Integration**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build && npm run export`
     - Publish directory: `out`
   - Add environment variables
   - Click "Deploy site"

3. **Custom Domain**
   - Go to Domain settings
   - Add custom domain
   - Update DNS records

4. **Environment Variables**
   - Go to Site settings > Build & deploy > Environment
   - Add all variables from `.env.local`

**Your site will be live at**: `https://your-site.netlify.app`

---

## 3️⃣ GitHub Pages Deployment

### Why GitHub Pages?
- Free hosting for GitHub repos
- Custom domain support
- HTTPS enabled

### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d out"
     }
   }
   ```

3. **Update next.config.js**
   Add base path if using project page:
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/portfolio', // Only if using yourusername.github.io/portfolio
     images: {
       unoptimized: true,
     },
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Pages section
   - Source: Deploy from a branch
   - Branch: `gh-pages` > `/ (root)`
   - Save

6. **Custom Domain (Optional)**
   - Add `CNAME` file in `/public` with your domain
   - Update DNS A records to GitHub IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

**Your site will be live at**: 
- `https://yourusername.github.io` (user page)
- `https://yourusername.github.io/portfolio` (project page)

---

## 4️⃣ AWS Amplify Deployment

### Why AWS Amplify?
- Built-in CI/CD
- Custom domains with Route 53
- Password protection
- Environment branches

### Steps:

1. **Push to GitHub** (if not already done)

2. **Deploy to Amplify**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "New app" > "Host web app"
   - Connect to GitHub
   - Select repository and branch
   - Build settings (auto-detected):
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: out
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```
   - Add environment variables
   - Click "Save and deploy"

3. **Custom Domain**
   - Go to Domain management
   - Add domain
   - Follow DNS configuration steps

**Your site will be live at**: `https://main.xxxxx.amplifyapp.com`

---

## 5️⃣ Azure Static Web Apps

### Steps:

1. **Create Azure Account**
   - Sign up at [portal.azure.com](https://portal.azure.com)

2. **Deploy**
   - Go to Azure Portal
   - Create "Static Web App"
   - Connect to GitHub
   - Build configuration:
     - App location: `/`
     - Output location: `out`
   - Add environment variables
   - Create

**Your site will be live at**: `https://your-app.azurestaticapps.net`

---

## 🔒 Environment Variables for All Platforms

Make sure to add these on your hosting platform:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_USER_ID=user_xxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 🌐 Custom Domain Setup

### DNS Configuration (General)

For Vercel/Netlify/GitHub Pages:

**A Records:**
```
Type: A
Name: @
Value: [Platform IP addresses]
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: your-site.[platform].app
```

### SSL Certificate
- All platforms provide free SSL (Let's Encrypt)
- Auto-renews
- HTTPS enforced by default

---

## 🚀 Post-Deployment

1. **Test Everything**
   - All pages load correctly
   - Dark mode toggle works
   - Contact form sends emails
   - Links work
   - Responsive on all devices

2. **SEO**
   - Submit sitemap to Google Search Console
   - Verify meta tags with [Open Graph Preview](https://www.opengraph.xyz/)
   - Check with [PageSpeed Insights](https://pagespeed.web.dev/)

3. **Analytics (Optional)**
   - Add Google Analytics
   - Add Vercel Analytics
   - Monitor performance

4. **Share Your Portfolio!**
   - LinkedIn profile
   - Resume
   - GitHub README
   - Twitter/X

---

## 📊 Performance Optimization

- Images: Use Next.js Image component
- Fonts: Preload critical fonts
- Code splitting: Automatic with Next.js
- Caching: Configured in `next.config.js`
- Compression: Enabled by default on all platforms

---

## 🔧 Troubleshooting

### Build fails:
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Contact form not working:
- Check EmailJS credentials
- Verify environment variables
- Test EmailJS service status

### Images not loading:
- Ensure `next.config.js` has `images: { unoptimized: true }`
- Check image paths are correct
- Verify images exist in `/public`

### 404 on refresh (GitHub Pages):
- Add 404.html that redirects to index.html
- Use hash routing or configure server

---

## 💡 Tips

1. **Use Preview Deployments**: Test changes before production
2. **Monitor Analytics**: Track visitors and performance
3. **Regular Updates**: Keep dependencies up to date
4. **Backup**: Keep your code on GitHub
5. **Mobile First**: Always test mobile experience

---

## 🎉 You're Done!

Your portfolio is now live and accessible worldwide. Share it with potential employers, clients, and on social media!

**Need Help?** Open an issue on GitHub or contact via the portfolio contact form.

---

*Last updated: 2024*
