export const softwareSchema = {
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
        {
          "@type": "City",
          "name": "Kochi"
        },
        {
          "@type": "City",
          "name": "Thrissur"
        },
        {
          "@type": "City",
          "name": "Kozhikode"
        },
        {
          "@type": "City",
          "name": "Thiruvananthapuram"
        },
        {
          "@type": "City",
          "name": "Palakkad"
        },
        {
          "@type": "City",
          "name": "Kottayam"
        },
        {
          "@type": "State",
          "name": "Kerala"
        },
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        },
        {
          "@type": "Country",
          "name": "Qatar"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6282249224",
        "email": "sales@teknoppy.com",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": [
          "English",
          "Malayalam"
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://teknoppy.com/#website",
      "url": "https://teknoppy.com/",
      "name": "Teknoppy",
      "publisher": {
        "@id": "https://teknoppy.com/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://teknoppy.com/software-development-agency-kochi/#webpage",
      "url": "https://teknoppy.com/software-development-agency-kochi/",
      "name": "Software Development Company Kochi | Teknoppy",
      "description": "Need a Software Development Company Kochi businesses can trust? Teknoppy builds custom, enterprise-ready systems. Book a consultation.",
      "isPartOf": {
        "@id": "https://teknoppy.com/#website"
      },
      "about": {
        "@id": "https://teknoppy.com/software-development-agency-kochi/#service"
      },
      "breadcrumb": {
        "@id": "https://teknoppy.com/software-development-agency-kochi/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://teknoppy.com/og-image.png",
        "width": 1200,
        "height": 630
      },
      "author": {
        "@id": "https://teknoppy.com/#sanal-edison"
      },
      "reviewedBy": {
        "@id": "https://teknoppy.com/#sanal-edison"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://teknoppy.com/software-development-agency-kochi/#breadcrumb",
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
          "name": "Software Development Company Kochi",
          "item": "https://teknoppy.com/software-development-agency-kochi/"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#sanal-edison",
      "name": "Sanal Edison",
      "jobTitle": "Digital Strategist",
      "url": "https://teknoppy.com/sanal-edison-digital-strategist/",
      "image": "https://www.teknoppy.com/sanal.png",
      "worksFor": {
        "@id": "https://teknoppy.com/#organization"
      }
    },
    {
      "@type": "Service",
      "@id": "https://teknoppy.com/software-development-agency-kochi/#service",
      "name": "Software Development in Kochi",
      "serviceType": "Custom Software Development",
      "description": "Custom software built around how your business operates, including enterprise software, business software solutions, desktop applications, legacy software modernization, software consulting, software product development and software integration.",
      "url": "https://teknoppy.com/software-development-agency-kochi/",
      "provider": {
        "@id": "https://teknoppy.com/#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Kochi"
        },
        {
          "@type": "State",
          "name": "Kerala"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Software Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise Software Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Software Solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Desktop Application Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Legacy Software Modernization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Software Consulting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Software Product Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Software Integration Services"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://teknoppy.com/software-development-agency-kochi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is this different from web application development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Software development covers a broader category — desktop applications, legacy systems, and custom business tools — while web application development specifically builds browser-based platforms. Some projects overlap, and we'll recommend the right approach during initial consulting, rather than assuming one category fits before understanding the actual requirement."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build software as a product, or only internal tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both. Software product development supports businesses building software to sell or license, while other projects are internal tools built purely for operational use."
          }
        },
        {
          "@type": "Question",
          "name": "Can you modernize our existing outdated system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Legacy software modernization rebuilds outdated systems onto current technology, planned carefully to avoid disrupting operations your business currently depends on."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer consulting without a full development commitment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Software consulting services Kochi help define the right technical approach and scope before you commit to a full development project."
          }
        },
        {
          "@type": "Question",
          "name": "Will custom software integrate with systems we already use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Software integration services connect new development with your existing tools — CRMs, accounting systems, or other business software already in use."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a custom software project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timelines vary significantly by scope, typically ranging from 8 to 20+ weeks depending on complexity, integration requirements, and whether legacy modernization is involved alongside new feature development."
          }
        }
      ]
    }
  ]
};
