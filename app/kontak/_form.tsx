"use client";

import { useState } from "react";
import { CONTACT, SITE } from "@/app/data/site";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EMPTY_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError(null);

    try {
      const response = await fetch("/api/kontak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Gagal mengirim pesan.");
      }

      // Demo front-end selesai — hubungkan ke email service setelah integrasi.
      setSent(true);
      setForm(EMPTY_FORM);
    } catch {
      setError("Pesan gagal dikirim. Silakan coba lagi sebentar lagi.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col justify-center border border-border bg-background p-6 sm:p-8 lg:p-10">
        <div className="mb-5 flex h-11 w-11 items-center justify-center border border-primary bg-primary text-base font-bold text-primary-foreground sm:mb-6 sm:h-12 sm:w-12 sm:text-lg">
          ✓
        </div>
        <Eyebrow className="mb-3">Terkirim</Eyebrow>
        <h2 className="text-balance font-display text-2xl leading-tight tracking-tight text-foreground sm:text-3xl">
          Terima kasih sudah menghubungi kami.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Pesanmu sudah masuk. Tim {SITE.name} akan membalas dalam{" "}
          {CONTACT.responseTime}.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 self-start"
          onClick={() => setSent(false)}
        >
          Kirim pesan lain
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border bg-background p-6 sm:p-8 lg:p-10"
    >
      <Eyebrow className="mb-4">Formulir</Eyebrow>
      <h2 className="text-balance font-display text-2xl tracking-tight text-foreground sm:text-3xl">
        Ceritakan kebutuhanmu
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Isi formulir di bawah—kami akan menghubungimu kembali.
      </p>

      <div className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            id="name"
            name="name"
            label="Nama"
            placeholder="Nama lengkap"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            placeholder="email@contoh.com"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <Input
          id="subject"
          name="subject"
          label="Subjek"
          placeholder="Topik yang ingin dibahas"
          required
          value={form.subject}
          onChange={handleChange}
        />

        <Textarea
          id="message"
          name="message"
          label="Pesan"
          rows={5}
          placeholder="Tulis pesanmu di sini..."
          required
          value={form.message}
          onChange={handleChange}
        />

        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}

        <Button
          type="submit"
          fullWidth
          size="lg"
          loading={sending}
          disabled={sending}
        >
          {sending ? "Mengirim..." : "Kirim pesan"}
        </Button>

        <p className="text-micro font-semibold uppercase tracking-label text-muted-foreground">
          Dengan mengirim pesan, kamu setuju dihubungi kembali melalui email.
        </p>
      </div>
    </form>
  );
}
