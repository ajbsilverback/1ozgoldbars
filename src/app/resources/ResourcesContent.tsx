"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { resources1oz, Resource1oz, CategorySlug, categoryLabels } from "@/data/resources-1oz";

// Category icons using simple SVG shapes
const categoryIcons: Record<CategorySlug, React.ReactNode> = {
  "pricing": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "investment": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  "security": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "products": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  "market": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  "buying-guide": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  "tax-legal": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

// Valid topic values for the querystring
const validTopics: CategorySlug[] = [
  "pricing",
  "investment",
  "security",
  "products",
  "market",
  "buying-guide",
  "tax-legal",
];

// Resource card component
function ResourceCard({ resource }: { resource: Resource1oz }) {
  const icon = categoryIcons[resource.category];

  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="card p-6 group hover:border-bullion-gold/40 transition-all block"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-bullion-gold">
          {icon}
        </span>
        <span className="text-sm font-medium text-bullion-gold">
          {resource.categoryLabel}
        </span>
      </div>
      <h3 className="text-lg font-display font-semibold text-white group-hover:text-bullion-gold transition-colors mb-2">
        {resource.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {resource.excerpt}
      </p>
    </Link>
  );
}

export function ResourcesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get current topic from URL, validate it
  const topicParam = searchParams.get("topic");
  const activeFilter: "all" | CategorySlug = 
    topicParam && validTopics.includes(topicParam as CategorySlug) 
      ? (topicParam as CategorySlug) 
      : "all";

  // Filter resources based on active category
  const filteredResources = activeFilter === "all"
    ? resources1oz
    : resources1oz.filter((r) => r.category === activeFilter);

  // Handle pill click - update URL
  const handleFilterClick = (filter: "all" | CategorySlug) => {
    if (filter === "all") {
      // Clear querystring
      router.push("/resources", { scroll: false });
    } else {
      // Set topic querystring
      router.push(`/resources?topic=${filter}`, { scroll: false });
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "1 oz Gold Bar Resources",
    description:
      "Educational resources about 1 oz gold bars covering pricing, comparisons, storage, authentication, and more.",
    url: `${SITE_CONFIG.domain}/resources`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  // Get label for filter button
  const getFilterLabel = (filter: "all" | CategorySlug): string => {
    if (filter === "all") return "All Topics";
    return categoryLabels[filter];
  };

  // All filter options
  const filterOptions: Array<"all" | CategorySlug> = ["all", ...validTopics];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 gold-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bullion-darker via-transparent to-bullion-darker" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="gold-text">Educational</span>{" "}
            <span className="text-white">Resources</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Independent guides to help you understand{" "}
            <Link href="/resources/what-is-a-1-oz-gold-bar" className="text-bullion-gold hover:underline">
              1 oz gold bars
            </Link>
            , the most popular size for individual investors. Learn how{" "}
            <Link href="/resources/1-oz-gold-bar-premium-explained" className="text-bullion-gold hover:underline">
              premiums work
            </Link>
            , compare bars to coins and ETFs, and explore storage and authentication basics. Whether you are buying your first bar or adding to an existing position, these resources provide the foundation for{" "}
            <Link href="/resources/how-to-buy-1-oz-gold-bars-safely" className="text-bullion-gold hover:underline">
              informed decisions
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="py-8 section-dark border-b border-bullion-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => handleFilterClick(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-bullion-gold text-black"
                      : "bg-bullion-gold/10 text-bullion-gold border border-bullion-gold/20 hover:bg-bullion-gold/20 hover:border-bullion-gold/40"
                  }`}
                >
                  {getFilterLabel(filter)}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resource Cards Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No resources found in this category.
              </p>
            </div>
          )}

          {/* Results count */}
          <p className="text-center text-gray-500 text-sm mt-8">
            Showing {filteredResources.length} of {resources1oz.length} resources
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-xl bg-bullion-darker/50 border border-bullion-gold/10 text-center">
            <p className="text-gray-500 text-sm">
              All content is for educational purposes only. {SITE_CONFIG.brandName} does
              not sell gold or provide financial advice. Always conduct your own research
              before making investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/live-gold-prices" className="btn-primary">
              View Gold Prices
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
