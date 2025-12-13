import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Where to Buy 1 oz Gold Bars | Independent Buying Guide",
  description:
    "Learn where to buy 1 oz gold bars online and locally, including major dealers, local coin shops, marketplaces, and storage providers. Independent, educational guidance only.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/where-to-buy-1-oz-gold-bars`,
  },
  openGraph: {
    title: "Where to Buy 1 oz Gold Bars | Independent Buying Guide",
    description:
      "Learn where to buy 1 oz gold bars online and locally, including major dealers, local coin shops, marketplaces, and storage providers.",
    url: `${SITE_CONFIG.domain}/where-to-buy-1-oz-gold-bars`,
  },
};

// Online dealers data
const onlineDealers = [
  // Row 1: Monex, JM Bullion, APMEX
  {
    name: "Monex",
    description:
      "A precious metals dealer that provides live market data and offers various gold bar products for purchase.",
    url: "https://www.monex.com/1-oz-gold-bullion-bars-for-sale/",
  },
  {
    name: "JM Bullion",
    description:
      "An established online precious metals dealer with inventory from major refiners including PAMP Suisse and Credit Suisse.",
    url: "https://www.jmbullion.com/gold/gold-bars/1-oz-gold-bars/",
  },
  {
    name: "APMEX",
    description:
      "A large online bullion retailer offering a wide range of 1 oz gold bars from various mints and refiners.",
    url: "https://www.apmex.com/category/19422/1-oz-gold-bars",
  },
  // Row 2: Kitco, Bullion Exchanges, SD Bullion
  {
    name: "Kitco",
    description:
      "A long-standing precious metals dealer and data provider offering gold bars alongside market information.",
    url: "https://online.kitco.com/gold-bars",
  },
  {
    name: "Bullion Exchanges",
    description:
      "A New York-based bullion dealer offering a variety of 1 oz gold bars with multiple payment options.",
    url: "https://bullionexchanges.com/view-all-gold-bars",
  },
  {
    name: "SD Bullion",
    description:
      "An online dealer known for competitive pricing on bullion products, including 1 oz gold bars.",
    url: "https://sdbullion.com/gold/gold-bars/1-oz-gold-bars",
  },
];

