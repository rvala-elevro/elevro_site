export type RichTextPart = {
  text: string;
  href?: string;
};

export type RichText = string | RichTextPart[];

export type ResourceSection =
  | {
      type: "text";
      title?: string;
      paragraphs: RichText[];
    }
  | {
      type: "callout";
      label: string;
      text: RichText;
    }
  | {
      type: "bullets";
      title?: string;
      items: RichText[];
    }
  | {
      type: "steps";
      title?: string;
      items: RichText[];
    }
  | {
      type: "status";
      title?: string;
      items: {
        title: string;
        text: string;
      }[];
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };
    export type ResourceDetail = {
        type: "blogs" | "whitepapers" | "case-studies";
        slug: string;
      
        category: string;
        title: string;
        excerpt: string;
      
        metaTitle: string;
        metaDescription: string;
      
        publishedAt: string;
        readTime: string;
      
        heroImage?: string;
      
        sections: ResourceSection[];
      };
export const resourceDetails: ResourceDetail[] = [
  {
    type: "blogs",

    slug: "building-cicd-quality-gates-for-embedded-sdks",
    heroImage: "/resources/blogs/embedded-sdk-quality-gates/hero.webp",
    category: "Connected Device Quality Engineering",

    title: "Building CI/CD Quality Gates for Embedded SDKs",

    excerpt:
      "How automated build, code-health, security, memory and regression checks reduce release risk.",

    metaTitle: "CI/CD Quality Gates for Embedded SDKs | Elevro",

    metaDescription:
      "Learn how CI/CD quality gates improve embedded SDK releases through automated builds, code-health, security, memory controls, regression testing and release evidence.",

    publishedAt: "September 2026",

    readTime: "8 min read",

    sections: [
      {
        type: "text",
        title: "Quality gates make release risk visible early",
        paragraphs: [
          "Embedded SDKs are used by firmware teams to build products across different boards, toolchains, operating systems and configurations. A small change can therefore affect many downstream users.",
          "CI/CD quality gates provide fast, consistent checks before that change becomes a customer problem.",
        ],
      },
      {
        type: "image",
        src: "/resources/blogs/embedded-sdk-quality-gates/release-guardrails.webp",
        alt: "Four guardrails for an embedded SDK release",
        caption:
          "Figure 1. Release confidence comes from four complementary guardrails.",
      },

      {
        type: "callout",
        label: "Key idea",
        text: "An embedded SDK should not be trusted because it compiled once. It should earn confidence through repeatable builds, code-health and security checks, memory controls, automated validation and traceable release evidence.",
      },

      {
        type: "text",
        title: "Why are embedded SDK releases difficult to trust?",
        paragraphs: [
          "An SDK may build correctly for one board while failing for another. A code change may not break the main example, yet it can introduce a hidden reliability issue, violate an agreed coding rule or change behavior expected by existing customers.",
          "Manual release checks also vary by person and are difficult to repeat. The solution is a pipeline that applies the same evidence-based checks to every important change.",
        ],
      },

      {
        type: "status",
        title: "What is a CI/CD quality gate?",
        items: [
          {
            title: "Pass",
            text: "Required evidence meets the agreed policy.",
          },
          {
            title: "Review",
            text: "A known exception or new risk needs an owner.",
          },
          {
            title: "Stop",
            text: "A critical build, code-quality or regression condition failed.",
          },
        ],
      },

      {
        type: "bullets",
        title: "What should daily builds prove?",
        items: [
          "Build supported configurations and important examples.",
          "Confirm required files, libraries and documentation are packaged.",
          "Run fast smoke tests on simulators or representative hardware.",
          "Record source version, toolchain, dependencies and results.",
          "Publish a traceable artifact so failures can be reproduced.",
        ],
      },

      {
        type: "bullets",
        title: "How do modern code-health checks reduce risk?",
        items: [
          "Format and basic hygiene: use shared formatting, lint changed code and reject unexplained compiler warnings.",

          "Coding rules and compliance: apply agreed MISRA or project rules with reviewed baselines, severity levels, owners and documented deviations.",

          [
            {
              text: "Defect and vulnerability scanning: run ",
            },
            {
              text: "static security analysis",
              href: "/services/intelligent-quality-engineering",
            },
            {
              text: ", secret checks and dependency/CVE scans; record an SBOM when the SDK ships third-party components.",
            },
          ],

          "Code coverage: track line, function and branch coverage for important modules.",

          "Binary and memory budgets: compare outputs by target and gate unexpected flash/RAM growth.",

          "Runtime memory evidence: measure peak heap, fragmentation, leaks and stack high-water marks during representative tests.",
        ],
      },
      {
        type: "image",
        src: "/resources/blogs/embedded-sdk-quality-gates/quality-gate-flow.webp",
        alt: "Embedded SDK CI/CD quality gate workflow",
        caption:
          "Figure 2. Each quality gate answers a different release-risk question.",
      },
      {
        type: "text",
        title: "What should automated regression cover?",
        paragraphs: [
          "Regression should prove that the SDK still supports the product journeys customers depend on.",
          "Fast tests can run on every change. Broader hardware, compatibility, recovery and long-duration scenarios can run daily, weekly or before release.",
        ],
      },

      {
        type: "bullets",
        items: [
          [
            {
              text: "Public APIs",
              href: "/services/digital-engineering",
            },
          ],
          "Drivers",
          "Sample applications",
          "Connectivity",
          "Configuration",
          "Error handling",
          "Supported hardware",
          "Backward compatibility",
        ],
      },

      {
        type: "steps",
        title: "What does a practical quality-gate flow look like?",
        items: [
          "Identify the change. Connect modified areas with affected builds and tests.",
          "Create repeatable builds. Compile supported variants in controlled environments.",
          "Check code health. Enforce formatting, coding rules, compliance, SAST and dependency policies.",
          "Validate behavior and budgets. Run targeted regression, coverage and binary/runtime memory checks.",
          "Collect evidence. Preserve logs, findings, test results, sizes, versions and approved exceptions.",
          "Decide on release risk. Release, request review or stop based on agreed policy.",
        ],
      },

      {
        type: "steps",
        title: "How should a team implement the gates?",
        items: [
          "Define supported variants, critical customer journeys and unacceptable failure types.",
          "Stabilize automated builds and make every artifact traceable.",
          "Baseline format, compliance, vulnerability, coverage and memory results.",
          "Automate fast tests first, then add representative hardware and runtime memory measurement.",
          "Review trends and escaped defects so gate policies improve over time.",
        ],
      },

      {
        type: "text",
        title: "What business value do quality gates create?",
        paragraphs: [
          "Quality gates reduce late surprises, repeated manual effort and unclear release discussions.",

          "Developers receive faster feedback, reviewers focus on meaningful risk, and leaders receive consistent evidence instead of relying on confidence by opinion.",

          [
            {
              text: "Elevro helps teams design ",
            },
            {
              text: "SDK build pipelines",
              href: "/services/product-enablement",
            },
            {
              text: ", integrate code-health and security scanning, monitor coverage and memory growth, automate regression across simulators and hardware, and create release dashboards that connect engineering evidence with product risk.",
            },
          ],
        ],
      },

      {
        type: "callout",
        label: "Closing perspective",
        text: "The objective is not to create more pipeline steps. It is to make every embedded SDK release more repeatable, explainable and safe.",
      },
    ],
  },
];

export function getResourceDetail(type: string, slug: string) {
  return resourceDetails.find(
    (resource) => resource.type === type && resource.slug === slug,
  );
}
