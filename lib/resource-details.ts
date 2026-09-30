export type RichTextPart = {
  text: string;
  href?: string;
};

export type RichText = string | RichTextPart[];
export type ResourceFaq = {
  question: string;
  answer: string;
};
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
    }
  | {
      type: "faq";
      title?: string;
      items: ResourceFaq[];
    };
export type ResourceDetail = {
  type: "blogs" | "whitepapers" | "case-studies";
  slug: string;

  category: string;
  title: string;
  excerpt: string;

  metaTitle: string;
  metaDescription: string;
  keywords?: string[];

  publishedAt: string;
  readTime: string;

  heroImage?: string;
  faqs?: ResourceFaq[];
  sections: ResourceSection[];
};
export const resourceDetails: ResourceDetail[] = [
  {
    type: "blogs",

    slug: "building-cicd-quality-gates-for-embedded-sdks",
    heroImage: "/resources/blogs/embedded-sdk-quality-gates/hero.png",
    category: "Connected Device Quality Engineering",

    title: "Building CI/CD Quality Gates for Embedded SDKs",

    excerpt:
      "How automated build, code-health, security, memory and regression checks reduce release risk.",

    metaTitle: "CI/CD Quality Gates for Embedded SDKs | Elevro",

    metaDescription:
      "Learn how CI/CD quality gates improve embedded SDK releases through automated builds, code-health, security, memory controls, regression testing and release evidence.",

    publishedAt: "September 2026",

    readTime: "8 min read",
    faqs: [
      {
        question: "Why are embedded SDK releases difficult to trust?",
        answer:
          "An SDK may build correctly for one board while failing for another. A code change may not break the main example, yet it can introduce a hidden reliability issue, violate an agreed coding rule or change behavior expected by existing customers. Manual release checks also vary by person and are difficult to repeat. A pipeline solves this by applying the same evidence-based checks to every important change.",
      },
      {
        question: "What is a CI/CD quality gate?",
        answer:
          "A CI/CD quality gate evaluates required evidence against an agreed policy. A Pass means the required evidence meets the policy. Review means a known exception or new risk needs an owner. Stop means a critical build, code-quality or regression condition has failed.",
      },
      {
        question: "What should daily builds prove?",
        answer:
          "Daily builds should build supported configurations and important examples, confirm required files, libraries and documentation are packaged, run fast smoke tests on simulators or representative hardware, record source version, toolchain, dependencies and results, and publish a traceable artifact so failures can be reproduced.",
      },
      {
        question: "How do modern code-health checks reduce risk?",
        answer:
          "Modern code-health checks reduce risk through shared formatting and linting, coding-rule and compliance checks, static security analysis, secret and dependency vulnerability scanning, code coverage monitoring, binary and memory budgets, and runtime memory measurements such as peak heap, fragmentation, leaks and stack high-water marks.",
      },
      {
        question: "What should automated regression cover?",
        answer:
          "Automated regression should prove that the SDK still supports the product journeys customers depend on. It should cover public APIs, drivers, sample applications, connectivity, configuration, error handling, supported hardware and backward compatibility. Fast tests can run on every change, while broader hardware, compatibility, recovery and long-duration scenarios can run daily, weekly or before release.",
      },
      {
        question: "What does a practical quality-gate flow look like?",
        answer:
          "A practical quality-gate flow starts by identifying the change and affected builds and tests. Teams then create repeatable builds, check code health, validate behavior and budgets, collect evidence such as logs, findings, test results, sizes and versions, and finally decide whether to release, request review or stop based on the agreed policy.",
      },
      {
        question: "How should a team implement the gates?",
        answer:
          "Teams should define supported variants, critical customer journeys and unacceptable failure types, stabilize automated builds and make artifacts traceable, baseline compliance, vulnerability, coverage and memory results, automate fast tests before adding representative hardware and runtime memory measurements, and review trends and escaped defects so gate policies improve over time.",
      },
      {
        question: "What business value do quality gates create?",
        answer:
          "Quality gates reduce late surprises, repeated manual effort and unclear release discussions. Developers receive faster feedback, reviewers can focus on meaningful risk, and leaders receive consistent engineering evidence instead of relying on confidence by opinion.",
      },
    ],
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
        src: "/resources/blogs/embedded-sdk-quality-gates/four.jpeg",
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
        src: "/resources/blogs/embedded-sdk-quality-gates/quality.jpeg",
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
  {
    type: "blogs",

    slug: "ai-based-testing-for-modern-product-teams",

    category: "AI & Quality Engineering",

    title: "AI Based Testing for Modern Product Teams",

    excerpt:
      "How to connect change impact, cross-product validation and release evidence.",

    metaTitle: "AI Based Testing for Modern Product Teams | Elevro",

    metaDescription:
      "How AI based testing connects change impact analysis, cross-product validation and release evidence for embedded, IoT and connected product teams.",

    keywords: [
      "AI based testing",
      "AI testing for embedded systems",
      "change impact analysis testing",
      "IoT test automation with AI",
      "release evidence model",
      "hardware-in-the-loop testing AI",
    ],

    publishedAt: "October 2026",

    readTime: "12 min read",

    faqs: [
      {
        question: "Is AI based testing a replacement for test automation?",
        answer:
          "No. Automation executes repeatable checks and captures evidence. AI helps plan, prioritize, maintain and interpret that work; it depends on reliable tests and environments.",
      },
      {
        question: "Can AI predict which changes will cause defects?",
        answer:
          "A model can estimate elevated risk from change history, complexity, ownership and prior failures. It cannot guarantee a defect or prove a change is safe. Treat the score as a review and test prioritization signal.",
      },
      {
        question:
          "Will risk based selection remove the need for full regression?",
        answer:
          "No. Teams still need broader regression at planned intervals and for critical releases, unfamiliar changes or low model confidence.",
      },
      {
        question: "How can we trust AI generated test cases?",
        answer:
          "Tie each candidate to a requirement or risk, review its assertion and data, run it in a stable environment and examine false positives. Generated text alone is not validated coverage.",
      },
      {
        question: "What data is needed to start?",
        answer:
          "Begin with build and commit IDs, component ownership, test tags and results, defects, environment details and a small set of critical journeys. Consistent links matter more than volume.",
      },
      {
        question: "Does this approach apply to hardware and IoT products?",
        answer:
          "Yes. It can connect device lab runs, firmware builds, wireless or serial protocols, applications, APIs and cloud results. Hardware state and configuration must be recorded with each result.",
      },
      {
        question: "Who makes the final release decision?",
        answer:
          "Accountable people do. AI can summarize evidence and recommend attention, while release policy, exceptions and residual risk acceptance remain visible and governed.",
      },
      {
        question:
          "How is AI based testing different from AI testing tools like Mabl or Testsigma?",
        answer:
          "Tools like Mabl and Testsigma primarily use AI to generate and self-heal individual test scripts for web, mobile and API applications. AI based testing is the broader operating model that connects a code change to risk, coordinates validation across device, firmware, app and cloud layers, and produces auditable release evidence.",
      },
      {
        question:
          "Does AI based testing help with compliance and certification?",
        answer:
          "Indirectly but significantly. A structured evidence model linking requirements, builds, test executions and gate decisions produces the traceable record that standards such as IEC 62304, ISO 26262 and IEC 62443 typically require during an audit. AI does not certify a product; the evidence model underneath it is what makes audits faster to prepare for.",
      },
    ],

    sections: [
      {
        type: "text",
        title: "The quality problem is bigger than test execution",
        paragraphs: [
          "A product change rarely stays inside one component. A firmware update can alter connectivity behaviour, a mobile pairing flow, an API payload and the cloud state seen by a customer. Yet each team may test its own layer, store results in a different tool and report a green status.",
          [
            {
              text: "That reconstruction is costly. Engineers repeatedly interpret requirements, map code changes to tests, reserve lab hardware, classify failures and assemble release evidence. ",
            },
            {
              text: "AI based testing",
              href: "/services/intelligent-quality-engineering",
            },
            {
              text: " becomes useful when it helps the team connect the change to the relevant risks, run dependable checks and explain what the resulting evidence means.",
            },
          ],
        ],
      },

      {
        type: "bullets",
        title:
          "AI Based Testing vs. AI Testing Tools vs. Traditional Automation",
        items: [
          "Traditional test automation executes a fixed, human-written suite reliably and quickly. It does not decide what to test or why.",
          "AI testing tools mainly use AI to generate, maintain and self-heal individual UI or API test scripts, largely for web and mobile applications.",
          "AI based testing is broader: it connects a code change to relevant risk, selects and runs validation across device, connectivity, app, API and cloud layers, and produces defensible release evidence.",
        ],
      },

      {
        type: "text",
        title: "From a code change to a defensible validation plan",
        paragraphs: [
          "Consider a change to Wi-Fi reconnection logic in a connected device. The change may affect a driver, retry timing, mobile status updates and cloud synchronization.",
          "A practical workflow starts by identifying affected components and requirements from the diff, dependency map and prior incidents. It then proposes tests for reconnect after network loss, stale app state, duplicate events, recovery across device variants and cloud consistency.",
          "A change impact service can rank tests by relevance, criticality, historical failures, execution cost and evidence freshness. The recommendation must remain explainable.",
        ],
      },

      {
        type: "text",
        title: "A closer look at change impact and regression selection",
        paragraphs: [
          "Change impact cannot rely on filenames alone. A driver change may affect a shared connectivity service, an app retry sequence and a cloud event contract even if none of those repositories changed.",
          "Test selection should include known failure modes and areas whose coverage is stale, even when the code diff looks small.",
          "If the dependency map is incomplete or the lab lacks a required device, the workflow should flag missing evidence instead of presenting a confident green result.",
        ],
      },

      {
        type: "callout",
        label: "Realistic illustration",
        text: "A fragmented validation process can allow firmware, mobile and cloud teams to each report green while an interaction between those layers still fails in production. Cross-layer, evidence-linked validation is designed to catch these gaps before release.",
      },

      {
        type: "text",
        title: "The foundation is repeatable automation and shared evidence",
        paragraphs: [
          "The test framework must handle device control, flashing, protocol traffic, mobile and web interactions, APIs, cloud checks, test data, recovery and logs as reusable components.",
          "Tests need deterministic setup and assertions. A retry should preserve the first failure, not turn an intermittent defect into an unexplained pass. Device availability, firmware version, environment health and build identity should travel with every result.",
        ],
      },

      {
        type: "image",
        src: "/resources/blogs/ai-based-testing-modern-product-teams/reusable-test-framework.png",
        alt: "Reusable test framework for AI based product testing",
        caption:
          "A reusable framework connects device control, flashing, protocol traffic, applications, APIs, cloud checks, recovery and evidence.",
      },

      {
        type: "text",
        title: "Where This Fits in the Embedded Testing Pyramid",
        paragraphs: [
          [
            {
              text: "Embedded teams commonly structure validation as a pyramid: static analysis and unit tests at the base, integration tests in the middle, and full system tests, including ",
            },
            {
              text: "Hardware-in-the-Loop (HIL) testing",
              href: "/industries/consumer-electronics",
            },
            {
              text: ", at the top.",
            },
          ],
          [
            {
              text: "AI based testing does not replace this pyramid. It decides, for a given change, how much of each layer needs to run, and it is at the system and HIL layer that cross-product, ",
            },
            {
              text: "device-to-cloud validation",
              href: "/industries/smart-home-iot-matter",
            },
            {
              text: " most often exposes failures unit tests cannot see.",
            },
          ],
          "Protocol coverage can include Bluetooth Classic and BLE, Wi-Fi, Zigbee, Z-Wave, Matter, LTE-M, NB-IoT, MQTT and CoAP.",
        ],
      },

      {
        type: "callout",
        label: "Evidence model",
        text: "Requirement or risk → component and commit → build and configuration → test execution → log or trace → defect → gate decision.",
      },

      {
        type: "text",
        title: "Design the evidence model before asking AI to reason over it",
        paragraphs: [
          "A test result is more useful when it is a structured record than when it is only a pass or fail line.",
          "Capture the commit and build artifact, component and feature tags, requirement or risk reference, test version, hardware revision, firmware and application versions, environment, configuration, timestamps, assertion outcome, failure category, raw artifacts and rerun history.",
          "Keep raw evidence immutable or versioned and normalize a small vocabulary for components, test types, environments and failure classes.",
        ],
      },

      {
        type: "text",
        title: "AI agents can coordinate work with defined boundaries",
        paragraphs: [
          "Focused agents can assist at different points in the workflow. A requirement agent can flag ambiguity, an impact agent can map changed code to product areas, an orchestration agent can run approved suites, a failure agent can group related errors, and a reporting agent can produce audience-specific summaries.",
          "Each action needs constrained tool scope, recorded inputs, visible rationale and a human review path. Generated scripts should be reviewed before they become trusted assertions.",
        ],
      },

      {
        type: "text",
        title: "Orchestrate execution without losing control",
        paragraphs: [
          "An agent workflow can turn an approved validation plan into executable steps, but each step needs a contract.",
          "Timeouts, missing hardware and partial runs should be explicit states rather than generic failures. Destructive actions and configuration changes should be scoped by environment.",
        ],
      },

      {
        type: "text",
        title: "Validate the product journey across layers",
        paragraphs: [
          "For a connected product, an end-to-end check might flash an approved firmware build, establish BLE or Wi-Fi, perform pairing in a mobile app, issue a device command, confirm API and cloud state, and correlate identifiers across device and service logs.",
          "Individual component checks provide fast feedback and localize defects; the journey check shows whether the integrated behaviour reaches the user.",
        ],
      },

      {
        type: "image",
        src: "/resources/blogs/ai-based-testing-modern-product-teams/connected-product-validation.png",
        alt: "Connected product validation across device, connectivity, mobile, API and cloud layers",
        caption:
          "Connected-product validation combines evidence across the complete product journey.",
      },

      {
        type: "text",
        title: "Investigate failures with correlated signals",
        paragraphs: [
          "One failed end-to-end scenario can produce many symptoms across devices, applications, APIs and cloud services.",
          "A useful triage service groups events by build, configuration and correlation ID, compares the first meaningful error with healthy runs and proposes a likely fault boundary.",
          "Engineers should verify the hypothesis before a defect is assigned or a rerun is accepted, while preserving the first-failure artifacts.",
        ],
      },

      {
        type: "text",
        title: "Turn quality data into release decisions",
        paragraphs: [
          "A useful dashboard answers five questions: What changed? What was validated? What failed? What risk remains? Who owns the next action?",
          "AI can group failures and summarize changes, but the underlying result and gate rule must remain accessible.",
        ],
      },

      {
        type: "text",
        title: "Make the dashboard actionable at each gate",
        paragraphs: [
          "A release view should show critical journeys by build and configuration, their latest reliable result, outstanding defects, gate exceptions and evidence age.",
          "Different views can serve engineers, QA leads, release leads and executives, but they should always use the same underlying facts.",
        ],
      },

      {
        type: "text",
        title: "Compliance, Certification and Safety Standards",
        paragraphs: [
          "For embedded, medical, automotive and industrial products, validation evidence can also support audit and compliance workflows.",
          "A structured evidence model linking requirements, builds, test execution and gate decisions creates a traceable record that can make compliance reviews easier to prepare for.",
        ],
      },

      {
        type: "text",
        title: "A phased route from pilot to production",
        paragraphs: [
          "A small pilot can start with one product journey and one recurring pain point. First baseline the manual steps and create a traceable inventory of components, tests, environments and defects.",
          "Then stabilize execution, connect results to a shared evidence model and dashboard, and only after that trial AI-assisted impact analysis or triage alongside the existing workflow.",
        ],
      },

      {
        type: "bullets",
        title: "Who This Is For",
        items: [
          "VPs of Engineering and Heads of Quality accountable for release confidence.",
          "IoT and embedded Product Managers coordinating firmware, mobile and cloud teams.",
          "QA and Test Engineering leads managing device labs, flaky tests and growing regression suites.",
          "Release and DevOps leads responsible for gate decisions, audit evidence and rollback readiness.",
        ],
      },

      {
        type: "text",
        title: "Where Elevro fits",
        paragraphs: [
          [
            {
              text: "Elevro helps product teams build the enablement system around validation: reusable automation frameworks, device and protocol test integration, ",
            },
            {
              text: "CI/CD and quality gates",
              href: "/resources/blogs/building-cicd-quality-gates-for-embedded-sdks",
            },
            {
              text: ", lab orchestration, dashboards, release evidence and bounded AI workflows.",
            },
          ],
          "The outcome is straightforward: every significant product change should lead to a reasoned validation plan, trustworthy execution and a release decision that the team can explain.",
        ],
      },

      {
        type: "bullets",
        title: "Glossary",
        items: [
          "Change Impact Analysis — mapping a code or configuration change to the product areas, requirements and tests it could affect.",
          "Evidence Model — a structured record linking a requirement or risk to the commit, build, test execution, logs, defects and final gate decision.",
          "Hardware-in-the-Loop Testing — running firmware on real or emulated hardware against simulated real-world inputs.",
          "Testing Pyramid — static analysis and unit tests at the base, integration tests in the middle, and system or HIL tests at the top.",
          "Correlation ID — an identifier connecting device, app and cloud logs generated by one scenario.",
          "Flaky Test — a test whose result changes between runs without a code change.",
          "Progressive Gates — staged quality checks that become broader as a build moves toward production.",
        ],
      },

      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Is AI based testing a replacement for test automation?",
            answer:
              "No. Automation executes repeatable checks and captures evidence. AI helps plan, prioritize, maintain and interpret that work; it depends on reliable tests and environments.",
          },
          {
            question: "Can AI predict which changes will cause defects?",
            answer:
              "A model can estimate elevated risk from change history, complexity, ownership and prior failures. It cannot guarantee a defect or prove a change is safe.",
          },
          {
            question:
              "Will risk based selection remove the need for full regression?",
            answer:
              "No. Teams still need broader regression at planned intervals and for critical releases, unfamiliar changes or low model confidence.",
          },
          {
            question: "How can we trust AI generated test cases?",
            answer:
              "Tie each candidate to a requirement or risk, review its assertion and data, run it in a stable environment and examine false positives.",
          },
          {
            question: "What data is needed to start?",
            answer:
              "Begin with build and commit IDs, component ownership, test tags and results, defects, environment details and a small set of critical journeys.",
          },
          {
            question: "Does this approach apply to hardware and IoT products?",
            answer:
              "Yes. It can connect device lab runs, firmware builds, wireless or serial protocols, applications, APIs and cloud results.",
          },
          {
            question: "Who makes the final release decision?",
            answer:
              "Accountable people do. AI can summarize evidence and recommend attention, while release policy, exceptions and residual risk acceptance remain governed.",
          },
          {
            question:
              "How is AI based testing different from AI testing tools like Mabl or Testsigma?",
            answer:
              "AI testing tools primarily automate individual test scripts. AI based testing is the broader operating model connecting changes to risk, validation and auditable release evidence.",
          },
          {
            question:
              "Does AI based testing help with compliance and certification?",
            answer:
              "Indirectly but significantly. The structured evidence model beneath the AI creates the traceable records needed to support audit preparation.",
          },
        ],
      },
    ],
  },
];

export function getResourceDetail(type: string, slug: string) {
  return resourceDetails.find(
    (resource) => resource.type === type && resource.slug === slug,
  );
}
