import React from "react";
import {Link} from "react-router-dom";
import AnnotatedText from "./AnnotatedText";

type InlineJaobon = {
  type: "inline Jaobon",
  outline: string,
}

type LinkChunk = {
  type: "link",
  href: string,
  children: TextualChunk[],
}

type ItalicChunk = {
  type: "italic",
  children: TextualChunk[],
}

type IPAChunk = {
  type: "ipa",
  children: TextualChunk[],
}

export type TextualChunk = string | InlineJaobon | LinkChunk | ItalicChunk | IPAChunk;

export type FormatLevel = "h1" | "h2" | "h3" | "p";

type TextSection = {
  type: "text section"
  format_level: FormatLevel,
  textual_chunks: TextualChunk[],
}

type ImageSection = {
  type: "image section"
  filename: string,
  alt?: string,
  style?: React.CSSProperties,
}

type UnorderedListSection = {
  type: "unordered list"
  items: TextualChunk[][],
}

export type DocumentSection = TextSection | ImageSection | UnorderedListSection;

export type Document = DocumentSection[];

function chunkChildren(chunk: { children: TextualChunk[] }): React.ReactNode[] {
  return chunk.children.map((child, i) => (
    <React.Fragment key={i}>{chunkToJSX(child)}</React.Fragment>
  ));
}

function chunkToJSX(chunk: TextualChunk): React.ReactNode {
  if (typeof chunk === "string") {
    return chunk;
  }

  switch (chunk.type) {
    case "italic":
      return <i>{chunkChildren(chunk)}</i>;
    case "link":
      if (chunk.href.startsWith("http")) {
        return <a href={chunk.href} target={`_blank`}>{chunkChildren(chunk)}</a>;
      } else {
        return <Link to={chunk.href}>{chunkChildren(chunk)}</Link>;
      }
    case "inline Jaobon":
      return <AnnotatedText sentence={chunk.outline} inline={true}/>;
    case "ipa":
      return <span style={{fontFamily: "Gentium"}}>{chunkChildren(chunk)}</span>;
  }
}

function sectionToJSX(section: DocumentSection): React.ReactNode {
  switch (section.type) {
    case "text section":
      const chunks = section.textual_chunks.map((chunk: TextualChunk, i) => (
        <React.Fragment key={i}>{chunkToJSX(chunk)}</React.Fragment>
      ));
      switch (section.format_level) {
        case "h1":
          return <h1>{chunks}</h1>;
        case "h2":
          return <h2>{chunks}</h2>;
        case "h3":
          return <h3>{chunks}</h3>;
        case "p":
          return <p>{chunks}</p>;
        default:
          throw new Error(`Unknown format level: ${section.format_level}`)
      }
    case "image section":
      return <img src={"/static/img/" + section.filename} alt={section.alt} style={section.style}/>;
    case "unordered list":
      const lis = section.items.map((item, i) => (
        <li key={i}>{item.map((chunk, j) => (
          <React.Fragment key={j}>{chunkToJSX(chunk)}</React.Fragment>
        ))}</li>
      ))
      return <ul>{lis}</ul>;
    default:
      throw new Error(`Unknown section type: ${section}`);
  }
}

export function documentToJSX(document: Document): React.ReactElement {
  return (
    <>
      {document.map((section, i) => (
        <React.Fragment key={i}>{sectionToJSX(section)}</React.Fragment>
      ))}
    </>
  );
}

export function h1(...chunks: TextualChunk[]): TextSection {
  return {
    type: "text section",
    format_level: "h1",
    textual_chunks: chunks,
  }
}

export function h2(...chunks: TextualChunk[]): TextSection {
  return {
    type: "text section",
    format_level: "h2",
    textual_chunks: chunks,
  }
}

export function h3(...chunks: TextualChunk[]): TextSection {
  return {
    type: "text section",
    format_level: "h3",
    textual_chunks: chunks,
  }
}

export function p(...chunks: TextualChunk[]): TextSection {
  return {
    type: "text section",
    format_level: "p",
    textual_chunks: chunks,
  }
}

export function img(filename: string, style?: React.CSSProperties, alt?: string): ImageSection {
  return {
    type: "image section",
    filename, style, alt,
  }
}

export function ul(...items: TextualChunk[][]): UnorderedListSection {
  return {
    type: "unordered list",
    items,
  }
}

export function a(href: string, ...children: TextualChunk[]): LinkChunk {
  return {
    type: "link",
    href,
    children,
  }
}

export function i(...children: TextualChunk[]): ItalicChunk {
  return {
    type: "italic",
    children,
  }
}

export function ipa(...children: TextualChunk[]): IPAChunk {
  return {
    type: "ipa",
    children,
  }
}
