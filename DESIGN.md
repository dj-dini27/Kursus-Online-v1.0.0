# Aturan Desain — Editorial Premium

Dokumen ini adalah **sumber kebenaran** untuk ukuran, jarak, warna, dan pemakaian komponen. Tujuannya mencegah nilai acak seperti `text-[0.58rem]` atau `tracking-[0.18em]` muncul kembali.

## Prinsip

1. **Token dulu, baru class.** Ukuran teks, tracking, warna, dan radius harus memakai token yang sudah didefinisikan di `app/globals.css`.
2. **Jangan pakai nilai acak.** Tidak ada `text-[...rem]`, `tracking-[...em]`, atau `leading-[...]` di komponen/halaman.
3. **Skala terbatas.** Kalau butuh ukuran baru, tambahkan token di `globals.css` dan catat di dokumen ini — jangan langsung menulis angka di JSX.
4. **Konsisten per peran.** Label kecil selalu memakai token yang sama, di halaman mana pun.

## Token Warna

| Token | Nilai | Pemakaian |
|-------|-------|-----------|
| `--background` | `#f4efe4` | Kertas / latar utama |
| `--foreground` | `#141210` | Tinta / teks utama |
| `--primary` | `#d94f2b` | Aksen vermilion |
| `--primary-foreground` | `#fdf8ef` | Teks di atas vermilion |
| `--muted` | `#e8e0d0` | Permukaan sekunder |
| `--muted-foreground` | `#6f665a` | Teks sekunder |
| `--border` | `#d3c8b4` | Garis tipis |
| `--radius` | `0.25rem` | Sudut kartu/tombol |

Gunakan utility turunannya: `bg-background`, `text-foreground`, `bg-primary`, `border-border`, `text-muted-foreground`, dst.

## Skala Tipografi

| Token | Ukuran | Line height | Pemakaian |
|-------|--------|-------------|-----------|
| `text-display-1` | 40px | 1.02 | Hero di HP |
| `text-display-2` | 60px | 0.95 | Hero `sm` |
| `text-display-3` | 84px | 0.95 | Hero `lg` |
| `text-3xl` | 30px | bawaan | Judul halaman di HP |
| `text-4xl` | 36px | bawaan | Judul halaman tablet |
| `text-5xl` | 48px | bawaan | Judul halaman desktop |
| `text-base` | 16px | bawaan | Body utama |
| `text-sm` | 14px | bawaan | Body sekunder |
| `text-eyebrow` | 10px | 1.4 | Eyebrow bernomor (`01 — Katalog`) |
| `text-meta` | 10px | 1.4 | Label/nav/meta penting |
| `text-micro` | 9px | 1.4 | Meta rapat, tag, footer legal |
| `text-label` | 11px | 1.4 | Tombol & menu mobile |

**Aturan:** teks body tidak boleh di bawah 14px. Ukuran 9–10px hanya untuk teks kapital pendek (label/meta), bukan paragraf.

## Tracking (Letter Spacing)

| Token | Nilai | Pemakaian |
|-------|-------|-----------|
| `tracking-display` | `-0.02em` | Judul serif display |
| `tracking-eyebrow` | `0.24em` | Eyebrow |
| `tracking-label` | `0.18em` | Label, nav, meta |
| `tracking-button` | `0.16em` | Tombol & baris rapat |

## Line Height

| Token | Nilai | Pemakaian |
|-------|-------|-----------|
| `leading-display` | `1.06` | Judul halaman/section |
| `leading-display-tight` | `0.98` | Judul CTA besar |

Token `text-display-1/2/3` sudah membawa line-height masing-masing, jadi tidak perlu menambah `leading-*`.

## Irama Jarak (Spacing)

Gunakan hanya skala Tailwind (basis 4px). Tidak ada `[12px]` atau `[1.7rem]` untuk padding/gap.

| Konteks | Class baku |
|---------|-----------|
| Shell halaman | `pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-20` |
| Hero landing | `pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-20 lg:pb-24` |
| Section utama | `py-12 sm:py-16 lg:py-24` |
| Blok CTA | `py-14 sm:py-20 lg:py-28` |
| Halaman auth | `py-8 sm:py-12 lg:py-16` |
| Jarak antar elemen form | `space-y-5` |
| Grid katalog | `gap-x-10 gap-y-10 sm:gap-y-14` |
| Jarak judul → konten | `mb-8 sm:mb-12` |
| Jarak kecil dalam kartu | `gap-2`, `gap-3`, `gap-4`, `gap-5` |

