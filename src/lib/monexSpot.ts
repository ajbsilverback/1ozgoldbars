/**
 * Server-side utility for fetching GBOZ (Gold Bullion Ounce) spot price from Monex API
 * Fetches ONCE per page load - NO auto-refresh, NO intervals, NO polling, NO background revalidation
 */

/**
 * TypeScript interface for GBOZ Spot Summary from Monex API
 * 
 * API Response shape (data[0]):
 * {
 *   "symbol": "GBOZ",
 *   "baseCurrency": "USD",
 *   "last": 4371.0,
 *   "bid": 4211.0,
 *   "ask": 4371.0,
 *   "high": 4444.0,
 *   "low": 4351.0,
 *   "open": 4430.0,
 *   "previousClose": 4369.0,
 *   "timestamp": "2025-12-12 17:18:12Z"
 * }
 */
export interface GbozSpotSummary {
  symbol: string;
  baseCurrency: string;
  last: number;
  bid: number;
  ask: number;
  high: number;
  low: number;
  open: number;
  previousClose: number;
  timestamp: string;
  // Computed fields
  change: number;
  changePercent: number;
}

const MONEX_API_URL = "https://api.monex.com/api/v2/Metals/spot/summary?metals=GBOZ";

/**
 * Fetches the current GBOZ spot price from Monex API
 * 
 * Uses cache: 'no-store' to ensure:
 * - Data is fetched fresh on each page load ONLY
 * - No background revalidations
 * - No subsequent client-side updates
 * 
 * @returns Promise<GbozSpotSummary | null> - The spot price data or null on error
 */
export async function fetchGbozSpot(): Promise<GbozSpotSummary | null> {
  try {
    const response = await fetch(MONEX_API_URL, {
      cache: "no-store", // Fresh fetch on each page load, no caching
      headers: {
        "Accept": "application/json",
      },
    });

    // If response.ok is false → return null
    if (!response.ok) {
      console.error(`Monex API error: ${response.status} ${response.statusText}`);
      return null;
    }

    const json = await response.json();

    // Handle different possible response shapes
    let gbozData: Record<string, unknown> | null = null;

    if (Array.isArray(json)) {
      // Response is an array - find GBOZ
      gbozData = json.find(
        (item: Record<string, unknown>) => 
          item.symbol === "GBOZ" || item.metal === "GBOZ"
      ) || json[0] || null;
    } else if (json && typeof json === "object") {
      // Response is an object
      if (json.GBOZ) {
        // Keyed by symbol: { GBOZ: { ... } }
        gbozData = json.GBOZ;
      } else if (json.data && Array.isArray(json.data)) {
        // Wrapped in data property: { data: [...] }
        gbozData = json.data.find(
          (item: Record<string, unknown>) => 
            item.symbol === "GBOZ" || item.metal === "GBOZ"
        ) || json.data[0] || null;
      } else if (json.data && typeof json.data === "object") {
        // Wrapped in data object: { data: { GBOZ: {...} } }
        gbozData = json.data.GBOZ || json.data;
      } else if (json.symbol === "GBOZ" || json.metal === "GBOZ") {
        // Direct GBOZ object
        gbozData = json;
      } else if (json.bid !== undefined || json.ask !== undefined || json.last !== undefined) {
        // Has price data directly
        gbozData = json;
      } else {
        // Try first key that looks like data
        const keys = Object.keys(json);
        for (const key of keys) {
          const val = json[key];
          if (val && typeof val === "object" && (val.bid !== undefined || val.ask !== undefined || val.last !== undefined)) {
            gbozData = val;
            break;
          }
        }
      }
    }

    if (!gbozData) {
      console.error("Monex API: Could not extract GBOZ data from response");
      return null;
    }

    // Extract price values with fallbacks
    const last = Number(gbozData.last ?? gbozData.Last ?? gbozData.price ?? 0);
    const bid = Number(gbozData.bid ?? gbozData.Bid ?? gbozData.bidPrice ?? 0);
    const ask = Number(gbozData.ask ?? gbozData.Ask ?? gbozData.askPrice ?? last ?? 0);
    const high = Number(gbozData.high ?? gbozData.High ?? gbozData.dayHigh ?? 0);
    const low = Number(gbozData.low ?? gbozData.Low ?? gbozData.dayLow ?? 0);
    const open = Number(gbozData.open ?? gbozData.Open ?? gbozData.dayOpen ?? 0);
    const previousClose = Number(gbozData.previousClose ?? gbozData.PreviousClose ?? gbozData.close ?? gbozData.Close ?? 0);
    
    // Validate we have at least some price data
    if (bid === 0 && ask === 0 && last === 0) {
      console.error("Monex API: No price data found in response");
      return null;
    }

    // Compute change vs previousClose
    const currentPrice = ask || last;
    const change = previousClose > 0 ? currentPrice - previousClose : 0;
    const changePercent = previousClose > 0 ? (change / previousClose) * 100 : 0;

    // Map to our interface
    const spotSummary: GbozSpotSummary = {
      symbol: String(gbozData.symbol || gbozData.Symbol || gbozData.metal || "GBOZ"),
      baseCurrency: String(gbozData.baseCurrency || gbozData.BaseCurrency || gbozData.currency || "USD"),
      last,
      bid,
      ask,
      high,
      low,
      open,
      previousClose,
      timestamp: String(gbozData.timestamp || gbozData.Timestamp || gbozData.lastUpdate || gbozData.updatedAt || new Date().toISOString()),
      change,
      changePercent,
    };

    return spotSummary;
  } catch (error) {
    console.error("Error fetching GBOZ spot price:", error);
    return null;
  }
}

