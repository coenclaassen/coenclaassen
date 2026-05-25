import { getCollection } from "astro:content";
import { getCuriosityNotePath, sortCuriosityNotes } from "../config/curiosity";
import { absoluteUrl } from "../config/seo";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const formatDate = (date?: Date) => date?.toISOString().slice(0, 10);

export async function GET() {
  const notes = await getCollection("curiosity");
  const sortedNotes = sortCuriosityNotes(notes);
  const staticUrls = ["/", "/about", "/curiosity"].map((path) => ({ loc: absoluteUrl(path) }));
  const noteUrls = sortedNotes.map((note) => ({
    loc: absoluteUrl(getCuriosityNotePath(note, sortedNotes)),
    lastmod: formatDate(note.data.dateModified ?? note.data.date),
  }));
  const urls = [...staticUrls, ...noteUrls];
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(({ loc, lastmod }) =>
      ["  <url>", `    <loc>${escapeXml(loc)}</loc>`, lastmod ? `    <lastmod>${lastmod}</lastmod>` : "", "  </url>"]
        .filter(Boolean)
        .join("\n"),
    ),
    "</urlset>",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