## Layout

- `Container` menangani lebar + padding: `max-w-7xl px-4 sm:px-6 lg:px-8`.
- Varian: `default` (7xl), `narrow` (3xl), `sm` (md).
- Grid editorial memakai 12 kolom: `lg:grid-cols-12` dengan `col-span-*`.
- Header halaman memakai `PageHeader` (eyebrow + judul + deskripsi + aksi + garis bawah).
- Judul section memakai `SectionHeading`.
- Grid kursus landing memakai 2 kolom dengan offset `md:mt-16` pada item ganjil.

### Navbar & offset konten

- Navbar **`fixed inset-x-0 top-0`**, bukan `sticky`. Ini satu-satunya cara yang andal di
  browser HP (Safari/Chrome Android) saat `body` punya konteks scroll sendiri.
- Tinggi navbar: `h-16` (64px) di HP, `sm:h-20` (80px) ke atas.
- Karena fixed, navbar keluar dari alur layout. `main` di `app/layout.tsx` **wajib**
  memberi offset `pt-16 sm:pt-20` agar konten tidak tertutup.
- Jangan menambahkan padding atas ekstra di halaman hanya untuk navbar; offset hanya
  di `main`.
- Menu mobile memakai **overlay `absolute top-full`** (bukan elemen normal flow) supaya
  tidak mendorong konten. Backdrop, scroll lock, dan `max-h` sudah diurus `Navbar`.
- `html` memakai `scrollbar-gutter: stable` agar lebar konten tidak bergeser saat
  scrollbar muncul/hilang.
- Jangan memberi `overflow-x` pada `body`/`html` — dapat merusak `position: fixed`.

## Komponen & Aturan Pemakaian

### Button
- Semua tombol kapital, `text-label`, `tracking-button`.
- Ukuran `sm` / `md` / `lg` hanya mengubah padding & tinggi minimum — **bukan** ukuran font.
- Varian: `primary`, `secondary`, `outline`, `ghost`, `inverse` (untuk blok gelap).
- Gunakan `asChild` untuk merender `<Link>` tanpa sarang `<button><a>`.

### Input & Textarea
- Gaya garis bawah, tanpa kotak.
- Label: `text-meta uppercase tracking-label`.
- Jangan menambah `mb-*` di dalam `Input`/`Textarea`; jarak diatur oleh `space-y-5` pada form.
- `Textarea` menerima `rows` (default `5`) dan `resize-y` untuk pesan panjang.

### LegalPage
- Dipakai untuk halaman legal (`/privasi`, `/ketentuan`) dengan tata letak header + daftar bagian.
- Wajib menerima `eyebrow`, `title`, `description`, `updated`, dan `sections`.

### NotFound
- Dipakai di `app/not-found.tsx` untuk 404 seluruh aplikasi.
- Menggunakan `Eyebrow` + judul serif + tombol CTA via `Button asChild`.

### Eyebrow
- Satu-satunya tempat untuk label kapital bernomor.
- Jangan menulis ulang kombinasi `text-eyebrow tracking-eyebrow` di halaman.

### Kartu
- Sudut memakai `rounded-[var(--radius)]` atau siku (`border` saja).
- Tanpa bayangan (`shadow-*`) untuk gaya editorial; gunakan garis `border-border`.
- Gambar kursus: `aspect-[4/3]`, grayscale → warna saat hover.

## Larangan

- ❌ `text-[0.58rem]`, `tracking-[0.2em]`, `leading-[1.08]` di JSX.
- ❌ Warna hardcode (`#hex`, `bg-white`, `text-indigo-*`).
- ❌ `rounded-full` untuk kartu (boleh untuk indikator kecil).
- ❌ Merender `<Navbar />` / `<Footer />` di halaman — hanya di `app/layout.tsx`.
- ❌ Menambah ukuran baru tanpa mencatatnya di dokumen ini.

## Checklist Sebelum Commit

1. Jalankan `npm run check:design` — tidak ada ukuran/warna liar.
2. Tidak ada `text-[...]`, `tracking-[...]`, atau `leading-[...]` baru.
3. Warna hanya lewat token.
4. Jarak memakai skala Tailwind.
5. Halaman baru memakai `Container`, `PageHeader`, dan `Eyebrow`.
6. `npm run build` lulus tanpa warning.
