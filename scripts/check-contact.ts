import assert from "node:assert/strict";
import { parseContact } from "../src/lib/contact.ts";

assert.equal(parseContact({ firstName: "A" }), null);
const full = parseContact({
  firstName: "Amir",
  email: "a@b.co",
  phone: "03003396288",
  date: "2026-10-01",
  eventType: "Wedding",
  headcount: "200",
  location: "DHA Phase 2",
});
assert.ok(full);
assert.equal(full.email, "a@b.co");
console.log("contact parse check passed");
