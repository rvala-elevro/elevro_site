// app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  website?: string;
};

function clean(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const company = clean(body.company);
    const message = clean(body.message);
    const website = clean(body.website);

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Please enter your name." },
        { status: 400 },
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please enter a message with at least 10 characters.",
        },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!smtpHost || !smtpUser || !smtpPass || !receiverEmail || !fromEmail) {
      return NextResponse.json(
        { ok: false, error: "Contact email is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
    await transporter.verify();
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeCompany = escapeHtml(company || "Not provided");
    const safeMessage = escapeHtml(message);

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    await transporter.sendMail({
      from: fromEmail,
      to: receiverEmail,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2>New Contact Form Enquiry</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">Name</td>
              <td style="padding: 8px;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email</td>
              <td style="padding: 8px;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone</td>
              <td style="padding: 8px;">${safePhone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Company</td>
              <td style="padding: 8px;">${safeCompany}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Submitted At</td>
              <td style="padding: 8px;">${submittedAt}</td>
            </tr>
          </table>

          <h3 style="margin-top: 24px;">Message</h3>

          <div style="white-space: pre-wrap; padding: 16px; background: #f5f5f5; border-radius: 12px;">
            ${safeMessage}
          </div>
        </div>
      `,
      text: `
New Contact Form Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}
Submitted At: ${submittedAt}

Message:
${message}
      `,
    });

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { ok: false, error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
