export const SITE_CONFIG = {
  domain: "https://www.1ozgoldbars.com",
  canonicalDomain: "https://www.1ozgoldbars.com",
  brandName: "1ozGoldBars.com",

  primaryProduct: "1 oz gold bars",
  metal: "gold",
  form: "bars",
  sizeOrSeries: "1 oz",

  angle:
    "investors seeking highly liquid, divisible, globally recognized gold bar holdings",

  monexLinks: [
    "https://www.monex.com/1-oz-gold-bullion-bars-for-sale/",
    "https://www.monex.com/gold-prices/",
    "https://www.monex.com/investing-in-gold/",
    "https://www.monex.com/1-oz-gold-bullion-bar-price-charts/",
    "https://www.monex.com/knowledge-base/gold-investing/gold-bullion/1oz-gold-bullion-bars/",
    "https://www.monex.com/knowledge/1-oz-gold-bar-legacy/",
    "https://www.monex.com/knowledge/the-making-of-1-oz-gold-bars/",
    "https://www.monex.com/knowledge/understanding-1-oz-gold-bar-prices/",
    "https://www.monex.com/knowledge/owning-1-oz-gold-bars/",
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;

