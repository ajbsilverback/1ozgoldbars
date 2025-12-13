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
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── where-to-buy.../
│   │   └── page.tsx        # Buying guide
│   └── resources/
│       ├── page.tsx        # Resources index
│       └── [slug]/
│           └── page.tsx    # Dynamic resource pages
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LiveGbozSpotCard.tsx    # Product price card
│   ├── LiveGoldSpotIndexCard.tsx # Spot index card
│   └── MonexWidgets.tsx
├── lib/
│   ├── siteConfig.ts       # ⭐ SINGLE SOURCE OF TRUTH
│   └── monexSpot.ts        # Pricing API utilities
└── data/
    ├── resources.ts        # Resource metadata
    └── article-content.ts  # Article content
```

---

## How to Clone This Template for a New Domain

This template is designed to be easily cloned for other precious metals microsites (e.g., 10ozsilverbars.com, 1kilogoldbars.com).

### Step 1: Clone and Rename

```bash
git clone https://github.com/your-org/1ozgoldbars.git new-site-name
cd new-site-name
rm -rf .git
git init
```

### Step 2: Update Site Configuration

Edit **`src/lib/siteConfig.ts`** — this is the single source of truth:

```typescript
export const SITE_CONFIG = {
  // DOMAIN & BRANDING
  domain: "https://www.yournewdomain.com",
  canonicalDomain: "https://www.yournewdomain.com",
  brandName: "YourNewDomain.com",

  // PRODUCT DEFINITION
  primaryProduct: "10 oz silver bars",  // or your product
  metal: "silver",                       // gold | silver | platinum | palladium
  form: "bars",                          // bars | coins | rounds
  sizeOrSeries: "10 oz",

  // MONEX API SYMBOLS
  productSymbol: "SBOZ",    // Check Monex API for correct symbol
  spotSymbol: "SBXSPOT",    // Spot index symbol

  // Update monexLinks array with relevant URLs
  monexLinks: [
    "https://www.monex.com/your-product-page/",
    // ...
  ],
};
```

### Step 3: Update Content

1. **`src/data/resources.ts`** — Update article slugs, titles, and Monex links
2. **`src/data/article-content.ts`** — Rewrite article content for your product
3. **`src/data/qa-content.ts`** — Update Q&A for your product
4. **`public/llms.txt`** — Update the static LLM description file
5. **Page copy** — Update text on home, prices, about, and where-to-buy pages

### Step 4: Update Assets

- Replace images in `/public/` with your product images
- Update `og-image.jpg` for social sharing

### Step 5: Find & Replace Hardcoded References

Search the codebase for any remaining hardcoded references:

```bash
grep -rn "1ozgoldbars\|1 oz gold\|GBOZ" src/
```

### Step 6: Test & Deploy

```bash
npm install
npm run build   # Verify no build errors
npm run dev     # Test locally
```

### Monex API Symbol Reference

| Product | Symbol | Spot Symbol |
|---------|--------|-------------|
| 1 oz Gold Bar | GBOZ | GBXSPOT |
| 10 oz Gold Bar | GB10OZ | GBXSPOT |
| 1 kg Gold Bar | GBKG | GBXSPOT |
| 1 oz Silver Bar | SBOZ | SBXSPOT |
| 10 oz Silver Bar | SB10OZ | SBXSPOT |
| 100 oz Silver Bar | SB100OZ | SBXSPOT |

Check the Monex API for the full list: `https://api.monex.com/api/v2/Metals/spot/summary`

---

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


