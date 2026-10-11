import React from "react";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Neev Welfare Foundation",
    "alternateName": "NWF",
    "url": "https://neevwelfare.org.in",
    "logo": "https://neevwelfare.org.in/logo.png",
    "description": "Building a stronger, more inclusive, and sustainable society through meaningful action. Committed to child welfare, youth skilling, women empowerment, public healthcare, environmental protection, and emerging tech education.",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressCountry": "IN"
      }
    },
    "knowsAbout": [
      "Child Welfare & Education",
      "Youth Empowerment & Vocational Skill Development",
      "Women Empowerment & Self Help Groups",
      "Education, Literacy & Digital Literacy",
      "Healthcare & Public Welfare",
      "Environment & Sustainable Development",
      "Information Technology, AI & STEAM Tinkering Labs",
      "Corporate Social Responsibility (CSR) Implementation"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "sameAs": [
      "https://twitter.com/NeevWelfare",
      "https://linkedin.com/company/neev-welfare-foundation"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
