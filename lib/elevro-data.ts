// lib/elevro-data.ts

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Car,
  CircuitBoard,
  CloudCog,
  Cpu,
  FileText,
  Handshake,
  Layers3,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  TestTubeDiagonal,
  Users,
  Volume2,
  Wifi,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      {
        label: "Intelligent Quality Engineering",
        href: "/services/intelligent-quality-engineering",
      },
      { label: "Product Enablement", href: "/services/product-enablement" },
      {
        label: "Artificial Intelligence",
        href: "/services/artificial-intelligence",
      },
      { label: "Cloud Engineering", href: "/services/cloud-engineering" },
      { label: "Digital Engineering", href: "/services/digital-engineering" },
    ],
  },
  {
    label: "Solutions & Accelerators",
    href: "/solutions-accelerators",
    children: [
      {
        label: "Intelligent Quality Accelerator",
        href: "/solutions-accelerators/intelligent-quality-accelerator",
      },
      {
        label: "CloudOps IoT Accelerator",
        href: "/solutions-accelerators/cloudops-iot-accelerator",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blogs", href: "/resources/blogs" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Case Studies", href: "/resources/case-studies" },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Overview", href: "/about-us/overview" },
      { label: "Careers", href: "/about-us/careers" },
      { label: "Partnerships", href: "/about-us/partnerships" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export type CardItem = {
  title: string;
  text: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  href: string;
  icon: LucideIcon;
  short: string;
  hero: string;
  capabilities: CardItem[];
  stack: string[];
  outcomes: string[];
  technologies: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "intelligent-quality-engineering",
    title: "Intelligent Quality Engineering",
    href: "/services/intelligent-quality-engineering",
    icon: TestTubeDiagonal,
    short:
      "Automation-first quality engineering across UI, API, embedded, IoT, hardware, and CI/CD.",
    hero: "Elevro provides deep quality engineering expertise across scripting, UI automation, backend automation, embedded QA, hardware protocols, QAOps, and AI-powered QA.",
    capabilities: [
      {
        title: "Scripting & Automation",
        text: "Python, Pytest, and Robot Framework based scalable automation frameworks.",
      },
      {
        title: "UI/UX Test Automation",
        text: "Web and mobile UI automation with Selenium WebDriver, Appium, XCUITest, Playwright, and Cypress.",
      },
      {
        title: "Embedded & IoT QA",
        text: "Specialized validation for IoT devices, firmware, BLE, Wi-Fi, Matter, MQTT, Zigbee, LoRaWAN, and hardware workflows.",
      },
      {
        title: "Backend & CI/CD Automation",
        text: "REST API automation, database validation, GitLab, Jenkins, GitHub Actions, Jira, Xray, and TestRail integrations.",
      },
    ],
    stack: [
      "Test architecture",
      "Automation framework",
      "Protocol validation",
      "CI/CD quality gates",
      "Continuous reporting",
    ],
    outcomes: [
      "Higher test coverage",
      "Continuous regression",
      "Quality gates in pipelines",
      "Scalable QAOps",
    ],
    technologies: [
      "Python",
      "Pytest",
      "Robot Framework",
      "Selenium",
      "Appium",
      "Playwright",
      "Cypress",
      "Jenkins",
      "GitLab CI",
    ],
  },
  {
    slug: "product-enablement",
    title: "Product Enablement",
    href: "/services/product-enablement",
    icon: Rocket,
    short:
      "Enable products with engineering confidence, robust QA adoption, and connected-device validation.",
    hero: "From product idea to validation and launch, Elevro supports embedded, IoT, audio, wireless, and cloud-connected products with end-to-end engineering.",
    capabilities: [
      {
        title: "Product Validation",
        text: "End-to-end validation from concept, firmware, hardware, mobile app, API, and cloud workflows.",
      },
      {
        title: "Wireless Audio Tooling",
        text: "Enterprise tools for programming, configuration, testing, and production validation of wireless audio modules.",
      },
      {
        title: "SDK Enablement",
        text: "CI/CD, build automation, test reporting, and release management for product SDKs.",
      },
      {
        title: "Manufacturing Support",
        text: "Web serial, I2C, automation scripts, and hardware validation workflows for production lines.",
      },
    ],
    stack: [
      "Product discovery",
      "Firmware validation",
      "Hardware integration",
      "SDK automation",
      "Release readiness",
    ],
    outcomes: [
      "Faster product readiness",
      "Stable manufacturing workflows",
      "Reduced validation gaps",
      "Confidence across product lifecycle",
    ],
    technologies: [
      "Python",
      "Bash",
      "I2C",
      "Logic Analyzer",
      "Docker",
      "MySQL",
      "TeamCity",
      "Bitbucket",
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    href: "/services/artificial-intelligence",
    icon: BrainCircuit,
    short:
      "AI-powered automation, release intelligence, risk analysis, and smarter QA workflows.",
    hero: "Elevro helps teams adopt AI practically across testing, automation, product validation, quality dashboards, and workflow intelligence.",
    capabilities: [
      {
        title: "AI-Based Testing",
        text: "Use AI-assisted test design, smarter regression selection, and intelligent defect insights.",
      },
      {
        title: "Generative AI for QA",
        text: "Generate reusable automation assets, test data, summaries, and quality documentation faster.",
      },
      {
        title: "Release Risk Intelligence",
        text: "Convert build, test, and defect signals into release confidence views.",
      },
      {
        title: "AIOps Enablement",
        text: "Combine monitoring, logging, and operational signals for proactive quality engineering.",
      },
    ],
    stack: [
      "AI-powered QA",
      "Risk scoring",
      "Regression intelligence",
      "Quality dashboards",
      "AIOps workflows",
    ],
    outcomes: [
      "Reduced manual QA effort",
      "Better release visibility",
      "Faster defect triage",
      "Continuous quality improvement",
    ],
    technologies: [
      "Python",
      "Pytest",
      "Playwright",
      "Cypress",
      "Robot Framework",
      "AI/GenAI",
    ],
  },
  {
    slug: "cloud-engineering",
    title: "Cloud Engineering",
    href: "/services/cloud-engineering",
    icon: CloudCog,
    short:
      "CloudOps, DevOps, infrastructure automation, observability, CI/CD, and cloud-native IoT systems.",
    hero: "Elevro delivers CloudOps and DevOps solutions across AWS, Azure, GCP, Kubernetes, Docker, Terraform, Ansible, monitoring, logging, and IoT cloud pipelines.",
    capabilities: [
      {
        title: "CloudOps & DevOps Strategy",
        text: "Design development, deployment, infrastructure, and operational strategies.",
      },
      {
        title: "Multi-Cloud Management",
        text: "AWS, Azure, and GCP infrastructure for compute, storage, serverless, SQL, and cloud-native systems.",
      },
      {
        title: "Infrastructure as Code",
        text: "Automated provisioning with Terraform, Ansible, Puppet, scaling, and optimization workflows.",
      },
      {
        title: "IoT Cloud Solutions",
        text: "Azure IoT Hub, DPS, Stream Analytics, CosmosDB, ADX, APIM, VPN, Blob Storage, and FOTA systems.",
      },
    ],
    stack: [
      "Cloud strategy",
      "IaC automation",
      "CI/CD pipelines",
      "Monitoring & logging",
      "IoT cloud operations",
    ],
    outcomes: [
      "Faster cloud delivery",
      "Reliable deployments",
      "Observable infrastructure",
      "Scalable IoT operations",
    ],
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Puppet",
      "Azure IoT Hub",
    ],
  },
  {
    slug: "digital-engineering",
    title: "Digital Engineering",
    href: "/services/digital-engineering",
    icon: Cpu,
    short:
      "Engineer scalable web, mobile, backend, API, cloud, and IoT systems for modern products.",
    hero: "Elevro builds digital platforms across enterprise web, mobile applications, IoT firmware, BLE/Wi-Fi systems, audio devices, and industrial IoT solutions.",
    capabilities: [
      {
        title: "Enterprise Web & Cloud",
        text: "Design scalable web platforms, APIs, cloud-connected applications, and backend systems.",
      },
      {
        title: "Mobile Applications",
        text: "Build and validate iOS, Android, Appium, XCUITest, and connected mobile experiences.",
      },
      {
        title: "IoT & Embedded Firmware",
        text: "Support firmware, protocol, SDK, and connected-device engineering workflows.",
      },
      {
        title: "Audio & Automotive Systems",
        text: "Support smart audio, Android Auto, AAOS, Bluetooth, Wi-Fi, and vehicle interface validation.",
      },
    ],
    stack: [
      "Web platforms",
      "Mobile apps",
      "Backend APIs",
      "IoT firmware",
      "Connected systems",
    ],
    outcomes: [
      "Reliable digital delivery",
      "Scalable product architecture",
      "Better device interoperability",
      "End-to-end product quality",
    ],
    technologies: [
      "Python",
      "Webserver",
      "API",
      "MySQL",
      "Android",
      "ADB",
      "Logcat",
      "Fastboot",
    ],
  },
];

export const homeStats = [
  ["24/7", "Automated Testing"],
  ["100%", "Critical Coverage Mindset"],
  ["50+", "Test Platforms"],
  ["5+", "Core Service Pillars"],
];

export const clients = [
  "Enterprise Web & Cloud",
  "Mobile Applications",
  "IoT Firmware",
  "BLE & Wi-Fi",
  "Audio Devices",
  "Industrial IoT",
  "DevSecOps",
  "AIOps",
];

export const accelerators = [
  {
    slug: "intelligent-quality-accelerator",
    title: "Intelligent Quality Accelerator",
    href: "/solutions-accelerators/intelligent-quality-accelerator",
    icon: ShieldCheck,
    short:
      "A reusable quality engineering accelerator for automation, embedded QA, protocols, Matter, Boardfarm, and reporting.",
    hero: "Accelerate quality delivery with reusable frameworks for UI automation, API testing, embedded validation, communication protocols, hardware control, and CI/CD quality gates.",
    features: [
      {
        title: "Boardfarm Architecture",
        text: "Boards, devices, common utilities, tests, LSF-based setup, and reusable embedded validation components.",
      },
      {
        title: "Matter IoT Automation",
        text: "Provisioning, mobile app automation, voice command validation, interoperability, GPIO control, and reporting.",
      },
      {
        title: "Protocol Automation",
        text: "BLE, Bluetooth Classic, Wi-Fi, LoRaWAN, Zigbee, MQTT, UART, I2C, SPI, RS232, RS485, CANBus, and ModBus.",
      },
      {
        title: "QAOps Reporting",
        text: "Automated logs, test reports, coverage visibility, Jira, Xray, TestRail, and CI/CD quality signals.",
      },
    ],
    technologies: [
      "Python",
      "Pytest",
      "Robot Framework",
      "Raspberry Pi",
      "Appium",
      "GPIO",
      "Jenkins",
      "GitLab CI",
    ],
  },
  {
    slug: "cloudops-iot-accelerator",
    title: "CloudOps IoT Accelerator",
    href: "/solutions-accelerators/cloudops-iot-accelerator",
    icon: ServerCog,
    short:
      "A cloud and IoT delivery accelerator for FOTA, group command execution, real-time ingestion, CI/CD, and IaC.",
    hero: "Ship connected products faster with cloud infrastructure, Azure IoT services, automated provisioning, telemetry pipelines, FOTA, serverless orchestration, and DevOps pipelines.",
    features: [
      {
        title: "FOTA System",
        text: "Firmware-over-the-air update flow using Azure IoT Hub, Blob Storage, Azure Functions, and SAS token-based security.",
      },
      {
        title: "Group Command Execution",
        text: "Dispatch commands to hundreds of IoT devices using device twin tags and serverless orchestration.",
      },
      {
        title: "Real-Time IoT Data Pipeline",
        text: "Azure IoT Hub to Stream Analytics to Data Lake with JSON/CSV transformation and query support.",
      },
      {
        title: "Infrastructure Automation",
        text: "Terraform IaC, Azure DevOps pipelines, firmware build automation, and cloud deployment workflows.",
      },
    ],
    technologies: [
      "Azure IoT Hub",
      "Azure Functions",
      "Blob Storage",
      "Stream Analytics",
      "Data Lake",
      "Terraform",
      "Azure DevOps",
      "Docker",
    ],
  },
];

export const resourcePreview = [
  {
    type: "Blog",
    title: "How AI-Based Testing Improves Release Confidence",
    href: "/resources/blogs",
  },
  {
    type: "Whitepaper",
    title: "CloudOps, QAOps and AIOps for Connected Products",
    href: "/resources/whitepapers",
  },
  {
    type: "Case Study",
    title: "Cloud & IoT Development for Scalable Device Operations",
    href: "/resources/case-studies",
  },
];

export const resourceGroups = {
  blogs: [
    {
      title: "AI-Based Testing for Modern Product Teams",
      summary:
        "How AI-powered QA, automation frameworks, and quality dashboards help teams reduce manual effort.",
      icon: BrainCircuit,
    },
    {
      title: "Protocol Automation for Connected Devices",
      summary:
        "BLE, Wi-Fi, MQTT, Zigbee, UART, I2C, SPI, CANBus, and ModBus automation patterns.",
      icon: Wifi,
    },
    {
      title: "Building CI/CD Quality Gates for Embedded SDKs",
      summary:
        "How daily builds, Coverity, MISRA compliance, and automated regression reduce release risk.",
      icon: CircuitBoard,
    },
  ],
  whitepapers: [
    {
      title: "Intelligent Quality Engineering Maturity Model",
      summary:
        "A practical roadmap for scripting, UI automation, embedded QA, protocol validation, QAOps, and AI-powered QA.",
      icon: FileText,
    },
    {
      title: "CloudOps & DevOps Blueprint for IoT Products",
      summary:
        "Reference model for AWS, Azure, GCP, Docker, Kubernetes, Terraform, monitoring, logging, and IoT cloud services.",
      icon: CloudCog,
    },
    {
      title: "Matter Automation Framework Architecture",
      summary:
        "Provisioning, hub interoperability, voice assistant validation, GPIO control, logging, and automated reports.",
      icon: Layers3,
    },
  ],
  "case-studies": [
    {
      title: "Cloud & IoT Development Case Study",
      summary:
        "FOTA, scalable group command execution, real-time IoT ingestion, Terraform IaC, and Azure DevOps pipelines.",
      icon: CloudCog,
    },
    {
      title: "CI/CD for Low Power Wi-Fi & BLE IoT Module SDK",
      summary:
        "Firmware SDK generation, GitLab CI, Coverity, MISRA-2012 compliance, Jira, Xray, S3, and Nexus artifacts.",
      icon: Wifi,
    },
    {
      title: "Boardfarm Hardware Automation",
      summary:
        "Boards, devices, utilities, tests, coverage, exception handling, and LSF-based scalable test infrastructure.",
      icon: CircuitBoard,
    },
    {
      title: "Matter IoT Test Automation Framework",
      summary:
        "Mobile app automation, provisioning, voice command testing, interoperability, GPIO control, and reporting.",
      icon: Bot,
    },
    {
      title: "Wireless Audio Product Engineering Support Tool",
      summary:
        "I2C serial control, firmware reverse engineering, logic analyzer debugging, CI/CD, Docker, webserver, API, and MySQL.",
      icon: Volume2,
    },
    {
      title: "Smart Audio Device Test Automation",
      summary:
        "Optical fibre, HDMI eARC, Aux, Bluetooth, Ethernet, Wi-Fi, Alexa, Google, Android kernel, firmware, and API validation.",
      icon: Volume2,
    },
    {
      title: "Android Auto Automation",
      summary:
        "USB, Bluetooth, Wi-Fi, UI automation, media playback, call handling, Jenkins, and GitLab CI.",
      icon: Car,
    },
    {
      title: "Android Automotive OS Automation",
      summary:
        "ADB, Logcat, Fastboot, Android instrumentation tests, CAN bus, and Vehicle HAL validation.",
      icon: Smartphone,
    },
    {
      title: "FDA Approved BLE Module & SDK Validation",
      summary:
        "Raspberry Pi GPIO test bed, unit tests, Android/iOS interoperability, execution reporting, and approval workflows.",
      icon: Activity,
    },
  ],
};

export const aboutPages = [
  {
    slug: "overview",
    title: "Overview",
    icon: BriefcaseBusiness,
    hero: "Elevro is focused on intelligent product enablement, robust AI adoption, quality engineering, CloudOps, DevOps, and connected-product validation.",
    points: [
      "AI-powered QA and automation",
      "CloudOps and DevOps expertise",
      "Embedded, IoT, BLE, Wi-Fi, audio, and automotive quality",
      "End-to-end product validation",
    ],
  },
  {
    slug: "careers",
    title: "Careers",
    icon: Users,
    hero: "Join teams working across AI-powered QA, embedded systems, cloud infrastructure, mobile automation, IoT protocols, and DevOps platforms.",
    points: [
      "Automation engineering",
      "Cloud and DevOps engineering",
      "Embedded QA and protocol validation",
      "Product and platform engineering",
    ],
  },
  {
    slug: "partnerships",
    title: "Partnerships",
    icon: Handshake,
    hero: "Partner with Elevro to co-create accelerators, validate connected products, strengthen cloud operations, and scale quality engineering.",
    points: [
      "Technology partnerships",
      "Cloud and IoT delivery partnerships",
      "QAOps and automation partnerships",
      "Product engineering collaboration",
    ],
  },
];
