import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { resources, getResourceBySlug } from "@/data/resources";
import { getArticleContent } from "@/data/article-content";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import { resourceQA } from "@/data/qa-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: resource.title,
    description: resource.description,
    alternates: {
      canonical: `${SITE_CONFIG.canonicalDomain}/resources/${slug}`,
    },
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: `${SITE_CONFIG.domain}/resources/${slug}`,
      type: "article",
    },
  };
}

// Generate descriptive Monex anchor text for each article
function getMonexAnchorText(slug: string): string {
  const anchorTextMap: Record<string, string> = {
    "premiums-explained": "Monex guide to understanding 1 oz gold bar prices",
    "liquidity-benefits": "Monex 1 oz gold bullion bars for sale",
    "storage-options": "Monex guide to owning 1 oz gold bars",
    "brand-differences": "Monex 1 oz gold bullion bar knowledge base",
    "size-comparison": "Monex guide to investing in gold",
    "market-dynamics": "Monex live gold prices",
    "spreads-explained": "Monex 1 oz gold bar price charts",
    "handling-guide": "Monex guide to the making of 1 oz gold bars",
    "bars-vs-coins": "Monex 1 oz gold bar legacy guide",
    "market-history": "Monex history of 1 oz gold bars",
  };
  return anchorTextMap[slug] || "Monex 1 oz gold bar resources";
}

