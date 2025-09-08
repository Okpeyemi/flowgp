import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.flowgp.fr";
  const now = new Date();
  const routes = [
    "",
    "/services",
    "/comment-ca-marche",
    "/apropos",
    "/contacts",
  ];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.6,
  }));
}