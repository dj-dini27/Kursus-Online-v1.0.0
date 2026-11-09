# Release Notes — Kursus Online Template

Template platform kursus online dengan identitas **Editorial Premium**.

---

## v1.0.0 — Initial Commercial Release

### Ditambahkan
- Halaman **Tentang** (`/tentang`) — misi, prinsip, jenjang, statistik, CTA.
- Halaman **Kontak** (`/kontak`) — detail kontak + form + API `POST /api/kontak`.
- Email kontak via **Resend** (`RESEND_API_KEY` / `FROM_EMAIL`).
- Halaman **Privasi** (`/privasi`) dan **Ketentuan Layanan** (`/ketentuan`).
- **404 kustom** (`app/not-found.tsx`).
- **OG image** (`/opengraph-image`) dan **Twitter image** (`/twitter-image`) via `next/og`.
- **Sitemap** (`/sitemap.xml`) dan **robots** (`/robots.txt`).
- Detail kursus: **SSG** (`generateStaticParams` + `dynamicParams = false`) + `generateMetadata` + OpenGraph/Twitter per kursus.
- Komponen baru: `Textarea`, `LegalPage`.
- Pemeriksa desain otomatis: `npm run check:design`.

### Diubah
- Navbar: `position: fixed` + dropdown mobile sebagai overlay + scroll lock + backdrop.
- `main`: offset `pt-16 sm:pt-20` (sesuai navbar).
- `html`: `scrollbar-gutter: stable`; hapus `overflow-x: clip` dari `body`.
- Semua nilai `text-[...]`, `tracking-[...]`, `leading-[...]` diganti token desain.
- Login: provider **Google saja** + ikon resmi Google.
- Footer & register: hapus link `href="#"`, sisakan link real.

### Perbaikan
- Menu mobile HP tidak lagi mendorong konten (overlay absolut + scroll lock).
- Scroll halaman dengan navbar fixed konsisten.

### Lisensi
- **Commercial License v1.0.0** (`LICENSE`).

---

## File utama akhir

```
app/
├── api/kontak/route.ts          # POST — form kontak (+ Resend)
├── dashboard/page.tsx
├── forgot-password/
├── kursus/
│   ├── page.tsx
│   ├── _client.tsx
│   └── [id]/page.tsx            # SSG + SEO + generateMetadata
├── kontak/
├── ketentuan/
├── layout.tsx                   # metadata + Navbar/Footer global
├── login/, register/, privasi/
├── not-found.tsx
├── opengraph-image.tsx
├── robots.ts
├── sitemap.ts
├── tentang/
├── twitter-image.tsx
└── globals.css

components/
├── navbar.tsx
├── footer.tsx
├── legal-page.tsx
├── course-card.tsx
└── ui/
    ├── auth-card.tsx, button.tsx, container.tsx, eyebrow.tsx,
    ├── input.tsx, legal-page.tsx, page-header.tsx, section-heading.tsx,
    ├── stat.tsx, success-state.tsx, textarea.tsx

app/data/          # courses.ts, site.ts (sumber konten & konfigurasi)
scripts/check-design.mjs
DESIGN.md          # aturan desain
```