// Generate AI summary bullets based on resource content
function generateAISummaryBullets(slug: string, title: string): string[] {
  const summaryMap: Record<string, string[]> = {
    "premiums-explained": [
      "This article explains what premiums are and why they exist for 1 oz gold bars",
      "Learn how brand recognition, market conditions, and packaging affect premiums",
      "Understand typical premium ranges (3-8% over spot) for major refiner brands",
      "Discover strategies to minimize premiums when purchasing 1 oz gold bars",
      "Compare premium efficiency across different gold bar sizes",
    ],
    "liquidity-benefits": [
      "This article explains why 1 oz gold bars offer superior liquidity",
      "Learn how the 1 oz size expands your potential buyer pool significantly",
      "Understand the relationship between bar size and transaction speed",
      "Discover the benefits of partial liquidation with smaller denominations",
      "Compare liquidity across 1 oz bars, larger bars, and gold coins",
    ],
    "storage-options": [
      "This article compares storage solutions for 1 oz gold bars",
      "Learn about home safe requirements and specifications for gold storage",
      "Understand bank safe deposit box advantages and limitations",
      "Discover professional vault storage and allocated storage programs",
      "Get guidance on insurance requirements for physical gold holdings",
    ],
    "brand-differences": [
      "This article compares major 1 oz gold bar manufacturers",
      "Learn what makes PAMP Suisse bars command premium pricing",
      "Understand Perth Mint's unique government-backed value proposition",
      "Compare Credit Suisse, Valcambi, and other recognized refiners",
      "Discover how brand choice affects both premiums and resale value",
    ],
    "size-comparison": [
      "This article compares 1 oz gold bars with 10 oz and kilo bars",
      "Learn the premium differences across gold bar size denominations",
      "Understand trade-offs between cost efficiency and liquidity by size",
      "Discover which bar size best fits different investment goals",
      "Get guidance on building a mixed-size gold bar portfolio",
    ],
    "market-dynamics": [
      "This article explains the forces that move gold prices",
      "Learn how interest rates and dollar strength affect gold values",
      "Understand the role of geopolitical events and safe-haven demand",
      "Discover how central bank activity influences the gold market",
      "Get context for interpreting gold price movements",
    ],
    "spreads-explained": [
      "This article explains bid-ask spreads on 1 oz gold bars",
      "Learn how spreads affect your total cost of gold ownership",
      "Understand factors that widen or narrow dealer spreads",
      "Discover strategies to minimize spread impact on returns",
      "Calculate your break-even point including spread costs",
    ],
    "handling-guide": [
      "This article provides best practices for handling 1 oz gold bars",
      "Learn proper techniques to prevent fingerprints and surface damage",
      "Understand the importance of preserving original assay card packaging",
      "Discover optimal storage environments for gold bar preservation",
      "Get guidance on documenting and cataloging your gold holdings",
    ],
    "bars-vs-coins": [
      "This article compares 1 oz gold bars with gold coins",
      "Learn the premium differences between bars and coins",
      "Understand the unique benefits coins offer (government backing, numismatics)",
      "Discover why bars excel for pure investment-focused buyers",
      "Get guidance on choosing between bars and coins for your portfolio",
    ],
    "market-history": [
      "This article traces the evolution of 1 oz gold bars as an investment",
      "Learn about the historical development of standardized gold bars",
      "Understand the impact of US gold ownership restrictions (1933-1974)",
      "Discover how modern authentication and packaging revolutionized the market",
      "Get context for the 1 oz bar's current role in gold investing",
    ],
  };

  return summaryMap[slug] || [
    `This article provides comprehensive coverage of ${title.toLowerCase()}`,
    "Learn key concepts and practical considerations for 1 oz gold bar investors",
    "Understand how this topic affects your gold investment strategy",
    "Get actionable guidance based on industry best practices",
    "Find answers to common questions in this area",
  ];
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const content = getArticleContent(slug);
  const qa = resourceQA[slug] || [];
  const aiSummaryBullets = generateAISummaryBullets(slug, resource.title);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    url: `${SITE_CONFIG.domain}/resources/${slug}`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.domain}/resources/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Header */}
      <section className="py-12 md:py-16 lg:py-20 gold-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bullion-darker via-transparent to-bullion-darker" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors mb-6"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Resources
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-bullion-gold/20 text-bullion-gold text-sm font-medium mb-3">
            {resource.category}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
            {resource.title}
          </h1>

          {/* AI Summary - placed after H1 */}
          <AISummary bullets={aiSummaryBullets} />
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-6 md:py-8 border-b border-bullion-gold/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-5 md:p-6 bg-bullion-gold/5 border-bullion-gold/30">
            <h2 className="text-lg md:text-xl font-display font-semibold text-bullion-gold mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Key Takeaways
            </h2>
            <ul className="space-y-2">
              {content.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start text-gray-300 text-sm md:text-base">
                  <span className="text-bullion-gold mr-2 mt-0.5">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-10 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            {content.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white">
                  {section.heading}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-300 leading-relaxed text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.subheading && (
                  <div className="space-y-3 pt-4">
                    <h3 className="text-lg md:text-xl font-display font-semibold text-bullion-gold">
                      {section.subheading}
                    </h3>
                    {section.subcontent?.map((paragraph, sIndex) => (
                      <p
                        key={sIndex}
                        className="text-gray-300 leading-relaxed text-base md:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Internal Links */}
          <div className="mt-10 p-5 md:p-6 rounded-xl bg-bullion-darker/50 border border-bullion-gold/10">
            <p className="text-gray-400 mb-3 text-sm md:text-base">
              Continue learning about 1 oz gold bars:
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/prices"
                className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
              >
                <span>View current gold prices</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/where-to-buy-1-oz-gold-bars"
                className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
              >
                <span>Where to buy 1 oz gold bars</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
              >
                <span>Browse all resources</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Monex Link - Contextual external citation */}
          <div className="mt-5 p-5 md:p-6 rounded-xl bg-bullion-gold/5 border border-bullion-gold/20">
            <p className="text-gray-400 mb-2 text-sm md:text-base">
              For more detailed information and current pricing:
            </p>
            <a
              href={resource.monexLink}
              target="_blank"
              rel="nofollow"
              className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors font-medium"
            >
              <span>{getMonexAnchorText(slug)}</span>
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
        </div>
      </article>

      {/* Q&A Section - Topic Specific */}
      {qa.length > 0 && <QASection items={qa} />}

      {/* CTA Section */}
      <section className="py-12 md:py-16 section-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Continue Your <span className="gold-text">Education</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm md:text-base">
              Explore more{" "}
              <Link href="/resources" className="text-bullion-gold hover:underline">
                resources about 1 oz gold bars
              </Link>{" "}
              or check{" "}
              <Link href="/prices" className="text-bullion-gold hover:underline">
                current market prices
              </Link>{" "}
              to inform your investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/prices" className="btn-primary">
                View Gold Prices
              </Link>
              <Link href="/resources" className="btn-secondary">
                More Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-display font-semibold text-white mb-6">
            Related Resources
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {resources
              .filter((r) => r.slug !== slug)
              .slice(0, 3)
              .map((relatedResource) => (
                <Link
                  key={relatedResource.slug}
                  href={`/resources/${relatedResource.slug}`}
                  className="card p-5 group hover:border-bullion-gold/40 transition-all"
                >
                  <span className="text-xs text-bullion-gold font-medium">
                    {relatedResource.category}
                  </span>
                  <h3 className="text-base md:text-lg font-display font-semibold text-white mt-2 mb-2 group-hover:text-bullion-gold transition-colors line-clamp-2">
                    {relatedResource.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {relatedResource.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
