# Appscrip-task-YourName

A Product Listing Page (PLP) built for the Appscrip frontend assignment.

**Live Demo:** https://your-site.netlify.app  
**GitHub:** https://github.com/yourusername/Appscrip-task-YourName

---

## Tech Stack

- **Framework:** Next.js (Pages Router)
- **Rendering:** Server Side Rendering (SSR) via `getServerSideProps`
- **Styling:** Plain CSS (no Tailwind, no Bootstrap)
- **Icons:** lucide-react
- **Data:** FakeStore API (https://fakestoreapi.com)

---

## Folder Structure
```
appscrip-task-yourname/
├── public/
│   ├── favicon.ico
│   └── images/           ← static images (logo etc. if any)
├── src/
│   ├── components/
│   │   ├── Header.js     ← Top banner, logo, nav, mobile menu
│   │   ├── Sidebar.js    ← Filter panel with accordion sections
│   │   ├── ProductGrid.js← Product cards with wishlist toggle
│   │   └── Footer.js     ← Newsletter, links, mobile accordion
│   ├── pages/
│   │   ├── _app.js       ← Global CSS import
│   │   ├── _document.js  ← SEO meta tags, schema, fonts
│   │   └── index.js      ← Main page with SSR data fetching
│   └── styles/
│       └── globals.css   ← All styles (plain CSS)
├── netlify.toml          ← Netlify deployment config
├── next.config.js        ← Next.js config
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/yourusername/Appscrip-task-YourName.git

# 2. Navigate into the project
cd Appscrip-task-YourName

# 3. Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## Features

- ✅ Server Side Rendering (SSR) — products fetched server-side via `getServerSideProps`
- ✅ Responsive — mobile, tablet, desktop layouts
- ✅ Filter sidebar with accordion sections (desktop) / bottom sheet (mobile)
- ✅ Custom sort dropdown (Recommended, Newest, Popular, Price High/Low)
- ✅ Wishlist toggle per product
- ✅ SEO — page title, meta description, H1/H2 tags, schema markup, alt text
- ✅ Breadcrumb navigation
- ✅ Mobile footer with collapsible accordion sections
- ✅ Plain CSS only — no CSS frameworks

---

## SEO

Configured in `src/pages/_document.js`:
- Page `<title>` and `<meta name="description">`
- Open Graph tags
- JSON-LD Schema (`CollectionPage` + `BreadcrumbList`)
- Semantic HTML with proper `<h1>`, `<h2>` hierarchy
- `alt` text on all product images
- SEO-friendly image names from API

---

## Deployment

Hosted on **Netlify** with the `@netlify/plugin-nextjs` adapter.
```toml
# netlify.toml
[[plugins]]
package = "@netlify/plugin-nextjs"

[build]
  command = "npm run build"
  publish = ".next"
```

To deploy your own:
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) → New site → Import from Git
3. Select your repo — Netlify auto-detects Next.js
4. Click **Deploy**

---

## Dependencies
```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "lucide-react": "^0.x"
  },
  "devDependencies": {
    "@netlify/plugin-nextjs": "latest"
  }
}
```