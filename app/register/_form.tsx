"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthCard, AuthPage } from "@/components/ui/auth-card";
import { SuccessState } from "@/components/ui/success-state";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <AuthPage>
      {success ? (
        <SuccessState
          title="Pendaftaran Berhasil!"
          description="Silakan cek email untuk verifikasi akun."
          actionHref="/login"
          actionLabel="Masuk Sekarang"
        />
      ) : (
        <AuthCard
          title="Buat Akun Baru"
          description="Gabunglah dengan komunitas belajar kami"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              id="fullName"
              label="Nama Lengkap"
              type="text"
              placeholder="Masukkan nama lengkap"
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />

            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="email@contoh.com"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Input
              id="password"
              label="Kata Sandi"
              type="password"
              placeholder="Minimal 8 karakter"
              minLength={8}
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Input
              id="confirmPassword"
              label="Konfirmasi Kata Sandi"
              type="password"
              placeholder="Ketik ulang kata sandi"
              required
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                required
                checked={terms}
                onChange={(event) => setTerms(event.target.checked)}
                className="mt-0.5 h-4 w-4 rounded-none border-input accent-primary"
              />
              <label
                htmlFor="terms"
                className="text-sm leading-relaxed text-muted-foreground"
              >
                Saya setuju dengan{" "}
                <Link
                  href="/ketentuan"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                >
                  Ketentuan Layanan
                </Link>{" "}
                dan{" "}
                <Link
                  href="/privasi"
                  className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                >
                  Kebijakan Privasi
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              fullWidth
              disabled={submitting}
              loading={submitting}
            >
              {submitting ? "Memproses..." : "Daftar Sekarang"}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              Masuk di sini
            </Link>
          </p>
        </AuthCard>
      )}
    </AuthPage>
  );
}
