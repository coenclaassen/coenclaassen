import { site } from "./site";

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();

export const personJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: absoluteUrl(site.ogImage),
  sameAs: [site.linkedinHref, site.offTrailRunHref],
  knowsAbout: site.knowsAbout,
});
