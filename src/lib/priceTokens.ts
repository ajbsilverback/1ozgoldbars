/**
 * Dynamic Price Token System
 * 
 * Allows FAQ/content authors to use tokens like {{CAPITAL_REQUIREMENT}} 
 * instead of hard-coded dollar amounts. Tokens are replaced with live
 * values from the pricing API at render time.
 * 
 * Supported tokens:
 * - {{CAPITAL_REQUIREMENT}} -> Product ask price rounded (e.g., "~$2,700")
 * - {{CAPITAL_REQUIREMENT_RANGE}} -> Ask ± premium band (e.g., "~$2,600–$2,800")
 * - {{CAPITAL_REQUIREMENT_PLUS}} -> Ask rounded with plus (e.g., "~$2,700+")
 * - {{LIQUIDITY_THRESHOLD}} -> Same as CAPITAL_REQUIREMENT_PLUS
 * - {{GBXSPOT}} -> Gold spot price per ounce (e.g., "$2,650")
 * - {{GBXSPOT_5PCT}} -> Spot + 5% premium (e.g., "$2,783")
 * - {{GBXSPOT_10X}} -> Spot × 10 for 10oz examples (e.g., "$26,500")
 * - {{GBXSPOT_2K_TO_SPOT}} -> Dynamic replacement showing current spot (e.g., "$2,650")
 * 
 * IMPORTANT: This system is designed to be reusable across sites.
 * To adapt for a different product, only change siteConfig.ts - 
 * the tokens and content remain the same.
 */

import { ProductSpotSummary, MetalSpotIndexSummary } from "./monexSpot";

/**
 * Configuration for price display
 */
export interface PriceTokenConfig {
  /** Premium band percentage for range calculations (default 5%) */
  premiumBandPercent?: number;
  /** Rounding increment in dollars (default 100) */
  roundingIncrement?: number;
}

const DEFAULT_CONFIG: Required<PriceTokenConfig> = {
  premiumBandPercent: 5,
  roundingIncrement: 100,
};

/**
 * Rounds a number to the nearest increment
 */
function roundToNearest(value: number, increment: number): number {
  return Math.round(value / increment) * increment;
}

/**
 * Formats a price value for display (e.g., "~$132,500")
 */
function formatPrice(value: number, prefix: string = "~"): string {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
  return `${prefix}${formatted}`;
}

/**
 * Token types supported by the system
 */
export type PriceTokenType = 
  | "CAPITAL_REQUIREMENT"           // ~$132,500 (ask price rounded)
  | "CAPITAL_REQUIREMENT_RANGE"     // ~$126,000–$139,000 (ask ± premium band)
  | "CAPITAL_REQUIREMENT_PLUS"      // ~$132,500+ (ask rounded with plus)
  | "LIQUIDITY_THRESHOLD"           // ~$132,500+ (same as plus, for liquidity context)
  | "GBXSPOT"                       // $2,650 (gold spot price per ounce)
  | "GBXSPOT_5PCT"                  // $2,783 (spot + 5% premium)
  | "GBXSPOT_10X"                   // $26,500 (spot × 10 for 10oz comparisons)
  | "GBXSPOT_2K_TO_SPOT"            // $2,650 (alias for GBXSPOT for migration)
  | "GBXSPOT_KILO_2PCT"             // $86,900 (spot × 32.15 × 1.02 for kilo bar examples)
  | "GBXSPOT_KILO_5PCT"             // $89,400 (spot × 32.15 × 1.05 for kilo bar vs 1oz comparison)
  | "GBXSPOT_KILO_DIFF";            // $2,500 (difference between kilo at 5% vs 2% premium)

/**
 * Regex pattern to match tokens in strings
 * Matches: {{TOKEN_NAME}}
 */
const TOKEN_PATTERN = /\{\{(CAPITAL_REQUIREMENT|CAPITAL_REQUIREMENT_RANGE|CAPITAL_REQUIREMENT_PLUS|LIQUIDITY_THRESHOLD|GBXSPOT|GBXSPOT_5PCT|GBXSPOT_10X|GBXSPOT_2K_TO_SPOT|GBXSPOT_KILO_2PCT|GBXSPOT_KILO_5PCT|GBXSPOT_KILO_DIFF)\}\}/g;

/**
 * Extended price data that can include both product prices and spot index
 */
export interface ExtendedPriceData {
  product?: ProductSpotSummary | null;
  spotIndex?: MetalSpotIndexSummary | null;
}

