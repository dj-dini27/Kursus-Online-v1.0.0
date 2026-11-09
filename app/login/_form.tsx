"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthCard, AuthPage } from "@/components/ui/auth-card";

function GoogleIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Login berhasil! Redirect ke dashboard...");
    }, 1000);
  };

  return (
    <AuthPage>
      <AuthCard
        title="Selamat Datang Kembali"
        description="Silakan masuk untuk mengakses akunmu"
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

          <Input
            id="password"
            label="Kata Sandi"
            type="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
                className="h-4 w-4 rounded-none border-input accent-primary"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-muted-foreground"
              >
                Ingat saya
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              Lupa kata sandi?
            </Link>
          </div>

          <Button type="submit" fullWidth loading={loading}>
            Masuk
          </Button>
        </form>

        <div className="relative mt-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-micro font-semibold uppercase tracking-label">
            <span className="bg-background px-3 text-muted-foreground">
              atau
            </span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          fullWidth
          className="mt-6"
        >
          <GoogleIcon />
          Lanjutkan dengan Google
        </Button>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            Daftar sekarang
          </Link>
        </p>
      </AuthCard>
    </AuthPage>
  );
}
