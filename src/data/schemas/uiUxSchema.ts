export const uiUxSchema = {
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
      "@id": "https://teknoppy.com/ui-ux-design-company-in-kochi/#webpage",
      "url": "https://teknoppy.com/ui-ux-design-company-in-kochi/",
      "name": "UI/UX Design Company in Kochi | Teknoppy",
      "description": "Teknoppy is a trusted UI/UX design company in Kochi, building website, app & dashboard interfaces for startups and enterprises since 2018.",
      "isPartOf": { "@id": "https://teknoppy.com/#website" },
      "about": { "@id": "https://teknoppy.com/ui-ux-design-company-in-kochi/#service" },
      "breadcrumb": { "@id": "https://teknoppy.com/ui-ux-design-company-in-kochi/#breadcrumb" },
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
      "@id": "https://teknoppy.com/ui-ux-design-company-in-kochi/#breadcrumb",
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
          "name": "UI/UX Design Company in Kochi",
          "item": "https://teknoppy.com/ui-ux-design-company-in-kochi/"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#sanal-edison",
      "name": "Sanal Edison",
      "jobTitle": "Founder & Design Strategy Lead",
      "url": "https://teknoppy.com/sanal-edison-digital-strategist/",
      "image": "https://www.teknoppy.com/sanal.png",
      "worksFor": { "@id": "https://teknoppy.com/#organization" },
      "description": "Sanal has led 120+ web, app, and design projects since founding Teknoppy in 2018. He now leads an in-house team of UI designers, UX researchers, and developers who take every project from wireframe to working product.",
      "knowsAbout": [
        "UI Design",
        "UX Design",
        "User Research",
        "Wireframing and Prototyping",
        "Digital Strategy"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://teknoppy.com/ui-ux-design-company-in-kochi/#service",
      "name": "UI/UX Design Services in Kochi",
      "serviceType": "UI/UX Design",
      "description": "User interface and user experience design for websites, mobile apps, dashboards and web applications, including UX research and audits, wireframing, prototyping, usability testing and developer handoff.",
      "url": "https://teknoppy.com/ui-ux-design-company-in-kochi/",
      "provider": { "@id": "https://teknoppy.com/#organization" },
      "areaServed": [
        { "@type": "City", "name": "Kochi" },
        { "@type": "State", "name": "Kerala" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Qatar" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Investment Guide for UI/UX Design Projects in Kochi",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website UI Design",
              "url": "https://teknoppy.com/website-ui-design-kochi/"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 20000,
              "maxPrice": 60000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App UI/UX Design"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 40000,
              "maxPrice": 150000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dashboard / SaaS UI Design",
              "url": "https://teknoppy.com/dashboard-ui-design-kochi/"
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
              "name": "UX Audit (existing product)",
              "url": "https://teknoppy.com/ux-audit-services-kochi/"
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
              "name": "Wireframing & Prototyping (standalone)"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 10000,
              "maxPrice": 30000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web App UI Design",
              "url": "https://teknoppy.com/web-app-ui-design-kochi/"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://teknoppy.com/ui-ux-design-company-in-kochi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Teknoppy really a UI/UX design company in Kochi, or a general web agency that also does design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Teknoppy is a genuine UI/UX design company in Kochi, with a dedicated research-to-prototype process, not design bolted onto a web development project as an afterthought."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a UI/UX design project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most website or app UI design projects take 2 to 4 weeks from discovery to final handoff; larger dashboard or multi-flow apps can take 5 to 8 weeks depending on scope."
          }
        },
        {
          "@type": "Question",
          "name": "How much does UI/UX design cost in Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most projects range from Rs. 20,000 to Rs. 2,00,000 depending on platform and complexity. A written quote is shared before any work starts."
          }
        },
        {
          "@type": "Question",
          "name": "Do you only design, or can you also build the product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both. As a UI UX design and development company in Kochi, our in-house team can take a design straight into a working product."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a UI design company and a UX design company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A UI design company in Kochi focuses on visual layout; a UX design company in Kochi focuses on flow and usability. Teknoppy handles both together, since the two rarely succeed in isolation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you run a UX audit on an existing product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our UX audit company in Kochi service reviews your current site or app and delivers a prioritised list of usability fixes, typically within a week."
          }
        },
        {
          "@type": "Question",
          "name": "Do you optimise content for AI answer engines like ChatGPT and Perplexity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Alongside SEO, we structure content and schema for AEO and GEO — clear, question-led sections that answer engines can cite when asked who the best UI/UX design company in Kochi is."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with clients outside Kochi or India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Alongside local Kochi and Kerala clients, we work with international clients researching design partners in India, with calls scheduled to suit their time zone."
          }
        },
        {
          "@type": "Question",
          "name": "Can visiting or overseas founders manage a project remotely without visiting Kochi in person?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Most projects run entirely over video calls, shared Figma files, and written updates, so founders travelling or based abroad can manage the entire process without visiting our Kochi office."
          }
        },
        {
          "@type": "Question",
          "name": "Which is the best UI UX design company in Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best choice is the one that fits your goals, shows real outcomes, and explains its process clearly rather than the one claiming the title loudest. Teknoppy's 120+ delivered projects and repeat client relationships are the evidence we'd point to."
          }
        },
        {
          "@type": "Question",
          "name": "How to choose a UI UX design company in Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check for a research-first process, a portfolio with real outcomes, transparent pricing, and a team that can also build what it designs."
          }
        }
      ]
    }
  ]
};
