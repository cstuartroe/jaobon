import React, { Component } from "react";
import {Link, useParams} from "react-router-dom";
import AnnotatedText from "./AnnotatedText";

type TextLine = {
  jaobon: string,
  translation: string,
}

type Text = {
  title: string,
  description?: string | JSX.Element,
  lines: TextLine[],
}

const texts = new Map<string, Text>([
    ["syntax_test", {
      title: "Syntax Test Cases",
      description: <>
        This is a translation of fiziwig's{' '}
        <a href="https://cofl.github.io/conlang/resources/mirror/conlang-syntax-test-cases.html">Conlang Syntax Test Cases</a>.
      </>,
      lines: [
        {
          jaobon: "son ge lus.",
          translation: "The sun shines.",
        },
        {
          jaobon: "son en ge lus.",
          translation: "The sun is shining.",
        },
        {
          jaobon: "son de ge lus.",
          translation: "The sun shone.",
        },
        {
          jaobon: "son a ge lus.",
          translation: "The sun will shine.",
        },
        {
          jaobon: "son pas ge lus.",
          translation: "The sun has been shining.",
        },
        {
          jaobon: "son ge lus nu bes.",
          translation: "The sun is shining again.",
        },
        {
          jaobon: "son ge lus bon son.",
          translation: "The sun will shine tomorrow.",
        },
        {
          jaobon: "son hen ge lus.",
          translation: "The sun shines brightly.",
        },
        {
          jaobon: "lus son ge lus.",
          translation: "The bright sun shines.",
        },
        {
          jaobon: "son en wak a xan je xas.",
          translation: "The sun is rising now.",
        },
      ],
    }],
]);

export function TextReader(props: {}) {
  const { textId } = useParams();

  if (textId === undefined) {
    return null;
  }

  const text = texts.get(textId);

  if (text === undefined) {
    return null;
  }

  return (
      <>
        <h2>{text.title}</h2>

        {text.description && (
            <p>{text.description}</p>
        )}

        {text.lines.map((line, i) => <div key={i}>
          <p><AnnotatedText sentence={line.jaobon}/></p>
          <p>{line.translation}</p>
        </div>)}
      </>
  );
}

export default class Texts extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <>
        <h1>Texts</h1>

        {Array.from(texts.entries()).map(([textId, text], _) => (
            <h2 key={textId}><Link to={`/texts/${textId}`}>{text.title}</Link></h2>
        ))}
      </>
    );
  }
}
