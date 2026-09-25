export const webAppSchema = {
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
      "@id": "https://teknoppy.com/web-application-development-company-kochi/#webpage",
      "url": "https://teknoppy.com/web-application-development-company-kochi/",
      "name": "Web Application Development Company Kochi | Custom Web Apps — Teknoppy",
      "description": "Teknoppy is a Kochi web application development company building scalable, secure, enterprise-grade custom web applications for Kerala, India, and GCC businesses since 2018.",
      "isPartOf": { "@id": "https://teknoppy.com/#website" },
      "about": { "@id": "https://teknoppy.com/web-application-development-company-kochi/#service" },
      "breadcrumb": { "@id": "https://teknoppy.com/web-application-development-company-kochi/#breadcrumb" },
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
      "@id": "https://teknoppy.com/web-application-development-company-kochi/#breadcrumb",
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
          "name": "Web Application Development Company Kochi",
          "item": "https://teknoppy.com/web-application-development-company-kochi/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://teknoppy.com/web-application-development-company-kochi/#service",
      "name": "Web Application Development in Kochi",
      "serviceType": "Custom Web Application Development",
      "description": "Custom, scalable, secure web application development for businesses across Kerala, India, and the GCC — from startup MVPs to enterprise systems, including SaaS, CRM, ERP, HRM, LMS, booking systems, portals, dashboards and API integrations.",
      "url": "https://teknoppy.com/web-application-development-company-kochi/",
      "provider": { "@id": "https://teknoppy.com/#organization" },
      "areaServed": [
        { "@type": "State", "name": "Kerala" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Qatar" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Application Development Cost in Kochi",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "MVP/Startup Application" },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 300000,
              "maxPrice": 800000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Standard Web Application" },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 800000,
              "maxPrice": 1500000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Enterprise Application" },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 1500000
            }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Ongoing Maintenance & Support" },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "INR",
              "minPrice": 20000,
              "maxPrice": 50000,
              "unitCode": "MON",
              "unitText": "month"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SaaS Development",
              "url": "https://teknoppy.com/saas-development-company-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CRM Development",
              "url": "https://teknoppy.com/crm-company-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ERP Development",
              "url": "https://teknoppy.com/erp-development-company-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "HRM Software",
              "url": "https://teknoppy.com/hrm-company-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IoT Development",
              "url": "https://teknoppy.com/iot-development-agency-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Inventory Management Software",
              "url": "https://teknoppy.com/inventory-management-software-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Booking System Development",
              "url": "https://teknoppy.com/booking-system-development-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Customer Portal Development",
              "url": "https://teknoppy.com/customer-portal-development-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vendor Portal Development",
              "url": "https://teknoppy.com/vendor-portal-development-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "LMS Development",
              "url": "https://teknoppy.com/lms-development-company-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dashboard Development",
              "url": "https://teknoppy.com/dashboard-development-services-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "API Integration Services",
              "url": "https://teknoppy.com/api-integration-services-kochi/"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://teknoppy.com/web-application-development-company-kochi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does web application development cost in Kochi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web application development cost ranges from Rs. 3L for MVPs to Rs. 40L+ for enterprise systems. Cost depends on features, complexity, timeline, and team size. Custom quotes provided after understanding requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How long does web application development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MVP: 2-3 months. Standard: 3-4 months. Enterprise: 4-6 months. We provide a detailed timeline before starting."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "React, Vue.js, Angular (frontend), Node.js, Python, Java (backend), PostgreSQL, MongoDB (databases), AWS/Azure (cloud). Framework selection based on your requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide web application development support after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer maintenance packages covering updates, security patches, feature enhancements, and bug fixes. Ongoing support included."
          }
        },
        {
          "@type": "Question",
          "name": "How secure is your web application development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Secure web application development is standard. We implement encryption, authentication, OWASP standards, regular security testing, and compliance (GDPR, HIPAA, PCI-DSS)."
          }
        }
      ]
    }
  ]
};
