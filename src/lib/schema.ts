/**
 * JSON-LD Schema helpers for structured data
 */

import { SITE_CONFIG } from "./siteConfig";
import { Resource1oz } from "@/data/resources-1oz";
import { ArticleContent } from "@/data/resources-1oz-content";
import { ResourceFAQ } from "@/data/resources-1oz-faq";

/**
 * Map tags to schema-friendly "about" topics
 */
const tagToAboutMap: Record<string, string> = {
  basics: "1 oz gold bars",
  pricing: "gold bar premiums and pricing",
  comparison: "gold bar size comparisons",
  security: "gold bar authentication and security",
  selling: "selling gold bars",
  storage: "gold bar storage",
  taxes: "gold investment taxation",
  etfs: "gold ETFs and physical gold",
};

/**
 * Build Article schema for a resource page
 */
export function buildArticleSchema(
  resource: Resource1oz,
  content: ArticleContent | undefined,
  slug: string
) {
  const url = `${SITE_CONFIG.domain}/resources/${slug}`;
  
  // Build about entries from tags
  const aboutEntries = resource.tags
    .map((tag) => tagToAboutMap[tag])
    .filter(Boolean)
    .map((topic) => ({
      "@type": "Thing",
      name: topic,
    }));

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    dateModified: content?.updatedAt || new Date().toISOString().split("T")[0],
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
    about: aboutEntries,
  };
}

/**
 * Build FAQPage schema from FAQ entries
 */
export function buildFAQSchema(faqEntries: ResourceFAQ[]) {
  if (!faqEntries || faqEntries.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Render combined schema as a script tag content
 * Returns null if feature is disabled
 */
export function buildResourceSchemas(
  resource: Resource1oz,
  content: ArticleContent | undefined,
  faqEntries: ResourceFAQ[],
  slug: string
): object[] | null {
  if (!SITE_CONFIG.features.resourcesEnabled) {
    return null;
  }

  const schemas: object[] = [];

  // Add Article schema
  schemas.push(buildArticleSchema(resource, content, slug));

  // Add FAQ schema if entries exist
  const faqSchema = buildFAQSchema(faqEntries);
  if (faqSchema) {
    schemas.push(faqSchema);
  }

  return schemas;
}



