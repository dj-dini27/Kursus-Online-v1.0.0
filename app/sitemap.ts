import type { MetadataRoute } from "next";
import { SITE } from "@/app/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE.url, lastModified, changeFrequency: "yearly", priority: 1 },
    { url: `${SITE.url}/tentang`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/kontak`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE.url}/kursus`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/dashboard`, lastModified, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE.url}/login`, lastModified, changeFrequency: "monthly", priority: 0.3 },
  ];
}
