import React, { Component } from "react";
import { Root, ROOTS } from "./roots";
import {stringToSyllable, syllableToDots} from "./syllables";
import classNames from "classnames";

type ACProps = {
    root: Root,
    dots: boolean,
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

  annotated() {
      if (this.props.dots) {
          const syllable = stringToSyllable(this.props.root.syllable);
          if (syllable === null) {
              return undefined;
          }
          return syllableToDots(syllable);
      } else {
          return this.props.root.CJK;
      }
  }


  render() {
      const fontClass = this.props.dots ? "dots" : "cjk";

      return (
          <span
              className={classNames([
                  "annotated",
                  fontClass,
                  {"tooltip-shown": this.state.tooltipShown}
              ])}
              onMouseEnter={() => this.setState({tooltipShown: true})}
              onMouseLeave={() => this.setState({tooltipShown: false})}
          >
              <a
                  href={`/roots#${this.props.root.syllable}`}
                  target="_blank"
              >
                  {this.annotated()}
              </a>
              {this.state.tooltipShown && (
                  <span className="translation">
                      <b>{this.props.root.syllable}</b>:{' '}
                      {this.props.root.definition}
                  </span>
              )}
          </span>
    );
  }
}

type Props = {
    sentence: string,
    dots: boolean,
}

const charMappings = new Map<string, [string, string]>([
    // [Original, [CJK, Dots]]
    [' ', ['', '']],
    ['!', ['！', '.']],
    [',', ['、', '']],
    ['~', ['〜', '.']],
    ['.', ['。', '.']],
    ['?', ['？', '.']],
]);


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
                const pair = charMappings.get(piece);
                if (pair === undefined) {
                    console.error(`Unknown char: ${piece}`);
                } else {
                    const [cjkPunct, dotsPunct] = pair;
                    return <span className={props.dots ? "dots" : "cjk"} key={i}>{props.dots ? dotsPunct : cjkPunct}</span>;
                }
            } else {
                return <AnnotatedCharacter root={piece} dots={props.dots} key={i}/>;
            }
        })}
    </>
}

type TLProps = {
    number?: number,
    jaobon: string,
    translation: string,
}

export function TranslatedLine(props: TLProps) {
    return (
        <div className="translated-line">
            <p style={{position: "relative", marginBottom: ".5vh"}}>
                {props.number && (
                    <span style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translate(-100%, -50%)",
                        paddingRight: ".5vw",
                    }}>
                        {props.number}.
                    </span>
                )}
                <AnnotatedText sentence={props.jaobon} dots={true}/>
            </p>
            <p>{props.translation}</p>
        </div>
    );
}