export default function WhereToBuyPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Where to Buy 1 oz Gold Bars | Independent Buying Guide",
    description:
      "Learn where to buy 1 oz gold bars online and locally, including major dealers, local coin shops, marketplaces, and storage providers.",
    url: `${SITE_CONFIG.domain}/where-to-buy-1-oz-gold-bars`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Where to buy 1 oz gold bars",
    description:
      "Types of vendors and platforms for purchasing 1 oz gold bars",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Online Bullion Dealers",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Local Coin Shops",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Marketplaces & Auctions",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Vaulted & Custodial Programs",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="gold-text">Where to Buy</span>
              <br />
              <span className="text-white">1 oz Gold Bars</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              An independent educational guide to understanding your options
              for purchasing 1 oz gold bars from various sources.
            </p>
            <div className="bg-bullion-gold/5 border border-bullion-gold/20 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-400 text-sm">
                <strong className="text-bullion-gold">Important:</strong>{" "}
                {SITE_CONFIG.brandName} is an independent educational resource.
                We do not sell precious metals and are not affiliated with any
                of the dealers listed on this page. All purchasing decisions
                should be made after your own research and due diligence.
              </p>
            </div>
          </section>

          {/* How to Evaluate Dealers */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              How to <span className="gold-text">Evaluate Dealers</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Reputation & Reviews
                </h3>
                <p className="text-gray-400 text-sm">
                  Research dealer history, customer reviews, and industry
                  accreditations. Look for established businesses with
                  transparent track records.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pricing & Spreads
                </h3>
                <p className="text-gray-400 text-sm">
                  Compare premiums over spot price and understand bid-ask
                  spreads. Transparent pricing with clear breakdowns helps you
                  evaluate true costs.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Shipping & Insurance
                </h3>
                <p className="text-gray-400 text-sm">
                  Understand shipping costs, delivery times, and insurance
                  coverage. Reputable dealers fully insure shipments until
                  delivery.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Buyback Policies
                </h3>
                <p className="text-gray-400 text-sm">
                  Check whether the dealer offers buyback programs and at what
                  spread. This affects your exit strategy when selling.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Storage & Security
                </h3>
                <p className="text-gray-400 text-sm">
                  Some dealers offer storage options. Understand whether storage
                  is allocated (your specific bars) or unallocated (pooled).
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Customer Support
                </h3>
                <p className="text-gray-400 text-sm">
                  Evaluate responsiveness and helpfulness of customer service.
                  Accessible support is important for resolving any issues.
                </p>
              </div>
            </div>
          </section>

          {/* Online Bullion Dealers */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="gold-text">Online</span> Bullion Dealers
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Major online dealers offer wide selection, competitive pricing,
              and convenient shipping. Compare multiple sources before
              purchasing.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onlineDealers.map((dealer) => (
                <div
                  key={dealer.name}
                  className="card p-6 flex flex-col"
                >
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    {dealer.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {dealer.description}
                  </p>
                  <a
                    href={dealer.url}
                    target="_blank"
                    rel="nofollow"
                    className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors text-sm font-medium"
                  >
                    <span>{dealer.name} 1 oz gold bars</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Local Coin Shops */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="gold-text">Local</span> Coin Shops & Dealers
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                Local coin shops and bullion dealers offer benefits that online
                purchasing cannot replicate:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">•</span>
                  <span className="text-gray-400">
                    <strong className="text-white">Face-to-face transactions</strong>{" "}
                    — Build relationships and negotiate directly with dealers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">•</span>
                  <span className="text-gray-400">
                    <strong className="text-white">Immediate possession</strong>{" "}
                    — Walk out with your gold bars the same day, no shipping delays.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">•</span>
                  <span className="text-gray-400">
                    <strong className="text-white">Physical inspection</strong>{" "}
                    — Examine bars before purchase and verify authenticity in person.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">•</span>
                  <span className="text-gray-400">
                    <strong className="text-white">Privacy considerations</strong>{" "}
                    — Cash transactions may offer more privacy than online purchases.
                  </span>
                </li>
              </ul>
              <div className="bg-bullion-darker/50 rounded-lg p-4">
                <p className="text-gray-500 text-sm">
                  <strong className="text-gray-400">Finding local dealers:</strong>{" "}
                  Search for &ldquo;coin shop near me&rdquo; or &ldquo;bullion dealer&rdquo;
                  in your area. Check reviews, verify business licensing, and
                  consider visiting multiple shops to compare pricing.
                </p>
              </div>
            </div>
          </section>

          {/* Marketplaces & Auctions */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="gold-text">Marketplaces</span> & Auctions
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                Online marketplaces and auction houses provide alternative
                channels for purchasing gold bars, often with broader selection
                including rare or vintage pieces.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Potential Benefits
                  </h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Wider selection from multiple sellers</li>
                    <li>• Access to numismatic and vintage bars</li>
                    <li>• Competitive bidding may yield savings</li>
                    <li>• Buyer protection programs available</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Key Risks to Consider
                  </h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Counterfeit risk from unknown sellers</li>
                    <li>• Seller verification requires diligence</li>
                    <li>• Premium pricing on rare items</li>
                    <li>• Return policies vary by seller</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.ebay.com/b/1-oz-Gold-Bars-Rounds/39484/bn_16565482"
                  target="_blank"
                  rel="nofollow"
                  className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors text-sm"
                >
                  <span>eBay bullion category</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.ha.com/gold-platinum.s"
                  target="_blank"
                  rel="nofollow"
                  className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors text-sm"
                >
                  <span>Heritage Auctions precious metals</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Vaulted & Custodial Programs */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="gold-text">Vaulted</span> & Custodial Programs
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                Some investors prefer purchasing gold that remains stored at
                professional vault facilities rather than taking physical
                delivery. This approach offers security and convenience but
                requires trust in the custodian.
              </p>
              <div className="bg-bullion-gold/5 border border-bullion-gold/20 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Allocated vs. Unallocated Storage
                </h3>
                <p className="text-gray-400 text-sm">
                  <strong className="text-white">Allocated storage</strong> means
                  your specific bars are segregated and identified as yours.{" "}
                  <strong className="text-white">Unallocated storage</strong> means
                  you have a claim on a quantity of gold held in aggregate. Most
                  experts recommend allocated storage for better protection.
                </p>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Major vault and logistics providers serving the precious metals
                industry include:
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.brinks.com/en/services/global-services/precious-metals-services"
                  target="_blank"
                  rel="nofollow"
                  className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors text-sm"
                >
                  <span>Brink&apos;s precious metals services</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.loomis.com/services/precious-metals-services"
                  target="_blank"
                  rel="nofollow"
                  className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors text-sm"
                >
                  <span>Loomis vault storage</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Price & Data Sources */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Using Multiple <span className="gold-text">Pricing Sources</span>
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                Our{" "}
                <Link href="/prices" className="text-bullion-gold hover:underline">
                  live gold prices
                </Link>{" "}
                use data from Monex, but comparing prices across multiple
                sources helps you understand market conditions and verify
                dealer pricing.
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                Additional pricing resources:
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.monex.com/gold-prices/"
                    target="_blank"
                    rel="nofollow"
                    className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
                  >
                    <span>Monex live gold prices</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <span className="text-gray-500 text-sm ml-2">— Primary data source for this site</span>
                </li>
                <li>
                  <a
                    href="https://www.kitco.com/gold-price-today-usa/"
                    target="_blank"
                    rel="nofollow"
                    className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
                  >
                    <span>Kitco gold price charts</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://goldprice.org/"
                    target="_blank"
                    rel="nofollow"
                    className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
                  >
                    <span>GoldPrice.org market data</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="border-t border-bullion-gold/10 pt-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl font-display font-semibold text-gray-400 mb-4">
                Disclaimer
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {SITE_CONFIG.brandName} does not endorse, recommend, or rank any
                specific dealer, platform, or storage provider. The information
                on this page is for educational purposes only and should not be
                construed as financial advice or a recommendation to purchase
                from any particular source. Gold investments carry risks, and
                prices can fluctuate significantly. Always perform your own due
                diligence, verify dealer credentials, and consult with a
                qualified financial advisor before making investment decisions.
              </p>
            </div>
          </section>

          {/* Navigation Links */}
          <section className="text-center">
            <p className="text-gray-400 mb-6">
              Continue exploring {SITE_CONFIG.brandName}:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/prices" className="btn-primary">
                View Live Gold Prices
              </Link>
              <Link href="/resources" className="btn-secondary">
                Educational Resources
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

