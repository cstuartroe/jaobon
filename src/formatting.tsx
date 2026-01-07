import React from "react";
import {Link} from "react-router-dom";
import AnnotatedText from "./AnnotatedText";
import classNames from "classnames";

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

type SuperscriptChunk = {
  type: "superscript",
  children: TextualChunk[],
}

type SpanChunk = {
  type: "span",
  className: string,
  children: TextualChunk[],
}

export type TextualChunk = string | InlineJaobon | LinkChunk | ItalicChunk | IPAChunk | SuperscriptChunk | SpanChunk;

export type FormatLevel = "h1" | "h2" | "h3" | "p";

export type TableCell = {
  th: boolean,
  colspan?: number,
  style?: React.CSSProperties,
  children: TextualChunk[],
}

export type TextSection = {
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

export type UnorderedListSection = {
  type: "unordered list"
  show_bullet: boolean,
  items: (TextualChunk | TextSection | UnorderedListSection)[][], // TODO: remove TextSection?
}

export type TableSection = {
  type: "table",
  rows: TableCell[][],
}

export type HRSection = {
  type: "hr",
}

export type DocumentSection = TextSection | ImageSection | UnorderedListSection | TableSection | HRSection;

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
      return <span className="ipa">{chunkChildren(chunk)}</span>;
    case "superscript":
      return <sup>{chunkChildren(chunk)}</sup>
    case "span":
      return <span className={chunk.className}>{chunkChildren(chunk)}</span>;
  }
}

function tableCellToJSX(cell: TableCell, key: number) {
  const attrs: {colSpan?: number, style?: React.CSSProperties} = {};
  if (cell.colspan != undefined) {
    attrs.colSpan = cell.colspan;
  }
  if (cell.style != undefined) {
    attrs.style = cell.style;
  }

  if (cell.th) {
    return (
      <th key={key} {...attrs}>{chunkChildren(cell)}</th>
    );
  } else {
    return (
      <td key={key} {...attrs}>{chunkChildren(cell)}</td>
    );
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
      const classes = classNames({
        hide_bullet: !section.show_bullet,
      });

      const lis = section.items.map((item, i) => {
        return (
          <li key={i}>{item.map((chunk, j) => {
            if (typeof chunk !== "string") {
              if (chunk.type === "text section") {
                return <React.Fragment key={j}>{sectionToJSX(chunk)}</React.Fragment>
              }
              if (chunk.type === "unordered list") {
                return <React.Fragment key={j}>{sectionToJSX(chunk)}</React.Fragment>;
              }
            }
            return <React.Fragment key={j}>{chunkToJSX(chunk)}</React.Fragment>;
          })}</li>
        );
      })

      return <ul className={classes}>{lis}</ul>;
    case "table":
      return (
        <table>
          <thead>
          <tr>
          {section.rows[0].map((cell, j) => tableCellToJSX(cell, j))}
          </tr>
          </thead>
          <tbody>
          {section.rows.slice(1).map((row, i) => (
            <tr key={i}>{row.map((cell, j) => tableCellToJSX(cell, j))}</tr>
          ))}
          </tbody>
        </table>
      );
    case "hr":
      return <hr/>;
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

export function ul(...items: (TextualChunk | TextSection | UnorderedListSection)[][]): UnorderedListSection {
  return {
    type: "unordered list",
    show_bullet: true,
    items,
  }
}

export const hr: HRSection = {type: "hr"};

export function table(...rows: TableCell[][]): TableSection {
  return {
    type: "table",
    rows,
  }
}

export function th(...children: TextualChunk[]): TableCell {
  return {
    th: true,
    children: children,
  }
}

export function td(...children: TextualChunk[]): TableCell {
  return {
    th: false,
    children: children,
  }
}

export function ijb(outline: string): InlineJaobon {
  return {
    type: "inline Jaobon",
    outline,
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

export function sup(...children: TextualChunk[]): SuperscriptChunk {
  return {
    type: "superscript",
    children,
  }
}

export function span(className: string, ...children: TextualChunk[]): SpanChunk {
  return {
    type: "span",
    className,
    children,
  }
}
