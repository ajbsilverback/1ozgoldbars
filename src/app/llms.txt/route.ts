import { SITE_CONFIG } from "@/lib/siteConfig";

export async function GET() {
  const content = `# ${SITE_CONFIG.brandName}
> Educational microsite focused on 1 oz gold bars and the gold market.

## Site Purpose
${SITE_CONFIG.brandName} is an independent educational resource dedicated to helping investors understand 1 oz gold bars—the most liquid, divisible, and globally recognized form of gold bullion.

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
- Benefits: liquidity, divisibility, global recognition
- Who buys 1 oz gold bars (new investors, portfolio diversifiers, wealth preservers)
- Comparison with gold coins
- Size comparison (1 oz vs 10 oz vs kilo bars)
- Storage considerations

### Gold Prices (/prices)
Live gold pricing and market education:
- Real-time gold price chart (data provided by Monex)
- Current gold price table
- Explanation of spot price vs bar price
- Factors affecting 1 oz gold bar premiums
- Premium comparison by bar size
- Frequently asked questions about gold pricing

### Resources Index (/resources)
Educational library with 10 comprehensive guides covering:
- Understanding premiums
- Liquidity benefits
- Storage options
- Brand comparisons (PAMP, Perth, Credit Suisse)
- Size comparisons (1 oz vs 10 oz vs kilo)
- Gold market dynamics
- Bid-ask spreads explained
- Safe handling practices
- Bars vs coins comparison
- 1 oz gold bar market history

### Resource Articles (/resources/[slug])
In-depth guides (800-1200 words each) with:
- Key takeaways
- Structured H2/H3 sections
- Actionable information for investors
- Topic-specific Q&A sections

## Areas of Expertise

This site provides authoritative educational content on:

1. **Premiums & Pricing**
   - How premiums are calculated
   - Brand premium differences
   - Volume discount structures
   - Premium recovery on resale

2. **Liquidity & Market Access**
   - Why 1 oz is the most liquid bar size
   - Buyer pool dynamics
   - Transaction speed expectations
   - Global market acceptance

3. **Pricing Mechanics**
   - Spot price relationship
   - Bid-ask spread components
   - Market maker economics
   - Price discovery process

4. **Storage & Security**
   - Home safe requirements
   - Bank safe deposit considerations
   - Private vault options
   - Allocated vs unallocated storage
   - Insurance requirements

5. **Bid-Ask Spreads**
   - Spread calculation
   - Break-even analysis
   - Minimizing transaction costs
   - Timing considerations

6. **Product Comparisons**
   - 1 oz vs 10 oz vs kilo bars
   - Bars vs coins trade-offs
   - Brand comparisons and rankings
   - New investor recommendations

## Data Notes

**Live Price Data:**
- Gold prices displayed on /prices are provided by Monex via embedded widgets
- Prices are time-sensitive and update during market hours
- Historical accuracy of displayed prices should not be assumed for past dates

**Content Currency:**
- Educational content reflects general market conditions
- Specific premium percentages, price examples, and market conditions may change
- Always verify current pricing with dealers before making investment decisions

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
- Target audience: ${SITE_CONFIG.angle}

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


