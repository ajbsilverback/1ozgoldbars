/**
 * FAQ content for 1 oz Gold Bar resource articles
 * Each slug has 4-6 Q&A pairs for FAQPage schema
 */

export interface ResourceFAQ {
  question: string;
  answer: string;
}

export const resourceFAQs: Record<string, ResourceFAQ[]> = {
  "what-is-a-1-oz-gold-bar": [
    {
      question: "How much does a 1 oz gold bar weigh in grams?",
      answer:
        "A 1 oz gold bar weighs exactly 31.1035 grams. This is based on the troy ounce measurement system used for precious metals, which is slightly heavier than a standard avoirdupois ounce (28.35 grams).",
    },
    {
      question: "What purity are most 1 oz gold bars?",
      answer:
        "Most 1 oz gold bars from major refiners are .9999 fine, meaning 99.99% pure gold. Some older bars or specialty products may be .999 (99.9%) pure. The purity is typically stamped on the bar.",
    },
    {
      question: "What are the typical dimensions of a 1 oz gold bar?",
      answer:
        "Dimensions vary by manufacturer, but 1 oz gold bars typically measure around 50mm long, 28mm wide, and 1.5mm thick. The exact shape depends on the refiner.",
    },
    {
      question: "Do 1 oz gold bars have legal tender status?",
      answer:
        "No, gold bars do not have legal tender status. They are produced by private refiners and trade based on their gold content. Gold coins from government mints carry legal tender status, though their market value is determined by gold content.",
    },
    {
      question: "What information is stamped on a 1 oz gold bar?",
      answer:
        "A 1 oz gold bar typically displays the weight (1 oz or 31.1g), purity (.9999), refiner name or logo, and often a unique serial number. Some bars include additional security features.",
    },
  ],

  "1-oz-gold-bar-vs-gold-coin": [
    {
      question: "Do gold bars or gold coins have lower premiums?",
      answer:
        "Gold bars typically carry lower premiums over spot price compared to gold coins. Bars are less expensive to produce, while coins require detailed designs and strict quality control from government mints.",
    },
    {
      question: "What is the advantage of gold coins over bars?",
      answer:
        "Gold coins have legal tender status, widely recognized designs, and often broader collector appeal. Some investors find coins easier to sell due to their widespread recognition.",
    },
    {
      question: "Can I buy both gold bars and gold coins?",
      answer:
        "Yes, many investors hold both. Bars provide cost-efficient accumulation when adding larger amounts, while coins offer flexibility and recognition that some find valuable when selling.",
    },
    {
      question: "Are gold bars easier to counterfeit than coins?",
      answer:
        "Both bars and coins can be counterfeited. The key protection is buying from reputable dealers. Major refiners include security features on bars, and government mints include anti-counterfeiting measures on coins.",
    },
  ],

  "how-much-is-a-1-oz-gold-bar-worth": [
    {
      question: "What determines the price of a 1 oz gold bar?",
      answer:
        "The price consists of the current gold spot price plus a dealer premium. Spot prices fluctuate based on global market activity, while premiums cover refining, fabrication, and dealer costs.",
    },
    {
      question: "What is the typical premium on a 1 oz gold bar?",
      answer:
        "Premiums on 1 oz gold bars typically range from 3-8% over spot price, depending on the brand, dealer, and market conditions. Premiums can rise during periods of high demand.",
    },
    {
      question: "Do I get the same price when selling a gold bar?",
      answer:
        "When selling, you receive the spot price minus a dealer spread, typically 1-3% for standard bars from recognized refiners. The gold price must rise enough to overcome this round-trip cost before you profit.",
    },
    {
      question: "How often do gold prices change?",
      answer:
        "Gold prices fluctuate throughout trading hours based on global supply and demand. Daily price movements of 1-2% are not unusual. Get a live quote when buying or selling rather than relying on stale prices.",
    },
    {
      question: "Where can I find current gold spot prices?",
      answer:
        "Current spot prices are available on financial news sites, precious metals dealer websites, and market data providers. Prices update throughout the trading day.",
    },
  ],

  "are-1-oz-gold-bars-a-good-investment": [
    {
      question: "Does gold produce income like stocks or bonds?",
      answer:
        "No, gold does not produce dividends or interest. Your return comes entirely from price appreciation. In periods when gold prices are flat or declining, you may experience negative real returns after costs.",
    },
    {
      question: "How much gold should I have in my portfolio?",
      answer:
        "The appropriate allocation depends on your individual circumstances. Common allocations range from 5-15% of a portfolio, but there is no universally correct amount. Consider consulting a financial advisor.",
    },
    {
      question: "What costs are involved in owning physical gold?",
      answer:
        "Physical gold involves premiums when buying, spreads when selling, and ongoing storage and insurance costs. These reduce your net return compared to the change in spot price.",
    },
    {
      question: "Is this content financial advice?",
      answer:
        "No, this content is educational only and should not be taken as investment advice. Whether gold fits your situation depends on your goals, timeline, and risk tolerance. Consider consulting a qualified financial advisor.",
    },
  ],

  "how-to-buy-1-oz-gold-bars-safely": [
    {
      question: "How do I choose a reputable gold dealer?",
      answer:
        "Look for established businesses with verifiable track records, physical addresses, and clear contact information. Online reviews and industry accreditations can provide additional confidence. Compare prices across several dealers.",
    },
    {
      question: "What payment methods do gold dealers accept?",
      answer:
        "Dealers typically accept bank wire, credit card, check, and sometimes cryptocurrency. Wire transfers often receive lower prices since they have lower fees and fraud risk. Credit cards may incur surcharges.",
    },
    {
      question: "How is gold typically delivered?",
      answer:
        "Delivery occurs via insured shipping from the dealer's vault. Signature confirmation is standard for precious metals shipments. Some dealers offer local pickup or vault storage options.",
    },
    {
      question: "What documentation should I keep?",
      answer:
        "Keep all purchase documentation including invoices, receipts, assay cards, and certificates. Record the purchase date, price paid, and serial numbers. This helps with insurance, taxes, and future sales.",
    },
    {
      question: "What are red flags when buying gold?",
      answer:
        "Be cautious of unsolicited offers, pressure tactics, or prices dramatically below market. Legitimate dealers do not cold call or promise guaranteed returns. Avoid private sellers unless you can verify authenticity.",
    },
  ],

  "1-oz-vs-10-oz-gold-bar": [
    {
      question: "Which has lower premiums, 1 oz or 10 oz gold bars?",
      answer:
        "10 oz bars typically have lower premiums per ounce (2-4%) compared to 1 oz bars (3-6% or more). The savings come from spreading production costs over more ounces of gold.",
    },
    {
      question: "How much capital do I need for a 10 oz gold bar?",
      answer:
        "A 10 oz bar requires roughly ten times the capital of a 1 oz bar. At current prices, that means a significant upfront investment, which limits accessibility for many buyers.",
    },
    {
      question: "Which is easier to sell, 1 oz or 10 oz bars?",
      answer:
        "1 oz bars have a larger buyer pool since more individual investors can afford them. This broader market can make selling faster and easier compared to larger bars.",
    },
    {
      question: "Can I sell part of a 10 oz gold bar?",
      answer:
        "No, you must sell the entire bar. With 1 oz bars, you can sell individual bars as needed, providing more flexibility for partial liquidation.",
    },
  ],

  "1-oz-gold-bar-vs-gold-round": [
    {
      question: "What is a gold round?",
      answer:
        "A gold round is a circular piece of gold that resembles a coin but lacks legal tender status. Rounds are produced by private mints and contain a specified weight of gold at a stated purity.",
    },
    {
      question: "Do gold rounds have lower premiums than bars?",
      answer:
        "Premiums on gold rounds and 1 oz bars are generally similar. Neither format consistently offers a significant price advantage over the other. Both trade based on gold content plus a modest premium.",
    },
    {
      question: "Are gold rounds easy to sell?",
      answer:
        "Both rounds and bars from recognized producers are readily bought and sold through bullion dealers. The key factor is whether the product comes from a reputable source with consistent quality.",
    },
    {
      question: "Should I choose bars or rounds?",
      answer:
        "Choose based on aesthetics, availability, and pricing at the time of purchase. Both accomplish the same goal of holding physical gold at relatively low premiums.",
    },
  ],

  "best-1-oz-gold-bars-to-buy": [
    {
      question: "What is LBMA accreditation?",
      answer:
        "The London Bullion Market Association maintains a list of accredited refiners meeting strict quality standards. Bars from LBMA-accredited refiners are widely accepted by dealers, banks, and investors worldwide.",
    },
    {
      question: "Which refiners produce recognized 1 oz gold bars?",
      answer:
        "Major refiners include PAMP Suisse, Valcambi, Argor-Heraeus, Perth Mint, and Royal Canadian Mint. All produce LBMA-accredited bars with consistent quality and security features.",
    },
    {
      question: "Do brand-name bars cost more?",
      answer:
        "Premium brands sometimes cost slightly more than generic bars. Whether the extra premium is worthwhile depends on your priorities. Brand-name bars may sell slightly faster, but generic bars contain the same gold.",
    },
    {
      question: "What security features do 1 oz gold bars have?",
      answer:
        "Different refiners offer different features including serial numbers, holographic elements, tamper-evident packaging, and online verification systems. These help with authentication but are not foolproof.",
    },
  ],

  "are-1-oz-gold-bars-easy-to-sell": [
    {
      question: "How liquid are 1 oz gold bars?",
      answer:
        "The 1 oz size is among the most liquid formats in the retail gold market. Its accessible price point means a large pool of potential buyers exists, and most dealers actively buy recognized bars.",
    },
    {
      question: "Where can I sell a 1 oz gold bar?",
      answer:
        "You can sell to bullion dealers (online or local), coin shops, or through private sales. Most investors find working with established dealers offers the best combination of convenience and fair pricing.",
    },
    {
      question: "What affects the price I receive when selling?",
      answer:
        "Condition, packaging, and documentation affect your price. Bars in original sealed assay cards typically command better prices. Having purchase receipts improves credibility.",
    },
    {
      question: "How much below spot will dealers pay?",
      answer:
        "Dealers typically pay spot minus a spread of 1-3% for standard bars from recognized refiners. Less common brands or bars without documentation may receive lower offers.",
    },
  ],

  "how-to-store-1-oz-gold-bars": [
    {
      question: "Can I store gold bars at home?",
      answer:
        "Yes, a quality home safe provides convenient access. Look for fire-rated safes that are heavy enough to deter theft or can be bolted down. Home storage means no ongoing fees but requires your own insurance.",
    },
    {
      question: "Are bank safe deposit boxes good for gold storage?",
      answer:
        "Safe deposit boxes offer secure storage outside your home with modest annual fees. However, contents are typically not insured by the bank. You would need separate insurance coverage.",
    },
    {
      question: "What is professional vault storage?",
      answer:
        "Third-party vault services specialize in precious metals storage with allocated or unallocated options. They typically include insurance and provide detailed documentation. Fees generally run 0.5-1% of value annually.",
    },
    {
      question: "Do I need insurance for my gold?",
      answer:
        "Consider insurance coverage however you store gold. Homeowner's policies may have low limits for precious metals. Specialty insurance or policy riders can provide adequate coverage.",
    },
    {
      question: "Should I split my gold storage?",
      answer:
        "Some investors keep a portion at home for immediate access and store the bulk in professional storage for maximum security. This balances convenience with security.",
    },
  ],

  "how-to-tell-if-a-1-oz-gold-bar-is-real": [
    {
      question: "How can I verify a gold bar's weight?",
      answer:
        "Use a precision scale accurate to at least 0.01 grams. A genuine 1 oz gold bar weighs exactly 31.1035 grams. Deviations beyond manufacturing tolerance are red flags.",
    },
    {
      question: "Can I authenticate gold bars visually?",
      answer:
        "Visual inspection can identify obvious fakes (blurry text, uneven surfaces) but sophisticated counterfeits can look convincing. Visual inspection alone is not definitive.",
    },
    {
      question: "What professional testing options exist?",
      answer:
        "XRF (X-ray fluorescence) analyzers verify gold content non-destructively. Specific gravity testing compares density against known values. Reputable dealers and coin shops offer these services.",
    },
    {
      question: "How can I avoid counterfeit gold bars?",
      answer:
        "Buy from reputable dealers who verify products before selling. Avoid private sellers unless you can test authenticity. If a price seems too good to be true, be skeptical.",
    },
  ],

  "do-1-oz-gold-bars-have-serial-numbers": [
    {
      question: "Do all 1 oz gold bars have serial numbers?",
      answer:
        "Not all bars have serial numbers. Major refiners like PAMP, Valcambi, and Perth Mint routinely serialize their bars, but some smaller refiners or generic bars may omit them.",
    },
    {
      question: "What is the purpose of serial numbers on gold bars?",
      answer:
        "Serial numbers help verify authenticity when matched with documentation, create records for insurance and estate purposes, and some refiners maintain databases linking numbers to production records.",
    },
    {
      question: "Are bars without serial numbers suspicious?",
      answer:
        "Not necessarily. Many legitimate products omit serial numbers. What matters more is the reputation of the refiner and the dealer you purchased from.",
    },
    {
      question: "Should I record my bar's serial number?",
      answer:
        "Yes, if your bar has one. Record it along with purchase documentation and take clear photos. This information supports insurance claims and helps establish chain of custody for future sales.",
    },
  ],

  "1-oz-gold-bar-premium-explained": [
    {
      question: "What is a premium on gold bars?",
      answer:
        "The premium is the amount paid above the gold spot price when purchasing a bar. It covers refining, fabrication, distribution, and dealer margin. Premiums are a normal part of physical gold ownership.",
    },
    {
      question: "Why do premiums vary between dealers?",
      answer:
        "Premiums vary based on dealer overhead, payment method, purchase quantity, and market conditions. Wire transfers often receive lower prices than credit cards. Volume discounts may apply.",
    },
    {
      question: "Do I recover my premium when selling?",
      answer:
        "No, when selling you typically receive spot minus a spread. The gold price must rise enough to overcome both purchase premium and sale spread before you profit.",
    },
    {
      question: "What causes premiums to rise?",
      answer:
        "Premiums tend to rise during periods of high demand or supply constraints. They may compress when demand is lower. Market uncertainty often drives premium increases.",
    },
    {
      question: "How can I minimize premium costs?",
      answer:
        "Shop multiple dealers, consider larger purchases if reduced premiums apply, and time purchases during lower demand periods if possible. Always prioritize reputable sources over lowest premium.",
    },
  ],

  "1-oz-gold-bars-vs-gold-etfs": [
    {
      question: "What is a gold ETF?",
      answer:
        "A gold ETF (Exchange-Traded Fund) is a financial product that tracks the price of gold and trades on stock exchanges. Some ETFs hold physical gold in vaults, while others use derivatives.",
    },
    {
      question: "Do I own actual gold with an ETF?",
      answer:
        "ETF shares represent indirect ownership. You own shares in a trust that holds gold, but you cannot typically take physical delivery. You depend on the fund manager to safeguard the gold.",
    },
    {
      question: "Which has lower costs, physical gold or ETFs?",
      answer:
        "ETFs have annual expense ratios (0.25-0.40%) that compound over time. Physical gold has no percentage fees but involves premiums, spreads, and storage costs. The comparison depends on holding period and storage approach.",
    },
    {
      question: "Can I hold both physical gold and ETFs?",
      answer:
        "Yes, some investors use both: ETFs for trading flexibility and physical gold for direct ownership without counterparty risk. The approaches are not mutually exclusive.",
    },
  ],

  "are-1-oz-gold-bars-taxable": [
    {
      question: "Is gold subject to capital gains tax?",
      answer:
        "In many jurisdictions, profits from selling gold may be subject to capital gains tax. Rules vary by location; consult a tax professional for guidance specific to your situation.",
    },
    {
      question: "How is gold classified for tax purposes in the US?",
      answer:
        "In the United States, the IRS classifies gold as a collectible, which may affect the tax rate on gains. Rules vary by location; consult a tax professional for specific guidance.",
    },
    {
      question: "Do I pay sales tax when buying gold?",
      answer:
        "Sales tax treatment varies significantly by state and country. Some jurisdictions exempt investment gold from sales tax while others do not. Rules vary by location; consult a tax professional.",
    },
    {
      question: "Do dealers report gold sales to the government?",
      answer:
        "Reporting requirements vary by jurisdiction and transaction type. Rules vary by location; consult a tax professional for guidance on reporting obligations in your area.",
    },
    {
      question: "Should I keep records of gold purchases?",
      answer:
        "Yes, maintain accurate records of purchase prices, dates, and sale prices for tax reporting. Rules vary by location; consult a tax professional about specific documentation requirements.",
    },
  ],

  "why-investors-choose-1-oz-gold-bars": [
    {
      question: "Why is 1 oz a popular gold bar size?",
      answer:
        "The 1 oz size balances accessibility with reasonable premiums. It requires less capital than larger bars while offering better premiums than fractional products.",
    },
    {
      question: "Are 1 oz gold bars good for gradual accumulation?",
      answer:
        "Yes, the 1 oz format allows for gradual accumulation over time. You can buy one bar per month or quarter, spreading purchases and managing timing risk.",
    },
    {
      question: "How liquid are 1 oz gold bars compared to other sizes?",
      answer:
        "The 1 oz size is among the most actively traded in the retail market. The buyer pool includes a wide range of investors, which can make selling faster and easier.",
    },
    {
      question: "Can 1 oz bars be stored easily?",
      answer:
        "Yes, 1 oz bars are compact (roughly 50mm x 28mm) and even a modest safe can hold a meaningful position. They also fit easily in bank safe deposit boxes.",
    },
  ],
};

/**
 * Get FAQ entries for a specific slug
 */
export function getResourceFAQs(slug: string): ResourceFAQ[] {
  return resourceFAQs[slug] || [];
}

