export interface Resource {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  monexLink: string;
}

export const resources: Resource[] = [
  {
    slug: "premiums-explained",
    title: "Understanding 1 oz Gold Bar Premiums: A Complete Guide",
    description:
      "Learn what premiums are, why they exist, and how to evaluate them when purchasing 1 oz gold bars.",
    excerpt:
      "Discover the factors that determine premiums on 1 oz gold bars and how to minimize your cost per ounce.",
    category: "Pricing",
    monexLink: "https://www.monex.com/knowledge/understanding-1-oz-gold-bar-prices/",
  },
  {
    slug: "liquidity-benefits",
    title: "The Liquidity Advantage of 1 oz Gold Bars",
    description:
      "Why 1 oz gold bars offer superior liquidity compared to larger denominations and how this benefits investors.",
    excerpt:
      "Explore why 1 oz gold bars are the most liquid form of gold bullion and how this translates to real-world advantages.",
    category: "Investment",
    monexLink: "https://www.monex.com/1-oz-gold-bullion-bars-for-sale/",
  },
  {
    slug: "storage-options",
    title: "Storing Your 1 oz Gold Bars: Options and Best Practices",
    description:
      "Compare storage solutions for 1 oz gold bars from home safes to professional vault services.",
    excerpt:
      "A comprehensive guide to securing your gold bar investment with the right storage solution.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge/owning-1-oz-gold-bars/",
  },
  {
    slug: "brand-differences",
    title: "Comparing 1 oz Gold Bar Brands: PAMP, Perth, and More",
    description:
      "An in-depth comparison of major 1 oz gold bar manufacturers and what differentiates their products.",
    excerpt:
      "Learn the differences between PAMP Suisse, Perth Mint, Credit Suisse, and other top gold bar producers.",
    category: "Products",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/gold-bullion/1oz-gold-bullion-bars/",
  },
  {
    slug: "size-comparison",
    title: "1 oz vs 10 oz vs Kilo Bars: Finding Your Ideal Size",
    description:
      "A detailed comparison of gold bar sizes to help you choose the right denomination for your investment goals.",
    excerpt:
      "Compare 1 oz, 10 oz, and kilo gold bars across premiums, liquidity, and practical considerations.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "market-dynamics",
    title: "Gold Market Dynamics: What Moves 1 oz Bar Prices",
    description:
      "Understanding the economic factors, geopolitical events, and market forces that influence gold prices.",
    excerpt:
      "Explore the key drivers behind gold price movements and what they mean for bar investors.",
    category: "Market",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "spreads-explained",
    title: "Understanding Bid-Ask Spreads on 1 oz Gold Bars",
    description:
      "Learn how dealer spreads work and strategies to minimize costs when buying and selling gold bars.",
    excerpt:
      "Master the concept of bid-ask spreads and learn how to get the best prices on your gold bar trades.",
    category: "Pricing",
    monexLink: "https://www.monex.com/1-oz-gold-bullion-bar-price-charts/",
  },
  {
    slug: "handling-guide",
    title: "Safe Handling and Care for Your 1 oz Gold Bars",
    description:
      "Best practices for handling, inspecting, and maintaining the condition of your gold bar investment.",
    excerpt:
      "Protect your investment value with proper handling techniques and care guidelines for gold bars.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge/the-making-of-1-oz-gold-bars/",
  },
  {
    slug: "bars-vs-coins",
    title: "Gold Bars vs Gold Coins: Which Is Right for You?",
    description:
      "A comprehensive comparison of gold bars and coins covering premiums, liquidity, and collector value.",
    excerpt:
      "Compare 1 oz gold bars with gold coins to determine which form best suits your investment strategy.",
    category: "Products",
    monexLink: "https://www.monex.com/knowledge/1-oz-gold-bar-legacy/",
  },
  {
    slug: "market-history",
    title: "The History and Evolution of 1 oz Gold Bars",
    description:
      "Trace the development of the 1 oz gold bar from early bullion trading to modern investment standard.",
    excerpt:
      "Discover how 1 oz gold bars became the world's most popular gold investment denomination.",
    category: "History",
    monexLink: "https://www.monex.com/knowledge/1-oz-gold-bar-legacy/",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map((r) => r.category))];
}


