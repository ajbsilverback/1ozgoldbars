# 1ozGoldBars.com

An educational microsite about 1 oz gold bars built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Comprehensive overview of 1 oz gold bars, including benefits, target audience, and comparisons
- **Prices Page**: Live gold pricing with Monex widgets and educational content about premiums
- **Resources**: 10 in-depth educational articles covering:
  - Understanding Premiums
  - Liquidity Benefits
  - Storage Options
  - Brand Differences (PAMP, Perth, Credit Suisse)
  - Size Comparison (1oz vs 10oz vs Kilo)
  - Market Dynamics
  - Bid-Ask Spreads
  - Safe Handling
  - Bars vs Coins
  - Market History

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── prices/
│   │   └── page.tsx        # Gold prices page
│   └── resources/
│       ├── page.tsx        # Resources index
│       └── [slug]/
│           └── page.tsx    # Dynamic resource pages
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── MonexWidgets.tsx
├── config/
│   └── site.ts             # Site configuration
└── data/
    ├── resources.ts        # Resource metadata
    └── article-content.ts  # Article content
```

## SEO Features

- Schema.org markup on all pages (WebPage, Product, Article, FAQPage)
- OpenGraph and Twitter meta tags
- Semantic HTML structure
- Canonical URLs
- Robots.txt and sitemap.xml

## Deployment

This site is configured for deployment on Vercel with `output: "standalone"` in next.config.ts.

## License

All rights reserved.

