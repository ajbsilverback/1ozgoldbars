import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Where to Buy 1 oz Gold Bars | Independent Buying Guide",
  description:
    "Learn where to buy 1 oz gold bars safely, how to evaluate dealers, and what to look for in pricing, authenticity, and storage. Independent educational guide.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/where-to-buy`,
  },
  openGraph: {
    title: "Where to Buy 1 oz Gold Bars | Independent Buying Guide",
    description:
      "Learn where to buy 1 oz gold bars safely, how to evaluate dealers, and what to look for in pricing, authenticity, and storage.",
    url: `${SITE_CONFIG.domain}/where-to-buy`,
  },
};

// Online dealers data - multiple sources for comparison
const onlineDealers = [
  {
    name: "JM Bullion",
    description:
      "An established online precious metals dealer offering 1 oz gold bars from major refiners including PAMP Suisse, Perth Mint, and Valcambi.",
    url: "https://www.jmbullion.com/gold/gold-bars/1-oz-gold-bars/",
  },
  {
    name: "APMEX",
    description:
      "A large online bullion retailer with a wide selection of 1 oz gold bars from various mints and refiners worldwide.",
    url: "https://www.apmex.com/category/25401/1-oz-gold-bars",
  },
  {
    name: "SD Bullion",
    description:
      "An online dealer known for competitive pricing on bullion products, including 1 oz gold bars from recognized refiners.",
    url: "https://sdbullion.com/gold/gold-bars/1-oz-gold-bars",
  },
  {
    name: "Kitco",
    description:
      "A long-standing precious metals dealer and data provider offering 1 oz gold bars alongside comprehensive market information.",
    url: "https://online.kitco.com/gold-bars",
  },
  {
    name: "Bullion Exchanges",
    description:
      "A New York-based bullion dealer offering 1 oz gold bars with multiple payment options and competitive pricing.",
    url: "https://bullionexchanges.com/1-oz-gold-bars",
  },
  {
    name: "Monex",
    description:
      "A precious metals dealer providing live market data and various gold bar products for purchase.",
    url: "https://www.monex.com/gold/",
  },
];

