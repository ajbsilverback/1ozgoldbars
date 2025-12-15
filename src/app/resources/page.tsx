import type { Metadata } from "next";
import { Suspense } from "react";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { ResourcesContent } from "./ResourcesContent";

export const metadata: Metadata = {
  title: "1 oz Gold Bar Resources | Educational Guides",
  description:
    "Educational resources about 1 oz gold bars covering pricing, comparisons, storage, authentication, and more. Independent guides for gold bar buyers and investors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/resources`,
  },
  openGraph: {
    title: "1 oz Gold Bar Resources | Educational Guides",
    description:
      "Educational resources about 1 oz gold bars covering pricing, comparisons, storage, authentication, and more.",
    url: `${SITE_CONFIG.domain}/resources`,
  },
};

// Placeholder component when resources are disabled
function ResourcesPlaceholder() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Resources</h1>
      <p className="mt-4 text-lg text-gray-400">
        We&apos;re currently finalizing our educational resources for 1 oz gold bars.
        Check back soon.
      </p>
    </main>
  );
}

// Loading fallback for Suspense
function ResourcesLoading() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="h-12 w-96 bg-bullion-gold/10 rounded-lg animate-pulse mx-auto mb-4" />
          <div className="h-6 w-64 bg-gray-800 rounded animate-pulse mx-auto" />
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="h-10 w-24 bg-bullion-gold/10 rounded-lg animate-pulse" />
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card p-6 animate-pulse">
              <div className="h-4 w-20 bg-bullion-gold/10 rounded mb-3" />
              <div className="h-6 w-full bg-gray-800 rounded mb-2" />
              <div className="h-4 w-full bg-gray-800/50 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  // Show placeholder if resources are disabled
  if (!SITE_CONFIG.features.resourcesEnabled) {
    return <ResourcesPlaceholder />;
  }

  return (
    <Suspense fallback={<ResourcesLoading />}>
      <ResourcesContent />
    </Suspense>
  );
}
