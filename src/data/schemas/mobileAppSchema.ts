export const mobileAppSchema = {
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
      "@id": "https://teknoppy.com/mobile-app-development-company-kochi/#webpage",
      "url": "https://teknoppy.com/mobile-app-development-company-kochi/",
      "name": "Mobile App Development Company Kochi | Teknoppy",
      "description": "Need a Mobile App Development Company Kochi businesses can trust? Teknoppy builds native and cross-platform apps. Book a consultation.",
      "isPartOf": {
        "@id": "https://teknoppy.com/#website"
      },
      "about": {
        "@id": "https://teknoppy.com/mobile-app-development-company-kochi/#service"
      },
      "breadcrumb": {
        "@id": "https://teknoppy.com/mobile-app-development-company-kochi/#breadcrumb"
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
      "@id": "https://teknoppy.com/mobile-app-development-company-kochi/#breadcrumb",
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
          "name": "Mobile App Development Company Kochi",
          "item": "https://teknoppy.com/mobile-app-development-company-kochi/"
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
      "@id": "https://teknoppy.com/mobile-app-development-company-kochi/#service",
      "name": "Mobile App Development in Kochi",
      "serviceType": "Mobile App Development",
      "description": "End-to-end native and cross-platform mobile app development for iOS and Android, from discovery and UI/UX design through development, device testing, App Store and Play Store submission, and ongoing maintenance.",
      "url": "https://teknoppy.com/mobile-app-development-company-kochi/",
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
        "name": "Mobile App Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Android App Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "iOS App Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cross-Platform App Development (Flutter and React Native)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "App UI/UX Design",
              "url": "https://teknoppy.com/ui-ux-design-company-in-kochi/"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "On-Demand App Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Mobile App Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "App Store Optimization and Store Submission"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "App Maintenance and Support"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://teknoppy.com/mobile-app-development-company-kochi/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Should we build a native app or a cross-platform app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your needs. Native apps offer the best performance and platform-specific features, while cross-platform app development through Flutter or React Native reduces cost and timeline when both platforms need to launch together."
          }
        },
        {
          "@type": "Question",
          "name": "How long does mobile app development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timelines vary significantly by complexity, typically ranging from 8 to 20 weeks from discovery through store submission, depending on features and platform scope."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle App Store and Play Store submission?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. App store optimization services cover listing optimization alongside the technical submission and review process for both Apple's App Store and Google Play."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after the app launches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "App maintenance and support services cover ongoing updates, bug fixes, and compatibility work as new OS versions and store policy changes roll out."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build an app that connects to our existing systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Custom mobile app development includes integrating with existing backend systems, APIs, or third-party services your business already relies on."
          }
        },
        {
          "@type": "Question",
          "name": "Do you design the app's interface, or just build the functionality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both. App UI UX design services are part of every project, since how an app feels to use is as important as what it technically does."
          }
        }
      ]
    }
  ]
};
