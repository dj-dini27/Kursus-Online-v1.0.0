import { CONTACT, SITE } from "@/app/data/site";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import ContactForm from "./_form";

export const metadata = {
  title: `Kontak - ${SITE.name}`,
  description: `Hubungi tim ${SITE.name} untuk pertanyaan, bantuan, atau kerja sama.`,
};

const phoneHref = `tel:${SITE.phone.replace(/[^\d+]/g, "")}`;

const CHANNELS = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "Untuk pertanyaan umum, bantuan, dan kerja sama.",
  },
  {
    label: "Telepon",
    value: SITE.phone,
    href: phoneHref,
    note: CONTACT.hours,
  },
  {
    label: "Kantor",
    value: CONTACT.address,
    note: CONTACT.city,
  },
  {
    label: "Waktu respons",
    value: CONTACT.responseTime,
    note: "Kami membalas setiap pesan yang masuk.",
  },
];

export default function KontakPage() {
  return (
    <Container className="pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-20">
      <PageHeader
        eyebrow="06 — Kontak"
        title="Mari bicara."
        description="Punya pertanyaan tentang kursus, kerja sama, atau butuh bantuan? Kirim pesan—kami akan membalas secepatnya."
      />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-meta font-semibold uppercase tracking-label text-muted-foreground">
            Saluran
          </p>

          <dl className="mt-4 divide-y divide-border border-y border-border">
            {CHANNELS.map((channel) => (
              <div key={channel.label} className="py-5 sm:py-6">
                <dt className="text-micro font-semibold uppercase tracking-label text-muted-foreground">
                  {channel.label}
                </dt>
                <dd className="mt-2 text-balance font-display text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="break-words transition-colors hover:text-primary"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    channel.value
                  )}
                </dd>
                <p className="mt-1 text-sm text-muted-foreground">
                  {channel.note}
                </p>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Untuk urusan mendesak di luar jam kerja, kirim email dengan subjek
            “Mendesak” agar pesanmu lebih cepat kami tangani.
          </p>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
