/**
 * Resource definitions for 1 oz Gold Bars educational content
 */

export type CategorySlug = 
  | "pricing"
  | "investment"
  | "security"
  | "products"
  | "market"
  | "buying-guide"
  | "tax-legal";

export interface Resource1oz {
  title: string;
  slug: string;
  description: string;
  excerpt: string;
  category: CategorySlug;
  categoryLabel: string;
  categorySlug: CategorySlug;
  tags: string[];
}

// Category label mapping
export const categoryLabels: Record<CategorySlug, string> = {
  "pricing": "Pricing",
  "investment": "Investment",
  "security": "Security",
  "products": "Products",
  "market": "Market",
  "buying-guide": "Buying Guide",
  "tax-legal": "Tax & Legal",
};

export const resources1oz: Resource1oz[] = [
  {
    title: "What Is a 1 oz Gold Bar?",
    slug: "what-is-a-1-oz-gold-bar",
    description:
      "A 1 oz gold bar contains exactly one troy ounce (31.1 grams) of refined gold, typically .9999 fine purity. This guide covers dimensions, weight standards, and what distinguishes bars from other gold products.",
    excerpt:
      "Learn the fundamentals of 1 oz gold bars including weight, purity, and what makes them popular with individual investors.",
    category: "market",
    categoryLabel: "Market",
    categorySlug: "market",
    tags: ["basics"],
  },
  {
    title: "1 oz Gold Bar vs Gold Coin: Which Is Better?",
    slug: "1-oz-gold-bar-vs-gold-coin",
    description:
      "Gold bars and gold coins serve different purposes for different buyers. Bars generally carry lower premiums, while coins offer legal tender status and recognized designs.",
    excerpt:
      "Compare 1 oz gold bars and gold coins across premiums, liquidity, and practical considerations.",
    category: "investment",
    categoryLabel: "Investment",
    categorySlug: "investment",
    tags: ["comparison", "basics"],
  },
  {
    title: "How Much Is a 1 oz Gold Bar Worth?",
    slug: "how-much-is-a-1-oz-gold-bar-worth",
    description:
      "The value of a 1 oz gold bar depends on the current spot price plus the dealer premium. Spot prices fluctuate throughout trading hours based on global market activity.",
    excerpt:
      "Understand how 1 oz gold bar pricing works, from spot price to dealer premiums.",
    category: "pricing",
    categoryLabel: "Pricing",
    categorySlug: "pricing",
    tags: ["pricing", "basics"],
  },
  {
    title: "Are 1 oz Gold Bars a Good Investment?",
    slug: "are-1-oz-gold-bars-a-good-investment",
    description:
      "Physical gold has historically served as a store of value and portfolio diversifier. Whether 1 oz bars fit your situation depends on your goals, timeline, and risk tolerance.",
    excerpt:
      "Explore the investment case for 1 oz gold bars and what to consider before buying.",
    category: "investment",
    categoryLabel: "Investment",
    categorySlug: "investment",
    tags: ["basics"],
  },
  {
    title: "How to Buy 1 oz Gold Bars Safely",
    slug: "how-to-buy-1-oz-gold-bars-safely",
    description:
      "Buying gold safely means working with established dealers, verifying product authenticity, and understanding payment and delivery options. This guide covers due diligence steps.",
    excerpt:
      "A step-by-step guide to purchasing 1 oz gold bars from reputable sources.",
    category: "buying-guide",
    categoryLabel: "Buying Guide",
    categorySlug: "buying-guide",
    tags: ["basics", "security"],
  },
  {
    title: "1 oz Gold Bar vs 10 oz Gold Bar",
    slug: "1-oz-vs-10-oz-gold-bar",
    description:
      "Larger bars typically have lower per-ounce premiums but require more capital upfront. This comparison breaks down the trade-offs between 1 oz and 10 oz gold bars.",
    excerpt:
      "Compare premiums, liquidity, and practical factors between 1 oz and 10 oz gold bars.",
    category: "investment",
    categoryLabel: "Investment",
    categorySlug: "investment",
    tags: ["comparison", "pricing"],
  },
  {
    title: "1 oz Gold Bar vs Gold Rounds",
    slug: "1-oz-gold-bar-vs-gold-round",
    description:
      "Gold rounds look like coins but lack legal tender status. Both rounds and bars trade based on gold content, though premiums and resale liquidity can differ.",
    excerpt:
      "Understand the differences between 1 oz gold bars and privately minted gold rounds.",
    category: "investment",
    categoryLabel: "Investment",
    categorySlug: "investment",
    tags: ["comparison"],
  },
  {
    title: "Best 1 oz Gold Bars to Buy",
    slug: "best-1-oz-gold-bars-to-buy",
    description:
      "PAMP Suisse, Valcambi, Perth Mint, and other LBMA-accredited refiners produce widely recognized 1 oz bars. Brand choice affects premium, security features, and resale ease.",
    excerpt:
      "Compare top 1 oz gold bar brands from PAMP, Valcambi, Perth Mint, and other refiners.",
    category: "products",
    categoryLabel: "Products",
    categorySlug: "products",
    tags: ["basics", "selling"],
  },
  {
    title: "Are 1 oz Gold Bars Easy to Sell?",
    slug: "are-1-oz-gold-bars-easy-to-sell",
    description:
      "The 1 oz size is among the most liquid in the retail gold market. Most dealers buy back recognized brands, though you'll receive the bid price rather than the ask.",
    excerpt:
      "Learn about the resale market for 1 oz gold bars and what to expect when selling.",
    category: "market",
    categoryLabel: "Market",
    categorySlug: "market",
    tags: ["selling", "basics"],
  },
  {
    title: "How to Store 1 oz Gold Bars",
    slug: "how-to-store-1-oz-gold-bars",
    description:
      "Storage options range from home safes to bank safe deposit boxes to professional vault services. Each approach involves different costs, access, and insurance considerations.",
    excerpt:
      "Compare storage solutions for 1 oz gold bars including home, bank, and vault options.",
    category: "security",
    categoryLabel: "Security",
    categorySlug: "security",
    tags: ["storage", "security"],
  },
  {
    title: "How to Tell if a 1 oz Gold Bar Is Real",
    slug: "how-to-tell-if-a-1-oz-gold-bar-is-real",
    description:
      "Authentication methods include visual inspection, weight verification, dimensions testing, and professional assay. Buying from reputable sources reduces counterfeit risk significantly.",
    excerpt:
      "Methods for verifying authenticity of 1 oz gold bars and avoiding counterfeits.",
    category: "security",
    categoryLabel: "Security",
    categorySlug: "security",
    tags: ["security", "basics"],
  },
  {
    title: "Do 1 oz Gold Bars Have Serial Numbers?",
    slug: "do-1-oz-gold-bars-have-serial-numbers",
    description:
      "Many 1 oz bars from major refiners include unique serial numbers and assay cards. Serial numbers aid authentication and can be important for insurance documentation.",
    excerpt:
      "Understanding serial numbers, assay cards, and documentation on 1 oz gold bars.",
    category: "security",
    categoryLabel: "Security",
    categorySlug: "security",
    tags: ["security"],
  },
  {
    title: "What Is the Premium on a 1 oz Gold Bar?",
    slug: "1-oz-gold-bar-premium-explained",
    description:
      "The premium is the amount you pay above spot price, covering refining, fabrication, and dealer margin. Premiums on 1 oz bars typically range from 3-8% depending on brand and market conditions.",
    excerpt:
      "Understand what premiums are, why they exist, and what affects 1 oz gold bar pricing.",
    category: "pricing",
    categoryLabel: "Pricing",
    categorySlug: "pricing",
    tags: ["pricing"],
  },
  {
    title: "1 oz Gold Bars vs Gold ETFs",
    slug: "1-oz-gold-bars-vs-gold-etfs",
    description:
      "Physical bars provide direct ownership with no counterparty risk, while ETFs offer easier trading and no storage burden. The right choice depends on your priorities.",
    excerpt:
      "Compare physical 1 oz gold bars to gold ETFs across ownership, costs, and convenience.",
    category: "investment",
    categoryLabel: "Investment",
    categorySlug: "investment",
    tags: ["comparison", "etfs"],
  },
  {
    title: "Are 1 oz Gold Bars Taxable?",
    slug: "are-1-oz-gold-bars-taxable",
    description:
      "Gold bar sales may trigger capital gains taxes, and some states charge sales tax on purchases. Tax treatment varies by jurisdiction and holding period.",
    excerpt:
      "General tax considerations when buying and selling 1 oz gold bars.",
    category: "tax-legal",
    categoryLabel: "Tax & Legal",
    categorySlug: "tax-legal",
    tags: ["taxes"],
  },
  {
    title: "Why Investors Choose 1 oz Gold Bars",
    slug: "why-investors-choose-1-oz-gold-bars",
    description:
      "The 1 oz format balances accessibility with reasonable premiums. It's large enough to be cost-efficient yet small enough for gradual accumulation and flexible liquidation.",
    excerpt:
      "The key reasons individual investors prefer the 1 oz gold bar format.",
    category: "market",
    categoryLabel: "Market",
    categorySlug: "market",
    tags: ["basics"],
  },
];

/**
 * Get a resource by slug
 */
export function getResource1ozBySlug(slug: string): Resource1oz | undefined {
  return resources1oz.find((r) => r.slug === slug);
}

/**
 * Get resources by category
 */
export function getResources1ozByCategory(category: CategorySlug): Resource1oz[] {
  return resources1oz.filter((r) => r.category === category);
}

/**
 * Get resources by tag
 */
export function getResources1ozByTag(tag: string): Resource1oz[] {
  return resources1oz.filter((r) => r.tags.includes(tag));
}

/**
 * Get all unique categories in use
 */
export function getResourceCategories(): CategorySlug[] {
  return [...new Set(resources1oz.map((r) => r.category))];
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  resources1oz.forEach((r) => r.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
