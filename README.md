# Mahadeer Mohamed — "The Test Lab" Portfolio

[![Framework: Next.js 15](https://img.shields.io/badge/Next.js-15.1-black?logo=next.js)](https://nextjs.org/)
[![3D: Three.js / R3F](https://img.shields.io/badge/Three.js-R3F%20v9-00ff9d?logo=three.js)](https://docs.pmnd.rs/react-three-fiber)
[![Animations: GSAP + Lenis](https://img.shields.io/badge/Motion-GSAP%20%2B%20Lenis-38bdf8)](https://gsap.com/)
[![QA Status: 100% Pass](https://img.shields.io/badge/QA%20Status-0%20Defects-00ff9d)](#)

A premium, 3D-animated personal portfolio for **Mahadeer Mohamed** (*Software Tester | Front-End Developer*, targeting QA Automation Engineer roles). 

Designed around the metaphor of **"The Test Lab"**: floating glowing "bug" particles drift in the hero section and, as the user scrolls, are systematically captured and transmuted into glowing green pass checkmarks (`00ff9d`), telling a cohesive visual story uniting software testing and front-end development.

---

## 🔬 Key Architectural Highlights

- **Single Persistent 3D Scene:** Built with `@react-three/fiber` and `@react-three/drei`, loaded lazily after first paint (`ssr: false`) with zero scroll capture.
- **Bug-to-Pass Particle Transmutation:** Single `InstancedMesh` (400+ particles) running Brownian noise jitter at the top and settling into an orderly green pass-matrix along a cubic Bezier camera dolly scrubbed by GSAP `ScrollTrigger` and `Lenis`.
- **QA-First Project Breakdown:** Every project showcases not only tech stacks and live demos, but a dedicated **"How I Tested It"** section covering boundary value analysis, WebGL stress tests, RBAC route penetration, and OTP security validations (GroFit, Jyothi Tiles, Grozet, and Staff-Admin PM System).
- **100% Verified Resume Truth:** Strictly aligned with `mahadeer_tesdev.pdf` — no invented metrics, employers, or certifications.
- **Mobile & Battery Capped:** Clamped device pixel ratio ($\text{DPR} \le 1.5$), reduced particles on mobile, and full support for `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router) + React 19 + TypeScript |
| **Styling** | Tailwind CSS (custom dark Test Lab theme: `#07080c`, `#00ff9d`, `#38bdf8`) |
| **3D Engine** | Three.js + React Three Fiber + Drei |
| **Scroll & Motion** | GSAP ScrollTrigger + Lenis Smooth Scroll + Framer Motion |
| **Icons & Effects** | Lucide React + Canvas Confetti |
| **Deployment** | Vercel (Edge-optimized) |

---

## 🚀 Running Locally

### 1. Prerequisites
- Node.js 18.17+ or 20+ (tested on Node v22)
- npm or pnpm / yarn

### 2. Installation
Clone or navigate to the project directory:
```bash
cd mypotfolio
npm install
```

### 3. Development Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Test
Verify types, bundles, and static page generation:
```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial test lab portfolio"
   git branch -M main
   git remote add origin https://github.com/mahadeer7/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. **Build Settings:**
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`
5. Click **Deploy**. Vercel will build and assign a global CDN URL (e.g. `mahadeer.vercel.app`).

---

## 📋 Short List of TODOs for Your Input

Before final public launch, consider customizing the following optional items in `src/lib/constants.ts`:

- [ ] **Custom Domain:** Link your custom domain (e.g., `mahadeer.dev` or `mahadeer.in`) in Vercel Project Settings > Domains.
- [ ] **Third-Party Email API (Optional):** The contact form currently features instant client-side validation, success feedback, and a celebration effect. If you wish to forward messages directly to your inbox without user email clients, add your EmailJS / Resend API keys.
- [ ] **GitHub Profile URL:** Confirm whether `https://github.com/mahadeer7` matches your exact GitHub username.
- [ ] **Certifications (When Ready):** As you complete your ISTQB or Selenium with Java certifications, you can add them to the Education & Certifications matrix in `src/lib/constants.ts`.

