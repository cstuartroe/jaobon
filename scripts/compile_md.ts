import fs from "fs";

import {Document, DocumentSection, TextualChunk, FormatLevel, TableSection, TableCell, table} from "../src/formatting";
import {multiscriptText, isError} from "../src/AnnotatedText";
import {HomeDocument} from "../src/Home";
import {HistoryDocument} from "../src/History";
import {PhonologyDocument} from "../src/Phonology";
import {WritingSystemsMarkdownDocument} from "../src/WritingSystems";

function chunkToMarkdown(chunk: TextualChunk): string {
  if (typeof chunk === "string") {
    return chunk.replace(/~/g, "\\~");
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
    case "superscript":
      return `<sup>${chunk.children.map(chunkToMarkdown).join("")}</sup>`;
    case "span":
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

function cellString(cell: TableCell): string {
  let out = "";

  if (cell.colspan === undefined) {
    out += "| ";
  } else {
    out += `<td colspan=${cell.colspan}>`;
  }

  const bold = cell.th && cell.children.length > 0;

  if (bold) {
    out += "**";
  }

  out += cell.children.map(chunkToMarkdown).join("");

  if (bold) {
    out += "**";
  }

  return out + " ";
}

function generateTable(table: TableSection) {
  let out = "";

  table.rows[0].forEach(cell => {
    out += cellString(cell);
  });

  out += "|\n";
  table.rows[0].forEach(_ => { out += "| - " });
  out += "|\n";

  table.rows.slice(1).forEach(row => {
    row.forEach(cell => {
      out += cellString(cell);
    });

    out += "|\n";
  });

  return out + "\n";
}

function sectionToMarkdown(section: DocumentSection): string {
  switch (section.type) {
    case "image section":
      return `![${section.alt}](static/img/${section.filename})\n\n`;
    case "text section":
      return format_level_prefixes[section.format_level] + section.textual_chunks.map(chunkToMarkdown).join("") + "\n\n";
    case "unordered list":
      return section.items.map(chunks => "- " + chunks.map(chunkToMarkdown).join("")).join("\n") + "\n\n";
    case "table":
      return generateTable(section);
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
  ...PhonologyDocument,
  ...WritingSystemsMarkdownDocument,
];

fs.writeFileSync("README.md", documentToMarkdown(document));
