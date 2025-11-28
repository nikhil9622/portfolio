# 🗺️ WEBSITE STRUCTURE & SITEMAP

## 📊 COMPLETE SITE ARCHITECTURE

```
nikhilchandan.dev/
│
├── Home (/)
│   ├── Hero Section
│   ├── Featured Projects (Top 3)
│   ├── Skills Overview
│   ├── Latest Achievement
│   └── CTA Section
│
├── About (/about)
│   ├── Personal Story
│   ├── Education Details
│   ├── Technical Journey
│   ├── Interests & Values
│   └── Fun Facts
│
├── Skills (/skills)
│   ├── Technical Skills Grid
│   ├── Programming Languages
│   ├── Frameworks & Libraries
│   ├── Tools & Platforms
│   ├── Certifications Showcase
│   └── Learning Roadmap
│
├── Projects (/projects)
│   ├── Featured Projects
│   │   ├── ZERA (Agentic Security Chatbot)
│   │   ├── Drug Response Prediction
│   │   └── Phishing Email Detection
│   ├── Project Filters (by tech/domain)
│   ├── GitHub Integration
│   └── Case Study Deep Dives
│
├── Experience (/experience)
│   ├── Interactive Timeline
│   ├── Leadership Roles
│   │   ├── Team Lead – Live-in-Labs
│   │   ├── FACT Club Mentor
│   │   └── Tantrostav Core Member
│   ├── Achievements & Hackathons
│   └── Publications
│
├── Resume (/resume)
│   ├── Interactive Resume Viewer
│   ├── Download PDF (Styled)
│   ├── Print-Optimized Version
│   └── Skills Export (JSON/CSV)
│
├── Contact (/contact)
│   ├── Contact Form
│   ├── Social Links
│   ├── Email Integration
│   ├── Availability Status
│   └── Response Time Info
│
└── Testimonials (/testimonials) [Optional]
    ├── Mentor Recommendations
    ├── Peer Reviews
    ├── Project Collaborators
    └── Hackathon Teams
```

---

## 📄 PAGE BREAKDOWN

### **1. HOME PAGE (`/`)**

**Purpose:** First impression, showcase highlights, drive navigation

**Sections:**
1. **Hero Section**
   - Name + Tagline
   - Animated subtitle (rotating skills)
   - CTA buttons: "View Projects" | "Download Resume"
   - Gradient background with particles

2. **Featured Projects** (Top 3)
   - ZERA chatbot
   - Drug Response Prediction
   - Phishing Detection
   - Cards with hover effects

3. **Skills Snapshot**
   - Icon grid (Python, C++, ML, Security)
   - Animated on scroll

4. **Latest Achievement**
   - Spotlight card (e.g., AWS Certification)

5. **CTA Section**
   - "Let's Build Something" button → Contact

---

### **2. ABOUT PAGE (`/about`)**

**Purpose:** Tell your story, build connection

**Sections:**
1. **Personal Intro**
   - Expanded bio (300-400 words)
   - Photo/Avatar

2. **Education**
   - Amrita University details
   - GPA/Achievements (if applicable)
   - Relevant coursework

3. **Technical Journey**
   - How you got into cybersecurity
   - Key learning milestones
   - Future goals

4. **Beyond Code**
   - Leadership at Live-in-Labs
   - Community work
   - Hobbies (optional)

5. **Values & Approach**
   - "Security + AI + Human oversight"
   - Problem-solving philosophy

---

### **3. SKILLS PAGE (`/skills`)**

**Purpose:** Comprehensive technical showcase

**Sections:**
1. **Programming Languages**
   - Python (Advanced)
   - C++ (Intermediate)
   - Progress bars with proficiency

2. **Frameworks & Libraries**
   - TensorFlow, Scikit-learn
   - Matplotlib, NumPy
   - Grouped by category

3. **Security Tools**
   - WireShark, BurpSuite, ZAP
   - Tool cards with icons

4. **Databases**
   - MySQL, MongoDB
   - Use cases

5. **Certifications**
   - AWS Cloud Practitioner
   - Palo Alto Network Security
   - Badge display

6. **Currently Learning**
   - Future skills roadmap

---

### **4. PROJECTS PAGE (`/projects`)**

**Purpose:** Deep dive into technical work

**Featured Projects:**

#### **Project 1: ZERA - Agentic Security Chatbot**
- **Tech Stack:** Python, LLM, MITRE ATT&CK, JWT
- **Problem:** Real-time endpoint risk scoring
- **Solution:** AI-driven remediation with audit trails
- **Impact:** Automated threat response
- **GitHub Link**
- **Live Demo** (if applicable)

