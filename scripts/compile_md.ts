import fs from "fs";

import {Document, DocumentSection, TextualChunk, FormatLevel} from "../src/formatting";
import {multiscriptText, isError} from "../src/AnnotatedText";
import {HomeDocument} from "../src/Home";
import {HistoryDocument} from "../src/History";

function chunkToMarkdown(chunk: TextualChunk): string {
  if (typeof chunk === "string") {
    return chunk;
  }
  switch (chunk.type) {
    case "inline Jaobon":
      const mt = multiscriptText(chunk.outline);
      if (isError(mt)) {
        throw new Error(mt.message);
      }
      return `${mt.CJK} *${mt.roman}*`
    case "italic":
      return `*${chunk.children.map(chunkToMarkdown).join("")}*`
    case "link":
      return `[${chunk.children.map(chunkToMarkdown).join("")}](${chunk.href})`;
    case "ipa":
      return chunk.children.map(chunkToMarkdown).join("");
    default:
      throw new Error(`Unrecognized chunk type ${JSON.stringify(chunk)}`);
  }
}

const format_level_prefixes: {[key in FormatLevel]: string} = {
  "h1": "# ",
  "h2": "## ",
  "h3": "### ",
  "p": "",
}

function sectionToMarkdown(section: DocumentSection): string {
  switch (section.type) {
    case "image section":
      return `![${section.alt}](static/img/${section.filename})\n\n`;
    case "text section":
      return format_level_prefixes[section.format_level] + section.textual_chunks.map(chunkToMarkdown).join("") + "\n\n";
    case "unordered list":
      return section.items.map(chunks => "- " + chunks.map(chunkToMarkdown).join("")).join("\n") + "\n\n";
    default:
      throw new Error(`Unrecognized section type: ${JSON.stringify(section)}`);
  }
}

function documentToMarkdown(document: Document): string {
  return document.map(sectionToMarkdown).join("");
}

const document = [
  ...HomeDocument,
  ...HistoryDocument,
];

fs.writeFileSync("README.md", documentToMarkdown(document));
