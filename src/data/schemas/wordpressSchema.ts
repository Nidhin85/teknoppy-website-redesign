export const wordpressSchema = {
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
      "@id": "https://teknoppy.com/wordpress-development-company-kochi/#webpage",
      "url": "https://teknoppy.com/wordpress-development-company-kochi/",
      "name": "WordPress Development Company Kochi | Custom WordPress Services",
      "description": "Teknoppy is a trusted WordPress development company Kochi delivering custom WordPress websites, WooCommerce development, and migration services for Kerala businesses. AWS certified developers since 2018.",
      "isPartOf": { "@id": "https://teknoppy.com/#website" },
      "about": { "@id": "https://teknoppy.com/wordpress-development-company-kochi/#service" },
      "breadcrumb": { "@id": "https://teknoppy.com/wordpress-development-company-kochi/#breadcrumb" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://teknoppy.com/og-image.png",
        "width": 1200,
        "height": 630
      },
      "reviewedBy": {
        "@id": "https://teknoppy.com/wordpress-development-company-kochi/#sanal-edison"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://teknoppy.com/wordpress-development-company-kochi/#breadcrumb",
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
          "name": "WordPress Development Company Kochi",
          "item": "https://teknoppy.com/wordpress-development-company-kochi/"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/wordpress-development-company-kochi/#sanal-edison",
      "name": "Sanal Edison",
      "jobTitle": "Founder & Digital Strategist",
      "worksFor": { "@id": "https://teknoppy.com/#organization" },
      "image": "https://teknoppy.com/team/sanal-edison.webp",
      "description": "Sanal Edison founded Teknoppy and has led 120+ web design and development projects across Kerala since 2018. His work includes SEO-first website architecture, conversion optimisation and digital strategy.",
      "knowsAbout": [
        "WordPress Development",
        "Website Architecture",
        "Conversion Optimisation",
        "Digital Strategy",
        "SEO"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://teknoppy.com/wordpress-development-company-kochi/#service",
      "name": "WordPress Development Services in Kochi",
      "serviceType": "WordPress Development",
      "description": "Custom, mobile-first, SEO-ready WordPress solutions for businesses across Kerala, including WordPress web design, custom development, WooCommerce, migration, maintenance, speed optimization and security.",
      "url": "https://teknoppy.com/wordpress-development-company-kochi/",
      "provider": { "@id": "https://teknoppy.com/#organization" },
      "areaServed": { "@type": "State", "name": "Kerala" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "WordPress Development Pricing in Kochi",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Basic WordPress Website (5–8 pages)"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 40000,
              "maxPrice": 80000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional Multi-Page WordPress (10–20 pages)"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 80000,
              "maxPrice": 180000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate WordPress with CMS (20–40 pages)"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 180000,
              "maxPrice": 400000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WooCommerce Store (15–30 products)",
              "url": "https://teknoppy.com/woocommerce-development-company-kochi/"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 100000,
              "maxPrice": 250000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WordPress Migration (from other platforms)",
              "url": "https://teknoppy.com/wordpress-migration-services-kochi/"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 30000,
              "maxPrice": 120000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WordPress Maintenance Plans (monthly)",
              "url": "https://teknoppy.com/wordpress-maintenance-services-kochi/"
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
              "name": "WordPress Web Design Kochi",
              "url": "https://teknoppy.com/wordpress-web-design-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom WordPress Development Kochi",
              "url": "https://teknoppy.com/custom-wordpress-development-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WordPress Speed Optimization Kochi",
              "url": "https://teknoppy.com/wordpress-speed-optimization-kochi/"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://teknoppy.com/wordpress-development-company-kochi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does a WordPress development company offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Professional WordPress development companies offer custom WordPress web design, custom development, WooCommerce e-commerce, WordPress maintenance, migration services, speed optimization, and ongoing support covering discovery through launch and beyond."
          }
        },
        {
          "@type": "Question",
          "name": "How much does WordPress development cost in Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Costs range from Rs. 40,000 for basic websites to Rs. 4,00,000+ for enterprise WordPress solutions. Every project receives a written quote based on pages, functionality, and complexity."
          }
        },
        {
          "@type": "Question",
          "name": "How long does WordPress development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard WordPress websites take 3-5 weeks from discovery to launch. Larger sites with custom functionality can take 6-12 weeks. Written timelines are provided at project start."
          }
        },
        {
          "@type": "Question",
          "name": "Can you migrate my existing website to WordPress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our WordPress migration services handle transfers from Shopify, Wix, Blogger, and other platforms while preserving SEO rankings and implementing proper redirects."
          }
        },
        {
          "@type": "Question",
          "name": "Is custom WordPress development better than templates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Custom WordPress development provides better security, performance, scalability, and unique branding compared to template-based solutions. Custom WordPress is built specifically for your business requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Is WordPress SEO-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. WordPress with proper optimization is highly SEO-friendly. Every WordPress site includes on-page SEO, schema markup, mobile optimization, and speed tuning standard."
          }
        },
        {
          "@type": "Question",
          "name": "What makes a WordPress website secure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Security includes SSL certificates, daily backups, malware scanning, security hardening, regular WordPress core updates, plugin updates, and 24/7 monitoring."
          }
        },
        {
          "@type": "Question",
          "name": "Does your WordPress development company provide ongoing support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Monthly WordPress maintenance plans cover updates, security monitoring, speed optimization, content changes, and technical WordPress support."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer multilingual WordPress development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build multilingual WordPress websites for businesses wanting to reach both Malayalam-speaking and international audiences — especially valuable for tourism, Ayurveda, and export-oriented businesses."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with Teknoppy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact us via the Contact page, request a quote, or book a free 30-minute consultation. We respond to all enquiries within one business day."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide website maintenance after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Monthly WordPress maintenance plans from Rs. 5,000 per month cover updates, security monitoring, speed checks, content edits, and technical fixes."
          }
        }
      ]
    }
  ]
};
