export const digitalMarketingSchema = {
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
      "@id": "https://teknoppy.com/digital-marketing-company-kochi/#webpage",
      "url": "https://teknoppy.com/digital-marketing-company-kochi/",
      "name": "Digital Marketing Company in Kochi | Teknoppy",
      "description": "Teknoppy is a trusted Digital Marketing Company in Kochi offering SEO, Google Ads, social media & content that bring real leads to Kerala businesses.",
      "isPartOf": { "@id": "https://teknoppy.com/#website" },
      "about": { "@id": "https://teknoppy.com/digital-marketing-company-kochi/#service" },
      "breadcrumb": { "@id": "https://teknoppy.com/digital-marketing-company-kochi/#breadcrumb" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://teknoppy.com/og-image.png",
        "width": 1200,
        "height": 630
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://teknoppy.com/digital-marketing-company-kochi/#breadcrumb",
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
          "name": "Digital Marketing Company in Kochi",
          "item": "https://teknoppy.com/digital-marketing-company-kochi/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://teknoppy.com/digital-marketing-company-kochi/#service",
      "name": "Digital Marketing Services in Kochi",
      "serviceType": "Digital Marketing",
      "description": "Results-driven digital marketing for businesses across Kerala, including SEO, Google Ads and PPC, social media marketing, content marketing, email marketing, branding, landing pages and CRO, and analytics.",
      "url": "https://teknoppy.com/digital-marketing-company-kochi/",
      "provider": { "@id": "https://teknoppy.com/#organization" },
      "areaServed": [
        { "@type": "City", "name": "Kochi" },
        { "@type": "City", "name": "Thrissur" },
        { "@type": "City", "name": "Kozhikode" },
        { "@type": "City", "name": "Thiruvananthapuram" },
        { "@type": "State", "name": "Kerala" },
        { "@type": "Country", "name": "India" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Pricing in Kochi",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local / Small-Business SEO",
              "url": "https://teknoppy.com/local-seo-services-kochi/"
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
              "name": "Competitive / Ecommerce SEO"
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
              "name": "Social Media Marketing (organic + creative)",
              "url": "https://teknoppy.com/social-media-marketing-company-kochi/"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 12000,
              "maxPrice": 40000,
              "unitCode": "MON",
              "unitText": "month"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Ads / PPC Management (+ ad spend)",
              "url": "https://teknoppy.com/google-ads-company-kochi/"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 10000,
              "maxPrice": 30000,
              "unitCode": "MON",
              "unitText": "month"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Content Marketing (blogs + on-page)",
              "url": "https://teknoppy.com/content-marketing-agency-kochi/"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 15000,
              "maxPrice": 50000,
              "unitCode": "MON",
              "unitText": "month"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full-Funnel Growth Package (multi-channel)"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 50000,
              "maxPrice": 150000,
              "unitCode": "MON",
              "unitText": "month"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Branding / Strategy (one-time)",
              "url": "https://teknoppy.com/branding-agency-kochi/"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 25000,
              "maxPrice": 100000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Search Engine Optimisation (SEO)",
              "url": "https://teknoppy.com/seo-services/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Email Marketing & Automation",
              "url": "https://teknoppy.com/email-marketing-company-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Landing Pages & CRO",
              "url": "https://teknoppy.com/landing-page-design-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Analytics & Performance",
              "url": "https://teknoppy.com/marketing-analytics-services-kochi/"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://teknoppy.com/digital-marketing-company-kochi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does digital marketing cost in Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Kochi businesses invest between Rs. 10,000 and Rs. 75,000 per month depending on channels and competition, while full-funnel programmes range higher. Google Ads also needs a separate ad budget. We share a written quote before any work begins."
          }
        },
        {
          "@type": "Question",
          "name": "How long does digital marketing take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paid ads like Google Ads can generate leads within days. SEO and content typically show meaningful movement in 3 to 6 months and compound from there. We set realistic timelines and milestones at the start."
          }
        },
        {
          "@type": "Question",
          "name": "Which is the best digital marketing company in Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best choice is the agency that fits your goals and budget and can prove its results. Teknoppy is trusted by startups, clinics, resorts, and established brands across Kerala for exactly that reason."
          }
        },
        {
          "@type": "Question",
          "name": "How to choose a digital marketing agency in Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for clear reporting, real case studies, honest pricing, and a team that explains things simply. Avoid anyone who promises instant results or hides how your budget is spent."
          }
        },
        {
          "@type": "Question",
          "name": "What does a digital marketing company do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A digital marketing company helps your business get found online and grow — improving your Google ranking, running paid ads, managing social media, and creating content, all measured against real business goals."
          }
        },
        {
          "@type": "Question",
          "name": "Is digital marketing worth it for small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — when it is measured. Even a small budget can bring a clear cost-per-lead you can judge for yourself. Waste only happens when money is spent without tracking, which we prevent."
          }
        },
        {
          "@type": "Question",
          "name": "Do you optimise for AI answer engines like ChatGPT and Perplexity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Alongside traditional SEO we structure content and schema for answer engines and generative search (AEO and GEO) — clear question-led sections and verifiable detail AI assistants can cite."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with businesses near me and outside Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. When you search for a digital marketing agency near me Kochi, we are a local choice as a digital marketing company in Kochi, Kerala and a digital marketing company in Ernakulam, and we serve Thrissur, Calicut, and Trivandrum plus India-wide clients."
          }
        }
      ]
    }
  ]
};
