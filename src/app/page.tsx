import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/siteConfig";
import QASection from "@/components/QASection";
import LiveGbozSpotCard from "@/components/LiveGbozSpotCard";
import { homeQA } from "@/data/qa-content";

export default function HomePage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${SITE_CONFIG.brandName} - Your Guide to 1 oz Gold Bars`,
    description:
      "Comprehensive educational resource about 1 oz gold bars—the most liquid, divisible, and globally recognized form of gold bullion for investors.",
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
      "One troy ounce gold bullion bars, the most liquid and divisible form of investment-grade gold available worldwide.",
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.brandName,
    },
    category: "Gold Bars",
    material: "Gold",
    weight: {
      "@type": "QuantitativeValue",
      value: 1,
      unitCode: "ONZ",
      unitText: "troy ounce",
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
                  The Gold Standard in Portable Wealth
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4">
                <span className="gold-text">1 oz Gold Bars</span>
                <br />
                <span className="text-white">
                  Liquid. Divisible. Global.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-prose">
                Discover why one troy ounce gold bars are the preferred choice for 
                investors seeking maximum liquidity, easy divisibility, and 
                worldwide recognition in their precious metals portfolio. Learn{" "}
                <Link href="/where-to-buy-1-oz-gold-bars" className="text-bullion-gold hover:underline">
                  where to buy 1 oz gold bars
                </Link>{" "}
                in our independent buying guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/prices" className="btn-primary">
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
                <Link href="/resources" className="btn-secondary">
                  Explore Educational Library
                </Link>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <div className="relative max-w-sm lg:max-w-md">
                <Image
                  src="/1-oz-gold-bars-stacked.png"
                  alt="Stacked 1 oz gold bars"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
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
              Track real-time 1 oz gold bar prices with live market data updated on page load.
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
              Why <span className="gold-text">1 oz Gold Bars</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              The one-ounce gold bar represents the perfect balance of value, 
              portability, and liquidity in the precious metals market.
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
                Unmatched Liquidity
              </h3>
              <p className="text-gray-400 leading-relaxed">
                The 1 oz gold bar is the most traded gold bar size globally. 
                Whether you&apos;re buying or selling, you&apos;ll find ready markets 
                at dealers, refiners, and private buyers worldwide. This 
                universal acceptance means you can convert your holdings to 
                cash quickly, often within the same day.
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
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                Perfect Divisibility
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Unlike larger bars, 1 oz gold bars allow you to sell precisely 
                what you need. If you require funds, you can liquidate one bar 
                while keeping the rest of your position intact. This flexibility 
                is invaluable for portfolio management and meeting unexpected 
                financial needs.
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                Global Recognition
              </h3>
              <p className="text-gray-400 leading-relaxed">
                From London to Hong Kong, Dubai to New York, 1 oz gold bars 
                are instantly recognized and valued. Major refiners like PAMP 
                Suisse, Credit Suisse, and Perth Mint produce bars to 
                internationally accepted standards, ensuring your investment 
                is accepted anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Buys 1 oz Gold Bars */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gold-bar-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                Who Buys <span className="gold-text">1 oz Gold Bars</span>?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                From first-time buyers to seasoned collectors, the 1 oz gold 
                bar serves diverse investor profiles.
              </p>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      New Investors
                    </h3>
                    <p className="text-gray-400">
                      The 1 oz size offers an accessible entry point into gold 
                      investing without the higher premiums of smaller fractional 
                      pieces or the larger capital commitment of heavier bars.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Portfolio Diversifiers
                    </h3>
                    <p className="text-gray-400">
                      Investors looking to hedge against market volatility and 
                      inflation find 1 oz bars ideal for building positions 
                      gradually over time through dollar-cost averaging.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Wealth Preservers
                    </h3>
                    <p className="text-gray-400">
                      Those focused on generational wealth transfer appreciate 
                      how 1 oz bars can be easily divided among heirs while 
                      maintaining full liquidity for each recipient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <div className="relative max-w-md">
                <Image
                  src="/1-oz-gold-bars-packaged.png"
                  alt="Packaged 1 oz Gold Bars"
                  width={600}
                  height={600}
                  className="w-full h-auto drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bars vs Coins Comparison */}
      <section className="py-16 md:py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="gold-text">Bars vs Coins</span>: Making the Choice
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Both forms offer exposure to gold, but they serve different 
              investor needs and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="6" width="18" height="12" rx="2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-white">
                  1 oz Gold Bars
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Lower premiums over spot price
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Efficient, stackable storage
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Focus on gold content value
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Ideal for pure investment focus
                  </span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-white">
                  1 oz Gold Coins
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Government-backed legal tender
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Collectible and numismatic appeal
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Artistic designs and heritage
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">
                    Potential numismatic premium
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              For investors focused purely on gold&apos;s intrinsic value and 
              seeking the lowest cost per ounce, <strong className="text-white">1 oz 
              gold bars typically offer better value</strong> due to lower 
              manufacturing costs and premiums compared to coins.
            </p>
          </div>
        </div>
      </section>

      {/* Size Comparison */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Comparing <span className="gold-text">Bar Sizes</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Understanding how 1 oz gold bars compare to larger options 
              helps you make informed decisions.
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
                  <td className="py-4 px-6 font-medium">Premium Over Spot</td>
                  <td className="py-4 px-6 text-center text-green-400">
                    Moderate
                  </td>
                  <td className="py-4 px-6 text-center">Lower</td>
                  <td className="py-4 px-6 text-center">Lowest</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Liquidity</td>
                  <td className="py-4 px-6 text-center text-green-400">
                    ★★★★★
                  </td>
                  <td className="py-4 px-6 text-center">★★★★☆</td>
                  <td className="py-4 px-6 text-center">★★★☆☆</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Divisibility</td>
                  <td className="py-4 px-6 text-center text-green-400">
                    ★★★★★
                  </td>
                  <td className="py-4 px-6 text-center">★★★☆☆</td>
                  <td className="py-4 px-6 text-center">★★☆☆☆</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Entry Cost</td>
                  <td className="py-4 px-6 text-center text-green-400">
                    Accessible
                  </td>
                  <td className="py-4 px-6 text-center">Higher</td>
                  <td className="py-4 px-6 text-center">Substantial</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Storage Efficiency</td>
                  <td className="py-4 px-6 text-center">Good</td>
                  <td className="py-4 px-6 text-center">Better</td>
                  <td className="py-4 px-6 text-center">Best</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Best For</td>
                  <td className="py-4 px-6 text-center text-bullion-gold">
                    Flexibility
                  </td>
                  <td className="py-4 px-6 text-center">Balance</td>
                  <td className="py-4 px-6 text-center">Large Holdings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Storage Considerations */}
      <section className="py-16 md:py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="card">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Home Safe
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Immediate access with proper security measures
                  </p>
                </div>
                <div className="card">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Bank Box
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Institutional security with limited access hours
                  </p>
                </div>
                <div className="card">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Private Vault
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Professional storage with insurance options
                  </p>
                </div>
                <div className="card">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Allocated Storage
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Segregated holdings at accredited facilities
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                <span className="gold-text">Storage</span> Considerations
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-4">
                The compact size of 1 oz gold bars makes them remarkably 
                storage-friendly compared to larger denominations.
              </p>
              <p className="text-gray-400 mb-4">
                A single 1 oz gold bar measures approximately 42mm × 24mm × 2mm—
                smaller than a credit card and fitting easily in a standard 
                safety deposit box. You can store dozens of bars in the space 
                that would accommodate just a few kilo bars.
              </p>
              <p className="text-gray-400">
                This compact footprint also means lower storage costs at 
                professional vault facilities, where pricing often depends on 
                the physical space occupied rather than the value stored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={homeQA} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore{" "}
            <Link href="/prices" className="text-bullion-gold hover:underline">
              current gold prices
            </Link>
            , dive into our{" "}
            <Link href="/resources" className="text-bullion-gold hover:underline">
              1 oz gold bar educational library
            </Link>
            , and discover why 1 oz gold bars are the cornerstone of smart 
            precious metals investing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/prices" className="btn-primary">
              View Current Gold Prices
            </Link>
            <Link href="/resources" className="btn-secondary">
              Explore Educational Library
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
