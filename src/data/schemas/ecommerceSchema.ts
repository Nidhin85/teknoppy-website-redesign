export const ecommerceSchema = {
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
      "@id": "https://teknoppy.com/ecommerce-website-development-company-kochi/#webpage",
      "url": "https://teknoppy.com/ecommerce-website-development-company-kochi/",
      "name": "Ecommerce Website Development Company in Kochi | Teknoppy",
      "description": "Teknoppy is a trusted ecommerce website development company in Kochi building fast, secure, SEO-ready online stores for Kerala businesses. Get a free quote.",
      "isPartOf": { "@id": "https://teknoppy.com/#website" },
      "about": {
        "@id": "https://teknoppy.com/ecommerce-website-development-company-kochi/#service"
      },
      "breadcrumb": {
        "@id": "https://teknoppy.com/ecommerce-website-development-company-kochi/#breadcrumb"
      },
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
      "@id": "https://teknoppy.com/ecommerce-website-development-company-kochi/#breadcrumb",
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
          "name": "Ecommerce Website Development Company in Kochi",
          "item": "https://teknoppy.com/ecommerce-website-development-company-kochi/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://teknoppy.com/ecommerce-website-development-company-kochi/#service",
      "name": "Ecommerce Website Development in Kochi",
      "serviceType": "Ecommerce Website Development",
      "description": "Custom, mobile-first, conversion-focused online stores for Kerala businesses selling in India and worldwide, including custom ecommerce, WooCommerce, Shopify, multi-vendor marketplaces, payment gateway integration, and ecommerce redesign and migration.",
      "url": "https://teknoppy.com/ecommerce-website-development-company-kochi/",
      "provider": { "@id": "https://teknoppy.com/#organization" },
      "areaServed": [
        { "@type": "State", "name": "Kerala" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Qatar" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Ecommerce Website Development Cost in Kochi",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Starter Online Store (up to 50 products)"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 45000,
              "maxPrice": 90000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional Ecommerce Store (WooCommerce / Shopify)"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 90000,
              "maxPrice": 200000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Ecommerce / B2B Portal",
              "url": "https://teknoppy.com/custom-ecommerce-development-kochi/"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 200000,
              "maxPrice": 600000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Multi-Vendor Marketplace",
              "url": "https://teknoppy.com/marketplace-development-company-kochi/"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 300000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ecommerce Redesign / Migration",
              "url": "https://teknoppy.com/ecommerce-redesign-migration-kochi/"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 50000,
              "maxPrice": 200000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ongoing Monthly Maintenance"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 5000,
              "maxPrice": 15000,
              "unitCode": "MON",
              "unitText": "month"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WooCommerce Development",
              "url": "https://teknoppy.com/woocommerce-development-company-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shopify Development",
              "url": "https://teknoppy.com/shopify-development-company-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Payment Gateway Integration",
              "url": "https://teknoppy.com/payment-gateway-integration-kochi/"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://teknoppy.com/ecommerce-website-development-company-kochi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does ecommerce website development cost in Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard online store typically costs between Rs. 45,000 and Rs. 2,00,000 depending on product count, features, and design. Custom and marketplace platforms cost more. A detailed written quote is provided before any project begins."
          }
        },
        {
          "@type": "Question",
          "name": "Which is the best platform for an ecommerce website in Kerala?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your goals. WooCommerce is best for control and SEO; Shopify for a hosted, low-maintenance store; custom builds for large or complex businesses. We recommend the right fit after understanding your products and budget."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build an online store in Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard ecommerce website takes 4 to 8 weeks from discovery to launch. Larger custom or multi-vendor platforms take 8 to 14 weeks. A written timeline is shared at the start."
          }
        },
        {
          "@type": "Question",
          "name": "Can I manage and update my store myself after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build on user-friendly platforms like WooCommerce and Shopify, giving you a simple dashboard to add products, update prices, and run offers without any coding. A handover guide and optional training are included."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build ecommerce websites for international customers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build multi-currency, multilingual stores with international payment gateways and shipping logic — ideal for Ayurveda, handicraft, and export brands selling beyond India."
          }
        },
        {
          "@type": "Question",
          "name": "What schema markup do you implement on ecommerce stores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Product, Offer, Organisation, BreadcrumbList, FAQPage, and where applicable AggregateRating and Review schema — helping qualify for Google rich results and AI answer engines like ChatGPT and Perplexity."
          }
        },
        {
          "@type": "Question",
          "name": "Are your ecommerce websites SEO-friendly and mobile-first?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every store is built mobile-first with clean code, Product schema, optimised metadata, and Core Web Vitals tuning, so it is ready to rank from launch. Over 70% of Kerala web traffic comes from mobile, so this is standard."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide maintenance after the store goes live?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Monthly maintenance plans from Rs. 5,000 per month cover updates, security monitoring, speed checks, product edits, and technical fixes."
          }
        }
      ]
    }
  ]
};
