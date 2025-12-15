/**
 * SITE CONFIGURATION - Single Source of Truth
 * 
 * Configuration for 1ozgoldbars.com
 */

export const SITE_CONFIG = {
  // DOMAIN & BRANDING
  domain: "https://www.1ozgoldbars.com",
  canonicalDomain: "https://www.1ozgoldbars.com",
  brandName: "1ozGoldBars",

  // PRODUCT DEFINITION
  primaryProduct: "1 oz gold bars",
  metal: "gold",
  form: "bars",
  sizeOrSeries: "1 oz",
  troyOunces: 1.0,

  // MONEX PRICE SYMBOL
  productSymbol: "GBOZ",

  // FEATURES
  features: {
    resourcesEnabled: true,
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;

/**
 * Helper: Get Monex API URL for product symbol
 */
export function getProductApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.productSymbol}`;
}

/**
 * Helper: Get Monex API URL for spot symbol (GBXSPOT)
 */
export function getSpotApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=GBXSPOT`;
}
