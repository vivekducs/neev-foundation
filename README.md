# Neev Welfare Foundation

> **Building Hope. Empowering Lives. Strengthening Communities.**

A modern, high-performance web and mobile web application built with **Next.js 15+ (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion 3D physics**. Designed for **Neev Welfare Foundation**, a Section 8 registered non-profit organization pursuing **Clause III** of its Memorandum of Association (MOA) to drive sustainable grassroots development, child protection, youth skilling, women self-help collectives, public healthcare, and climate resilience across India.

---

## 🌟 Key Features

### 1. Pure White Vibe Design System
- **Crisp Canvas**: Pure white (`#FFFFFF`) with subtle slate contrast (`#0F172A`), warm sunset orange (`#EB8317`), and golden amber (`#F3C623`) accents.
- **Micro-Animations & 3D Tilt**: Interactive perspective tilt on cards with specular glare highlights and spring physics.
- **Scroll Reveals**: Smooth staggered section entry transitions.

### 2. Native Mobile Bottom App Dock
- Automatically transitions into an app-like bottom navigation dock on mobile and tablet screens.
- Includes animated active pill indicators (`layoutId="activeDockPill"`).
- Quick Action Sheet (`+`) for rapid access to CSR partnership forms, case studies, and donor dashboards.

### 3. MOA Clause III Strategic Alignment
- **Child Welfare & Education** (Clause III A - Item 1): Remedial schooling, child rights, and nutrition kits.
- **Youth Empowerment & Skill Centers** (Clause III A - Items 2 & 6): Healthcare skilling, NSDC-aligned vocational training, and Rozgar Melas.
- **Women Empowerment & SHGs** (Clause III A - Item 3): Micro-enterprises, financial literacy, and bank linkages.
- **Digital Literacy & E-Libraries** (Clause III A - Item 4): Smart community learning hubs and tablet classrooms.
- **Public Healthcare & Nutrition** (Clause III A - Item 5): Multi-specialty diagnostic camps, maternal care, and blood donation drives.
- **Environment & Water Conservation** (Clause III A - Items 8, 9 & 10): Rainwater harvesting, check dams, and social forestry.
- **Emerging Tech & AI Tinkering Labs** (Clause III A - Item 11): STEAM robotics, IoT, and foundational coding bootcamps.
- **Clause III (B) Enabling Powers**: CSR project execution under Section 135 & Schedule VII, Government Project Implementation Agency (PIA) partnerships, disaster relief, and independent social impact audits.

### 4. Geo-Friendly Regional Center Locator (`/geo-centers`)
- Interactive directory with state/district filters and status indicators (*Operational*, *CSR Co-Funded*, *Upcoming*).
- Center codes (e.g. `[NWF-DL-01]`, `[NWF-UP-02]`, `[NWF-MH-03]`, `[NWF-RJ-04]`, `[NWF-JH-05]`, `[NWF-MP-06]`).
- Embeds **Schema.org `CivicStructure`** and **`GeoCoordinates`** for local SEO visibility.

### 5. Verified Grassroots Impact Stories (`/impact-stories`)
- Filterable case studies with Challenge $\rightarrow$ Intervention $\rightarrow$ Outcome breakdowns.
- Dignity-first reporting using verified pseudonyms and center reference tags.

### 6. CSR & Government Partnerships (`/csr-partnerships`)
- MCA CSR-1 registration (`[CSR00098765]`), 80G & 12A statutory details.
- 4-Stage CSR Delivery Model (*Need Assessment* $\rightarrow$ *Center Mobilization* $\rightarrow$ *Rozgar Linkage* $\rightarrow$ *Social Audit*).
- Interactive CSR proposal request form with domain and budget tier selectors.

### 7. Live Donor & Project Progress Dashboard (`/donor-dashboard`)
- Live milestone timeline tracker with statutory audit verifications.
- Budget deployment and fund utilization progress bars.
- Instant **Simulated 80G Tax Exemption Receipt Generator** preview.

### 8. SEO & Geo Optimization
- Dynamic JSON-LD structured data (`NGO` and `CivicStructure`).
- Geo-location meta tags (`geo.region: IN`, `geo.placename: India`, `ICBM`).
- Semantic HTML5 with unique element identifiers.
- Zero fabricated data — uses clean, verifiable placeholders.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 & Custom Design Tokens
- **Animations & 3D Physics**: Framer Motion
- **Icons**: Lucide React
- **Optimization**: Turbopack & Static Prerendering

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/vivekducs/neev-foundation.git
cd neev-foundation

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with SEO metadata & MobileAppDock
│   │   ├── page.tsx               # Homepage with 3D hero & impact highlights
│   │   ├── globals.css            # Pure white design system & 3D utilities
│   │   ├── focus-areas/page.tsx   # MOA Clause III detailed objectives
│   │   ├── geo-centers/page.tsx   # Regional center locator & schema metadata
│   │   ├── impact-stories/page.tsx# Grassroots beneficiary stories
│   │   ├── csr-partnerships/page.tsx # CSR governance & proposal inquiry
│   │   └── donor-dashboard/page.tsx  # Live milestone tracking & 80G preview
│   ├── components/
│   │   ├── Navbar.tsx             # Responsive glassmorphic header
│   │   ├── Footer.tsx             # Statutory information & Clause III links
│   │   ├── MobileAppDock.tsx      # Native mobile bottom app navigation bar
│   │   ├── Motion3DCard.tsx       # Reusable 3D tilt perspective card
│   │   └── StructuredData.tsx     # JSON-LD Schema.org NGO component
│   └── data/
│       ├── centersData.ts         # Regional centers directory with geo-coordinates
│       ├── focusAreasData.ts      # Clause III charter objects dataset
│       ├── impactStoriesData.ts   # Verified case studies dataset
│       └── dashboardData.ts       # Active projects, milestones, & utilization
├── public/                        # Static assets & icons
├── package.json
└── README.md
```

---

## 📜 Statutory & Legal Note

Neev Welfare Foundation is incorporated under Clause III of its Memorandum of Association. All field figures and metrics in this repository utilize placeholder formats for independent statutory verification.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
