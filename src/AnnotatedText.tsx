import React, { Component } from "react";
import { Root, ROOTS } from "./roots";
import {stringToSyllable, syllableToDots} from "./syllables";
import classNames from "classnames";
import {WritingSystem, DisplaySettings} from "./DisplaySettings";

type ACProps = {
    root: Root,
    displaySettings: DisplaySettings,
    capitalize?: boolean,
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
              if (this.props.capitalize) {
                  return this.props.root.syllable[0].toUpperCase() + this.props.root.syllable.slice(1);
              } else {
                  return this.props.root.syllable;
              }
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

type ProperNoun = {
    roots: Root[],
}

export function isPN(x: ProperNoun | Root): x is ProperNoun {
    return (x as ProperNoun).roots !== undefined;
}

const ProperNounBrackets: {[key in WritingSystem]: [string, string]} = {
    "cjk": ["《", "》"],
    "dots": ["<", ">"],
    "roman": ["", ""],
}

type APNProps = {
    pn: ProperNoun,
    displaySettings: DisplaySettings,
}

class AnnotatedPN extends Component<APNProps, {}> {
    constructor(props: APNProps) {
        super(props);
    }

    render() {
        const {displaySettings, pn} = this.props;
        const [lbr, rbr] = ProperNounBrackets[displaySettings.writingSystem];

        return (
            <span className="proper-noun">
                <span className={displaySettings.writingSystem}>{lbr}</span>
                {pn.roots.map((root, i) => (
                    <AnnotatedCharacter root={root} displaySettings={displaySettings} key={i} capitalize={i === 0}/>
                ))}
                <span className={displaySettings.writingSystem}>{rbr}</span>
            </span>
        );
    }
}

const charMappings = new Map<string, [string, string]>([
    // [Original, [CJK, Dots]]
    [' ', ["\u200b", "\u200b"]],
    ['!', ['！', '!']],
    [',', ['、', '']],
    ['~', ['〜', '.']],
    ['.', ['。', '.']],
    ['?', ['？', '?']],
    ['(', ['（ ', '(']],
    [')', ['）', ')']],
    [':', ['：', ':']],
]);

export function parseJaobon(sentence: string): (Root | ProperNoun | string)[] {
    sentence = sentence.toLocaleLowerCase();

    const pieces: (Root | ProperNoun | string)[] = [];

    let currentWord = "";
    let currentProperNoun: ProperNoun | undefined = undefined;

    function pushPiece(piece: Root | string) {
        if (currentProperNoun === undefined) {
            pieces.push(piece);
        } else {
            if (typeof piece === "string") {
                if (piece !== " ") {
                    throw "Tried to include punctuation in proper noun";
                }
            } else {
                currentProperNoun.roots.push(piece);
            }
        }
    }

    function popWord() {
        if (currentWord !== "") {
            const root = ROOTS.get(currentWord);
            if (root === undefined) {
                console.error(`Unrecognized syllable: ${currentWord}`)
            } else {
                pushPiece(root);
            }

            currentWord = "";
        }
    }

    for (let i = 0; i < sentence.length; i++) {
        const c = sentence[i];
        if (c.match(/[a-z]/) !== null) {
            currentWord += c;
        } else if (c === '[') {
            if (currentProperNoun !== undefined) {
                throw "Nested brackets";
            }
            currentProperNoun = {
                roots: [],
            };
            pieces.push(currentProperNoun);
        } else if (c === ']') {
            if (currentProperNoun === undefined) {
                throw "Unmatched bracket";
            }
            popWord();
            currentProperNoun = undefined;
        } else {
            popWord();
            pushPiece(c);
        }
    }
    popWord();

    if (currentProperNoun !== undefined) {
        throw "Unmatched brackets";
    }

    return pieces;
}

type Props = {
    sentence: string,
    displaySettings: DisplaySettings,
    inline: boolean,
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
                        case "roman":
                            punct = piece;
                            break;
                        case "cjk":
                            punct = cjkPunct;
                            break;
                        case "dots":
                            punct = dotsPunct;
                            break;
                    }
                    return <span className={props.displaySettings.writingSystem} key={i}>{punct}</span>;
                }
            } else if (isPN(piece)) {
                return <AnnotatedPN pn={piece} displaySettings={props.displaySettings} key={i}/>;
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
