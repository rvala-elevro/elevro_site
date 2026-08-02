// components/ContactForm.tsx

"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Loader2 } from "lucide-react";


type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  website: string;
  subject: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  website: "",
  subject: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  type FieldEvent =
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.ChangeEvent<HTMLSelectElement>
    | { target: { name: keyof FormState; value: string } };

  function updateField(event: FieldEvent) {
    const { name, value } = event.target;
    const fieldName = name as keyof FormState;

    setForm((current) => ({
      ...current,
      [fieldName]: value,
    }));
  }

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Thank you. Your message has been sent successfully.",
      });

      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="surface-panel self-end rounded-4xl border border-white/10 p-6 shadow-soft md:p-8"
    >
      {/* Honeypot field */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={updateField}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Name"
          name="name"
          value={form.name}
          onChange={updateField}
          placeholder="Your name"
          required
        />

        <Field
          label="Email"
          name="email"
          value={form.email}
          onChange={updateField}
          placeholder="you@company.com"
          type="email"
          required
        />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Field
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={updateField}
          placeholder="+91..."
        />

        <Field
          label="Company"
          name="company"
          value={form.company}
          onChange={updateField}
          placeholder="Company name"
        />
      </div>
      <div className="mt-5"></div>
      <Field
        label="Subject"
        name="subject"
        value={form.subject}
        onChange={updateField}
        placeholder="What is your inquiry about?"
      />
      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-cream/75">
          Message
        </label>

        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          rows={6}
          placeholder="Tell us about your project, product, QA, automation, cloud, or engineering requirement..."
          required
          className="w-full resize-none rounded-2xl border border-white/10 bg-primary/50 px-4 py-4 text-cream outline-none transition placeholder:text-cream/35 focus:border-secondary"
        />
      </div>

      {status ? (
        <div
          className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-green-400/30 bg-green-400/10 text-green-200"
              : "border-red-400/30 bg-red-400/10 text-red-200"
          }`}
        >
          {status.message}
        </div>
      ) : null}

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={!loading ? { scale: 1.02 } : undefined}
        whileTap={!loading ? { scale: 0.98 } : undefined}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-3 text-sm font-semibold text-white shadow-soft"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </motion.button>
    </motion.form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: keyof FormState;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-cream/75">
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-primary/50 px-4 py-4 text-cream outline-none transition placeholder:text-cream/35 focus:border-secondary"
      />
    </div>
  );
}
