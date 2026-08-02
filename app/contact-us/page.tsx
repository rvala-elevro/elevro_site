import type { Metadata } from "next";
import { PageHero, SectionTitle } from "@/components/PageBlocks";
import ContactForm from "@/components/ContactForm";
import PageCard from "@/components/PageCard";

export const metadata: Metadata = {
  title: "Contact Us | Elevro",
  description:
    "Contact Elevro to discuss AI, product enablement, quality engineering, CloudOps, DevOps, IoT automation, and digital engineering requirements.",
};

export default function ContactUsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s discuss your product, quality, cloud or automation roadmap."
        text="Share your requirement and Elevro can help with AI-powered QA, CloudOps, DevOps, IoT automation, embedded validation, protocol testing, and product enablement."
      />

      <section className="soft-section px-4 py-14 md:px-8">
        <div className="justify-between grid w-full  gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionTitle
              eyebrow="Start a Conversation"
              title="Tell us what you want to build or improve."
              text="Use this form to send your requirement directly to the Elevro team."
            />
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
