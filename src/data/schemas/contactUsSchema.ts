export const contactUsSchema = {
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "18:00"
        }
      ],
      "hasMap": "https://www.google.com/maps?q=Second%20Floor%2C%20Kaithakal%20Building%2C%20Door%20No%2049%2C%20Kaithakal%20Lane%2C%20Thykoodam%2C%20Vyttila%2C%20Ernakulam%2C%20Kochi%2C%20Kerala%20682019",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6282249224",
        "email": "sales@teknoppy.com",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": [
          "English",
          "Malayalam"
        ],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "18:00"
        }
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
      "@type": "ContactPage",
      "@id": "https://teknoppy.com/contact-us/#webpage",
      "url": "https://teknoppy.com/contact-us/",
      "name": "Contact Teknoppy | Web Design & SEO Agency, Kochi Kerala",
      "description": "Contact Teknoppy for website design, SEO, and digital marketing in Kochi, Kerala. Serving clients across India and the GCC (UAE, Qatar). Get a reply within one business day.",
      "isPartOf": {
        "@id": "https://teknoppy.com/#website"
      },
      "about": {
        "@id": "https://teknoppy.com/#organization"
      },
      "mainEntity": {
        "@id": "https://teknoppy.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://teknoppy.com/contact-us/#breadcrumb"
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
      "@id": "https://teknoppy.com/contact-us/#breadcrumb",
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
          "name": "Contact Us",
          "item": "https://teknoppy.com/contact-us/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://teknoppy.com/contact-us/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How fast does Teknoppy reply to enquiries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Within one business day, usually sooner during the week."
          }
        },
        {
          "@type": "Question",
          "name": "Does Teknoppy take on clients outside India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we actively work with businesses in the UAE and Qatar, alongside clients across Kerala."
          }
        },
        {
          "@type": "Question",
          "name": "Is the first consultation free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The first call is free and there's no obligation to proceed afterward."
          }
        },
        {
          "@type": "Question",
          "name": "What should I include in my message?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "What you need (website, SEO, or both), your current site if you have one, and a rough timeline. That's enough for us to give a useful first reply."
          }
        },
        {
          "@type": "Question",
          "name": "Do you only build websites, or handle SEO too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both, under one team — see the full list on our Services page."
          }
        },
        {
          "@type": "Question",
          "name": "Can I speak to someone before signing anything?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every project starts with a free call, no commitment required until you're ready."
          }
        }
      ]
    }
  ]
};
