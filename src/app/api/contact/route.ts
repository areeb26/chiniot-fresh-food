import { NextResponse } from "next/server";
import { parseContact } from "@/lib/contact";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const parsed = parseContact(body);
  if (!parsed) return NextResponse.json({ ok: false }, { status: 400 });

  console.log("[chiniot-contact]", parsed);
  return NextResponse.json({ ok: true });
}
