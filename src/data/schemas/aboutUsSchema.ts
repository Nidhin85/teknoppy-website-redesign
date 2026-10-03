export const aboutUsSchema = {
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
      "founder": {
        "@id": "https://teknoppy.com/#sanal-edison"
      },
      "foundingLocation": {
        "@type": "Place",
        "name": "Kochi, Kerala, India"
      },
      "employee": [
        {
          "@id": "https://teknoppy.com/#sanal-edison"
        },
        {
          "@id": "https://teknoppy.com/#vijayakala"
        },
        {
          "@id": "https://teknoppy.com/#niya-kk"
        },
        {
          "@id": "https://teknoppy.com/#neha-p"
        },
        {
          "@id": "https://teknoppy.com/#nithya-sibi"
        },
        {
          "@id": "https://teknoppy.com/#anjali-babu"
        },
        {
          "@id": "https://teknoppy.com/#anjana-babu"
        },
        {
          "@id": "https://teknoppy.com/#farsana-a"
        },
        {
          "@id": "https://teknoppy.com/#nandana"
        },
        {
          "@id": "https://teknoppy.com/#adithya-k"
        }
      ],
      "knowsAbout": [
        "Website Design and Development",
        "WordPress Development",
        "Ecommerce Development",
        "Web Application Development",
        "Search Engine Optimization",
        "Digital Marketing",
        "UI/UX Design"
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
      "@type": "AboutPage",
      "@id": "https://teknoppy.com/about-us/#webpage",
      "url": "https://teknoppy.com/about-us/",
      "name": "About Teknoppy — Web Design Agency Kerala | Our Story, Team & Mission",
      "description": "Teknoppy is a professional web design and digital agency headquartered in Kochi, Kerala. Founded in 2018, we have delivered 120+ high-performance websites for businesses across Kerala and beyond.",
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
        "@id": "https://teknoppy.com/about-us/#breadcrumb"
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
      "@id": "https://teknoppy.com/about-us/#breadcrumb",
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
          "name": "About Us",
          "item": "https://teknoppy.com/about-us/"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#sanal-edison",
      "name": "Sanal Edison",
      "jobTitle": "Founder & Digital Strategist",
      "url": "https://teknoppy.com/sanal-edison-digital-strategist/",
      "image": "https://www.teknoppy.com/team/sanal-edison.webp",
      "description": "Sanal has led 120+ web design and development projects across Kerala since founding Teknoppy in 2018. Specialising in SEO-first website architecture, conversion optimisation, and digital strategy, he personally oversees every project from discovery to launch.",
      "knowsAbout": [
        "SEO-first Website Architecture",
        "Conversion Optimisation",
        "Digital Strategy",
        "Web Design and Development"
      ],
      "worksFor": {
        "@id": "https://teknoppy.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#vijayakala",
      "name": "Vijayakala",
      "jobTitle": "Business Development & Client Relations",
      "image": "https://www.teknoppy.com/team/vijayakala.webp",
      "description": "Vijayakala is the first point of contact for new enquiries and the ongoing link between clients and the delivery team, covering scoping, proposals, and account communication.",
      "worksFor": {
        "@id": "https://teknoppy.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#niya-kk",
      "name": "Niya K K",
      "jobTitle": "SEO Lead",
      "image": "https://www.teknoppy.com/team/niya-kk.webp",
      "description": "Niya leads Teknoppy's SEO delivery team, setting the audit, keyword, and on-page priorities for each client account and reviewing the work before it ships.",
      "worksFor": {
        "@id": "https://teknoppy.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#neha-p",
      "name": "Neha P",
      "jobTitle": "SEO Analyst",
      "image": "https://www.teknoppy.com/team/neha-p.webp",
      "description": "Neha runs the analysis side of Teknoppy's SEO work, covering technical audits, keyword research, competitor benchmarking, and the monthly performance reporting clients receive.",
      "worksFor": {
        "@id": "https://teknoppy.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#nithya-sibi",
      "name": "Nithya Sibi",
      "jobTitle": "Jr. SEO Executive",
      "image": "https://www.teknoppy.com/team/nithya-sibi.webp",
      "description": "Nithya handles day-to-day SEO execution across client accounts, from on-page fixes and metadata through to rank tracking and ongoing site health checks.",
      "worksFor": {
        "@id": "https://teknoppy.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#anjali-babu",
      "name": "Anjali Babu",
      "jobTitle": "Jr. SEO Executive",
      "image": "https://www.teknoppy.com/team/anjali-babu.webp",
      "description": "Anjali works across on-page optimisation and content support, applying the keyword and structure decisions the SEO team sets for each client site.",
      "worksFor": {
        "@id": "https://teknoppy.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#anjana-babu",
      "name": "Anjana Babu",
      "jobTitle": "Jr. SEO Executive",
      "image": "https://www.teknoppy.com/team/anjana-babu.webp",
      "description": "Anjana supports technical and on-page SEO delivery, handling site checks, metadata, and the recurring optimisation tasks that keep client pages healthy.",
      "worksFor": {
        "@id": "https://teknoppy.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#farsana-a",
      "name": "Farsana A",
      "jobTitle": "Jr. SEO Executive",
      "image": "https://www.teknoppy.com/team/farsana-a.webp",
      "description": "Farsana works on day-to-day SEO execution, covering on-page updates, listing and citation work, and tracking how client pages move in search.",
      "worksFor": {
        "@id": "https://teknoppy.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#nandana",
      "name": "Nandana S Madhu",
      "jobTitle": "Web Developer",
      "image": "https://www.teknoppy.com/team/nandana.webp",
      "description": "Nandana builds the client sites Teknoppy ships, turning approved designs into working front-end and WordPress builds and handling fixes and updates after launch.",
      "worksFor": {
        "@id": "https://teknoppy.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://teknoppy.com/#adithya-k",
      "name": "Adithya K",
      "jobTitle": "Social Media Content Strategist",
      "image": "https://www.teknoppy.com/team/adithya-k.webp",
      "description": "Adithya plans and writes the social content Teknoppy runs for client accounts, covering the content calendar, post copy, and the campaign themes each brand goes out with.",
      "worksFor": {
        "@id": "https://teknoppy.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://teknoppy.com/about-us/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Teknoppy offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website design and development, WordPress, ecommerce, web applications, SEO, digital marketing, and UI/UX design, all delivered by one in-house team."
          }
        },
        {
          "@type": "Question",
          "name": "Does Teknoppy work with businesses in the GCC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Alongside Kerala clients, Teknoppy works with businesses in the UAE and Qatar, with experience adapting sites and campaigns for both regions."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get website design and SEO from the same team?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every website Teknoppy builds includes SEO from the design stage, so page structure, speed, and content are already aligned with search when the site goes live."
          }
        },
        {
          "@type": "Question",
          "name": "Who is Sanal Edison?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sanal Edison is the founder and Digital Strategist at Teknoppy, a web design and digital marketing agency based in Kochi, Kerala, working with clients across Kerala and the GCC region, including the UAE and Qatar."
          }
        },
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
          "name": "How do I start a project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reach out through the Contact page or request a free website audit to see where your current site stands."
          }
        }
      ]
    }
  ]
};
