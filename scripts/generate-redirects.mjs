import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { getCompactNameSlug } from "../src/lib/curiositySlug.js";

const root = process.cwd();
const contentDirectory = join(root, "src", "content", "curiosity");
const redirectsPath = join(root, "public", "_redirects");

const parseFrontmatter = (content) => {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const data = {};

  if (!match) return data;

  match[1].split(/\r?\n/).forEach((line) => {
    const lineMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!lineMatch) return;

    const [, key, rawValue] = lineMatch;
    const value = rawValue.trim().replace(/^["']|["']$/g, "");
    data[key] = key === "id" ? Number(value) : value;
  });

  return data;
};

const notes = readdirSync(contentDirectory)
  .filter((filename) => filename.endsWith(".md") || filename.endsWith(".mdx"))
  .map((filename) => {
    const content = readFileSync(join(contentDirectory, filename), "utf8");
    return parseFrontmatter(content);
  })
  .filter((note) => note.id && note.name);

const getPublicSlug = (note) => {
  const baseSlug = getCompactNameSlug(note.name);
  const duplicateCount = notes.filter((item) => getCompactNameSlug(item.name) === baseSlug).length;

  return duplicateCount > 1 ? `${baseSlug}${note.id}` : baseSlug;
};

const lines = [];

notes.forEach((note) => {
  const newPath = `/curiosity/${getPublicSlug(note)}`;
  const oldSlugs = new Set([String(note.id), note.slug]);

  oldSlugs.forEach((oldSlug) => {
    if (!oldSlug) return;
    lines.push(`/coffee/${oldSlug} ${newPath} 301`);
  });
});

lines.push("/coffee /curiosity 301");
lines.push("/coffee/ /curiosity 301");
lines.push("/coffee/:slug /curiosity/:slug 301");

writeFileSync(redirectsPath, `${lines.join("\n")}\n`);
