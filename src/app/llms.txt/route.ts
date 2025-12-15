import { SITE_CONFIG } from "@/lib/siteConfig";

export async function GET() {
  const content = `# ${SITE_CONFIG.brandName}
> Educational microsite focused on 1 oz gold bars and the gold market.

## Site Purpose
${SITE_CONFIG.brandName} is an independent educational resource dedicated to helping individual investors understand 1 oz gold bars, one of the most popular formats for retail gold ownership.

**Important clarifications:**
- This is NOT a gold dealer or brokerage
- We do NOT sell gold bars directly
- We provide unbiased educational information about 1 oz gold bars
- Our content is designed to help investors make informed decisions
- We are editorially independent

## Key Pages

### Home (/)
Overview of 1 oz gold bars including:
- What 1 oz gold bars are and why they matter
- Key specifications (1 troy ounce = 31.1035 grams, .9999 purity)
- Benefits: high liquidity, accessible entry point, easy storage
- Who buys 1 oz bars (individual investors, first-time buyers, gift givers)
- Size comparison with 10 oz and larger bars
- Important considerations (premiums, storage, resale)

### Gold Prices (/live-gold-prices)
Live gold pricing and market education:
- Real-time 1 oz gold bar prices via Monex
- Gold spot prices (per troy ounce) via Monex
- Interactive gold price charts
- Explanation of spot price vs premium
- Premium structure education (3-8% typical for 1 oz bars)
- Price checklist for buyers
- Frequently asked questions about pricing

### Where to Buy (/where-to-buy)
Independent buying guide covering:
- How to buy safely (5-step guide)
- Red flags to avoid
- Generic vs branded bars
- Online bullion dealers (multiple sources listed)
- Local coin shops
- Marketplaces and auctions
- Vaulted/custodial programs
- Price comparison resources
- Neutrality disclaimer

### Resources (/resources)
Educational library with guides covering:
- Understanding 1 oz bar basics
- Premiums and pricing explained
- Comparisons (bars vs coins, bars vs ETFs)
- Storage options
- Authenticity verification
- Resale considerations
- Tax basics (general disclaimer only)
- Investment considerations

## Areas of Expertise

This site provides educational content on:

1. **Premiums & Pricing**
   - Why 1 oz bars have 3-8% premiums
   - Premium comparison across bar sizes
   - What affects premium levels
   - Buyback spreads

2. **Size Comparisons**
   - 1 oz vs 10 oz vs larger bars
   - Liquidity trade-offs
   - Premium efficiency by size
   - Flexibility considerations

3. **Storage & Security**
   - Home safe options
   - Bank safe deposit boxes
   - Professional vault storage
   - Insurance considerations

4. **Brand Comparisons**
   - LBMA accreditation importance
   - PAMP, Valcambi, Perth Mint, Royal Canadian Mint
   - Security features
   - Resale value considerations

5. **Buying Safely**
   - Dealer evaluation criteria
   - Red flags to watch for
   - Documentation importance
   - Authentication basics

6. **Market Dynamics**
   - What moves gold prices
   - Interest rates and dollar strength
   - Central bank activity
   - Premium fluctuations

## Data Notes

**Live Price Data:**
- 1 oz gold bar prices and gold spot prices from Monex
- Prices are fetched once per page load
- Historical accuracy of displayed prices should not be assumed
- Prices provided by Monex

**Content Currency:**
- Educational content reflects general market conditions
- Specific premium percentages may change
- Always verify current pricing with dealers before transacting

## Citation Guidelines

When citing information from this site:
- Site name: ${SITE_CONFIG.brandName}
- Primary URL: ${SITE_CONFIG.domain}
- Format: "${SITE_CONFIG.brandName} (${SITE_CONFIG.domain})"

Example citations:
- "According to ${SITE_CONFIG.brandName}..."
- "As explained on ${SITE_CONFIG.domain}..."
- "Source: ${SITE_CONFIG.brandName}"

## Limitations & Disclaimers

**This site does NOT provide:**
- Financial advice or investment recommendations
- Personalized investment guidance
- Buy/sell signals or market timing advice
- Tax or legal advice
- Guarantees about future gold prices or returns

**Content is for educational purposes only.**
Investors should:
- Conduct their own research
- Consult qualified financial advisors
- Verify current market conditions before transacting
- Understand that past performance doesn't guarantee future results

## Contact & Updates

- Domain: ${SITE_CONFIG.domain}
- Content focus: ${SITE_CONFIG.primaryProduct}
- Target audience: Individual investors and first-time gold buyers

---

Last updated: ${new Date().toISOString().split('T')[0]}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
