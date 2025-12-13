/**
 * SITE CONFIGURATION - Single Source of Truth
 * 
 * To clone this template for a new domain:
 * 1. Update all values below to match your new product/site
 * 2. Run `npm run build` to verify no hardcoded values remain
 * 3. Update content in /data folder to match your product
 */

export const SITE_CONFIG = {
  // ============================================================
  // DOMAIN & BRANDING (Change these for your new site)
  // ============================================================
  
  /** Primary domain with https:// prefix */
  domain: "https://www.1ozgoldbars.com",
  
  /** Canonical domain (usually same as domain) */
  canonicalDomain: "https://www.1ozgoldbars.com",
  
  /** Brand name displayed in UI and metadata */
  brandName: "1ozGoldBars.com",

  // ============================================================
  // PRODUCT DEFINITION (Change these for your product)
  // ============================================================
  
  /** Primary product name (e.g., "1 oz gold bars", "10 oz silver bars") */
  primaryProduct: "1 oz gold bars",
  
  /** Metal type: "gold" | "silver" | "platinum" | "palladium" */
  metal: "gold",
  
  /** Product form: "bars" | "coins" | "rounds" */
  form: "bars",
  
  /** Size or series identifier */
  sizeOrSeries: "1 oz",

  // ============================================================
  // MONEX API SYMBOLS (Change these for your product)
  // ============================================================
  
  /** 
   * Product price symbol for Monex API
   * Examples: "GBOZ" (1oz gold bar), "SBOZ" (1oz silver bar)
   * Full list: https://api.monex.com/api/v2/Metals/spot/summary
   */
  productSymbol: "GBOZ",
  
  /**
   * Spot index symbol for Monex API (raw metal spot price)
   * Examples: "GBXSPOT" (gold spot), "SBXSPOT" (silver spot)
   */
  spotSymbol: "GBXSPOT",

  // ============================================================
  // CONTENT & MESSAGING
  // ============================================================
  
  /** Target audience description */
  angle:
    "investors seeking highly liquid, divisible, globally recognized gold bar holdings",

  /** Array of relevant Monex.com links for citations */
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

/**
 * Helper: Get Monex API URL for product symbol
 */
export function getProductApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.productSymbol}`;
}

/**
 * Helper: Get Monex API URL for spot symbol
 */
export function getSpotApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.spotSymbol}`;
}