#### **Project 2: Drug Response Prediction**
- **Tech Stack:** CNN, RNN, TensorFlow, GDSC datasets
- **Problem:** Predicting cancer drug sensitivity
- **Metrics:** LN_IC50, AUC, RMSE, Z-SCORE
- **Datasets:** GDSC1, GDSC2, AACR GENIE
- **Results:** Model accuracy stats

#### **Project 3: Phishing Email Detection**
- **Tech Stack:** SVM, Random Forest, NLP
- **Problem:** Malicious email identification
- **Features:** Text + metadata analysis
- **Accuracy:** 94% (example)

**Filters:**
- By Tech (Python, ML, Security)
- By Domain (Cybersecurity, Healthcare, AI)

---

### **5. EXPERIENCE PAGE (`/experience`)**

**Purpose:** Timeline-based journey visualization

**Interactive Timeline:**

```
2025 ─────●───────●────────●────── Present
          │       │        │
          │       │        └─ AWS Certified (Sept)
          │       └─ Live-in-Labs Team Lead (Apr-Jun)
          └─ IndustriAI Hackathon (Jan)

2024 ─────●───────●────────●──
          │       │        │
          │       │        └─ ACN Hackathon (Oct)
          │       └─ LAW 3rd Place (Mar)
          └─ FACT Club Mentor (Feb)
```

**Sections:**
1. **Leadership Roles**
   - Live-in-Labs (Assam) - Team Lead
   - FACT Club - Mentor
   - Tantrostav - Core Member

2. **Hackathons & Competitions**
   - IndustriAI (IIT Madras)
   - Amrita Cyber Nation
   - LAW Event - 3rd Place

3. **Publications**
   - Dimoria Speaks (ICSRF 2025 - Under Review)

4. **Certifications Timeline**

---

### **6. RESUME PAGE (`/resume`)**

**Purpose:** Downloadable, printable, shareable resume

**Features:**
- **Interactive Viewer** (HTML version)
- **Download PDF** (beautifully designed)
- **Print-Optimized** CSS
- **Share Link** (public URL)
- **Export Options:** JSON, CSV (for ATS)

---

### **7. CONTACT PAGE (`/contact`)**

**Purpose:** Easy communication

**Sections:**
1. **Contact Form**
   - Name, Email, Subject, Message
   - Form validation
   - EmailJS integration

2. **Social Links**
   - LinkedIn
   - GitHub
   - Email

3. **Availability**
   - "Currently open to internships & collaborations"
   - Expected response time

4. **Location**
   - Chennai, India (optional map)

---

### **8. TESTIMONIALS PAGE (`/testimonials`)** [Optional]

**Purpose:** Social proof

**Placeholder Testimonials:**

> "Nikhil's work on ZERA showcases deep understanding of both AI and security operations. His ability to bridge research and practical deployment is impressive."
> — **Dr. Sharma, Cybersecurity Professor**

> "As a team lead in Live-in-Labs, Nikhil demonstrated exceptional leadership and empathy while conducting field research in rural Assam."
> — **NECTAR Coordinator**

> "Nikhil mentored our team during the ACN Hackathon. His guidance on endpoint security was invaluable."
> — **FACT Club Member**

**Note:** Replace with real testimonials when available

---

## 🧭 NAVIGATION STRUCTURE

### **Primary Navigation (Desktop)**
```
[LOGO] | Home | About | Skills | Projects | Experience | Resume | Contact
```

### **Mobile Navigation**
```
[☰ Hamburger Menu]
├── Home
├── About
├── Skills
├── Projects
├── Experience
├── Resume
└── Contact
```

### **Footer Navigation**
```
Quick Links | Social Media | Legal (Privacy Policy - optional)
```

---

## 🎯 OPTIONAL SECTIONS (Future Additions)

1. **Blog** (`/blog`)
   - Technical write-ups
   - Project deep dives
   - Learning notes

2. **Playground** (`/playground`)
   - Interactive demos
   - Code snippets
   - Mini-projects

3. **Resources** (`/resources`)
   - Useful tools
   - Learning materials
   - Recommended reads

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile First Approach */
mobile:     320px - 640px
tablet:     641px - 1024px
desktop:    1025px - 1440px
wide:       1441px+
```

---

## 🔍 SEO STRUCTURE

**Meta Tags for Each Page:**
- Title: "Nikhil Chandan - [Page Name] | Cybersecurity Engineer"
- Description: Custom per page
- Keywords: "cybersecurity, AI security, MITRE ATT&CK, endpoint protection, machine learning"
- OG Image: Custom social share image

---

*This sitemap serves as the blueprint for the complete portfolio build.*
