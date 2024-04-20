import React, { Component } from "react";
import { Root, ROOTS } from "./roots";
import {stringToSyllable, syllableToDots} from "./syllables";
import classNames from "classnames";
import {DisplaySettings} from "./DisplaySettings";

type ACProps = {
    root: Root,
    displaySettings: DisplaySettings,
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
      switch (this.props.displaySettings.writingSystem) {
          case "roman":
              return this.props.root.syllable
          case "cjk":
              return this.props.root.CJK;
          case "dots":
              const syllable = stringToSyllable(this.props.root.syllable);
              if (syllable === null) {
                  return undefined;
              }
              return syllableToDots(syllable);
      }
  }


  render() {
      return (
          <span
              className={classNames([
                  "annotated",
                  this.props.displaySettings.writingSystem,
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
    displaySettings: DisplaySettings,
    inline: boolean,
}

const charMappings = new Map<string, [string, string]>([
    // [Original, [CJK, Dots]]
    [' ', ["\u200b", "\u200b"]],
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
    return <span className={props.inline ? "inline" : ""}>
        {parseJaobon(props.sentence).map((piece, i)=> {
            if (typeof piece === "string") {
                const pair = charMappings.get(piece);
                if (pair === undefined) {
                    console.error(`Unknown char: ${piece}`);
                } else {
                    const [cjkPunct, dotsPunct] = pair;
                    let punct: string = "";
                    switch (props.displaySettings.writingSystem) {
                        case "roman": punct = piece; break;
                        case "cjk": punct = cjkPunct; break;
                        case "dots": punct = dotsPunct; break;
                    }
                    return <span className={props.displaySettings.writingSystem} key={i}>{punct}</span>;
                }
            } else {
                return <AnnotatedCharacter root={piece} displaySettings={props.displaySettings} key={i}/>;
            }
        })}
    </span>
}

type TLProps = {
    number?: number,
    jaobon: string,
    translation: string,
    displaySettings: DisplaySettings,
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
                <AnnotatedText sentence={props.jaobon} displaySettings={props.displaySettings} inline={false}/>
            </p>
            <p>{props.translation}</p>
        </div>
    );
}
