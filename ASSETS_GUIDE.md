# 🎨 ASSETS LIST & SETUP GUIDE

This guide covers all the assets you need to add to complete your portfolio.

---

## 📁 Required Files

### 1. Resume PDF
**Location**: `/public/resume.pdf`

**How to create**:
- Use your existing resume
- Export as PDF
- Name it `resume.pdf`
- Place in `/public/` folder

**Alternative**: Create from template:
- Use Canva, Adobe InDesign, or LaTeX
- Follow the style guide in BRANDING_GUIDE.md
- Colors: Cyber Blue palette
- Fonts: Inter, JetBrains Mono

---

### 2. Profile Image
**Location**: `/public/images/profile.jpg`

**Specifications**:
- Format: JPG or PNG
- Size: 400x400px minimum (square)
- File size: < 200KB
- Professional headshot
- Good lighting
- Neutral background

**Tips**:
- Use a professional photo or AI-generated avatar
- Compress with [TinyPNG](https://tinypng.com/)
- Ensure it looks good in both light and dark mode

---

### 3. Project Images
**Location**: `/public/images/projects/`

**Files needed**:
- `zera.jpg` - ZERA Security Chatbot
- `drug-prediction.jpg` - Drug Response Prediction
- `phishing-detection.jpg` - Phishing Email Detection
- `network-analyzer.jpg` - Network Traffic Analyzer
- `sentiment-analysis.jpg` - Sentiment Analysis Dashboard

**Specifications**:
- Format: JPG or PNG
- Size: 800x600px (4:3 ratio)
- File size: < 300KB each
- Relevant to project theme

**Options**:
1. **Screenshots**: If you have deployed projects
2. **Mockups**: Use Figma/Canva to create mockups
3. **Stock Images**: Use [Unsplash](https://unsplash.com/) with search:
   - "cyber security" for ZERA
   - "laboratory" for drug prediction
   - "email security" for phishing
   - "network" for network analyzer
   - "sentiment analysis" for sentiment project

---

### 4. Favicon
**Location**: `/public/favicon.svg`

**Create with this SVG** (NC monogram in shield):

```svg
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <!-- Shield background -->
  <path d="M256 32L64 112v144c0 112 48 208 192 224 144-16 192-112 192-224V112L256 32z" 
        fill="#0A84FF"/>
  
  <!-- NC Text -->
  <text x="256" y="340" 
        font-family="JetBrains Mono, monospace" 
        font-size="200" 
        font-weight="bold"
        fill="#FFFFFF" 
        text-anchor="middle">NC</text>
</svg>
```

**Also create**:
- `favicon.ico` (convert from SVG)
- `apple-touch-icon.png` (180x180px)
- `favicon-32x32.png`
- `favicon-16x16.png`

**Tools**:
- [Favicon Generator](https://realfavicongenerator.net/)
- [SVG to ICO](https://convertio.co/svg-ico/)

---

## 🎨 Color Codes Reference

### Cyber Blue Palette (Primary - Recommended)
```css
--primary: #0A84FF;      /* Electric Blue */
--secondary: #00D9FF;    /* Cyan */
--accent: #FF453A;       /* Red Alert */
--dark: #1C1C1E;         /* Near Black */
--light: #F2F2F7;        /* Off White */
```

### Gradient Backgrounds
```css
/* Hero gradient */
background: linear-gradient(135deg, #0A84FF 0%, #00D9FF 100%);

/* Card hover */
background: linear-gradient(to right, #0A84FF, #00D9FF);

/* Animated gradient */
background: linear-gradient(-45deg, #0A84FF, #00D9FF, #FF453A, #0A84FF);
background-size: 400% 400%;
animation: gradient-shift 15s ease infinite;
```

---

## 🖼️ Image Guidelines

### Screenshots Best Practices
1. **Clean Interface**: Remove sensitive data
2. **High Quality**: 2x retina resolution
3. **Annotations**: Highlight key features
4. **Consistent Style**: Same browser, same theme

### Creating Mockups
Use Figma, Sketch, or Canva:
- Show app in device frames
- Add context (laptop, phone)
- Professional lighting
- Subtle shadows

### Stock Photos
Free sources:
- [Unsplash](https://unsplash.com/)
- [Pexels](https://pexels.com/)
- [Pixabay](https://pixabay.com/)

Search keywords:
- "technology"
- "coding"
- "cybersecurity"
- "artificial intelligence"
- "data science"

---

## 📂 Complete File Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── resume.pdf
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/
│   │       ├── zera.jpg
│   │       ├── drug-prediction.jpg
│   │       ├── phishing-detection.jpg
│   │       ├── network-analyzer.jpg
│   │       └── sentiment-analysis.jpg
│   └── documents/
│       └── certifications/ (optional)
```

---

## 🎯 Optional Assets

### Social Media Cards
**Location**: `/public/og-image.jpg`

**Specifications**:
- Size: 1200x630px
- Used when sharing on social media
- Shows your name, title, and branding

**Create with**:
- Canva (use template "Facebook Post")
- Figma
- Adobe Photoshop

### Resume Variations
Create multiple versions:
- `/public/resume-full.pdf` - Complete 2-page resume
- `/public/resume-short.pdf` - 1-page version
- `/public/cv.pdf` - Academic CV (if applicable)

### Certifications
**Location**: `/public/documents/certifications/`

Scan or screenshot your certificates:
- AWS Cloud Practitioner
- Palo Alto Network Security
- Any other relevant certs

---

## ✅ Asset Checklist

Before going live, ensure you have:

- [ ] Resume PDF in `/public/resume.pdf`
- [ ] Profile image in `/public/images/profile.jpg`
- [ ] All 5 project images in `/public/images/projects/`
- [ ] Favicon files (SVG, ICO, PNG)
- [ ] OG image for social sharing (optional)
- [ ] All images compressed (< 300KB each)
- [ ] Images are high quality and professional
- [ ] Resume is up to date
- [ ] All personal info is correct

---

## 🔧 Image Optimization

### Compress Images
Tools:
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Advanced compression
- [ImageOptim](https://imageoptim.com/) - Mac app

### Resize Images
Commands (requires ImageMagick):
```bash
# Resize profile image to 400x400
magick profile-original.jpg -resize 400x400^ -gravity center -extent 400x400 profile.jpg

# Resize project images to 800x600
magick project-original.jpg -resize 800x600^ -gravity center -extent 800x600 project.jpg

# Compress all JPGs
for img in *.jpg; do magick "$img" -quality 85 "optimized-$img"; done
```

### WebP Format (Optional)
Convert to WebP for better performance:
```bash
cwebp profile.jpg -q 80 -o profile.webp
```

---

## 📱 Testing Assets

### Visual Testing
1. Check all images load correctly
2. Verify favicon appears in browser tab
3. Test profile image in light and dark mode
4. Ensure project images display properly
5. Download resume PDF and verify it opens

### Performance Testing
1. Run [PageSpeed Insights](https://pagespeed.web.dev/)
2. Check image file sizes
3. Verify lazy loading works
4. Test on mobile devices

### Accessibility Testing
1. Check image alt texts
2. Ensure sufficient color contrast
3. Verify PDF is accessible
4. Test with screen reader

---

## 💡 Quick Tips

1. **Consistency**: Use same style for all project images
2. **Quality**: Never upscale low-res images
3. **Naming**: Use descriptive filenames (kebab-case)
4. **Format**: JPG for photos, PNG for graphics, SVG for icons
5. **Backup**: Keep original high-res versions

---

## 🚀 Next Steps

After adding all assets:

1. Run development server: `npm run dev`
2. Check all pages load correctly
3. Verify images display properly
4. Test dark mode with all images
5. Build for production: `npm run build`
6. Deploy to Vercel/Netlify

---

## 📞 Need Help?

**Image Editing**:
- [Canva](https://canva.com) - Easy graphic design
- [Figma](https://figma.com) - Professional design tool
- [Photopea](https://photopea.com) - Free Photoshop alternative

**Stock Resources**:
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Flaticon](https://flaticon.com) - Icons

**Compression Tools**:
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)
- [Compressor.io](https://compressor.io)

---

*Complete this checklist before deployment for a professional, polished portfolio!*
