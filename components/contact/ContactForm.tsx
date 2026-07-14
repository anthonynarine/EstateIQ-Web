"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";

type FormStatus = "idle" | "submitting" | "success" | "preview" | "error";

const fieldClasses =
  "mt-2 w-full rounded-xl border border-border-soft bg-background-app px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-faint focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/10";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      setStatus("preview");
      return;
    }

    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      body.append(key, String(value));
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      const responseText = await response.text();

      if (!response.ok || !/thank you/i.test(responseText)) {
        throw new Error("Contact form submission failed.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="contact"
      onSubmit={handleSubmit}
    >
      <input name="form-name" type="hidden" value="contact" />
      <p className="absolute -m-px size-px overflow-hidden border-0 p-0 [clip:rect(0,0,0,0)]">
        <label>
          Do not fill this out if you are human:
          <input autoComplete="off" name="bot-field" tabIndex={-1} />
        </label>
      </p>

      {status === "success" && (
        <div
          aria-live="polite"
          className="contact-confirmation mb-5 flex items-start gap-3 rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 p-4"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-brand-cyan/25 bg-brand-cyan/10 text-sm text-brand-cyan">
            ✓
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold text-text-primary">
              Message sent
            </h3>
            <p className="mt-1 text-sm leading-5 text-text-secondary">
              Thanks for reaching out. EstateIQ will respond directly.
            </p>
          </div>
          <button
            aria-label="Dismiss confirmation"
            className="flex size-7 shrink-0 items-center justify-center rounded-full text-lg leading-none text-text-muted transition hover:bg-surface hover:text-text-primary"
            onClick={() => setStatus("idle")}
            type="button"
          >
            ×
          </button>
        </div>
      )}

      {status === "preview" && (
        <div
          aria-live="polite"
          className="mb-5 flex items-start gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/5 p-4"
        >
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold text-text-primary">
              Local preview only
            </h3>
            <p className="mt-1 text-sm leading-5 text-text-secondary">
              Nothing was submitted. Test the form on estateiq.me after the
              updated site is deployed.
            </p>
          </div>
          <button
            aria-label="Dismiss preview notice"
            className="flex size-7 shrink-0 items-center justify-center rounded-full text-lg leading-none text-text-muted transition hover:bg-surface hover:text-text-primary"
            onClick={() => setStatus("idle")}
            type="button"
          >
            ×
          </button>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-text-primary">
          Name
          <input
            autoComplete="name"
            className={fieldClasses}
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </label>

        <label className="text-sm font-medium text-text-primary">
          Email
          <input
            autoComplete="email"
            className={fieldClasses}
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>

        <label className="text-sm font-medium text-text-primary">
          What can we help with?
          <select className={fieldClasses} defaultValue="" name="inquiry" required>
            <option disabled value="">
              Select a topic
            </option>
            <option value="Product question">Product question</option>
            <option value="Demo request">Demo request</option>
            <option value="Early access">Early access</option>
            <option value="Security and trust">Security and trust</option>
            <option value="Partnership or press">Partnership or press</option>
          </select>
        </label>

        <label className="text-sm font-medium text-text-primary">
          Portfolio size
          <select className={fieldClasses} defaultValue="" name="portfolio_size">
            <option value="">Optional</option>
            <option value="1-5 units">1–5 units</option>
            <option value="6-15 units">6–15 units</option>
            <option value="16-30 units">16–30 units</option>
            <option value="31-50 units">31–50 units</option>
            <option value="More than 50 units">More than 50 units</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-text-primary">
        Message
        <textarea
          className={`${fieldClasses} min-h-36 resize-y`}
          name="message"
          placeholder="Tell us what you would like to understand or accomplish."
          required
          rows={6}
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 border-t border-border-soft pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-text-muted">
          Your information is used only to respond to your inquiry. Do not
          include tenant records or sensitive financial information.
        </p>
        <Button
          disabled={status === "submitting"}
          isLoading={status === "submitting"}
          size="lg"
          type="submit"
        >
          {status === "submitting" ? "Sending" : "Send message"}
        </Button>
      </div>

      {status === "error" && (
        <p
          aria-live="polite"
          className="mt-4 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300"
        >
          The message could not be sent. Please try again or email
          hello@estateiq.me directly.
        </p>
      )}
    </form>
  );
}
