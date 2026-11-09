"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthCard, AuthPage } from "@/components/ui/auth-card";
import { SuccessState } from "@/components/ui/success-state";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  };

  return (
    <AuthPage>
      {sent ? (
        <SuccessState
          title="Tautan Reset Terkirim!"
          description="Cek kotak masuk emailmu untuk langkah selanjutnya."
          actionHref="/login"
          actionLabel="Kembali ke Masuk"
        />
      ) : (
        <AuthCard
          title="Lupa Kata Sandi?"
          description="Masukkan email yang terdaftar, dan kami akan mengirimkan tautan untuk mengatur ulang kata sandimu."
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="email@contoh.com"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              disabled={sending}
              loading={sending}
            >
              {sending ? "Mengirim..." : "Kirim Tautan Reset"}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Ingat kata sandi?{" "}
            <Link
              href="/login"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              Kembali ke halaman masuk
            </Link>
          </p>
        </AuthCard>
      )}
    </AuthPage>
  );
}
