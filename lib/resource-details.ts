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
      type: "group";
      title: RichText;
      sections: ResourceSection[];
    }
  | {
      type: "text";
      title?: RichText;
      paragraphs: RichText[];
    }
  | {
      type: "callout";
      label: string;
      text: RichText;
    }
  | {
      type: "bullets";
      title?: RichText;
      items: RichText[];
    }
  | {
      type: "steps";
      title?: RichText;
      items: RichText[];
    }
  | {
      type: "status";
      title?: RichText;
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
      aspectRatio?: string;
    }
  | {
      type: "faq";
      title?: RichText;
      items: ResourceFaq[];
    }
  | {
      type: "repeatable-lab";
    }
  | {
      type: "release-decision";
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
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    role: string;
    url: string;
    bio: string[];
    linkedinUrl?: string;
  };
  showBreadcrumbs?: boolean;
  answerSummary?: {
    definition: string;
    takeaways: string[];
  };
  relatedPostSlugs?: string[];
  readTime: string;

  heroImage?: string;
  heroImageAlt?: string;
  heroImageAspectRatio?: string;
  socialImage?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  faqs?: ResourceFaq[];
  sections: ResourceSection[];
};
export const resourceDetails: ResourceDetail[] = [
  {
    "type": "blogs",
    "slug": "how-generative-ai-is-transforming-software-quality-assurance",
    "category": "AI & Quality Engineering",
    "title": "How Generative AI Is Transforming Software Quality Assurance",
    "excerpt": "From test generation and synthetic IoT data to agentic QA, AI-code validation and governed end-to-end product testing.",
    "metaTitle": "How Generative AI Is Transforming Software QA | Elevro",
    "metaDescription": "How generative AI is transforming software quality assurance — from test generation and self-healing scripts to agentic QA, AI-code validation, and governance.",
    "keywords": [
      "how generative AI is transforming software quality assurance",
      "generative AI in software testing",
      "agentic QA",
      "AI test case generation"
    ],
    "publishedAt": "9 October 2026",
    "datePublished": "2026-10-09",
    "readTime": "12 min read",
    "heroImage": "/resources/blogs/generative-ai-quality-assurance/connected-product-hero.webp",
    "heroImageAlt": "Generative AI supports candidate tests across firmware, mobile, cloud and CI/CD for a connected smart-light product.",
    "heroImageAspectRatio": "1672 / 941",
    "socialImage": {
      "url": "/resources/blogs/generative-ai-quality-assurance/connected-product-hero.webp",
      "width": 1672,
      "height": 941,
      "alt": "Generative AI supports candidate tests across firmware, mobile, cloud and CI/CD for a connected smart-light product."
    },
    "faqs": [
      {
        "question": "What is generative AI in software testing?",
        "answer": "Generative AI in software testing uses large language models to create test cases, test data and scripts from requirements, repair broken scripts automatically and triage failures. Human testers still review the output and make release decisions."
      },
      {
        "question": "Which QA tasks can generative AI automate?",
        "answer": "Generative AI can assist with test case and script generation, synthetic test data creation, test maintenance, exploratory scenario suggestions, regression prioritization, failure triage and test reporting. Teams should review generated artifacts and proposed repairs, validate results against requirements and product behavior, and retain human control over release decisions."
      },
      {
        "question": "Is generative AI replacing QA testers?",
        "answer": "No. Generative AI accelerates test creation, data generation and maintenance, but it still depends on human judgment for business context, exploratory testing and final release decisions. QA roles are shifting toward strategy, oversight and AI supervision rather than disappearing."
      },
      {
        "question": "How does generative AI improve test coverage?",
        "answer": "It generates more test scenarios, including edge cases and unusual input combinations, than most teams can realistically write by hand under normal release pressure, and it can continuously propose new scenarios as the application changes."
      },
      {
        "question": "What is agentic QA?",
        "answer": "Agentic QA refers to AI agents that autonomously analyze code changes, identify coverage gaps, and generate and run tests to close them, with QA professionals overseeing quality objectives and reviewing outcomes rather than manually triggering each step."
      },
      {
        "question": "Can generative AI test AI-generated code?",
        "answer": "Yes, and increasingly it needs to. As a meaningful share of AI-generated code requires correction before release, QA processes are expanding to include dedicated validation of AI-written code, not just AI-assisted testing of human-written code."
      },
      {
        "question": "What's the biggest risk of relying on generative AI in testing?",
        "answer": "Hallucinated outputs, test scripts or data that appear correct but are fundamentally flawed, are the most common and most costly risk, since they can produce a false sense of coverage. This is why human review of AI-generated test artifacts remains essential, not optional."
      },
      {
        "question": "Do we need new tools, or can generative AI work with our existing test automation?",
        "answer": "Most generative AI capabilities, including test generation and self-healing scripts, are designed to layer on top of existing automation frameworks rather than replace them outright. The right starting point is usually the specific bottleneck causing the most pain today, not a full platform migration."
      }
    ],
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          [
            {
              "text": "Software release cycles have compressed from months to days, and in many quality engineering pipelines, to hours. "
            },
            {
              "text": "Quality assurance teams",
              "href": "/services/intelligent-quality-engineering"
            },
            {
              "text": " are being asked to test more surface area, across more devices, configurations and integrations, in a fraction of the time they had five years ago. Generative AI has moved from an experimental add-on to a practical part of how that demand gets met. It is not a replacement for testers, and it is not a single tool you install. It is a set of capabilities, test case generation, synthetic data creation, self-healing scripts, and increasingly, autonomous agents, that change what a QA team spends its time on."
            }
          ],
          [
            {
              "text": "This piece covers what generative AI is actually doing inside software testing today, where it falls short, the governance questions teams need to answer before relying on it, and the emerging shift toward agentic QA that is defining 2026. For a broader look at how this fits into a full quality operating model, our earlier piece on "
            },
            {
              "text": "AI based testing for modern product teams",
              "href": "/resources/blogs/ai-based-testing-for-modern-product-teams"
            },
            {
              "text": " covers the change-impact and evidence side of this picture in more depth."
            }
          ]
        ]
      },
      {
        "type": "text",
        "title": "From Manual Testing to Agentic QA: A Short History",
        "paragraphs": [
          "QA has moved through four fairly distinct phases. Manual testing, where every scenario was scripted and executed by hand. Test automation, where repeatable scripts replaced manual execution but still required manual authorship. AI-assisted testing, roughly 2019 to 2023, where machine learning began powering self-healing scripts and smarter test prioritization, in tools like early versions of Testim and Mabl. And now, generative AI testing, where large language models generate test cases, test data and, increasingly, entire test strategies from plain-language requirements.",
          [
            {
              "text": "The scale of this shift is reflected in the industry's own data: "
            },
            {
              "text": "Capgemini's World Quality Report 2025-26",
              "href": "https://www.capgemini.com/insights/research-library/world-quality-report-2025-26/"
            },
            {
              "text": " ranked generative AI as the leading skill for quality engineers (63%), followed by core quality engineering skills (60%). That is a meaningful signal that QA leaders need to develop AI fluency alongside strong testing fundamentals."
            }
          ]
        ]
      },
      {
        "type": "group",
        "title": "Where Generative AI Is Already Transforming Software Testing",
        "sections": [
          {
            "type": "text",
            "paragraphs": [
              "Several capabilities have moved well past the proof-of-concept stage and are now in regular production use across QA teams."
            ]
          },
          {
            "type": "text",
            "title": "Automatic Test Case Generation From Requirements",
            "paragraphs": [
              [
                {
                  "text": "Generative AI models can read requirements documents, user stories, system logs or even recorded user sessions, and produce structured test cases directly from them. This removes a large share of the manual scripting effort that traditionally consumed the first days of any testing cycle, and it tends to surface scenarios a time-pressured tester might not have written by hand. The output still needs human review before it becomes trusted coverage, but the starting point is dramatically faster than a blank test plan. Our "
                },
                {
                  "text": "Intelligent Quality Engineering",
                  "href": "/services/intelligent-quality-engineering"
                },
                {
                  "text": " practice builds this review step into the workflow by design, rather than treating generated tests as automatically trustworthy."
                }
              ]
            ]
          },
          {
            "type": "image",
            "src": "/resources/blogs/generative-ai-quality-assurance/requirements-to-product-tests.webp",
            "alt": "A connected-product requirement becomes candidate firmware, connectivity, mobile and API checks.",
            "aspectRatio": "1672 / 941",
            "caption": "Candidate checks connect a product requirement with firmware, connectivity, mobile and API behavior."
          },
          {
            "type": "text",
            "title": "Realistic, Privacy-Safe Test Data Creation",
            "paragraphs": [
              [
                {
                  "text": "Generative models can synthesize data that statistically resembles production data, realistic names, transaction patterns, device telemetry, without exposing actual customer records. This matters most in regulated sectors: our work in "
                },
                {
                  "text": "healthcare and medtech",
                  "href": "/industries/healthcare-medtech"
                },
                {
                  "text": " and other compliance-sensitive industries depends on being able to test thoroughly without ever touching real patient or financial data."
                }
              ]
            ]
          },
          {
            "type": "image",
            "src": "/resources/blogs/generative-ai-quality-assurance/synthetic-iot-telemetry.webp",
            "alt": "Synthetic device telemetry and simulated IoT devices exercise mobile and cloud services in staging.",
            "aspectRatio": "1672 / 941",
            "caption": "Synthetic telemetry and simulated devices extend validation across staging, mobile and cloud services."
          },
          {
            "type": "text",
            "title": "Self-Healing Test Scripts and Smarter Maintenance",
            "paragraphs": [
              "One of the most labour-intensive parts of test automation has always been maintenance: a UI element moves, a locator changes, and dozens of scripts break overnight. AI-based locators and pattern recognition now let scripts adapt automatically when an element moves, a label changes or a layout updates, rather than failing outright and waiting for a human fix."
            ]
          },
          {
            "type": "image",
            "src": "/resources/blogs/generative-ai-quality-assurance/mobile-device-test-maintenance.webp",
            "alt": "A proposed mobile locator repair preserves original evidence and checks actual smart-light and cloud state.",
            "aspectRatio": "1672 / 941",
            "caption": "A proposed locator repair retains original evidence and verifies the actual device and cloud state."
          },
          {
            "type": "text",
            "title": "Exploratory Testing and Edge Case Discovery",
            "paragraphs": [
              "Even experienced testers develop blind spots after enough time on one product. Generative AI can propose alternative input combinations, unusual environmental conditions or rarely-exercised paths through an application, prompts a human reviewer can accept, modify or discard, rather than coverage that silently replaces exploratory judgment."
            ]
          },
          {
            "type": "text",
            "title": "Smarter, Risk-Based Regression Testing",
            "paragraphs": [
              [
                {
                  "text": "Rather than re-running an entire suite on every change, AI can rank regression tests by historical failure rate, code change proximity and business criticality, so the highest-risk areas get the deepest scrutiny first. This is especially valuable inside fast-moving "
                },
                {
                  "text": "CI/CD pipelines",
                  "href": "/resources/blogs/building-cicd-quality-gates-for-embedded-sdks"
                },
                {
                  "text": ", where feedback speed and coverage depth are constantly in tension."
                }
              ]
            ]
          },
          {
            "type": "text",
            "title": "AI-Assisted Debugging and Root Cause Analysis",
            "paragraphs": [
              "When a test fails, generative AI can scan logs, stack traces and recent commits to propose a likely cause, a timeout, a stale test, an actual regression, before a human spends an hour tracing it manually. This does not replace the final judgment call, but it meaningfully shortens the path to one."
            ]
          },
          {
            "type": "text",
            "title": "Continuous Testing Inside CI/CD Pipelines",
            "paragraphs": [
              [
                {
                  "text": "Generative AI enables real-time testing within DevOps and CI/CD workflows: new builds can be tested automatically on check-in, with fast feedback returned before a developer has moved on to the next task. Our piece on "
                },
                {
                  "text": "building CI/CD quality gates for embedded SDKs",
                  "href": "/resources/blogs/building-cicd-quality-gates-for-embedded-sdks"
                },
                {
                  "text": " goes deeper into how this works specifically for firmware and embedded build pipelines, where hardware dependencies add an extra layer of complexity most generic CI/CD advice ignores."
                }
              ]
            ]
          }
        ]
      },
      {
        "type": "text",
        "title": "The Rise of Agentic QA: From Assistant to Autonomous Teammate",
        "paragraphs": [
          "2026 marks a genuine inflection point in how this technology is used. Earlier generative AI tools functioned as assistants: a developer or tester prompted the model and reviewed its output. Agentic QA is different. Autonomous agents now continuously analyze code changes and existing coverage, identify testing gaps on their own, and generate and execute tests to close them, with minimal human prompting for each individual task.",
          "This is shifting what QA leaders are actually responsible for. Where QA teams once primarily wrote scripts and ran tests, the emerging model has them defining quality objectives, overseeing AI-generated results, and ensuring automated decisions stay aligned with business priorities, closer to orchestrating a system than executing it line by line. New roles are emerging to formalize this shift: AI QA Engineer (focused on testing AI and ML systems themselves), Responsible AI Tester (focused on ethical deployment), and Quality Engineer for AI Systems."
        ]
      },
      {
        "type": "image",
        "src": "/resources/blogs/generative-ai-quality-assurance/agentic-qa-cicd-device-lab.webp",
        "alt": "Agentic QA connects build, flashing, physical device tests, mobile automation, API checks and release evidence.",
        "aspectRatio": "1672 / 941",
        "caption": "CI/CD builds feed controlled device, mobile and API tests with evidence tied to the same build."
      },
      {
        "type": "text",
        "title": "A New Challenge: Who Tests the AI That's Writing the Code?",
        "paragraphs": [
          [
            {
              "text": "As generative AI increasingly writes application code as well as tests, QA's scope is expanding to include validating AI-generated code before it ships. "
            },
            {
              "text": "Tricentis' 2026 Quality Transformation Report",
              "href": "https://www.tricentis.com/news/2026-quality-transformation-report"
            },
            {
              "text": " found that 60% of surveyed organizations deploy untested code to production. Its survey also found that 30% cited the volume of AI-generated code as a reason for deploying untested code. These findings describe gaps in testing and release control; they do not measure the percentage of AI-generated code that contains defects."
            }
          ],
          "This reframes part of QA's job: testing isn't only about catching bugs introduced by human developers anymore, it is also about catching the specific failure patterns that AI code generation tends to produce, patterns that differ meaningfully from typical human coding mistakes. Edge-case and exploratory testing become more, not less, important in this environment, because an AI model's failure modes are often less predictable than a human developer's."
        ]
      },
      {
        "type": "image",
        "src": "/resources/blogs/generative-ai-quality-assurance/ai-code-product-validation.webp",
        "alt": "AI-generated embedded and integration code is checked against requirements and real device, app and cloud behavior.",
        "aspectRatio": "1672 / 941",
        "caption": "AI-generated code remains a candidate until requirements and real product behavior have been checked."
      },
      {
        "type": "text",
        "title": "Risks and Limitations Teams Need to Plan For",
        "paragraphs": [
          "The opportunities are real, but so are the failure modes, and a pragmatic team plans for both from day one."
        ]
      },
      {
        "type": "bullets",
        "items": [
          "Hallucinated outputs — generative AI can produce scripts or test data that look entirely correct but are fundamentally flawed, which can waste engineering time or, worse, mask a real defect behind a false pass.",
          "Lack of business context — a model may not fully grasp industry regulations, customer expectations or the unwritten business rules a human tester absorbs over time.",
          "Privacy and compliance exposure — a generative AI tool trained on unvetted data can inadvertently expose or misuse sensitive information, with direct implications for GDPR and similar regulations.",
          "Immature tooling — many generative AI QA tools are still early in their maturity curve and may not integrate cleanly with enterprise-grade test management platforms."
        ]
      },
      {
        "type": "text",
        "title": "Why Human Testers Are More Essential Than Ever",
        "paragraphs": [
          "The most effective generative AI testing workflows keep a human firmly in the loop, not as a formality, but because certain capabilities genuinely do not transfer to a model. Exploratory testing draws on intuition and accumulated product experience that a model has no equivalent of. Domain expertise lets a human tester spot a subtle risk a generic model would walk straight past. Contextual decision-making, what matters most to this specific customer, in this specific release, is a judgment call, not a pattern match.",
          "Generative AI functions best as a co-pilot: it extends what a skilled tester can cover, it does not substitute for their judgment."
        ]
      },
      {
        "type": "text",
        "title": "Ethics, Governance and Responsible AI in Testing",
        "paragraphs": [
          [
            {
              "text": "Responsible use of generative AI in QA is not optional, particularly in regulated or safety-relevant sectors such as "
            },
            {
              "text": "automotive and infotainment",
              "href": "/industries/automotive-infotainment"
            },
            {
              "text": " or "
            },
            {
              "text": "smart home and IoT",
              "href": "/industries/smart-home-iot-matter"
            },
            {
              "text": " systems, where a missed defect can have real-world safety consequences, not just a support ticket. A sound governance approach typically includes:"
            }
          ]
        ]
      },
      {
        "type": "bullets",
        "items": [
          "Training QA teams specifically in AI ethics and compliance obligations, not assuming general AI literacy is enough.",
          "Embedding audit trails for every AI-driven test decision, so a disputed result can be traced back to its source.",
          "Using only vetted, secure AI tools that meet an organization's standards for reliability and data privacy, rather than whichever tool a team adopts informally."
        ]
      },
      {
        "type": "text",
        "title": "Popular Generative AI Tools Used in QA Today",
        "paragraphs": [
          "The current tooling landscape spans a range of focus areas, and most mature QA teams combine two or three rather than standardizing on one:"
        ]
      },
      {
        "type": "bullets",
        "items": [
          "BrowserStack — test case generation and management, with CI/CD-friendly automation.",
          "Applitools — AI-driven visual UI verification across frameworks like Cypress and Selenium.",
          "Mabl and Testsigma — low-code AI-powered test automation for web, mobile and API testing.",
          "Functionize — machine-learning-driven test creation and execution in cloud-based environments.",
          "Diffblue — AI-generated unit tests specifically for Java applications.",
          "LambdaTest — cloud-based cross-browser testing integrated with major CI/CD tools."
        ]
      },
      {
        "type": "text",
        "title": "How to Start Adopting Generative AI in Your QA Process",
        "paragraphs": [
          "Teams that adopt this well tend to follow a similar, deliberately unglamorous sequence rather than attempting a full rollout at once."
        ]
      },
      {
        "type": "bullets",
        "items": [
          "Start with one high-friction, well-understood problem — regression test maintenance or test data creation are common first targets, since the pain is well understood and the risk of a bad AI output is relatively contained.",
          "Run the AI-assisted workflow alongside the existing manual process for a defined period, not as an immediate replacement, so output quality can be compared directly.",
          "Review every AI recommendation against engineering judgment early on: which tests were genuinely useful, which added noise, which missed something a human would have caught.",
          "Define a clear human-review threshold and a rollback path before expanding an agent's autonomy to trigger more of the pipeline on its own.",
          "Expand gradually from one change type or module to broader coverage, once the team has enough evidence to trust the pattern, not just the promise."
        ]
      },
      {
        "type": "text",
        "title": "How Elevro Approaches Generative AI in Quality Engineering",
        "paragraphs": [
          [
            {
              "text": "Elevro's "
            },
            {
              "text": "Intelligent Quality Engineering",
              "href": "/services/intelligent-quality-engineering"
            },
            {
              "text": " practice is built around the same principle this piece has argued throughout: generative AI should extend what a strong QA team can do, not replace the judgment that makes testing trustworthy in the first place. This spans reusable automation frameworks, AI-assisted test generation and triage, and the evidence and governance layer that makes AI-driven decisions auditable rather than opaque."
            }
          ],
          [
            {
              "text": "This sits alongside our broader "
            },
            {
              "text": "Artificial Intelligence",
              "href": "/services/artificial-intelligence"
            },
            {
              "text": " and "
            },
            {
              "text": "Digital Engineering",
              "href": "/services/digital-engineering"
            },
            {
              "text": " practices, and extends into regulated and hardware-dependent sectors through our "
            },
            {
              "text": "Consumer Electronics",
              "href": "/industries/consumer-electronics"
            },
            {
              "text": " and "
            },
            {
              "text": "Cloud & SaaS Platforms",
              "href": "/industries/cloud-saas-platforms"
            },
            {
              "text": " industry work. For a closer look at the kind of outcomes this produces in practice, our "
            },
            {
              "text": "Smart Audio Device Test Automation case study",
              "href": "/resources/case-studies#smart-audio-device-test-automation"
            },
            {
              "text": " covers validation across audio interfaces, wireless connectivity, voice assistants, firmware and APIs."
            }
          ]
        ]
      },
      {
        "type": "image",
        "src": "/resources/blogs/generative-ai-quality-assurance/connected-audio-end-to-end-validation.webp",
        "alt": "End-to-end connected-audio validation combines embedded firmware, product behavior, wireless, mobile and cloud APIs.",
        "aspectRatio": "1672 / 941",
        "caption": "Reusable automation connects embedded firmware, audio behavior, wireless, mobile and cloud validation."
      },
      {
        "type": "faq",
        "title": "Frequently Asked Questions",
        "items": [
          {
            "question": "What is generative AI in software testing?",
            "answer": "Generative AI in software testing uses large language models to create test cases, test data and scripts from requirements, repair broken scripts automatically and triage failures. Human testers still review the output and make release decisions."
          },
          {
            "question": "Which QA tasks can generative AI automate?",
            "answer": "Generative AI can assist with test case and script generation, synthetic test data creation, test maintenance, exploratory scenario suggestions, regression prioritization, failure triage and test reporting. Teams should review generated artifacts and proposed repairs, validate results against requirements and product behavior, and retain human control over release decisions."
          },
          {
            "question": "Is generative AI replacing QA testers?",
            "answer": "No. Generative AI accelerates test creation, data generation and maintenance, but it still depends on human judgment for business context, exploratory testing and final release decisions. QA roles are shifting toward strategy, oversight and AI supervision rather than disappearing."
          },
          {
            "question": "How does generative AI improve test coverage?",
            "answer": "It generates more test scenarios, including edge cases and unusual input combinations, than most teams can realistically write by hand under normal release pressure, and it can continuously propose new scenarios as the application changes."
          },
          {
            "question": "What is agentic QA?",
            "answer": "Agentic QA refers to AI agents that autonomously analyze code changes, identify coverage gaps, and generate and run tests to close them, with QA professionals overseeing quality objectives and reviewing outcomes rather than manually triggering each step."
          },
          {
            "question": "Can generative AI test AI-generated code?",
            "answer": "Yes, and increasingly it needs to. As a meaningful share of AI-generated code requires correction before release, QA processes are expanding to include dedicated validation of AI-written code, not just AI-assisted testing of human-written code."
          },
          {
            "question": "What's the biggest risk of relying on generative AI in testing?",
            "answer": "Hallucinated outputs, test scripts or data that appear correct but are fundamentally flawed, are the most common and most costly risk, since they can produce a false sense of coverage. This is why human review of AI-generated test artifacts remains essential, not optional."
          },
          {
            "question": "Do we need new tools, or can generative AI work with our existing test automation?",
            "answer": "Most generative AI capabilities, including test generation and self-healing scripts, are designed to layer on top of existing automation frameworks rather than replace them outright. The right starting point is usually the specific bottleneck causing the most pain today, not a full platform migration."
          }
        ]
      },
      {
        "type": "text",
        "title": "Where to Go From Here",
        "paragraphs": [
          [
            {
              "text": "Generative AI is already changing what a modern QA team spends its time on, from writing every test by hand to supervising systems that generate, run and triage a growing share of them. The teams getting the most value from it are the ones treating it as a capability to govern carefully, not a tool to switch on and forget. If you are weighing where to start, our "
            },
            {
              "text": "Intelligent Quality Engineering",
              "href": "/services/intelligent-quality-engineering"
            },
            {
              "text": " team can help map the right starting point for your pipeline — "
            },
            {
              "text": "get in touch",
              "href": "/contact-us"
            },
            {
              "text": " to talk it through."
            }
          ]
        ]
      }
    ],
    "dateModified": "2026-11-17T13:39:29+05:30",
    "author": {
      "name": "Rahul Vala",
      "role": "Founder & CEO, Elevro Solutions",
      "url": "/resources/blogs/how-generative-ai-is-transforming-software-quality-assurance#author",
      "bio": [
        "Rahul Vala is the Founder & CEO of Elevro Solutions and an Automation Architect with 14+ years of experience in quality engineering, test automation and CI/CD.",
        "His work spans embedded systems, IoT, mobile and cloud platforms, with a focus on dependable automation, product validation and release confidence."
      ]
    },
    "showBreadcrumbs": true,
    "answerSummary": {
      "definition": "Generative AI in software testing uses large language models to create test cases, test data and scripts from requirements, repair broken scripts automatically and triage failures. Human testers still review the output and make release decisions.",
      "takeaways": [
        "Generate candidate test cases and scripts from requirements, then review them against product behavior.",
        "Create synthetic test data for device, mobile, API and cloud validation without relying on customer records.",
        "Reduce maintenance and triage effort with proposed script repairs and failure analysis.",
        "Use human review, traceable evidence and CI/CD quality gates to govern release decisions."
      ]
    },
    "relatedPostSlugs": [
      "ai-based-testing-for-modern-product-teams",
      "building-cicd-quality-gates-for-embedded-sdks",
      "protocol-automation-for-connected-devices"
    ]
  },
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
            { text: "For ways to extend these gates with reviewed test generation, synthetic data and failure triage, read our guide to " },
            { text: "generative AI in software testing", href: "/resources/blogs/how-generative-ai-is-transforming-software-quality-assurance" },
            { text: "." },
          ],

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

    slug: "protocol-automation-for-connected-devices",

    category: "Connected Device Quality Engineering",

    title: "Protocol Automation for Connected Devices",

    excerpt:
      "How to validate communication, product behaviour and recovery across wireless and serial interfaces.",

    metaTitle: "Protocol Automation for Connected Devices | Elevro",

    metaDescription:
      "Learn how protocol automation validates BLE, Wi-Fi, MQTT, Zigbee, UART, I2C, SPI, CAN and Modbus across connected device journeys.",

    keywords: [
      "protocol automation",
      "connected device testing",
      "IoT protocol testing",
      "BLE automation testing",
      "Wi-Fi testing automation",
      "MQTT testing",
      "embedded systems protocol testing",
      "serial interface testing",
    ],

    // The client document doesn't specify a publication date.
    // Change this if they provide an exact one.
    publishedAt: "October 2026",

    // ~4,300 words in the supplied document.
    readTime: "20 min read",

    faqs: [
      {
        question: "Is a successful connection enough to pass a protocol test?",
        answer:
          "No. Validate identity, permitted access, message meaning, resulting product action, visible state and recovery. A link can be healthy while the workflow is wrong.",
      },
      {
        question: "Should every protocol use the same test cases?",
        answer:
          "Use a common scenario and evidence structure, then apply protocol-specific assertions. BLE subscriptions, SPI timing and Modbus exception responses have different semantics.",
      },
      {
        question: "How do we test unreliable wireless conditions?",
        answer:
          "Control one variable at a time, such as signal, network availability or gateway restart. Capture timing and state before, during and after the interruption, including retries and duplicates.",
      },
      {
        question: "When should we use a simulator instead of real hardware?",
        answer:
          "Use simulators for fast, repeatable parser and integration checks. Use real devices for radio, electrical, timing, power and cross-device behaviour, especially before release.",
      },
      {
        question: "What is the minimum useful evidence for a failed run?",
        answer:
          "Keep the build and configuration, exact test step, timestamps, raw protocol trace, device and service logs, expected and actual state, and any rerun history.",
      },
      {
        question:
          "Can iPerf3 prove that a device meets its Wi-Fi performance target?",
        answer:
          "iPerf3 shows connection speed when the test traffic passes through the device. Repeat it in realistic locations, then check whether the product's actual tasks also finish promptly and reliably.",
      },
      {
        question: "How should an AT parser handle unsolicited events?",
        answer:
          "Timestamp and queue events separately from the active command response. Match command completion to its documented terminal response, then assert the later state transition independently.",
      },
      {
        question: "Can AI help with protocol automation?",
        answer:
          "It can propose impacted scenarios, cluster similar traces and summarize cross-layer evidence. Engineers should review generated assertions and verify the suspected root cause.",
      },
      {
        question: "How do we avoid duplicate actions after reconnecting?",
        answer:
          "Define application-level command identity and idempotency where needed, then test retries and state convergence. Transport acknowledgment alone does not prove exactly-once physical action.",
      },
      {
        question: "What is protocol automation for connected devices?",
        answer:
          "Protocol automation is a repeatable way to control interfaces, execute protocol-specific checks, capture traces, inject failures and verify the resulting product state. For connected products, it should link communication evidence to the device, application, API or cloud outcome rather than treating a successful handshake as the final result.",
      },
      {
        question:
          "Which protocols can be automated in an embedded or IoT test lab?",
        answer:
          "The framework in this article covers wireless and messaging interfaces such as BLE, Wi-Fi, MQTT and Zigbee, as well as UART and AT commands, I2C, SPI, CAN and Modbus. The orchestration can be shared, but each protocol keeps its own timing, addressing, error and recovery assertions.",
      },
    ],

    sections: [
      {
        type: "bullets",
        title:
          "Protocol Automation vs. Protocol Testing vs. End-to-End Connected Device Testing",
        items: [
          "Protocol testing checks whether a specific interface follows its expected communication rules, such as BLE discovery and GATT behaviour, MQTT topics and payloads, UART framing, or Modbus register access.",
          "Protocol automation makes those checks repeatable by controlling setup, sending commands, capturing traces, asserting timing and state, injecting faults, and publishing evidence for every run.",
          "End-to-end connected device testing follows one product action across the protocol path and verifies the resulting physical, application, API or cloud state, including recovery after interruption.",
        ],
      },

      {
        type: "text",
        title: "The problem begins where a protocol test ends",
        paragraphs: [
          "A sensor can acknowledge a command, a gateway can publish a message and an app can show a success toast while the actual product state is wrong. Connected products translate intent across several links, and a local handshake proves only one part of that chain.",

          [
            {
              text: "BLE pairing, Wi-Fi association, MQTT messaging, Zigbee mesh traffic, UART diagnostics, I2C sensors, SPI peripherals, CAN bus controllers and Modbus equipment each have their own timing, addressing and error semantics. ",
            },
            {
              text: "Protocol automation",
              href: "/services/intelligent-quality-engineering",
            },
            {
              text: " should therefore capture both the wire-level exchange and the customer-visible outcome, with enough evidence to locate the failing boundary.",
            },
          ],
        ],
      },

      {
        type: "image",
        src: "/resources/blogs/protocol-automation-connected-devices/protocols-by-product-role.png",
        alt: "Protocols by product role across a connected product architecture",
        caption:
          "Figure 1. Different interfaces serve distinct roles in one connected product; the validation plan follows the product architecture.",
      },

      {
        type: "text",
        title: "Start with a contract for each interface",
        paragraphs: [
          "Before automating a protocol, describe the behaviour the product expects from it: endpoints, identifiers, message schema, units and byte order, command permissions, timing limits, retry policy, failure response and recovery state.",
          "The contract also identifies where an observation can be collected: packet capture, bus trace, device log, gateway log, API response, cloud event or app state.",
          "Every run should record build and firmware versions, hardware revision, interface configuration, topology, environment conditions and timestamps.",
        ],
      },

      {
        type: "image",
        src: "/resources/blogs/protocol-automation-connected-devices/interface-contract.png",
        alt: "Turning connected device behaviour into a testable protocol contract",
        caption:
          "Figure 2. The interface contract connects each request to observable device behaviour and evidence.",
      },

      {
        type: "text",
        title: "Wireless links need more than a successful connection",
        paragraphs: [
          "Wireless tests must include discovery, identity, secure access, data exchange, interruption and reconnection.",
          "Signal strength, channel congestion, access point changes, a sleeping phone or a restarting gateway can alter timing. A useful suite checks whether subscriptions, credentials and state are restored and whether queued work is replayed correctly.",
        ],
      },

      {
        type: "image",
        src: "/resources/blogs/protocol-automation-connected-devices/wireless-validation-bench.png",
        alt: "Wireless validation bench for BLE Wi-Fi and Zigbee",
        caption:
          "Figure 3. Representative wireless validation bench with BLE, Wi-Fi performance and Zigbee test setups.",
      },

      {
        type: "text",
        title: [
          {
            text: "BLE validation",
            href: "/industries/smart-home-iot-matter",
          },
          {
            text: " from GAP to product profile",
          },
        ],
        paragraphs: [
          "A BLE test strategy should separate GAP discovery and identity, connection and security, GATT/ATT data access, and the application profile carried by those services.",
          "Passing a read of one characteristic is insufficient when the product depends on a particular advertising mode, negotiated connection behaviour, subscription state and profile-specific measurement format.",
        ],
      },

      {
        type: "text",
        title: "GAP discovery, identity and security",
        paragraphs: [
          "Validate advertising interval and mode, advertised service UUIDs, device identity, manufacturer data, scan response content and supported active or passive discovery.",
          "For pairing and bonding, test authentication and encryption requirements, persistence across reset, reconnect with stored keys, bond removal and re-pairing.",
          "Do not label a connection secure solely because pairing returned success; verify the protected operation and recorded security state.",
        ],
      },

      {
        type: "text",
        title: "Connection establishment and link behaviour",
        paragraphs: [
          "Measure discovery-to-connect latency, connection success rate, negotiated connection interval, peripheral latency and supervision timeout.",
          "Run repeated connect and disconnect cycles, out-of-range loss, peripheral reset, application restart and reconnect after sleep.",
          "A reconnect is complete only after security, service state and subscriptions required by the user journey have been restored.",
        ],
      },

      {
        type: "text",
        title: "GATT and ATT transaction validation",
        paragraphs: [
          "Discover expected services, characteristic UUIDs, properties, handles and descriptors, and verify mandatory versus optional attributes for the supported firmware version.",
          "Exercise reads, writes, notifications and indications according to supported properties and validate boundary lengths, encoding, ATT errors and changed GATT databases.",
          "Capture HCI or over-the-air traces alongside peripheral logs and app events to locate failures across the radio, GATT client, parser and UI.",
        ],
      },

      {
        type: "text",
        title: "Profile conformance and application meaning",
        paragraphs: [
          "A standardized BLE profile adds rules beyond the generic GATT database, including required characteristics, feature flags, data layout, units and optional-field conditions.",
          "At the product layer, compare decoded values with controlled stimuli or reference instruments and confirm that mobile and cloud systems preserve units, identity, freshness and ordering.",
        ],
      },

      {
        type: "text",
        title: "Wi-Fi and MQTT validate network and message state",
        paragraphs: [
          "Wi-Fi validation should cover provisioning, authentication, address assignment, service reachability, reconnection, network switching and recovery from invalid credentials or unavailable services.",
          "For MQTT, validate topics, authorization, payload schema, publish/subscribe flow, QoS behaviour, retained state, session continuity and duplicate handling.",
          "After interruption, verify the intended offline queue policy, replay order and eventual device-cloud state convergence.",
        ],
      },

      {
        type: "text",
        title: "Measure Wi-Fi performance under controlled conditions",
        paragraphs: [
          "Start from the product's real tasks, such as sending sensor readings, responding to commands, streaming audio or downloading an update.",
          "iPerf3 can measure throughput when traffic actually passes through the device. Repeat tests at realistic locations and network loads while recording signal conditions, drops and reconnects.",
          "Throughput alone is not sufficient; real product actions must still complete promptly and recover reliably.",
        ],
      },

      {
        type: "text",
        title: "Zigbee validates commissioning and mesh behaviour",
        paragraphs: [
          "Cover joining and rejoining, endpoint and cluster discovery, commands, attribute reports, binding or groups where used, and route changes through a mesh.",
          "Test coordinator or router loss and power restoration with the supported topology and verify that application-visible state remains fresh.",
        ],
      },

      {
        type: "bullets",
        title:
          "What Protocol Automation Should Validate Across Connected Devices",
        items: [
          "BLE: discovery, identity, pairing and bonding, GATT/ATT access, notifications or indications, reconnect behaviour and profile meaning.",
          "Wi-Fi: provisioning, authentication, service reachability, performance, network switching and recovery.",
          "MQTT: topics, authorization, payload schema, QoS, retained or queued state, duplicates, replay order and convergence.",
          "Zigbee: joining, clusters, attributes, mesh routing, node loss and application state freshness.",
          "UART and AT commands: framing, command deadlines, terminal responses, unsolicited events, parser resynchronization and restart recovery.",
          "I2C and SPI: addressing or chip select, timing, byte order, transaction integrity and peripheral readiness.",
          "CAN and Modbus: identifier or register mapping, freshness, exceptions, timeout handling, bus behaviour and final equipment state.",
        ],
      },

      {
        type: "text",
        title: "Board and field interfaces need their own error models",
        paragraphs: [
          [
            {
              text: "A reusable ",
            },
            {
              text: "automation framework",
              href: "/services/intelligent-quality-engineering",
            },
            {
              text: " can expose a common test language while keeping electrical setup and protocol semantics in separate adapters.",
            },
          ],
          "A sensor register read, a full-duplex SPI transaction and a CAN frame must not be treated as equivalent simply because each returns bytes.",
        ],
      },

      {
        type: "image",
        src: "/resources/blogs/protocol-automation-connected-devices/board-field-interface-testing.png",
        alt: "UART I2C SPI CAN and Modbus automated protocol test setups",
        caption:
          "Figure 4. Representative UART, I2C/SPI, CAN and Modbus interface test setups.",
      },

      {
        type: "text",
        title: "UART and AT command interfaces",
        paragraphs: [
          "For UART, verify baud rate, framing and flow control, command delimiters, echo policy, response parsing, unsolicited messages and timeout behaviour.",
          "Exercise malformed commands, partial frames, burst traffic, reset during a transaction and port reopening. Preserve the raw byte stream alongside parsed results.",
        ],
      },

      {
        type: "text",
        title: "Automate BLE and Wi-Fi AT command workflows",
        paragraphs: [
          "An AT interface is a command and event stream, not a simple request-response function. The harness needs a serial transport layer, command scheduler and parser that separates echo, data lines, terminal responses, prompts and unsolicited result codes.",
          "For Wi-Fi modules, validate responsiveness, firmware identity, station mode, access-point connection, addressing, sockets, data transfer and recovery from invalid credentials, DHCP, DNS, peer-close or network-loss conditions.",
          "For BLE AT firmware, validate role initialization, scanning, peer connection, GATT discovery, reads, writes, subscriptions and reconnection behaviour.",
        ],
      },

      {
        type: "text",
        title: "I2C and SPI peripherals",
        paragraphs: [
          "For I2C, test addressing, register access, ACK/NACK handling, timeout, bus recovery and interpretation of multi-byte values.",
          "For SPI, verify chip select, clock rate, polarity and phase, transaction length, byte order and duplex mode.",
          "Compare sensor values against controlled physical or simulated stimuli rather than merely checking for nonempty responses.",
        ],
      },

      {
        type: "text",
        title: "CAN bus and Modbus equipment",
        paragraphs: [
          "For CAN, validate identifier filtering, payload decoding, periodic messages, command priority, timeout, stale-signal handling and recovery from relevant node or bus faults.",
          "For Modbus, verify server selection, function code, register address, data type, scaling and byte or word order, and distinguish valid exception responses from timeout or corruption.",
          "A register write should be confirmed with a subsequent read or independent equipment observation.",
        ],
      },

      {
        type: "callout",
        label: "Realistic illustration",
        text: "A passing MQTT publish, Wi-Fi transaction and local interface exchange can all appear green while the complete product still fails during recovery. Protocol automation therefore needs shared command identity, timestamps, raw traces and final-state assertions.",
      },

      {
        type: "text",
        title: "Build one end to end scenario from request to recovery",
        paragraphs: [
          "A connected environmental controller may receive a target temperature from a mobile app, pass it through an API and MQTT gateway, apply it locally, and confirm the result through an I2C sensor.",
          "The test should follow one command ID through the entire journey and confirm that device, cloud and app state converge within the agreed time.",
          "Interrupt Wi-Fi during the journey and verify whether the action occurred, whether retries are safe and whether duplicate actions are prevented.",
        ],
      },

      {
        type: "image",
        src: "/resources/blogs/protocol-automation-connected-devices/communication-outcome-journey.png",
        alt: "Communication to product outcome and recovery validation journey",
        caption:
          "Figure 5. One scenario follows intent through communication and action, then validates the visible outcome and recovery.",
      },

      {
        type: "text",
        title: "Design a lab that makes faults repeatable",
        paragraphs: [
          "A controlled lab needs device identity and reservation, programmable power or reset, network control, protocol sniffers or bus analysers, safe sensor or actuator simulation and time-synchronized logs.",
          "Fault injection should be deliberate and bounded. Examples include dropping packets, weakening connectivity, restarting a gateway, disconnecting a serial adapter, delaying responses or making a bus node unavailable.",
          "Preserve first-failure artifacts before automated retries modify the system.",
        ],
      },

      {
        type: "repeatable-lab",
      },

      {
        type: "text",
        title: "Connect protocol evidence to CI and release decisions",
        paragraphs: [
          "Fast parser, schema and adapter checks can run on relevant changes. Integration jobs can then exercise selected devices or simulators and affected protocol paths.",
          "Scheduled suites cover longer wireless interruptions, mesh topologies, bus load and hardware variants, while release validation covers representative journeys, recovery and security boundaries.",
          "Selection should remain traceable to changed components, requirements, prior defects and known risk.",
        ],
      },

      {
        type: "release-decision",
      },

      {
        type: "bullets",
        title: "Glossary",
        items: [
          "Protocol Automation — repeatable control, execution, fault injection, evidence capture and assertions for communication interfaces and product outcomes.",
          "Interface Contract — expected endpoints, message structure, timing, permissions, failure behaviour, recovery rules and completion state.",
          "GATT/ATT — the BLE data model and attribute protocol used to expose and access services, characteristics and descriptors.",
          "Correlation ID — an identifier tying one request to protocol events, device actions, logs and application or cloud state.",
          "Idempotency — application behaviour preventing a repeated command from causing an unintended duplicate action.",
          "Fault Injection — controlled introduction of failures such as packet loss, restart, timeout or unavailable nodes.",
          "State Convergence — when device, gateway, cloud and application views agree after communication or recovery.",
        ],
      },

      {
        type: "faq",
        title: "Frequently Asked Questions",
        items: [
          {
            question:
              "Is a successful connection enough to pass a protocol test?",
            answer:
              "No. Validate identity, permitted access, message meaning, resulting product action, visible state and recovery. A link can be healthy while the workflow is wrong.",
          },
          {
            question: "Should every protocol use the same test cases?",
            answer:
              "Use a common scenario and evidence structure, then apply protocol-specific assertions. BLE subscriptions, SPI timing and Modbus exception responses have different semantics.",
          },
          {
            question: "How do we test unreliable wireless conditions?",
            answer:
              "Control one variable at a time, such as signal, network availability or gateway restart. Capture timing and state before, during and after the interruption.",
          },
          {
            question:
              "When should we use a simulator instead of real hardware?",
            answer:
              "Use simulators for fast, repeatable parser and integration checks. Use real devices for radio, electrical, timing, power and cross-device behaviour, especially before release.",
          },
          {
            question: "What is the minimum useful evidence for a failed run?",
            answer:
              "Keep the build and configuration, exact test step, timestamps, raw protocol trace, device and service logs, expected and actual state, and rerun history.",
          },
          {
            question:
              "Can iPerf3 prove that a device meets its Wi-Fi performance target?",
            answer:
              "iPerf3 shows connection speed when test traffic passes through the device. Repeat it in realistic locations and verify the product's real tasks also complete reliably.",
          },
          {
            question: "How should an AT parser handle unsolicited events?",
            answer:
              "Timestamp and queue events separately from the active command response, then assert later state transitions independently.",
          },
          {
            question: "Can AI help with protocol automation?",
            answer:
              "It can propose impacted scenarios, cluster similar traces and summarize cross-layer evidence. Engineers should review generated assertions and suspected root causes.",
          },
          {
            question: "How do we avoid duplicate actions after reconnecting?",
            answer:
              "Define application-level command identity and idempotency, then test retries and state convergence.",
          },
          {
            question: "What is protocol automation for connected devices?",
            answer:
              "Protocol automation repeatedly controls interfaces, performs protocol-specific checks, captures traces, injects failures and verifies the resulting product state across device, application, API or cloud layers.",
          },
          {
            question:
              "Which protocols can be automated in an embedded or IoT test lab?",
            answer:
              "BLE, Wi-Fi, MQTT, Zigbee, UART and AT commands, I2C, SPI, CAN and Modbus can all be automated while retaining protocol-specific timing, addressing, error and recovery assertions.",
          },
        ],
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
          [
            { text: "For a closer look at creating candidate tests, synthetic data and governed AI workflows, explore " },
            { text: "how generative AI is transforming software QA", href: "/resources/blogs/how-generative-ai-is-transforming-software-quality-assurance" },
            { text: "." },
          ],
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
