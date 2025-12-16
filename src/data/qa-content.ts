import { QAItem } from "@/components/QASection";

/**
 * FAQ Content with Dynamic Price Tokens
 * 
 * Supported tokens (replaced at render time with live prices):
 * - {{CAPITAL_REQUIREMENT}}     -> "~$2,700" (1 oz bar ask price rounded)
 * - {{CAPITAL_REQUIREMENT_RANGE}} -> "~$2,600-$2,800" (1 oz bar price range)
 * - {{GBXSPOT}}                 -> "$2,650" (gold spot price per ounce)
 * - {{GBXSPOT_5PCT}}            -> "$2,783" (spot + 5% premium)
 * - {{GBXSPOT_10X}}             -> "$26,500" (spot × 10 for 10oz examples)
 */

export const homeQA: QAItem[] = [
  {
    question: "What is the actual weight of a 1 oz gold bar?",
    answer: "A 1 oz gold bar contains exactly one troy ounce of gold, which equals 31.1035 grams. This is the standard weight for retail gold bars and is the most common size purchased by individual investors.",
  },
  {
    question: "Why do 1 oz gold bars have higher premiums than larger bars?",
    answer: "The 1 oz size has higher per-ounce premiums (typically 3-8% over spot) because manufacturing, packaging, and handling costs are spread across less gold content. Each bar requires individual minting, assaying, and packaging regardless of size. The trade-off is better liquidity and flexibility.",
  },
  {
    question: "How much does a 1 oz gold bar cost?",
    answer: "A 1 oz gold bar costs the current gold spot price plus a dealer premium, typically ranging from 3-8% depending on the refiner and market conditions. The exact price changes continuously with the gold market. Check our live pricing widget for current values.",
  },
  {
    question: "Are 1 oz gold bars easy to sell?",
    answer: "Yes, 1 oz gold bars are among the most liquid gold products available. The size has broad appeal to both individual buyers and dealers, creating a large market. Most established dealers readily purchase 1 oz bars from recognized refiners. The wide buyer pool generally makes selling straightforward.",
  },
  {
    question: "How do I store 1 oz gold bars safely?",
    answer: "The compact size of 1 oz bars makes storage flexible. Common options include a home safe, bank safe deposit box, or professional vault storage. Consider insurance for your holdings regardless of storage method. Keep bars in their original packaging to preserve condition and documentation for future resale.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What is the relationship between spot price and 1 oz gold bar prices?",
    answer: "The 1 oz bar price equals the current spot price plus a dealer premium, typically 3-8%. For example, if spot is {{GBXSPOT}} and the premium is 5%, you would pay approximately {{GBXSPOT_5PCT}} per bar. This premium covers refining, minting, packaging, shipping, and dealer margins.",
  },
  {
    question: "Why do premiums vary between dealers?",
    answer: "Premium variations reflect different dealer business models, inventory positions, and overhead costs. Volume dealers with efficient operations often offer lower premiums. Brand differences also matter, as bars from well-known refiners like PAMP or Valcambi may carry slightly higher premiums than generic bars. Shopping multiple dealers helps identify competitive pricing.",
  },
  {
    question: "How does the bid-ask spread affect my gold bar investment?",
    answer: "The bid-ask spread represents the difference between what dealers pay (bid) and charge (ask). For 1 oz bars from recognized refiners, spreads are typically 3-5%. Understanding spreads is important because your gold must appreciate by the full spread percentage before you break even on a round-trip transaction.",
  },
  {
    question: "Do larger bars have lower premiums than 1 oz bars?",
    answer: "Yes, larger bars consistently offer lower per-ounce premiums. While 1 oz bars run 3-8% over spot, 10 oz bars typically have 2-4% premiums, and kilo bars run 1.5-3%. However, 1 oz bars offer superior liquidity and flexibility, which many investors value more than the premium savings of larger sizes.",
  },
  {
    question: "When is the best time to buy 1 oz gold bars based on pricing?",
    answer: "The best time is during calm market conditions when premiums are at normal levels (3-5% over spot for major brands). Avoid buying during crisis-driven demand spikes when premiums can temporarily expand to 10%+ even on common bars. For regular purchases, many investors use dollar-cost averaging rather than trying to time the market.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your 1 oz gold bar resources cover?",
    answer: "Our educational library covers all aspects of 1 oz bar investing including: understanding premiums and pricing, comparisons with other formats (coins, larger bars, ETFs), storage options, brand comparisons among major refiners, gold market dynamics, bid-ask spreads, authentication basics, and practical buying guidance.",
  },
  {
    question: "Are 1 oz gold bars better than gold coins?",
    answer: "Neither is universally better; each serves different purposes. Gold bars typically have lower premiums than coins and focus purely on gold content. Coins may have numismatic value and are often government-minted. Many investors prefer bars for straightforward bullion investment and coins for collectibility or legal tender status.",
  },
  {
    question: "Which brands of 1 oz gold bars are most recognized?",
    answer: "Top-tier LBMA-accredited brands include PAMP Suisse, Valcambi, Perth Mint, Royal Canadian Mint, and Argor-Heraeus. These refiners produce bars meeting .9999 fine gold purity standards with assay certificates and serial numbers. LBMA-accredited bars are accepted globally and typically command better resale values.",
  },
  {
    question: "How do 1 oz gold bars compare to gold ETFs?",
    answer: "Gold bars provide direct physical ownership with no counterparty risk, meaning you hold the actual metal. Gold ETFs offer convenience and easy trading but represent claims on gold held by third parties. Physical bars are outside the financial system; ETFs trade like stocks. The choice depends on your priorities regarding direct ownership versus trading convenience.",
  },
  {
    question: "What should I look for when buying my first 1 oz gold bar?",
    answer: "For first-time buyers: choose bars from LBMA-accredited refiners (PAMP, Valcambi, Perth Mint), verify the dealer's reputation, compare premiums across multiple sources, ensure the bar includes documentation (assay card, serial number if applicable), and plan your storage solution before purchasing.",
  },
];