/**
 * Formats a price number as USD currency
 */
export function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

/**
 * Formats a timestamp for display in local time
 */
export function formatTimestamp(timestamp: string): string {
  try {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) {
      return "Just now";
    }
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  } catch {
    return "Just now";
  }
}

/**
 * Formats change with sign and percentage
 */
export function formatChange(change: number, changePercent: number): string {
  const sign = change >= 0 ? "+" : "";
  const formattedChange = formatUSD(Math.abs(change)).replace("$", "");
  return `${sign}${change >= 0 ? "" : "-"}$${formattedChange} (${sign}${changePercent.toFixed(2)}%)`;
}

// ============================================================
// GOLD SPOT INDEX (GBXSPOT) - Raw gold spot price
// ============================================================

const GOLD_SPOT_INDEX_URL = "https://api.monex.com/api/v2/Metals/spot/summary?metals=GBXSPOT";

/**
 * TypeScript interface for Gold Spot Index (GBXSPOT) from Monex API
 */
export interface GoldSpotIndexSummary {
  symbol: string;
  baseCurrency: string;
  last: number;
  bid: number;
  ask: number;
  high: number;
  low: number;
  open: number;
  previousClose: number;
  timestamp: string;
  // Computed fields
  change: number;
  changePercent: number;
}

/**
 * Fetches the current Gold Spot Index (GBXSPOT) from Monex API
 * 
 * Uses cache: 'no-store' to ensure:
 * - Data is fetched fresh on each page load ONLY
 * - No background revalidations
 * - No subsequent client-side updates
 * 
 * @returns Promise<GoldSpotIndexSummary | null> - The spot index data or null on error
 */
export async function fetchGoldSpotIndex(): Promise<GoldSpotIndexSummary | null> {
  try {
    const response = await fetch(GOLD_SPOT_INDEX_URL, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Monex API (GBXSPOT) error: ${response.status} ${response.statusText}`);
      return null;
    }

    const json = await response.json();

    // Handle different possible response shapes
    let spotData: Record<string, unknown> | null = null;

    if (Array.isArray(json)) {
      spotData = json.find(
        (item: Record<string, unknown>) => 
          item.symbol === "GBXSPOT" || item.metal === "GBXSPOT"
      ) || json[0] || null;
    } else if (json && typeof json === "object") {
      if (json.GBXSPOT) {
        spotData = json.GBXSPOT;
      } else if (json.data && Array.isArray(json.data)) {
        spotData = json.data.find(
          (item: Record<string, unknown>) => 
            item.symbol === "GBXSPOT" || item.metal === "GBXSPOT"
        ) || json.data[0] || null;
      } else if (json.data && typeof json.data === "object") {
        spotData = json.data.GBXSPOT || json.data;
      } else if (json.symbol === "GBXSPOT" || json.metal === "GBXSPOT") {
        spotData = json;
      } else if (json.bid !== undefined || json.ask !== undefined || json.last !== undefined) {
        spotData = json;
      }
    }

    if (!spotData) {
      console.error("Monex API: Could not extract GBXSPOT data from response");
      return null;
    }

    // Extract price values with fallbacks
    const last = Number(spotData.last ?? spotData.Last ?? spotData.price ?? 0);
    const bid = Number(spotData.bid ?? spotData.Bid ?? spotData.bidPrice ?? 0);
    const ask = Number(spotData.ask ?? spotData.Ask ?? spotData.askPrice ?? last ?? 0);
    const high = Number(spotData.high ?? spotData.High ?? spotData.dayHigh ?? 0);
    const low = Number(spotData.low ?? spotData.Low ?? spotData.dayLow ?? 0);
    const open = Number(spotData.open ?? spotData.Open ?? spotData.dayOpen ?? 0);
    const previousClose = Number(spotData.previousClose ?? spotData.PreviousClose ?? spotData.close ?? spotData.Close ?? 0);

    if (bid === 0 && ask === 0 && last === 0) {
      console.error("Monex API (GBXSPOT): No price data found in response");
      return null;
    }

    // Compute change vs previousClose
    const currentPrice = last || ask;
    const change = previousClose > 0 ? currentPrice - previousClose : 0;
    const changePercent = previousClose > 0 ? (change / previousClose) * 100 : 0;

    const spotSummary: GoldSpotIndexSummary = {
      symbol: String(spotData.symbol || spotData.Symbol || spotData.metal || "GBXSPOT"),
      baseCurrency: String(spotData.baseCurrency || spotData.BaseCurrency || spotData.currency || "USD"),
      last,
      bid,
      ask,
      high,
      low,
      open,
      previousClose,
      timestamp: String(spotData.timestamp || spotData.Timestamp || spotData.lastUpdate || spotData.updatedAt || new Date().toISOString()),
      change,
      changePercent,
    };

    return spotSummary;
  } catch (error) {
    console.error("Error fetching Gold Spot Index:", error);
    return null;
  }
}
