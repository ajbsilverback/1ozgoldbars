import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { GoldPriceChart } from "@/components/MonexWidgets";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import LiveGbozSpotCard from "@/components/LiveGbozSpotCard";
import LiveGoldSpotIndexCard from "@/components/LiveGoldSpotIndexCard";
import { pricesQA } from "@/data/qa-content";

export const metadata: Metadata = {
  title: "Gold Prices & 1 oz Gold Bar Market Overview",
  description:
    "Track live gold prices and understand how spot prices affect 1 oz gold bar premiums. Real-time charts and market data for gold investors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/prices`,
  },
  openGraph: {
    title: "Gold Prices & 1 oz Gold Bar Market Overview",
    description:
      "Track live gold prices and understand how spot prices affect 1 oz gold bar premiums.",
    url: `${SITE_CONFIG.domain}/prices`,
  },
};

export default function PricesPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Gold Prices & 1 oz Gold Bar Market Overview",
    description:
      "Track live gold prices and understand how spot prices affect 1 oz gold bar premiums. Real-time charts and market data for gold investors.",
    url: `${SITE_CONFIG.domain}/prices`,
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
        name: "What determines the price of a 1 oz gold bar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The price of a 1 oz gold bar consists of two components: the spot price of gold (the current market price for immediate delivery) plus a premium that covers manufacturing, distribution, and dealer margins. Premiums typically range from 3-8% over spot depending on the brand and market conditions.",
        },
      },
      {
        "@type": "Question",
        name: "Why do 1 oz gold bars have lower premiums than gold coins?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gold bars generally have lower premiums than coins because they are simpler and less expensive to manufacture. Coins require detailed designs, precise minting, and often carry legal tender status with government backing, all of which add to production costs and premiums.",
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
    ],
  };

  const aiSummaryBullets = [
    "This page displays live gold prices via Monex widgets updated during market hours",
    "Learn how spot gold prices relate to 1 oz gold bar retail pricing",
    "Understand premium structures and factors affecting 1 oz gold bar costs",
    "Compare premiums across different bar sizes (1 oz vs 10 oz vs kilo)",
    "Find answers to common questions about gold pricing mechanics",
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
              <span className="gold-text">Gold Prices</span>
              <br />
              <span className="text-white">& 1 oz Bar Market Overview</span>
            </h1>

            {/* AI Summary - placed after H1 */}
            <AISummary bullets={aiSummaryBullets} />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6 text-left">
              Track live gold prices and understand how spot pricing affects 
              the cost of 1 oz gold bars. Use these tools to make informed 
              decisions about your precious metals investments. Return to our{" "}
              <Link href="/" className="text-bullion-gold hover:underline">
                overview of 1 oz gold bars
              </Link>{" "}
              or explore our{" "}
              <Link href="/resources" className="text-bullion-gold hover:underline">
                educational resources
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Zone - Live Cards */}
      <section className="py-10 md:py-12 section-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Live GBOZ Spot Price Card (1 oz Gold Bar) */}
          <LiveGbozSpotCard showCta={false} />

          {/* Live Gold Spot Index Card (GBXSPOT) */}
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

      {/* Understanding Gold Prices */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Understanding <span className="gold-text">Gold Bar Pricing</span>
            </h2>

            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <div className="card">
                <h3 className="text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  Spot Price vs. Bar Price
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When purchasing a 1 oz gold bar, you&apos;ll pay more than the 
                  spot price displayed on trading screens. The &ldquo;spot price&rdquo; 
                  represents the current market rate for gold traded in bulk on 
                  commodities exchanges—typically in 400 oz Good Delivery bars.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Retail 1 oz gold bars carry a <strong className="text-white">premium</strong> above 
                  spot that covers refining, minting, assaying, shipping, dealer 
                  margins, and the cost of breaking large bars into smaller, 
                  investor-friendly denominations.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  What Affects 1 oz Gold Bar Premiums?
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Brand Recognition:</strong> Bars 
                      from renowned refiners like PAMP Suisse, Credit Suisse, or 
                      Perth Mint typically command higher premiums due to their 
                      reputation and ease of resale.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Market Conditions:</strong> During 
                      periods of high demand or supply constraints, premiums can 
                      spike significantly above normal levels.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Packaging:</strong> Bars in assay 
                      cards with serial numbers and certificates may carry slightly 
                      higher premiums than loose bars.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Purchase Quantity:</strong> Buying 
                      multiple bars often qualifies for volume discounts, reducing 
                      the per-ounce premium.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  Premium Comparison by Size
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  While 1 oz gold bars carry higher premiums than larger bars 
                  (10 oz or 1 kilo), they offer superior liquidity and flexibility. 
                  The premium difference is the cost of divisibility—the ability 
                  to sell exactly what you need when you need it.
                </p>
                <div className="bg-bullion-darker/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">
                    <strong className="text-bullion-gold">Example:</strong> If spot 
                    gold is $2,000/oz, a 1 oz bar might cost $2,080-$2,160 
                    (4-8% premium), while a 10 oz bar might cost $20,400-$20,600 
                    (2-3% premium per ounce). The premium savings on larger bars 
                    must be weighed against reduced flexibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={pricesQA} includeSchema={false} />

      {/* Monex Research Link */}
      <section className="py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-6">
            For detailed market analysis and pricing information:
          </p>
          <a
            href="https://www.monex.com/knowledge/understanding-1-oz-gold-bar-prices/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
          >
            <span>Research 1 oz Gold Bar Prices at Monex</span>
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
            Learn More About 1 oz Gold Bars
          </h2>
          <p className="text-gray-400 mb-6">
            Explore our comprehensive{" "}
            <Link href="/resources" className="text-bullion-gold hover:underline">
              educational resources
            </Link>{" "}
            to deepen your understanding of gold bar investing, or return to our{" "}
            <Link href="/" className="text-bullion-gold hover:underline">
              1 oz gold bar overview
            </Link>.
          </p>
          <Link href="/resources" className="btn-primary">
            Explore Resources
          </Link>
        </div>
      </section>
    </>
  );
}
