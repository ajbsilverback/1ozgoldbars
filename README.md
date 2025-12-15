# 1ozGoldBars.com

An educational microsite about 1 oz gold bars built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Comprehensive overview of 1 oz gold bars, including benefits, key specifications, and size comparisons
- **Prices Page**: Live gold pricing with GBOZ and GBXSPOT data, plus educational content about premiums
- **Resources**: 16 in-depth educational articles covering:
  - What Is a 1 oz Gold Bar?
  - How Much Is a 1 oz Gold Bar Worth?
  - Understanding Premiums on 1 oz Bars
  - 1 oz Gold Bar vs Gold Coins
  - How to Buy 1 oz Gold Bars Safely
  - Storage and Authentication Basics
  - Liquidity and Resale Considerations
  - Tax Considerations (General Disclaimer)
- **Where to Buy**: Independent dealer guide with multiple sources and neutrality disclaimer
- **About**: Site mission and editorial independence

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
│   ├── live-gold-prices/
│   │   └── page.tsx        # Gold prices page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── where-to-buy/
│   │   └── page.tsx        # Buying guide
│   └── resources/
│       ├── page.tsx        # Resources index
│       └── [slug]/
│           └── page.tsx    # Dynamic resource pages
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LiveGbozSpotCard.tsx    # 1 oz bar price card
│   ├── LiveGoldSpotIndexCard.tsx # Spot index card
│   └── MonexWidgets.tsx
├── lib/
│   ├── siteConfig.ts       # ⭐ SINGLE SOURCE OF TRUTH
│   ├── monexSpot.ts        # Pricing API utilities
│   └── schema.ts           # JSON-LD schema helpers
└── data/
    ├── resources-1oz.ts       # Resource metadata
    ├── resources-1oz-content.ts # Article content
    ├── resources-1oz-faq.ts   # FAQ content for schema
    └── qa-content.ts          # Q&A content
```

## API Configuration

This site uses the Monex API for pricing data:

- **Product Symbol**: GBOZ (1 oz gold bar)
- **Spot Symbol**: GBXSPOT (Gold spot index)

API endpoints:
- `https://api.monex.com/api/v2/Metals/spot/summary?metals=GBOZ`
- `https://api.monex.com/api/v2/Metals/spot/summary?metals=GBXSPOT`

Prices are fetched once per page load (no polling/intervals).

## SEO Features

- Schema.org markup on all pages (WebPage, Product, Article, FAQPage, CollectionPage)
- OpenGraph and Twitter meta tags
- Semantic HTML structure
- Canonical URLs
- Robots.txt and sitemap.xml
- llms.txt for AI crawlers

## Deployment

This site is configured for deployment on Vercel.

## License

All rights reserved.