// Resource-specific Q&A content - updated for 1 oz focus
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for a 1 oz gold bar?",
      answer: "Typical premiums for 1 oz gold bars from LBMA-accredited refiners range from 3-8% over spot under normal market conditions. Branded bars from PAMP or Valcambi may be at the higher end, while generic bars cost less. During supply constraints, premiums can temporarily rise further.",
    },
    {
      question: "Why do 1 oz bars have higher premiums than larger bars?",
      answer: "Manufacturing costs are fixed per bar regardless of size. Minting, assaying, and packaging a 1 oz bar costs nearly the same as a 10 oz bar, but these costs are spread across less gold content. The trade-off is that 1 oz bars offer better liquidity and lower capital requirements.",
    },
    {
      question: "Do I recover the premium when I sell my 1 oz gold bar?",
      answer: "You typically do not recover the full premium on resale. Dealers buy back at spot price minus a small spread (1-3%). Bars from recognized refiners with intact packaging and documentation command better buyback prices. Understanding this spread is important for calculating your actual investment return.",
    },
  ],
  "size-comparison": [
    {
      question: "How does a 1 oz bar compare to larger sizes?",
      answer: "A 1 oz bar offers maximum liquidity and flexibility at a higher premium cost. A 10 oz bar reduces premiums but requires more capital. Larger bars like kilos offer the lowest premiums but limited buyer pools. Most individual investors find 1 oz bars strike the best balance of accessibility and resale ease.",
    },
    {
      question: "When should I choose 1 oz bars over larger sizes?",
      answer: "Choose 1 oz bars when you value liquidity and flexibility, want to start with a manageable investment, plan to dollar-cost average over time, or anticipate needing to sell portions of your holdings. The higher premium is the cost of these benefits.",
    },
    {
      question: "Can I mix 1 oz bars with larger bars in my portfolio?",
      answer: "Yes, many investors combine sizes strategically. A common approach: use larger bars for core long-term holdings to capture premium savings, then maintain 1 oz bars for flexibility and easier partial liquidation. This captures benefits of both approaches.",
    },
  ],
  "storage-options": [
    {
      question: "What type of storage is recommended for 1 oz gold bars?",
      answer: "The compact size of 1 oz bars makes storage flexible. A quality home safe, bank safe deposit box, or professional vault all work well. Consider insurance regardless of method. Professional storage becomes more cost-effective as your holdings grow beyond a few bars.",
    },
    {
      question: "Can I store 1 oz gold bars at home?",
      answer: "Yes, home storage is practical for 1 oz bars given their compact size. A quality safe (fire-rated, bolted if possible) provides reasonable security. Check your homeowner's insurance for coverage limits on precious metals and consider a rider if needed. Keep your holdings confidential.",
    },
    {
      question: "What are typical costs for professional storage?",
      answer: "Professional vault storage typically costs 0.5-1% of value annually, though minimums apply. For a small number of 1 oz bars, a bank safe deposit box ($50-200/year) is often more economical. Professional vaults become cost-effective for larger accumulations.",
    },
  ],
  "brand-differences": [
    {
      question: "Which 1 oz bar brands are most recognized globally?",
      answer: "LBMA-accredited refiners produce the most recognized bars: PAMP Suisse and Valcambi (Switzerland), Perth Mint (Australia), Royal Canadian Mint, Argor-Heraeus (Switzerland), and Heraeus (Germany). These brands are accepted by dealers worldwide and typically command the best resale prices.",
    },
    {
      question: "Do different 1 oz bar brands have different premiums?",
      answer: "Yes, there are premium differences. PAMP Suisse bars with the Lady Fortuna design often command 1-2% higher premiums than generic bars. Perth Mint and Valcambi fall in between. The key is choosing LBMA-accredited products for maximum liquidity regardless of specific brand.",
    },
    {
      question: "What security features do 1 oz bars have?",
      answer: "Modern 1 oz bars from major refiners include: unique serial numbers, assay certificates in tamper-evident packaging, precision weight stamps, and refiner hallmarks. PAMP offers Veriscan smartphone verification. These features help authenticate bars and maintain resale value.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell a 1 oz gold bar?",
      answer: "1 oz bars from recognized refiners can typically be sold same-day or within 1-2 business days through established dealers. The broad buyer pool for this size makes finding buyers straightforward. Having original packaging and documentation expedites the process.",
    },
    {
      question: "Will I get a good price selling a 1 oz bar?",
      answer: "Yes, 1 oz bars from LBMA-accredited refiners receive competitive buyback offers. Expect to receive spot price minus a small spread (1-3%). Bars with intact packaging and documentation from recognized brands command the best prices. Getting quotes from multiple dealers ensures fair pricing.",
    },
    {
      question: "Is the 1 oz size more liquid than larger bars?",
      answer: "Yes, the 1 oz size has the broadest buyer pool in the retail gold market. More individuals can afford to purchase at this price point, and dealers maintain consistent inventory needs. This liquidity advantage is one of the main reasons investors accept the higher premiums on 1 oz bars.",
    },
  ],
  "market-dynamics": [
    {
      question: "What causes gold prices to rise or fall?",
      answer: "Gold prices respond to multiple factors: interest rates (higher rates typically pressure gold), dollar strength (inverse relationship), inflation expectations (gold as hedge), geopolitical uncertainty (safe haven demand), central bank buying/selling, and investment flows. No single factor dominates.",
    },
    {
      question: "How do Federal Reserve decisions affect 1 oz gold bar values?",
      answer: "Fed policy significantly influences gold through interest rates and inflation expectations. Rate hikes increase gold's opportunity cost, typically pressuring prices. Rate cuts or quantitative easing tend to support gold. Your 1 oz bar values move with spot prices regardless of size.",
    },
    {
      question: "Do 1 oz bar premiums change with market conditions?",
      answer: "Yes, premiums fluctuate with supply and demand for physical gold. During demand surges (market uncertainty, crisis events), 1 oz bar premiums can spike to 10%+ temporarily. During calm markets, premiums settle back to 3-5% for standard brands. Understanding this cycle helps with purchase timing.",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good bid-ask spread for 1 oz gold bars?",
      answer: "Under normal market conditions, spreads of 3-5% for 1 oz bars from LBMA-accredited refiners represent competitive pricing. Generic bars may have wider spreads. If a dealer quotes significantly wider spreads for recognized brands, shop elsewhere.",
    },
    {
      question: "How do I calculate my break-even point on a 1 oz bar?",
      answer: "Add your purchase premium to the expected selling discount. If you pay 5% over spot and expect to receive 2% below spot when selling, you need 7% gold appreciation to break even. Understanding this helps set realistic expectations for your investment.",
    },
    {
      question: "Do spreads vary by 1 oz bar brand?",
      answer: "Yes, LBMA-accredited brands from major refiners (PAMP, Valcambi, Perth) trade with tighter spreads due to instant recognition and ready dealer markets. Generic or lesser-known bars may face wider spreads, potentially offsetting their lower purchase premiums.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a 1 oz gold bar is authentic?",
      answer: "Key verification methods: confirm the bar matches stated weight (31.1035g), verify serial number if present, check assay certificate matches the bar, examine hallmarks for precision, use smartphone verification apps if available (PAMP Veriscan). For secondary market purchases, consider professional testing.",
    },
    {
      question: "What security features should I look for on 1 oz bars?",
      answer: "Look for: precision-stamped weight and purity marks, unique serial number (most branded bars), refiner logo/hallmark, assay certificate with matching details, and tamper-evident packaging. Premium refiners include features like micro-engraving and holographic elements.",
    },
    {
      question: "Should I have 1 oz bars professionally authenticated?",
      answer: "For secondary market purchases without complete documentation, professional authentication is worthwhile. XRF testing can verify purity without damaging the bar. The modest cost provides peace of mind. Buying from reputable dealers with clear sourcing reduces authentication concerns.",
    },
  ],
  "institutional-vs-retail": [
    {
      question: "What is LBMA accreditation and why does it matter?",
      answer: "The London Bullion Market Association (LBMA) accredits refiners meeting strict quality standards. LBMA-accredited bars are accepted by banks, institutions, and dealers worldwide without additional verification. This creates efficient global markets and ensures your bars maintain maximum resale value.",
    },
    {
      question: "Are retail 1 oz bars different from institutional gold?",
      answer: "1 oz bars from LBMA-accredited refiners meet the same quality standards as institutional gold. The difference is format: institutions typically trade larger bars (400 oz good delivery bars), while 1 oz bars are sized for individual investors. Quality and purity are equivalent.",
    },
    {
      question: "Can I buy gold at institutional pricing?",
      answer: "Retail investors pay higher premiums than large institutional buyers due to smaller order sizes and higher per-transaction costs. However, buying from efficient online dealers and choosing larger quantities can reduce your effective premium closer to wholesale levels.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "What percentage of a portfolio should be in gold bars?",
      answer: "Conventional wisdom suggests 5-15% of a portfolio in precious metals as a diversifier and inflation hedge. The specific allocation depends on your risk tolerance, investment horizon, and overall financial situation. Consult a financial advisor for personalized guidance.",
    },
    {
      question: "Should I buy 1 oz bars all at once or over time?",
      answer: "Both approaches have merit. Dollar-cost averaging (buying regularly over time) reduces timing risk and fits most budgets. Lump-sum buying captures current prices if you have capital available. Many investors combine approaches based on their circumstances.",
    },
    {
      question: "How do 1 oz bars fit with other gold investments like ETFs?",
      answer: "1 oz bars and gold ETFs serve different purposes. ETFs offer liquidity and easy trading but carry counterparty risk. Physical bars provide direct ownership outside the financial system but are less liquid. Many investors use both: ETFs for tactical trading, physical bars for long-term core holdings.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What is the typical process for buying a 1 oz gold bar?",
      answer: "The process typically involves: researching and selecting a reputable dealer, comparing prices and premiums, placing an order (price usually locked at order time), completing payment, and receiving insured delivery. Most online orders ship within 3-7 business days after payment clears.",
    },
    {
      question: "What payment methods are accepted for 1 oz bar purchases?",
      answer: "Most dealers accept wire transfer, personal check (with clearing period), and credit/debit cards. Wire transfers often get lower prices (2-4% less than card prices). Credit cards offer convenience and buyer protection but cost more. Choose based on your priorities.",
    },
    {
      question: "Why do 1 oz bar prices vary between dealers?",
      answer: "Price variations reflect different business models, sourcing relationships, overhead costs, and profit margins. Volume dealers may offer lower premiums through operational efficiency. Always compare total cost (bar price plus shipping) from multiple sources before purchasing.",
    },
  ],
  "tax-considerations": [
    {
      question: "How is physical gold taxed when sold?",
      answer: "Physical gold is generally classified as a collectible for federal tax purposes. Capital gains tax applies when sold for a profit. Specific rates and rules depend on holding period, income level, and current tax legislation. State taxes add complexity. Consult a tax professional for your situation.",
    },
    {
      question: "Do I pay sales tax when buying a 1 oz gold bar?",
      answer: "Sales tax treatment varies by state. Many states exempt precious metals purchases, others tax them, and some have exemptions based on transaction amount. Understanding your state's rules before purchasing affects your total cost. A tax professional can clarify current treatment.",
    },
    {
      question: "Can I hold 1 oz gold bars in an IRA?",
      answer: "Certain IRAs (Precious Metals IRAs or Gold IRAs) can hold physical gold including qualifying bars meeting purity requirements. The gold must be held by an approved custodian. IRA ownership provides tax-advantaged growth but involves custodian fees and prevents personal possession.",
    },
  ],
};
