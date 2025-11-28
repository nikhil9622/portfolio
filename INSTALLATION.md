# 🚀 INSTALLATION & SETUP

Complete step-by-step instructions to get your portfolio running locally.

---

## Prerequisites

Before starting, ensure you have:

- ✅ **Node.js** 18.0 or higher installed
- ✅ **npm** or **yarn** package manager
- ✅ **Git** (optional, for version control)
- ✅ **Code editor** (VS Code recommended)
- ✅ **Modern browser** (Chrome, Firefox, Edge)

### Check Installation

```powershell
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Check Git (optional)
git --version
```

---

## Step 1: Install Node.js Dependencies

Open PowerShell in the `NC` directory:

```powershell
# Navigate to project directory
cd "C:\Users\belid\Downloads\NC"

# Install all dependencies
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- EmailJS
- And all other dependencies

**Expected time**: 2-3 minutes

---

## Step 2: Environment Configuration

### Create Environment File

The `.env.local` file already exists. Update it with your values:

```env
# EmailJS Configuration (get from https://www.emailjs.com/)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Nikhil Chandan Portfolio
```

### Get EmailJS Credentials

1. **Sign up at [EmailJS.com](https://www.emailjs.com/)**
   - Free tier: 200 emails/month
   - No credit card required

2. **Add Email Service**:
   - Dashboard > Email Services
   - Click "Add New Service"
   - Choose Gmail (recommended)
   - Connect your Gmail account
   - **Copy Service ID** (e.g., `service_abc1234`)

3. **Create Email Template**:
   - Dashboard > Email Templates
   - Click "Create New Template"
   - Template content:
     ```
     Subject: New Contact from {{from_name}}
     
     You received a new message from your portfolio:
     
     Name: {{from_name}}
     Email: {{from_email}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     
     ---
     Sent from your portfolio contact form
     ```
   - **Copy Template ID** (e.g., `template_xyz5678`)

4. **Get User ID**:
   - Dashboard > Account > General
   - Find "Public Key" section
   - **Copy User ID** (e.g., `user_def9012`)

5. **Update `.env.local`**:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
   NEXT_PUBLIC_EMAILJS_USER_ID=user_def9012
   ```

---

## Step 3: Verify Installation

### Check if everything installed correctly:

```powershell
# List installed packages
npm list --depth=0

# Should show:
# - next@14.1.0
# - react@18.2.0
# - typescript@5.x
# - tailwindcss@3.x
# - framer-motion@11.x
# - lucide-react@0.312.x
# - emailjs-com@3.2.x
```

### Check Configuration Files

Ensure these files exist:
- ✅ `package.json`
- ✅ `tsconfig.json`
- ✅ `tailwind.config.ts`
- ✅ `next.config.js`
- ✅ `postcss.config.js`
- ✅ `.env.local`

---

## Step 4: Run Development Server

Start the development server:

```powershell
npm run dev
```

You should see:
```
   ▲ Next.js 14.1.0
   - Local:        http://localhost:3000
   - Environments: .env.local

 ✓ Ready in 2.3s
```

**Open in browser**: [http://localhost:3000](http://localhost:3000)

---

## Step 5: Verify All Pages Work

Test each page:

1. **Home** - http://localhost:3000
   - ✅ Hero section displays
   - ✅ Featured projects show
   - ✅ Skills section loads
   - ✅ Animations work

2. **About** - http://localhost:3000/about
   - ✅ Bio displays
   - ✅ Education shows
   - ✅ Certifications listed

3. **Skills** - http://localhost:3000/skills
   - ✅ All skill categories show
   - ✅ Proficiency bars animate
   - ✅ Icons display

4. **Projects** - http://localhost:3000/projects
   - ✅ All 5 projects show
   - ✅ Cards are interactive
   - ✅ Links work

5. **Experience** - http://localhost:3000/experience
   - ✅ Timeline displays
   - ✅ All experiences show
   - ✅ Dates format correctly

6. **Resume** - http://localhost:3000/resume
   - ✅ Page loads
   - ✅ Download buttons show
   - ⚠️ Resume PDF needs to be added

7. **Contact** - http://localhost:3000/contact
   - ✅ Form displays
   - ✅ Validation works
   - ✅ Can submit (test this!)

---

## Step 6: Test Core Features

### Dark Mode Toggle
1. Click the sun/moon icon in navbar
2. Page should switch themes
3. All elements should be readable

### Contact Form
1. Go to Contact page
2. Fill out form
3. Click "Send Message"
4. Check your email for test message
5. Should receive within 1-2 minutes

### Responsive Design
1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test mobile view (375px)
4. Test tablet view (768px)
5. Test desktop view (1920px)

### Navigation
1. Click all navbar links
2. Verify all pages load
3. Test mobile menu
4. Check footer links

---

## Step 7: Build for Production

Test that your site builds correctly:

```powershell
# Create production build
npm run build
```

Expected output:
```
✓ Creating an optimized production build
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (7/7)
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    5.2 kB          87 kB
├ ○ /about                               3.1 kB          85 kB
├ ○ /contact                             4.5 kB          86 kB
├ ○ /experience                          3.8 kB          86 kB
├ ○ /projects                            4.2 kB          86 kB
├ ○ /resume                              2.9 kB          85 kB
└ ○ /skills                              4.1 kB          86 kB

○ (Static) prerendered as static content
```

If build succeeds, you're ready to deploy!

---

## Common Issues & Solutions

### Issue: "Cannot find module 'next'"
**Solution**:
```powershell
rm -r node_modules
npm install
```

### Issue: "Port 3000 already in use"
**Solution**:
```powershell
# Kill process on port 3000
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force

# Or use different port
npm run dev -- -p 3001
```

### Issue: Contact form not sending emails
**Check**:
- EmailJS credentials in `.env.local`
- Restart dev server after changing env
- Check EmailJS dashboard for errors
- Verify email service is active

### Issue: Images not loading
**Solution**:
- Check image files exist in `/public`
- Verify file names match exactly
- Check image paths in code

### Issue: Dark mode not working
**Solution**:
- Clear browser cache
- Check localStorage in DevTools
- Verify CSS classes in `globals.css`

### Issue: Build errors
**Solution**:
```powershell
# Clear Next.js cache
rm -r .next

# Reinstall dependencies
rm -r node_modules
npm install

# Try build again
npm run build
```

---

## Performance Optimization

### During Development

```powershell
# Use turbopack for faster builds (experimental)
npm run dev -- --turbo
```

### Before Production

1. **Optimize Images**:
   - Compress with TinyPNG
   - Keep under 300KB each
   - Use WebP format

2. **Check Bundle Size**:
   ```powershell
   npm run build
   ```
   - Total JS should be < 200KB
   - Each page < 100KB

3. **Test Performance**:
   - Run Lighthouse in Chrome DevTools
   - Target: 90+ score on all metrics

---

## Development Commands Reference

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run TypeScript type checking
npx tsc --noEmit

# Format code (if prettier installed)
npx prettier --write .

# Export static site
npm run export
```

---

## VS Code Extensions (Recommended)

Install these for better development experience:

1. **ESLint** - `dbaeumer.vscode-eslint`
2. **Tailwind CSS IntelliSense** - `bradlc.vscode-tailwindcss`
3. **TypeScript Vue Plugin** - Built-in
4. **Path Intellisense** - `christian-kohler.path-intellisense`
5. **Auto Rename Tag** - `formulahendry.auto-rename-tag`
6. **Prettier** - `esbenp.prettier-vscode`

---

## Next Steps

After successful installation:

1. ✅ **Customize Content**
   - Update `src/lib/constants.ts`
   - Modify `src/lib/data/` files
   - Add your resume to `/public`

2. ✅ **Add Assets**
   - Profile photo
   - Project images
   - Resume PDF

3. ✅ **Test Thoroughly**
   - All pages
   - All features
   - Mobile responsive
   - Dark mode

4. ✅ **Deploy**
   - Follow `DEPLOYMENT.md`
   - Recommended: Vercel
   - Add environment variables

---

## 🎉 Installation Complete!

Your development environment is set up and ready.

**Current Status**:
- ✅ Dependencies installed
- ✅ Configuration done
- ✅ Development server running
- ✅ All pages accessible
- ✅ Features working

**Next**: Customize your content and deploy!

---

## 📞 Need Help?

**Documentation**:
- `QUICKSTART.md` - Fast setup guide
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Deployment guide

**Resources**:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [EmailJS Docs](https://www.emailjs.com/docs/)

**Support**:
- Check GitHub Issues
- Read troubleshooting section above
- Contact: nikhil@example.com

---

*Installation guide last updated: 2024*
