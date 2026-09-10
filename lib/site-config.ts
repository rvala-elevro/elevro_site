// lib/site-config.ts

export const siteConfig = {
  name: "Elevro",
  url: "https://www.elevro.com",

  social: {
    linkedin: "https://www.linkedin.com/company/elevro/",
    instagram:
      "https://www.instagram.com/elevro_solutions?stkn=Z2tsMmhxa3pkOGhi",
  },
};

export const seoPages = {
  home: {
    path: "/",
    metaTitle: "Product Engineering Services & Solutions | Elevro",
    metaDescription:
      "Elevro delivers product engineering services powered by AI, digital engineering, quality engineering, cloud and product enablement expertise.",
    h1: "AI-Powered Product Engineering Services",
  },

  services: {
    "intelligent-quality-engineering": {
      metaTitle: "Quality Engineering Services & Solutions | Elevro",
      metaDescription:
        "Improve software quality with Elevro’s AI-powered quality engineering services, test automation, intelligent testing and QA solutions.",
      h1: "AI-Powered Quality Engineering Services",
    },

    "product-enablement": {
      metaTitle: "Product Enablement & DevOps Engineering Services | Elevro",
      metaDescription:
        "Accelerate software delivery with product enablement, DevOps engineering, CI/CD automation, AIOps, QAOps and release automation services.",
      h1: "Product Enablement & DevOps Engineering Services",
    },

    "artificial-intelligence": {
      metaTitle: "AI Engineering Services & Solutions | Elevro",
      metaDescription:
        "Build smarter digital products with Elevro’s AI engineering services, AI-powered testing, generative AI and intelligent automation solutions.",
      h1: "AI Engineering Services & Solutions",
    },

    "cloud-engineering": {
      metaTitle: "Cloud Engineering Services & Solutions | Elevro",
      metaDescription:
        "Modernize cloud operations with cloud engineering services, infrastructure solutions, CloudOps, multi-cloud management and IoT cloud expertise.",
      h1: "Cloud Engineering Services & Solutions",
    },

    "digital-engineering": {
      metaTitle: "Digital Engineering Services & Solutions | Elevro",
      metaDescription:
        "Build connected digital products with digital engineering services across APIs, embedded systems, connected devices and modern software platforms.",
      h1: "Digital Engineering Services & Solutions",
    },
  },

  industries: {
    "consumer-electronics": {
      metaTitle: "Consumer Electronics Software Testing Services | Elevro",
      metaDescription:
        "Improve connected products with consumer electronics testing for firmware, embedded software, mobile apps, wireless devices and integrations.",
      h1: "Consumer Electronics Software Testing Services",
    },

    "healthcare-medtech": {
      metaTitle: "Healthcare & MedTech Software Testing Services | Elevro",
      metaDescription:
        "Elevro provides healthcare and MedTech software testing across applications, connected health devices, APIs, automation and digital health platforms.",
      h1: "Healthcare & MedTech Software Testing Services",
    },

    "ecommerce-retail": {
      metaTitle: "eCommerce Testing & QA Services | Elevro",
      metaDescription:
        "Deliver reliable shopping experiences with eCommerce testing services for checkout, APIs, databases, automation and retail software platforms.",
      h1: "eCommerce Testing & Quality Assurance Services",
    },

    "automotive-infotainment": {
      metaTitle: "Automotive Software & Infotainment Testing | Elevro",
      metaDescription:
        "Validate automotive software with testing for infotainment, Android Automotive OS, Android Auto, connectivity, Vehicle HAL and automation.",
      h1: "Automotive Software & Infotainment Testing Services",
    },

    "smart-home-iot-matter": {
      metaTitle: "IoT interoperability Testing Services | Elevro",
      metaDescription:
        "Improve connected device quality with IoT testing for Matter, smart home platforms, interoperability, connectivity, firmware and provisioning.",
      h1: "IoT, Smart Home & Matter Testing Services",
    },

    "cloud-saas-platforms": {
      metaTitle: "SaaS & Cloud Application Testing Services | Elevro",
      metaDescription:
        "Elevro provides SaaS testing across cloud applications, APIs, automation, performance, security and release validation for scalable platforms.",
      h1: "SaaS & Cloud Application Testing Services",
    },
  },
} as const;
