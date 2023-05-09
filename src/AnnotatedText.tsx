import React, { Component } from "react";
import {ROOTS} from "./roots";

type ACProps = {
    syllable: string,
}

type ACState = {
    tooltipShown: boolean,
}

class AnnotatedCharacter extends Component<ACProps, ACState> {
  constructor(props: ACProps) {
    super(props);
    this.state = {
        tooltipShown: false,
    };
  }


  render() {
      const root = ROOTS.get(this.props.syllable);
      if (root === undefined) {
          console.error(`Unrecognized syllable: ${this.props.syllable}`)
          return null;
      }

      return (
          <span
              className="annotated"
              onMouseEnter={() => this.setState({tooltipShown: true})}
              onMouseLeave={() => this.setState({tooltipShown: false})}
          >
              <a
                  href={`/roots#${this.props.syllable}`}
                  target="_blank"
              >
                  {root.CJK}
              </a>
              <span className="annotation">{this.props.syllable}</span>
              {this.state.tooltipShown && (
                  <span className="translation">{root.definition}</span>
              )}
          </span>
    );
  }
}

type Props = {
    sentence: string,
}

const charMappings = new Map<string, string | null>([
    [' ', null],
    ['!', '！'],
    [',', '、'],
    ['~', '〜'],
    ['.', '。'],
    ['?', '？'],
])

export default function AnnotatedText(props: Props) {
    const sentence = props.sentence.toLocaleLowerCase();
    const chunks: (string | JSX.Element | null)[] = [];

    let currentWord = "";

    function popWord(i: number) {
        if (currentWord !== "") {
            chunks.push(<AnnotatedCharacter syllable={currentWord} key={i}/>);
            currentWord = "";
        }
    }

    for (let i = 0; i < sentence.length; i++) {
        const c = sentence[i];
        if (c.match(/[a-z]/) !== null) {
            currentWord += c;
        } else {
            popWord(i);
            const chunk = charMappings.get(c);
            if (chunk === undefined) {
                console.error(`Unknown char: ${c}`);
            } else {
                chunks.push(chunk);
            }
        }
    }
    popWord(-1);

    return <>{chunks}</>
}
