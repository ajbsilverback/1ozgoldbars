import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { GoldPriceChart } from "@/components/MonexWidgets";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import LiveGbozSpotCard from "@/components/LiveGbozSpotCard";
import LiveGoldSpotIndexCard from "@/components/LiveGoldSpotIndexCard";
import { pricesQA } from "@/data/qa-content";
import { fetchProductSpot } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "1 oz Gold Bar Price | Live Gold Spot Prices & Premium Guide",
  description:
    "Track live 1 oz gold bar prices, understand spot price vs premium, and learn what to compare when buying. Independent educational resource for gold investors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/live-gold-prices`,
  },
  openGraph: {
    title: "1 oz Gold Bar Price | Live Gold Spot Prices & Premium Guide",
    description:
      "Track live 1 oz gold bar prices, understand spot price vs premium, and learn what to compare when buying.",
    url: `${SITE_CONFIG.domain}/live-gold-prices`,
  },
};

export default async function PricesPage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "1 oz Gold Bar Price | Live Gold Spot Prices & Premium Guide",
    description:
      "Track live 1 oz gold bar prices, understand spot price vs premium, and learn what to compare when buying.",
    url: `${SITE_CONFIG.domain}/live-gold-prices`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a 1 oz gold bar worth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 1 oz gold bar is worth the current gold spot price plus a dealer premium, typically ranging from 3% to 8%. The spot price fluctuates continuously during market hours based on global supply and demand. Check live pricing on this page for current values.",
        },
      },
      {
        "@type": "Question",
        name: "Why is the price of a 1 oz gold bar higher than spot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The price above spot is called the premium. It covers the costs of refining, minting, assaying, packaging, shipping, and dealer margins. Premiums vary by refiner, dealer, and market conditions. The 1 oz size typically has premiums of 3-8% over spot.",
        },
      },
      {
        "@type": "Question",
        name: "Do 1 oz gold bars have serial numbers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many 1 oz gold bars from major refiners include serial numbers and come with assay cards that document the bar's weight, purity, and unique identifier. However, not all bars have serial numbers. Generic bars from smaller refiners may not include this documentation.",
        },
      },
      {
        "@type": "Question",
        name: "How often do gold prices change?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gold prices change continuously during market hours as the precious metals market operates nearly 24 hours a day, five days a week. Major price movements are influenced by currency fluctuations, central bank policies, geopolitical events, and supply and demand dynamics.",
        },
      },
      {
        "@type": "Question",
        name: "Is pricing the same at every dealer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, pricing varies between dealers. While all dealers reference the same spot price, their premiums differ based on their business model, overhead costs, and competitive positioning. Always compare total prices (including shipping and fees) from multiple dealers before purchasing.",
        },
      },
    ],
  };

  const aiSummaryBullets = [
    "This page displays live 1 oz gold bar prices via Monex data",
    "Track gold spot prices per troy ounce for reference",
    "Understand how spot prices relate to 1 oz bar retail pricing",
    "Learn about premium structures: 1 oz bars typically have 3-8% premiums",
    "Compare what affects pricing before you buy",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 gold-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bullion-darker via-transparent to-bullion-darker" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="gold-text">1 oz Gold Bar Prices</span>
              <br />
              <span className="text-white">& Live Gold Spot Prices</span>
            </h1>

            {/* AI Summary - placed after H1 */}
            <AISummary bullets={aiSummaryBullets} />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6 text-left">
              Track live gold prices and understand how spot pricing affects 
              the cost of 1 oz gold bars. Use these tools to compare dealer 
              pricing and make informed decisions. Return to our{" "}
              <Link href="/" className="text-bullion-gold hover:underline">
                homepage
              </Link>{" "}
              or check out our{" "}
              <Link href="/where-to-buy" className="text-bullion-gold hover:underline">
                buying guide
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Zone - Live Cards */}
      <section className="py-10 md:py-12 section-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Live 1 oz Gold Bar Price Card */}
          <LiveGbozSpotCard showCta={false} />

          {/* Live Gold Spot Index Card */}
          <LiveGoldSpotIndexCard />

          {/* Chart Widget */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-4 text-white text-center">
              Gold Price Chart
            </h2>
            <div className="max-w-4xl mx-auto">
              <GoldPriceChart />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Spot Price vs Premium */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Understanding <span className="gold-text">1 oz Gold Bar Pricing</span>
            </h2>

            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <div className="card">
                <h3 className="text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  Spot Price vs. Premium
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The <strong className="text-white">spot price</strong> is the 
                  current market rate for one troy ounce of gold traded on 
                  commodities exchanges. It reflects wholesale, bulk trading 
                  between large institutions and changes continuously during 
                  market hours.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The <strong className="text-white">premium</strong> is the 
                  amount above spot price that you pay when buying a physical 
                  gold bar. For 1 oz gold bars, premiums typically range from 
                  3% to 8% depending on the refiner, dealer, and market conditions.
                </p>
                <div className="bg-bullion-darker/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">
                    <strong className="text-bullion-gold">Example:</strong> If 
                    gold spot is $2,000 per ounce and the premium is 5%, you 
                    would pay approximately $2,100 for a 1 oz gold bar (before 
                    any shipping or payment fees).
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  Why Premiums Change
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Premiums are not fixed. They fluctuate based on several factors:
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Supply and Demand:</strong> When 
                      demand for physical gold increases (often during market uncertainty), 
                      premiums rise. When demand is low, premiums typically decrease.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Refiner Reputation:</strong> Bars 
                      from well-known, LBMA-accredited refiners often carry slightly 
                      higher premiums due to broader recognition and easier resale.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Dealer Competition:</strong> Different 
                      dealers have different overhead costs and pricing strategies. 
                      Shopping around can reveal significant premium differences.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Payment Method:</strong> Many 
                      dealers offer lower prices for wire transfers or checks 
                      compared to credit card payments.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  What Buyers Should Compare
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  When evaluating 1 oz gold bar prices, do not focus solely on 
                  the listed bar price. Consider the total cost:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Premium over spot:</strong> Calculate 
                      the percentage above spot price to compare apples to apples.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Shipping and insurance:</strong> Some 
                      dealers include free shipping; others charge separately.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Payment method fees:</strong> Credit 
                      card convenience may cost 2-4% more than bank wire.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Buyback spread:</strong> What will 
                      the dealer pay when you sell back? This affects your true cost 
                      of ownership.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Checklist */}
      <section className="py-12 md:py-16 section-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              <span className="gold-text">Price Checklist</span> Before You Buy
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Use this checklist to ensure you are comparing prices accurately 
              and not missing hidden costs.
            </p>

            <div className="space-y-4">
              <div className="card p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Confirm Bar Weight
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Verify the listing is for exactly 1 troy ounce (31.1035 grams). 
                    Some listings may use different weight measurements or include 
                    fractional bars.
                  </p>
                </div>
              </div>

              <div className="card p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Verify Purity
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Standard investment-grade gold bars are .9999 fine (99.99% pure 
                    gold). Some older or specialty bars may be .999 or .995. Know 
                    what you are buying.
                  </p>
                </div>
              </div>

              <div className="card p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Add Shipping and Insurance
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Factor in shipping costs and confirm the shipment is fully 
                    insured. A lower bar price with expensive shipping may cost 
                    more than a slightly higher price with free shipping.
                  </p>
                </div>
              </div>

              <div className="card p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Check Payment Method Fees
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Compare prices for your preferred payment method. Wire transfer 
                    prices are often 2-4% lower than credit card prices. Calculate 
                    your actual total.
                  </p>
                </div>
              </div>

              <div className="card p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-bullion-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Ask About Dealer Buyback Spread
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Understand what the dealer will pay when you eventually sell. 
                    A dealer with a tight buyback spread (1-3% below spot) may be 
                    better than one with a lower purchase price but wider spread.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Page FAQs */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-8 text-center">
              <span className="gold-text">Common Questions</span> About 1 oz Gold Bar Prices
            </h2>

            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What is a 1 oz gold bar worth?
                </h3>
                <p className="text-gray-400">
                  A 1 oz gold bar is worth the current gold spot price plus a 
                  dealer premium, typically ranging from 3% to 8%. The spot price 
                  fluctuates continuously during market hours based on global 
                  supply and demand. Check the live pricing widgets above for 
                  current values.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Why is the price higher than spot?
                </h3>
                <p className="text-gray-400">
                  The amount above spot is called the premium. It covers the 
                  costs of refining raw gold into bars, minting, assaying, 
                  packaging, shipping to dealers, and dealer profit margins. 
                  Every physical gold product carries a premium; it is not 
                  possible to buy retail gold at spot price.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Do 1 oz gold bars have serial numbers?
                </h3>
                <p className="text-gray-400">
                  Many 1 oz gold bars from major refiners include serial numbers 
                  and come with assay cards that document the bar&apos;s weight, 
                  purity, and unique identifier. However, not all bars have 
                  serial numbers. Generic bars from smaller refiners may not 
                  include this documentation. Serialized bars are generally 
                  easier to resell.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How often does the price change?
                </h3>
                <p className="text-gray-400">
                  Gold spot prices change continuously during market hours. The 
                  precious metals market operates nearly 24 hours a day, five 
                  days a week, with trading happening in markets around the 
                  world. Dealer prices typically update throughout the day to 
                  reflect spot movements.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Is pricing the same everywhere?
                </h3>
                <p className="text-gray-400">
                  No, pricing varies between dealers. While all dealers reference 
                  the same spot price, their premiums differ based on their 
                  business model, overhead costs, and competitive positioning. 
                  Always compare total prices (including shipping and fees) from 
                  multiple dealers before purchasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={pricesQA} includeSchema={false} priceData={priceData} />

      {/* Monex Research Link */}
      <section className="py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-6">
            For detailed market analysis and pricing information:
          </p>
          <a
            href="https://www.monex.com/gold-prices/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
          >
            <span>Research gold prices at Monex</span>
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
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to Buy 1 oz Gold Bars?
          </h2>
          <p className="text-gray-400 mb-6">
            Check out our{" "}
            <Link href="/where-to-buy" className="text-bullion-gold hover:underline">
              buying guide
            </Link>{" "}
            to find reputable dealers and learn how to buy safely
            {SITE_CONFIG.features.resourcesEnabled && (
              <>
                , or explore our{" "}
                <Link href="/resources" className="text-bullion-gold hover:underline">
                  educational resources
                </Link>
              </>
            )}
            .
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/where-to-buy" className="btn-primary">
              Where to Buy
            </Link>
            <Link href="/" className="btn-secondary">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
