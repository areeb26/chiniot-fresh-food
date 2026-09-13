export type ContactPayload = Record<string, unknown>;

export function parseContact(body: ContactPayload) {
  const firstName = String(body.firstName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const date = String(body.date ?? "").trim();
  const eventType = String(body.eventType ?? "").trim();
  const headcount = String(body.headcount ?? "").trim();
  const location = String(body.location ?? "").trim();
  if (!firstName || !email.includes("@") || !phone || !date || !eventType || !headcount || !location) {
    return null;
  }
  return { firstName, email, phone, date, eventType, headcount, location };
}