export default function WhereToBuyPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Where to Buy 1 oz Gold Bars | Independent Buying Guide",
    description:
      "Learn where to buy 1 oz gold bars safely, how to evaluate dealers, and what to look for in pricing, authenticity, and storage.",
    url: `${SITE_CONFIG.domain}/where-to-buy`,
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
              An independent guide to understanding your options for purchasing
              1 oz (one troy ounce) gold bars from reputable sources. Learn what
              to look for, how to evaluate dealers, and how to avoid common pitfalls.
            </p>
            <div className="bg-bullion-gold/5 border border-bullion-gold/20 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-400 text-sm">
                <strong className="text-bullion-gold">Important:</strong>{" "}
                {SITE_CONFIG.brandName} is an independent educational resource.
                We do not sell precious metals and are not affiliated with any
                of the dealers listed on this page. We encourage you to compare
                prices and services across multiple dealers before making any
                purchase. All purchasing decisions should be made after your
                own research and due diligence.
              </p>
            </div>
          </section>

          {/* How to Buy Safely - 5 Steps */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              How to Buy <span className="gold-text">Safely</span>
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Follow these five steps to help ensure a secure purchase. For more
              detail, see our guide on{" "}
              <Link
                href="/resources/how-to-buy-1-oz-gold-bars-safely"
                className="text-bullion-gold hover:underline"
              >
                how to buy 1 oz gold bars safely
              </Link>
              .
            </p>
            <div className="grid gap-6">
              <div className="card p-6 flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-bullion-gold font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Choose a Reputable Dealer
                  </h3>
                  <p className="text-gray-400">
                    Look for established dealers with verifiable business addresses,
                    industry memberships (such as ICTA or PNG), and strong customer
                    reviews. Check how long they have been in business and whether
                    they have a physical presence. Avoid sellers with no track record
                    or unclear ownership.
                  </p>
                </div>
              </div>

              <div className="card p-6 flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-bullion-gold font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Compare Premiums Over Spot
                  </h3>
                  <p className="text-gray-400">
                    The price of a 1 oz gold bar equals the current spot price plus
                    a dealer premium, typically ranging from 3% to 8% for this size.
                    Get quotes from multiple dealers and compare the total cost
                    including any shipping or handling fees. Check our{" "}
                    <Link
                      href="/live-gold-prices"
                      className="text-bullion-gold hover:underline"
                    >
                      live gold prices page
                    </Link>{" "}
                    to see current spot pricing.
                  </p>
                </div>
              </div>

              <div className="card p-6 flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-bullion-gold font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Confirm Product Details
                  </h3>
                  <p className="text-gray-400">
                    Verify the bar weight (1 troy ounce = 31.1035 grams), purity
                    (typically .9999 fine gold), and refiner. Reputable bars come
                    with assay cards or certificates that document authenticity.
                    Understand what you are buying before completing the transaction.
                  </p>
                </div>
              </div>

              <div className="card p-6 flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-bullion-gold font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Understand Payment and Shipping
                  </h3>
                  <p className="text-gray-400">
                    Review payment options (wire, check, card) and understand any
                    price differences between methods. Confirm that shipping is fully
                    insured and requires signature on delivery. Know the dealer&apos;s
                    policy on damaged or missing shipments before you pay.
                  </p>
                </div>
              </div>

              <div className="card p-6 flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-bullion-gold font-bold text-xl">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Plan Your Storage
                  </h3>
                  <p className="text-gray-400">
                    Decide where you will store your gold before purchasing. Options
                    include a home safe, bank safe deposit box, or professional vault
                    storage. Consider insurance for your holdings regardless of storage
                    method. Keep bars in original packaging to preserve condition and
                    simplify future resale.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Red Flags to Avoid */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="gold-text">Red Flags</span> to Avoid
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Protect yourself by watching for these warning signs when
              evaluating dealers or offers.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6 border-red-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-white">
                    Too-Good-to-Be-True Pricing
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">
                  If a price is significantly below spot or well under market
                  premiums, be extremely cautious. Legitimate dealers operate on
                  thin margins and cannot sell below cost. Unrealistic prices often
                  indicate counterfeit products or outright scams.
                </p>
              </div>

              <div className="card p-6 border-red-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-white">
                    No Physical Address
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Legitimate bullion dealers have verifiable business addresses.
                  Sellers operating without a physical location, using only P.O.
                  boxes, or providing addresses that do not match a real business
                  are high-risk. Verify the address exists before purchasing.
                </p>
              </div>

              <div className="card p-6 border-red-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-white">
                    No Buyback Policy
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Reputable dealers typically offer buyback programs, purchasing
                  gold back from customers at competitive rates. A dealer unwilling
                  to buy back the products they sell may not stand behind their
                  inventory or may be selling items difficult to resell.
                </p>
              </div>

              <div className="card p-6 border-red-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-white">
                    Unclear Product Specifications
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Vague descriptions like &ldquo;gold bar&rdquo; without specifying
                  weight, purity, or refiner are warning signs. Legitimate listings
                  clearly state the exact product: weight in troy ounces, fineness
                  (such as .9999), and the mint or refinery that produced it.
                </p>
              </div>
            </div>
          </section>

          {/* Generic vs Branded Bars */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Generic vs <span className="gold-text">Branded</span> Bars
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                When shopping for 1 oz gold bars, you will encounter both generic
                (unbranded) bars and bars from recognized refiners. Understanding
                the difference helps you make an informed choice.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Generic Bars
                  </h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-bullion-gold mt-1">•</span>
                      <span>Lower premiums over spot price</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bullion-gold mt-1">•</span>
                      <span>Produced by smaller or secondary refiners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bullion-gold mt-1">•</span>
                      <span>May not include assay cards or serial numbers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bullion-gold mt-1">•</span>
                      <span>Resale may require additional verification</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Branded Bars
                  </h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-bullion-gold mt-1">•</span>
                      <span>Slightly higher premiums</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bullion-gold mt-1">•</span>
                      <span>From LBMA-accredited or well-known refiners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bullion-gold mt-1">•</span>
                      <span>Typically include assay cards and serial numbers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bullion-gold mt-1">•</span>
                      <span>Easier to resell with wider dealer acceptance</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-bullion-gold/5 border border-bullion-gold/20 rounded-lg p-4">
                <p className="text-gray-400 text-sm">
                  <strong className="text-bullion-gold">Note:</strong> Both generic
                  and branded bars contain the same amount of gold. The difference
                  is in documentation, recognition, and resale ease. For most buyers,
                  branded bars from established refiners offer a balance of modest
                  premium and straightforward resale. Learn more in our guide to{" "}
                  <Link
                    href="/resources/what-is-a-1-oz-gold-bar"
                    className="text-bullion-gold hover:underline"
                  >
                    what is a 1 oz gold bar
                  </Link>
                  .
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
              and convenient shipping. We encourage you to compare prices
              across multiple sources before purchasing.
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
                    <span>View {dealer.name} gold bars</span>
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
                Local coin shops and bullion dealers are a great option for
                purchasing 1 oz gold bars, especially if you prefer face-to-face
                transactions.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">•</span>
                  <span className="text-gray-400">
                    <strong className="text-white">In-person inspection:</strong>{" "}
                    Examine bars before purchase and verify authenticity on the spot.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">•</span>
                  <span className="text-gray-400">
                    <strong className="text-white">Immediate possession:</strong>{" "}
                    Walk out with your gold the same day, no shipping delays or risks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">•</span>
                  <span className="text-gray-400">
                    <strong className="text-white">Build relationships:</strong>{" "}
                    Regular customers often receive better pricing and first access
                    to inventory.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">•</span>
                  <span className="text-gray-400">
                    <strong className="text-white">Local expertise:</strong>{" "}
                    Staff can answer questions and may offer testing services.
                  </span>
                </li>
              </ul>
              <div className="bg-bullion-darker/50 rounded-lg p-4">
                <p className="text-gray-500 text-sm">
                  <strong className="text-gray-400">Finding local dealers:</strong>{" "}
                  Search for &ldquo;coin shop near me&rdquo; or &ldquo;bullion dealer&rdquo;
                  in your area. Call ahead to confirm they have 1 oz gold bars in
                  stock and ask about current pricing.
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
                Online marketplaces and auction houses offer 1 oz gold bars,
                though extra caution is warranted when buying from individual
                sellers rather than established dealers.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Potential Benefits
                  </h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Access to a wide variety of products</li>
                    <li>• Competitive pricing from multiple sellers</li>
                    <li>• Buyer protection programs may apply</li>
                    <li>• Convenient comparison shopping</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Key Risks to Consider
                  </h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Counterfeit risk from unknown sellers</li>
                    <li>• Seller verification requires diligence</li>
                    <li>• Return policies vary significantly</li>
                    <li>• Limited recourse if problems arise</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.ebay.com/b/1-oz-Gold-Bars/39484/bn_16566009"
                  target="_blank"
                  rel="nofollow"
                  className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors text-sm"
                >
                  <span>eBay 1 oz gold bars</span>
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
                Some investors prefer professional vault storage rather than
                taking physical delivery. This approach provides institutional-grade
                security while you maintain ownership of specific gold holdings.
              </p>
              <div className="bg-bullion-gold/5 border border-bullion-gold/20 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Allocated vs. Unallocated Storage
                </h3>
                <p className="text-gray-400 text-sm">
                  <strong className="text-white">Allocated storage</strong> means
                  your specific bars are segregated and identified as yours.{" "}
                  <strong className="text-white">Unallocated storage</strong> means
                  you have a claim on a quantity of gold held in aggregate. For
                  physical ownership, allocated storage is recommended.
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
                <Link href="/live-gold-prices" className="text-bullion-gold hover:underline">
                  live gold prices page
                </Link>{" "}
                uses data from Monex. Comparing prices across multiple sources
                helps you understand market conditions and verify dealer pricing.
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                Additional pricing resources:
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.monex.com/gold-prices/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
                  >
                    <span>Monex live gold prices</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <span className="text-gray-500 text-sm ml-2">· Prices provided by Monex</span>
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
                from any particular source. We encourage you to compare prices
                and services across multiple dealers. Gold investments carry risks,
                and prices can fluctuate significantly. Always perform your own due
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
              <Link href="/live-gold-prices" className="btn-primary">
                View Live Gold Prices
              </Link>
              {SITE_CONFIG.features.resourcesEnabled && (
                <Link href="/resources" className="btn-secondary">
                  Browse Resources
                </Link>
              )}
              <Link href="/" className="btn-secondary">
                Return Home
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
