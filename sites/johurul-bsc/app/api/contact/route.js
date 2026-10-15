import { NextResponse } from "next/server";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestLog = new Map();
const ALLOWED_INTERESTS = new Set([
  "Aqua — মাছ ক্রয়/বিক্রয়",
  "Poultry — ডিম সরবরাহ",
  "Agro-Vet — ফিড ও ঔষধ",
  "অন্যান্য",
]);

function clientKey(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return (forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip") || "unknown").trim();
}

function isRateLimited(key) {
  const now = Date.now();
  const recent = (requestLog.get(key) || []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    requestLog.set(key, recent);
    return true;
  }
  recent.push(now);
  requestLog.set(key, recent);
  return false;
}

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().replace(/[<>]/g, "").slice(0, maxLength) : "";
}

export async function POST(request) {
  try {
    const key = clientKey(request);
    if (isRateLimited(key)) {
      return NextResponse.json({ error: "অনেকবার চেষ্টা করা হয়েছে। ১০ মিনিট পরে আবার চেষ্টা করুন।" }, { status: 429 });
    }

    const body = await request.json();
    if (clean(body.website, 100)) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = clean(body.name, 80);
    const phone = clean(body.phone, 25);
    const interest = clean(body.interest, 80);
    const message = clean(body.message, 2000);

    if (name.length < 2 || phone.length < 7 || message.length < 10 || !ALLOWED_INTERESTS.has(interest)) {
      return NextResponse.json({ error: "নাম, ফোন নম্বর, আগ্রহের বিষয় এবং বিস্তারিত বার্তা সঠিকভাবে পূরণ করুন।" }, { status: 400 });
    }

    if (!/^[+()\-\s\d]{7,25}$/.test(phone)) {
      return NextResponse.json({ error: "সঠিক ফোন নম্বর লিখুন।" }, { status: 400 });
    }

    // Optional server-to-server delivery can be enabled later with a private provider webhook.
    // Without that environment variable, the client uses the validated mailto fallback.
    return NextResponse.json({ ok: true, delivery: process.env.CONTACT_WEBHOOK_URL ? "webhook-ready" : "mailto-fallback" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "বার্তাটি প্রক্রিয়া করা যায়নি। ফোন বা WhatsApp-এ যোগাযোগ করুন।" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, service: "M/S Agro Valley Co. contact endpoint" }, { status: 200 });
}
