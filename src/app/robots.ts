import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.flowgp.fr";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}