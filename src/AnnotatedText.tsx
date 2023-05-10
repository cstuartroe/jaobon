import React, { Component } from "react";
import { Root, ROOTS } from "./roots";

type ACProps = {
    root: Root,
}

type ACState = {
    tooltipShown: boolean,
}

export class AnnotatedCharacter extends Component<ACProps, ACState> {
  constructor(props: ACProps) {
    super(props);
    this.state = {
        tooltipShown: false,
    };
  }


  render() {
      return (
          <span
              className="annotated"
              onMouseEnter={() => this.setState({tooltipShown: true})}
              onMouseLeave={() => this.setState({tooltipShown: false})}
          >
              <a
                  href={`/roots#${this.props.root.syllable}`}
                  target="_blank"
                  className="cjk"
              >
                  {this.props.root.CJK}
              </a>
              <span className="annotation">{this.props.root.syllable}</span>
              {this.state.tooltipShown && (
                  <span className="translation">{this.props.root.definition}</span>
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


export function parseJaobon(sentence: string): (Root | string)[] {
    sentence = sentence.toLocaleLowerCase();

    const pieces: (Root | string)[] = [];

    let currentWord = "";

    function popWord(i: number) {
        if (currentWord !== "") {
            const root = ROOTS.get(currentWord);
            if (root === undefined) {
                console.error(`Unrecognized syllable: ${currentWord}`)
            } else {
                pieces.push(root)
            }

            currentWord = "";
        }
    }

    for (let i = 0; i < sentence.length; i++) {
        const c = sentence[i];
        if (c.match(/[a-z]/) !== null) {
            currentWord += c;
        } else {
            popWord(i);
            pieces.push(c)
        }
    }
    popWord(-1);

    return pieces;
}

export default function AnnotatedText(props: Props) {
    return <>
        {parseJaobon(props.sentence).map((piece, i)=> {
            if (typeof piece === "string") {
                const c = charMappings.get(piece);
                if (c === undefined) {
                    console.error(`Unknown char: ${piece}`);
                } else {
                    return <span className="cjk" key={i}>{c}</span>;
                }
            } else {
                return <AnnotatedCharacter root={piece} key={i}/>;
            }
        })}
    </>
}
