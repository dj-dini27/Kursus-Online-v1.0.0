import { NextResponse } from "next/server";

/**
 * Endpoint untuk form kontak.
 * Jika `RESEND_API_KEY` ada, email akan dikirim via Resend ke
 * `NEXT_PUBLIC_CONTACT_EMAIL`. Tanpa key, hanya mengembalikan success.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: { message: "Payload tidak valid." } },
      { status: 400 },
    );
  }

  const { name, email, subject, message } = body ?? {};

  const isValid =
    typeof name === "string" &&
    name.trim().length >= 2 &&
    typeof email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    typeof subject === "string" &&
    subject.trim().length > 0 &&
    typeof message === "string" &&
    message.trim().length >= 10;

  if (!isValid) {
    return NextResponse.json(
      { ok: false, error: { message: "Data tidak lengkap atau tidak valid." } },
      { status: 422 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@kursusonline.id";
  const fromEmail =
    process.env.FROM_EMAIL ?? `Kursus Online <${contactEmail}>`;

  if (resendApiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [{ email: contactEmail }],
          subject: `Kontak: ${subject}`,
          text: `Nama: ${name}\nEmail: ${email}\n\n${message}`,
          html: `<p><strong>${subject}</strong></p><p>${message}</p><p> — ${name} (${email})</p>`,
        }),
      });

      if (!res.ok) {
        throw new Error("Resend gagal mengirim email");
      }
    } catch {
      return NextResponse.json(
        { ok: false, error: { message: "Gagal mengirim email." } },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
