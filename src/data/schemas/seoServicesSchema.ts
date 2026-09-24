export const seoServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://teknoppy.com/#organization",
      "name": "Teknoppy",
      "url": "https://teknoppy.com/",
      "logo": "https://www.teknoppy.com/logo.svg",
      "image": "https://teknoppy.com/og-image.png",
      "description": "Teknoppy is a web design and digital marketing company in Kochi, building websites, online stores, and web applications for businesses across Kerala and the GCC.",
      "foundingDate": "2018",
      "telephone": "+91-6282249224",
      "email": "sales@teknoppy.com",
      "priceRange": "₹10,000 - ₹40,00,000+",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Second Floor, Kaithakal Building, Door No 49, Kaithakal Lane, Thykoodam, Vyttila",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "postalCode": "682019",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "City", "name": "Kochi" },
        { "@type": "City", "name": "Thrissur" },
        { "@type": "City", "name": "Kozhikode" },
        { "@type": "City", "name": "Thiruvananthapuram" },
        { "@type": "City", "name": "Palakkad" },
        { "@type": "City", "name": "Kottayam" },
        { "@type": "State", "name": "Kerala" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Qatar" }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6282249224",
        "email": "sales@teknoppy.com",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Malayalam"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://teknoppy.com/#website",
      "url": "https://teknoppy.com/",
      "name": "Teknoppy",
      "publisher": { "@id": "https://teknoppy.com/#organization" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://teknoppy.com/seo-services/#webpage",
      "url": "https://teknoppy.com/seo-services/",
      "name": "SEO Services | Teknoppy",
      "description": "Teknoppy delivers full-service SEO services — technical SEO, on-page optimization, content strategy & reporting since 2018.",
      "isPartOf": { "@id": "https://teknoppy.com/#website" },
      "about": { "@id": "https://teknoppy.com/seo-services/#service" },
      "breadcrumb": { "@id": "https://teknoppy.com/seo-services/#breadcrumb" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://teknoppy.com/og-image.png",
        "width": 1200,
        "height": 630
      },
      "reviewedBy": { "@id": "https://teknoppy.com/#sanal-edison" },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://teknoppy.com/seo-services/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://teknoppy.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://teknoppy.com/services/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SEO Services",
          "item": "https://teknoppy.com/seo-services/"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#sanal-edison",
      "name": "Sanal Edison",
      "jobTitle": "Founder & SEO Strategy Lead",
      "url": "https://teknoppy.com/sanal-edison-digital-strategist/",
      "image": "https://www.teknoppy.com/sanal.png",
      "worksFor": { "@id": "https://teknoppy.com/#organization" },
      "description": "Sanal has led 120+ SEO and digital projects since founding Teknoppy in 2018, working directly with clients across Kerala, India, and internationally.",
      "knowsAbout": [
        "Search Engine Optimization",
        "Technical SEO",
        "Local SEO",
        "Content Strategy",
        "Digital Marketing"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#niya-kk",
      "name": "Niya K K",
      "jobTitle": "SEO Lead",
      "image": "https://www.teknoppy.com/team/niya-kk.webp",
      "worksFor": { "@id": "https://teknoppy.com/#organization" }
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#neha-p",
      "name": "Neha P",
      "jobTitle": "SEO Analyst",
      "image": "https://www.teknoppy.com/team/neha-p.webp",
      "worksFor": { "@id": "https://teknoppy.com/#organization" }
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#nithya-sibi",
      "name": "Nithya Sibi",
      "jobTitle": "Jr. SEO Executive",
      "image": "https://www.teknoppy.com/team/nithya-sibi.webp",
      "worksFor": { "@id": "https://teknoppy.com/#organization" }
    },
    {
      "@type": "Service",
      "@id": "https://teknoppy.com/seo-services/#service",
      "name": "SEO Services",
      "serviceType": "Search Engine Optimization",
      "description": "Full-service SEO including technical SEO, on-page optimization, content and keyword strategy, link building, local SEO, ecommerce SEO, Core Web Vitals and speed optimization, and monthly reporting.",
      "url": "https://teknoppy.com/seo-services/",
      "provider": { "@id": "https://teknoppy.com/#organization" },
      "areaServed": [
        { "@type": "State", "name": "Kerala" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Qatar" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Investment Guide for SEO Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Audit (one-time)",
              "url": "https://teknoppy.com/seo-audit-services-kochi/"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 15000,
              "maxPrice": 40000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO services for small businesses"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 15000,
              "maxPrice": 35000,
              "unitCode": "MON",
              "unitText": "month"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Monthly SEO services (mid-size / competitive)"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 35000,
              "maxPrice": 75000,
              "unitCode": "MON",
              "unitText": "month"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise SEO services"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 75000,
              "unitCode": "MON",
              "unitText": "month"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "White-label SEO services (for agencies)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO",
              "url": "https://teknoppy.com/technical-seo-services-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO",
              "url": "https://teknoppy.com/local-seo-services-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Page SEO",
              "url": "https://teknoppy.com/on-page-seo-services-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Core Web Vitals Optimization",
              "url": "https://teknoppy.com/core-web-vitals-optimization-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Speed Optimization",
              "url": "https://teknoppy.com/website-speed-optimization-services-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ecommerce SEO",
              "url": "https://teknoppy.com/ecommerce-seo-services-kochi/"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://teknoppy.com/seo-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What do SEO services include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A complete engagement covers technical SEO, on-page optimization, content and keyword strategy, link building, and monthly reporting — not just one of these sold alone as \"SEO.\""
          }
        },
        {
          "@type": "Question",
          "name": "How much do SEO services cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most businesses invest between Rs. 15,000 and Rs. 75,000 per month depending on competition and scope; enterprise engagements run higher. A written quote is shared before work starts."
          }
        },
        {
          "@type": "Question",
          "name": "How long do SEO services take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most clients see meaningful movement within 3 to 6 months, with gains compounding over the following months rather than resetting each cycle."
          }
        },
        {
          "@type": "Question",
          "name": "How to choose an SEO services company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for written scope, transparent reporting, real case studies, and a team that can explain its reasoning in plain language — not just promise page-one rankings."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between SEO services and SEO consulting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO services mean we execute the work directly — audits, fixes, content, links. SEO consulting services mean we advise your existing team on strategy while your staff implements it."
          }
        },
        {
          "@type": "Question",
          "name": "Which is the best SEO services provider for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The right fit depends on your industry, budget, and current site health — a best SEO services for businesses answer is rarely one-size-fits-all, which is why every engagement starts with an audit."
          }
        },
        {
          "@type": "Question",
          "name": "Do SEO services also help with AI answer engines like ChatGPT and Perplexity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Alongside traditional Google rankings, we structure content and schema for AEO and GEO, since SEO services that also optimize for AI answer engines are increasingly what separates a modern agency from a legacy one."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer SEO services for businesses outside Kerala or India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While Teknoppy is based in Kerala, our SEO services are delivered remotely for clients across India and internationally, with reporting calls scheduled to suit the client's time zone."
          }
        }
      ]
    }
  ]
};
