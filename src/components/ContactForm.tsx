"use client";

import { useState } from "react";

const eventTypes = [
  "Intimate Dinner/Lunch",
  "Corporate Event",
  "Business Dinner",
  "Wedding",
  "Mehendi",
  "Food Distribution",
  "Others",
];

const serviceModes = ["In-store Pick up", "Delivery", "Live Cooking", "Not Sure"];

const heard = [
  "Family/Friend",
  "Social Media",
  "Digital Ad",
  "Attended a Chiniot event",
  "Search Engine",
  "Others",
];

type Props = { extra?: boolean };

export function ContactForm({ extra = false }: Props) {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setStatus("idle");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    } finally {
      setBusy(false);
    }
  }

  const field =
    "w-full border-0 border-b border-gold/35 bg-transparent py-3 text-ink placeholder:text-muted/70 focus:border-gold focus:ring-0 focus:outline-none [color-scheme:dark]";

  return (
    <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2">
      <input name="firstName" required placeholder="First name *" className={field} />
      <input name="lastName" placeholder="Last name" className={field} />
      <input name="email" type="email" required placeholder="Email *" className={field} />
      <input name="phone" required placeholder="Phone *" className={field} />
      <label className="text-sm text-muted">
        Date of event *
        <input name="date" type="date" required className={`${field} mt-1`} />
      </label>
      <label className="text-sm text-muted">
        Event type *
        <select name="eventType" required className={`${field} mt-1`}>
          <option value="">Select</option>
          {eventTypes.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
      </label>
      <input name="headcount" required placeholder="How many people? *" className={field} />
      <input name="location" required placeholder="Event location *" className={field} />
      <label className="text-sm text-muted">
        Service *
        <select name="service" required className={`${field} mt-1`}>
          <option value="">Select</option>
          {serviceModes.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
      </label>
      <input name="budget" required placeholder="Budget per head *" className={field} />
      <label className="text-sm text-muted md:col-span-2">
        How did you hear about us?
        <select name="heard" className={`${field} mt-1`}>
          <option value="">Select</option>
          {heard.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
      </label>
      {extra && (
        <textarea
          name="dishes"
          rows={4}
          placeholder="Dishes you want (karahi, biryani, chaat, pasta…)"
          className={`${field} md:col-span-2`}
        />
      )}
      <textarea
        name="comments"
        rows={4}
        placeholder="Additional comments"
        className={`${field} md:col-span-2`}
      />
      <label className="flex items-start gap-3 text-sm text-muted md:col-span-2">
        <input type="checkbox" name="consent" required className="mt-1 accent-gold" />
        I agree that my data is collected and stored to reply about this booking.
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={busy}
          className="bg-gold px-8 py-3 text-[11px] tracking-[0.2em] text-bg uppercase disabled:opacity-60"
        >
          {busy ? "Sending…" : "Send brief"}
        </button>
        {status === "ok" && (
          <p className="mt-4 text-sm text-gold">Received. Amir or Fahad will call you on the number you gave.</p>
        )}
        {status === "err" && (
          <p className="mt-4 text-sm text-red-300">Could not send. WhatsApp 0300-3396288 instead.</p>
        )}
      </div>
    </form>
  );
}
