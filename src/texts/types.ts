export type TextLine = {
  jaobon: string,
  translation: string,
  image?: string,
}

export type Text = {
  title: string,
  slug: string,
  description?: string | JSX.Element,
  show_numbers?: boolean,
  lines: TextLine[],
}

export type Collection = {
  title: string,
  slug: string,
  description?: string | JSX.Element,
  texts: Text[],
}
