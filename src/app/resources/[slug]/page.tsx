import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { resources1oz, getResource1ozBySlug, getResources1ozByCategory, Resource1oz } from "@/data/resources-1oz";
import { getArticleContent } from "@/data/resources-1oz-content";
import { getResourceFAQs } from "@/data/resources-1oz-faq";
import { buildResourceSchemas } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resources1oz.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource1ozBySlug(slug);

  if (!resource || !SITE_CONFIG.features.resourcesEnabled) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: `${resource.title} | ${SITE_CONFIG.brandName}`,
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

// Find related resources by shared tags, then same category
function getRelatedResources(current: Resource1oz, count: number = 4): Resource1oz[] {
  const currentTags = new Set(current.tags);
  
  // Score each resource by number of shared tags
  const scored = resources1oz
    .filter((r) => r.slug !== current.slug)
    .map((r) => ({
      resource: r,
      score: r.tags.filter((tag) => currentTags.has(tag)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  // If not enough tag matches, fill with same category resources
  const related = scored.slice(0, count).map((item) => item.resource);
  
  if (related.length < count) {
    const remaining = getResources1ozByCategory(current.category)
      .filter((r) => r.slug !== current.slug && !related.includes(r))
      .slice(0, count - related.length);
    related.push(...remaining);
  }

  // Still not enough? Add any other resources
  if (related.length < count) {
    const remaining = resources1oz
      .filter((r) => r.slug !== current.slug && !related.includes(r))
      .slice(0, count - related.length);
    related.push(...remaining);
  }

  return related.slice(0, count);
}

export default async function ResourceArticlePage({ params }: Props) {
  // Check feature flag first
  if (!SITE_CONFIG.features.resourcesEnabled) {
    notFound();
  }

  const { slug } = await params;
  const resource = getResource1ozBySlug(slug);

  // 404 if resource not found
  if (!resource) {
    notFound();
  }

  // Get article content and FAQ entries
  const content = getArticleContent(slug);
  const faqEntries = getResourceFAQs(slug);
  const relatedResources = getRelatedResources(resource, 4);

  // Build schemas (returns null if feature disabled)
  const schemas = buildResourceSchemas(resource, content, faqEntries, slug);

  return (
    <>
      {/* JSON-LD Structured Data */}
      {schemas && schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center text-sm text-gray-400">
            <Link
              href="/"
              className="hover:text-bullion-gold transition-colors"
            >
              Home
            </Link>
            <svg
              className="w-4 h-4 mx-2 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/resources"
              className="hover:text-bullion-gold transition-colors"
            >
              Resources
            </Link>
            <svg
              className="w-4 h-4 mx-2 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-gray-300 truncate max-w-[200px] sm:max-w-none">
              {resource.title}
            </span>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <span
              className="inline-block px-3 py-1 text-xs rounded-full bg-bullion-gold/10 text-bullion-gold border border-bullion-gold/20 mb-4"
            >
              {resource.categoryLabel}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              {resource.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {resource.description}
            </p>
          </header>

          {/* Article Content */}
          {content && content.sections.length > 0 ? (
            <article className="space-y-10 mb-12">
              {content.sections.map((section, index) => (
                <section key={index}>
                  <h2 className="text-2xl font-display font-semibold text-white mb-4">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-gray-300 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </article>
          ) : (
            /* Fallback placeholder when content is not yet written */
            <article className="mb-12">
              <div className="card p-8 border-dashed border-gray-700 text-center">
                <p className="text-gray-500">
                  This article is being finalized. Check back soon for the full content.
                </p>
              </div>
            </article>
          )}

          {/* FAQ Section */}
          {faqEntries.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-display font-semibold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqEntries.map((faq, index) => (
                  <details
                    key={index}
                    className="card p-4 group"
                  >
                    <summary className="cursor-pointer text-white font-medium flex items-center justify-between">
                      <span>{faq.question}</span>
                      <svg
                        className="w-5 h-5 text-bullion-gold transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <p className="mt-3 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Disclaimer */}
          <div className="mb-12 p-5 rounded-xl bg-bullion-gold/5 border border-bullion-gold/20">
            <p className="text-gray-400 text-sm">
              <strong className="text-bullion-gold">Disclaimer:</strong> This content is for educational purposes only and does not constitute financial, investment, or tax advice. Always conduct your own research and consult qualified professionals before making investment decisions.
            </p>
          </div>

          {/* Related Articles */}
          {relatedResources.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-display font-semibold text-white mb-6">
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedResources.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/resources/${related.slug}`}
                    className="card p-4 group hover:border-bullion-gold/40 transition-all block"
                  >
                    <span className="text-xs text-bullion-gold/70 mb-1 block">
                      {related.categoryLabel}
                    </span>
                    <h3 className="text-base font-display font-semibold text-white group-hover:text-bullion-gold transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Navigation */}
          <div className="pt-8 border-t border-bullion-gold/10 flex flex-wrap justify-center gap-4">
            <Link href="/resources" className="btn-secondary">
              All Resources
            </Link>
            <Link href="/live-gold-prices" className="btn-primary">
              View Gold Prices
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
