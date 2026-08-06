import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/reviews", "/categories", "/about", "/contact", "/privacy", "/affiliate-disclosure"];
  return pages.map((path) => ({
    url: `https://softlixo.com${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
