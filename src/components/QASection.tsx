import { SITE_CONFIG } from "@/lib/siteConfig";

export interface QAItem {
  question: string;
  answer: string;
}

interface QASectionProps {
  items: QAItem[];
  includeSchema?: boolean;
}

export default function QASection({ items, includeSchema = true }: QASectionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <section className="py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
            Questions & <span className="gold-text">Answers</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Common questions about {SITE_CONFIG.primaryProduct} answered by our editorial team.
          </p>
          <div className="space-y-6">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="card"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 
                  className="text-lg font-semibold text-white mb-3"
                  itemProp="name"
                >
                  {item.question}
                </h3>
                <div 
                  itemScope 
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p 
                    className="text-gray-400 leading-relaxed"
                    itemProp="text"
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


