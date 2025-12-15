import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { resources1oz } from "@/data/resources-1oz";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/live-gold-prices`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/where-to-buy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Only include resources pages when feature is enabled
  if (SITE_CONFIG.features.resourcesEnabled) {
    // Resources index page
    staticPages.push({
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    // Individual resource articles
    resources1oz.forEach((resource) => {
      staticPages.push({
        url: `${baseUrl}/resources/${resource.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  }

  return staticPages;
}
