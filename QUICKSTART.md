# 🚀 QUICK START GUIDE

Get your portfolio up and running in 10 minutes!

---

## ⚡ Fast Track Setup

### Step 1: Install Dependencies (2 minutes)

Open PowerShell in the project directory:

```powershell
# Install all required packages
npm install
```

Wait for installation to complete (~2 minutes)

---

### Step 2: Configure EmailJS (3 minutes)

1. **Go to [EmailJS.com](https://www.emailjs.com/)**
2. **Sign up** (use Google for quick signup)
3. **Add Email Service**:
   - Click "Add New Service"
   - Choose Gmail (easiest)
   - Connect your Google account
   - Copy the **Service ID** (looks like `service_abc123`)

4. **Create Email Template**:
   - Go to Email Templates
   - Click "Create New Template"
   - Use this template:
     ```
     New message from {{from_name}}
     Email: {{from_email}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
   - Save and copy the **Template ID** (looks like `template_xyz456`)

5. **Get User ID**:
   - Go to Account > General
   - Copy your **Public Key** (looks like `user_123abc`)

6. **Add to Environment**:
   - Open `.env.local` in the project
   - Replace placeholders:
     ```env
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz456
     NEXT_PUBLIC_EMAILJS_USER_ID=user_123abc
     NEXT_PUBLIC_SITE_URL=http://localhost:3000
     ```

---

### Step 3: Add Your Information (3 minutes)

Open `src/lib/constants.ts` and update:

```typescript
export const PERSONAL_INFO = {
  name: 'Your Full Name',
  email: 'your.email@example.com',
  phone: '+91-XXXXXXXXXX',
  location: 'Your City, State, Country',
  timezone: 'Asia/Kolkata',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'mailto:your.email@example.com',
};
```

---

### Step 4: Run Development Server (1 minute)

```powershell
npm run dev
```

**Open**: [http://localhost:3000](http://localhost:3000)

✅ Your portfolio should now be running!

---

### Step 5: Add Assets (Optional - 5 minutes)

For a complete portfolio, add these files:

1. **Resume**: 
   - Save your resume as `resume.pdf`
   - Place in `/public/` folder

2. **Profile Photo**:
   - Save photo as `profile.jpg` (400x400px)
   - Place in `/public/images/` folder

3. **Project Images**:
   - Add project screenshots to `/public/images/projects/`
   - Name them: `zera.jpg`, `drug-prediction.jpg`, etc.

---

## 🎯 What You Get

Your portfolio includes:

✅ **7 Complete Pages**:
- Home (with hero, projects, skills)
- About Me
- Skills
- Projects Portfolio
- Experience Timeline
- Resume Download
- Contact Form

✅ **Features**:
- Dark mode toggle
- Smooth animations
- Mobile responsive
- Contact form with email
- SEO optimized
- Fast loading

---

## 🛠️ Common Commands

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static files
npm run export
```

---

## 📝 Customization Checklist

Before deploying, customize:

- [ ] Personal info in `src/lib/constants.ts`
- [ ] Projects in `src/lib/data/projects.ts`
- [ ] Skills in `src/lib/data/skills.ts`
- [ ] Experience in `src/lib/data/experience.ts`
- [ ] Resume PDF in `/public/resume.pdf`
- [ ] Profile photo in `/public/images/profile.jpg`
- [ ] EmailJS credentials in `.env.local`
- [ ] Social media links

---

## 🚀 Deploy in 5 Minutes

### Vercel (Easiest):

1. Push to GitHub:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Add environment variables
6. Deploy!

**Done!** Your site is live at `your-project.vercel.app`

---

## 💡 Quick Tips

1. **Test Contact Form**: Send yourself a test email
2. **Check Mobile**: Open on your phone
3. **Dark Mode**: Toggle and check all pages
4. **Links**: Click all navigation and social links
5. **Resume**: Download PDF and verify

---

## 🐛 Troubleshooting

### Port already in use?
```powershell
# Kill process on port 3000
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force

# Or use different port
npm run dev -- -p 3001
```

### Module not found?
```powershell
# Reinstall dependencies
rm -r node_modules
npm install
```

### Contact form not working?
- Check `.env.local` has correct EmailJS IDs
- Restart dev server after changing env vars
- Verify EmailJS service is active

### Build errors?
```powershell
# Clear cache
rm -r .next
npm run build
```

---

## 📚 Next Steps

1. ✅ Run development server
2. ✅ Customize your content
3. ✅ Add your assets
4. ✅ Test everything
5. ✅ Deploy to Vercel
6. ✅ Share your portfolio!

---

## 🆘 Need Help?

**Documentation**:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Deployment guide
- `ASSETS_GUIDE.md` - Asset requirements

**Resources**:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [EmailJS Docs](https://www.emailjs.com/docs/)

**Support**:
- Open an issue on GitHub
- Email: nikhil@example.com

---

## 🎉 You're All Set!

Your professional portfolio is ready to showcase your work to the world.

**Good luck with your job search and projects!** 🚀

---

*Built with Next.js, TypeScript, and Tailwind CSS*