/**
 * Helper to format spot price (no ~ prefix, rounded to nearest dollar)
 */
function formatSpotPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

/**
 * Resolves a single token to its display value
 */
export function resolveToken(
  tokenType: PriceTokenType,
  priceData: ProductSpotSummary | null,
  config: PriceTokenConfig = {},
  spotIndexData?: MetalSpotIndexSummary | null
): string {
  const { premiumBandPercent, roundingIncrement } = { ...DEFAULT_CONFIG, ...config };

  // For GBXSPOT tokens, use spot index data
  if (tokenType.startsWith("GBXSPOT")) {
    // Try spot index data first, fall back to product data if available
    const spotPrice = spotIndexData?.last || spotIndexData?.ask || priceData?.bid || 0;
    
    if (spotPrice <= 0) {
      return "current spot price";
    }

    // Kilo bar constants
    const KILO_OZ = 32.15; // troy ounces per kilo

    switch (tokenType) {
      case "GBXSPOT":
      case "GBXSPOT_2K_TO_SPOT":
        return formatSpotPrice(spotPrice);

      case "GBXSPOT_5PCT":
        return formatSpotPrice(spotPrice * 1.05);

      case "GBXSPOT_10X":
        return formatSpotPrice(spotPrice * 10);

      case "GBXSPOT_KILO_2PCT":
        // Kilo bar at 2% premium: spot × 32.15 × 1.02
        return formatSpotPrice(Math.round(spotPrice * KILO_OZ * 1.02 / 100) * 100);

      case "GBXSPOT_KILO_5PCT":
        // Same gold content as 1oz bars at 5% average premium: spot × 32.15 × 1.05
        return formatSpotPrice(Math.round(spotPrice * KILO_OZ * 1.05 / 100) * 100);

      case "GBXSPOT_KILO_DIFF":
        // Difference between kilo at 5% premium vs 2% premium
        const at2pct = spotPrice * KILO_OZ * 1.02;
        const at5pct = spotPrice * KILO_OZ * 1.05;
        return formatSpotPrice(Math.round((at5pct - at2pct) / 100) * 100);

      default:
        return formatSpotPrice(spotPrice);
    }
  }

  // If no price data available, return a sensible fallback
  if (!priceData || priceData.ask <= 0) {
    return "current market price";
  }

  const askPrice = priceData.ask;
  const roundedAsk = roundToNearest(askPrice, roundingIncrement);

  switch (tokenType) {
    case "CAPITAL_REQUIREMENT":
      return formatPrice(roundedAsk);

    case "CAPITAL_REQUIREMENT_RANGE": {
      const lowBound = roundToNearest(askPrice * (1 - premiumBandPercent / 100), roundingIncrement);
      const highBound = roundToNearest(askPrice * (1 + premiumBandPercent / 100), roundingIncrement);
      return `${formatPrice(lowBound)}–${formatPrice(highBound).replace("~", "")}`;
    }

    case "CAPITAL_REQUIREMENT_PLUS":
    case "LIQUIDITY_THRESHOLD":
      return `${formatPrice(roundedAsk)}+`;

    default:
      return "current market price";
  }
}

/**
 * Replaces all tokens in a string with their resolved values
 * 
 * @param text - The string containing tokens (e.g., "Costs {{CAPITAL_REQUIREMENT}}")
 * @param priceData - The fetched price data (or null if unavailable)
 * @param config - Optional configuration for formatting
 * @param spotIndexData - Optional spot index data for GBXSPOT tokens
 * @returns The string with all tokens replaced
 */
export function replaceTokens(
  text: string,
  priceData: ProductSpotSummary | null,
  config: PriceTokenConfig = {},
  spotIndexData?: MetalSpotIndexSummary | null
): string {
  return text.replace(TOKEN_PATTERN, (match, tokenType: PriceTokenType) => {
    return resolveToken(tokenType, priceData, config, spotIndexData);
  });
}

/**
 * Checks if a string contains any price tokens
 */
export function hasTokens(text: string): boolean {
  TOKEN_PATTERN.lastIndex = 0; // Reset regex state
  return TOKEN_PATTERN.test(text);
}

/**
 * Gets all tokens found in a string
 */
export function findTokens(text: string): PriceTokenType[] {
  const tokens: PriceTokenType[] = [];
  let match;
  const pattern = new RegExp(TOKEN_PATTERN.source, "g");
  while ((match = pattern.exec(text)) !== null) {
    tokens.push(match[1] as PriceTokenType);
  }
  return tokens;
}



