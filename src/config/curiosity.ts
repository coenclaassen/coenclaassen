import type { CollectionEntry } from "astro:content";
import { getCompactNameSlug } from "../lib/curiositySlug.js";
import { design } from "./design";

type CuriosityNote = CollectionEntry<"curiosity">;

export const getCuriosityNoteNumber = (note: CuriosityNote) => Number(note.data.slug ?? note.data.id ?? 0);

export const sortCuriosityNotes = (notes: CuriosityNote[]) =>
  [...notes].sort((a, b) => getCuriosityNoteNumber(b) - getCuriosityNoteNumber(a));

export const getCuriosityPublicSlug = (note: CuriosityNote, notes: CuriosityNote[]) => {
  const baseSlug = getCompactNameSlug(note.data.name);
  const duplicateCount = notes.filter((item) => getCompactNameSlug(item.data.name) === baseSlug).length;

  return duplicateCount > 1 ? `${baseSlug}${note.data.id}` : baseSlug;
};

export const getCuriosityNotePath = (note: CuriosityNote, notes: CuriosityNote[]) =>
  `/curiosity/${getCuriosityPublicSlug(note, notes)}`;

export const getCuriosityPalette = (index: number) => {
  const palettes = design.colors.curiosityCardPalettes;
  return palettes[index % palettes.length];
};
