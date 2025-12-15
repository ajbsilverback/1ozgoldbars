import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/siteConfig";
import QASection from "@/components/QASection";
import LiveGbozSpotCard from "@/components/LiveGbozSpotCard";
import { homeQA } from "@/data/qa-content";
import { fetchProductSpot, fetchBarSizePrices, formatRoundedPrice } from "@/lib/monexSpot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1 oz Gold Bars | Pricing, Buying Guide & Educational Resources",
  description:
    "Learn about 1 oz gold bars: pricing, premiums, where to buy, and why they are a popular choice for individual investors. Independent educational resource.",
};

export default async function HomePage() {
  const [priceData, barSizePrices] = await Promise.all([
    fetchProductSpot(),
    fetchBarSizePrices(),
  ]);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${SITE_CONFIG.brandName} - Your Guide to 1 oz Gold Bars`,
    description:
      "Independent educational resource about 1 oz gold bars, a popular choice for individual investors seeking accessible gold ownership.",
    url: SITE_CONFIG.domain,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "1 oz Gold Bars",
    description:
      "One troy ounce (31.1035 grams) gold bullion bars, a popular format for individual investors entering the physical gold market.",
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.brandName,
    },
    category: "Gold Bars",
    material: "Gold",
    weight: {
      "@type": "QuantitativeValue",
      value: 31.1035,
      unitCode: "GRM",
      unitText: "grams",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero Section */}
      <section className="relative gold-bar-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bullion-darker via-transparent to-bullion-darker" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-bullion-gold/10 border border-bullion-gold/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-bullion-gold mr-3 animate-pulse" />
                <span className="text-bullion-gold text-sm font-medium">
                  1 Troy Ounce = 31.1 Grams of Pure Gold
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4">
                <span className="gold-text">1 oz Gold Bars</span>
                <br />
                <span className="text-white">
                  Accessible. Liquid. Trusted.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 max-w-prose">
                A 1 oz gold bar contains exactly one troy ounce of refined gold, 
                typically .9999 fine purity. It is one of the most popular formats 
                for individual investors entering the physical gold market. The 
                price you pay equals the current spot price plus a dealer premium, 
                which typically ranges from 3-8% for this size.
              </p>

              {/* Key Benefits */}
              <ul className="space-y-2 mb-8 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">✓</span>
                  <span><strong className="text-white">High liquidity:</strong> The 1 oz size has the broadest buyer pool, making it easy to sell when needed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">✓</span>
                  <span><strong className="text-white">Simple entry point:</strong> Start with a single bar and add over time without large capital requirements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bullion-gold mt-1">✓</span>
                  <span><strong className="text-white">Easy storage:</strong> Compact size fits in home safes, deposit boxes, or professional vaults.</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/live-gold-prices" className="btn-primary">
                  View Current Gold Prices
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link href="/where-to-buy" className="btn-secondary">
                  Where to Buy
                </Link>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <Image
                src="/1-oz-gold-bars-stacked.png"
                alt="Stacked 1 oz gold bars"
                width={500}
                height={500}
                className="max-w-sm w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Gold Price Section */}
      <section className="pt-4 pb-10 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              <span className="gold-text">Live Gold Pricing</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Track current gold bar prices with market data updated on page load.
            </p>
          </div>
          <LiveGbozSpotCard />
        </div>
      </section>

      {/* Why 1 oz Gold Bars Section */}
      <section className="py-16 md:py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Why Choose <span className="gold-text">1 oz Gold Bars</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              The 1 oz format balances accessibility with reasonable premiums, 
              making it a practical choice for most individual investors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card group">
              <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                Accessible Price Point
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Unlike larger bars that require significant capital, 1 oz bars 
                allow you to start building a gold position with a manageable 
                investment. Add to your holdings gradually over time as your 
                budget allows.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                Strong Liquidity
              </h3>
              <p className="text-gray-400 leading-relaxed">
                The 1 oz size has the largest buyer pool in the retail gold 
                market. When you decide to sell, dealers readily purchase these 
                bars. The broad market makes finding a buyer straightforward 
                compared to larger or more obscure sizes.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                Flexible Ownership
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Own multiple 1 oz bars rather than one large bar, and you can 
                sell portions of your holdings as needed. This flexibility 
                helps with partial liquidation, gifting, or adjusting your 
                portfolio over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Buys Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gold-bar-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                Who Buys <span className="gold-text">1 oz Gold Bars</span>?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                The 1 oz format appeals to a wide range of buyers, from 
                first-time investors to experienced collectors.
              </p>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      First-Time Gold Buyers
                    </h3>
                    <p className="text-gray-400">
                      Investors new to physical gold often start with 1 oz bars 
                      because the entry cost is manageable and the format is 
                      easy to understand and store.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Regular Accumulators
                    </h3>
                    <p className="text-gray-400">
                      Many investors buy one bar per month or quarter, 
                      dollar-cost averaging into gold over time. The 1 oz 
                      size fits this approach well.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Gift Givers
                    </h3>
                    <p className="text-gray-400">
                      Gold bars make meaningful gifts for graduations, 
                      weddings, or milestones. The 1 oz size is substantial 
                      enough to be impressive while remaining affordable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <div className="card p-6 md:p-8 max-w-sm">
                <h3 className="text-xl font-display font-semibold text-white mb-4">
                  Current 1 oz Bar Price
                </h3>
                <p className="text-3xl font-bold text-bullion-gold mb-2">
                  {barSizePrices.oz1 
                    ? `~$${Math.round(barSizePrices.oz1).toLocaleString()}`
                    : "Loading..."}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Approximate price including typical premium
                </p>
                <Link 
                  href="/live-gold-prices" 
                  className="text-bullion-gold hover:underline text-sm"
                >
                  View live pricing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Size Comparison */}
      <section className="py-16 md:py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Comparing <span className="gold-text">Bar Sizes</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Understanding the trade-offs between bar sizes helps you choose 
              the right format for your goals.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-bullion-gold/30">
                  <th className="text-left py-4 px-6 text-bullion-gold font-display">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 text-bullion-gold font-display">
                    1 oz Bar
                  </th>
                  <th className="text-center py-4 px-6 text-gray-500 font-display">
                    10 oz Bar
                  </th>
                  <th className="text-center py-4 px-6 text-gray-500 font-display">
                    1 Kilo Bar
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Typical Premium</td>
                  <td className="py-4 px-6 text-center">3-8%</td>
                  <td className="py-4 px-6 text-center">2-4%</td>
                  <td className="py-4 px-6 text-center">1.5-3%</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Approximate Cost</td>
                  <td className="py-4 px-6 text-center">{formatRoundedPrice(barSizePrices.oz1)}</td>
                  <td className="py-4 px-6 text-center">{formatRoundedPrice(barSizePrices.oz10)}</td>
                  <td className="py-4 px-6 text-center">{formatRoundedPrice(barSizePrices.kilo)}</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Liquidity</td>
                  <td className="py-4 px-6 text-center text-green-400">Highest</td>
                  <td className="py-4 px-6 text-center">Good</td>
                  <td className="py-4 px-6 text-center">Limited</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Flexibility</td>
                  <td className="py-4 px-6 text-center text-green-400">★★★★★</td>
                  <td className="py-4 px-6 text-center">★★★☆☆</td>
                  <td className="py-4 px-6 text-center">★★☆☆☆</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Capital Required</td>
                  <td className="py-4 px-6 text-center text-green-400">Low</td>
                  <td className="py-4 px-6 text-center">Moderate</td>
                  <td className="py-4 px-6 text-center">High</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Best For</td>
                  <td className="py-4 px-6 text-center text-bullion-gold">
                    Most Investors
                  </td>
                  <td className="py-4 px-6 text-center">Balance</td>
                  <td className="py-4 px-6 text-center">Institutions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Considerations Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Important <span className="gold-text">Considerations</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Before buying 1 oz gold bars, understand these practical factors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Premium Costs
              </h3>
              <p className="text-gray-400 mb-4">
                1 oz bars carry higher premiums (3-8%) compared to larger bars. 
                This is the trade-off for liquidity and flexibility. If premium 
                efficiency is your top priority, larger bars may be more suitable.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">Note:</strong> You pay the 
                premium when buying and typically sell at or below spot, so the 
                gold price must rise enough to overcome this spread.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Authentication
              </h3>
              <p className="text-gray-400 mb-4">
                Buy from reputable dealers and choose bars from recognized 
                refiners (PAMP, Valcambi, Perth Mint, etc.). Bars with assay 
                cards and serial numbers provide documentation that supports 
                authenticity and resale.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">Note:</strong> If a price 
                seems too good, be cautious. Counterfeit risk exists, especially 
                from unknown sellers.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Storage Options
              </h3>
              <p className="text-gray-400 mb-4">
                1 oz bars are compact and easy to store. A home safe, bank safe 
                deposit box, or professional vault can all work. Consider 
                insurance for your holdings regardless of storage method.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">Note:</strong> Keep bars in 
                their original packaging when possible to preserve condition and 
                simplify future resale.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Selling Your Bars
              </h3>
              <p className="text-gray-400 mb-4">
                When ready to sell, contact dealers for quotes. You will 
                typically receive spot price minus a small spread (1-3%). 
                Having original packaging and documentation can improve offers.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">Note:</strong> Get quotes 
                from multiple dealers to ensure competitive pricing when selling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={homeQA} priceData={priceData} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore{" "}
            <Link href="/live-gold-prices" className="text-bullion-gold hover:underline">
              current gold prices
            </Link>
            {SITE_CONFIG.features.resourcesEnabled && (
              <>
                {", browse our "}
                <Link href="/resources" className="text-bullion-gold hover:underline">
                  educational resources
                </Link>
              </>
            )}
            , or check our{" "}
            <Link href="/where-to-buy" className="text-bullion-gold hover:underline">
              buying guide
            </Link>
            {" "}to find reputable dealers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/live-gold-prices" className="btn-primary">
              View Current Gold Prices
            </Link>
            <Link href="/where-to-buy" className="btn-secondary">
              Where to Buy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
