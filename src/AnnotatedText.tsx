import React, {useState} from "react";
import {Root, ROOTS} from "./roots";
import {stringToSyllable, syllableToDots} from "./syllables";
import classNames from "classnames";
import {WritingSystem, DisplaySettings} from "./DisplaySettings";

type ParsingError = {
  message: string;
}

export function isError(x: any): x is ParsingError {
  return x.message !== undefined;
}

function capitalizeWord(s: string): string {
  return s[0].toUpperCase() + s.slice(1);
}

function languageClassName(writingSystem: WritingSystem) {
  if (writingSystem === "texting") {
    return "roman";
  }
  return writingSystem;
}

type ACProps = {
  root: Root,
  displaySettings: DisplaySettings,
  capitalize?: boolean,
}

function annotated({root, displaySettings, capitalize}: ACProps) {
  switch (displaySettings.writingSystem) {
    case "roman":
      if (capitalize) {
        return capitalizeWord(root.syllable);
      } else {
        return root.syllable;
      }
    case "texting":
      return root.singleConsonant || root.syllable;
    case "cjk":
      return root.CJK;
    case "dots":
      const syllable = stringToSyllable(root.syllable);
      if (syllable === null) {
        return undefined;
      }
      return syllableToDots(syllable);
  }
}

export function AnnotatedCharacter(props: ACProps) {
  const [tooltipShown, setTooltipShown] = useState(false);

  return (
    <span
      className={classNames([
        "annotated",
        languageClassName(props.displaySettings.writingSystem),
        {"tooltip-shown": tooltipShown}
      ])}
      onMouseEnter={() => setTooltipShown(true)}
      onMouseLeave={() => setTooltipShown(false)}
    >
      <a
        href={`/roots#${props.root.syllable}`}
        target="_blank"
      >
        {annotated(props)}
      </a>
      {tooltipShown && (
        <span className="translation">
          <b>{props.root.syllable}</b>:{' '}
          {props.root.definition}
        </span>
      )}
    </span>
  );
}

type ProperNoun = {
  roots: Root[],
}

type Literal = {
  literal: string;
}

export function isPN(x: ProperNoun | Root): x is ProperNoun {
  return (x as ProperNoun).roots !== undefined;
}

export function isLiteral(x: any): x is Literal {
  return (x as Literal).literal !== undefined;
}

const ProperNounBrackets: { [key in WritingSystem]: [string, string] } = {
  "cjk": ["《", "》"],
  "dots": ["<", ">"],
  "roman": ["", ""],
  "texting": ["", ""],
}

type APNProps = {
  pn: ProperNoun,
  displaySettings: DisplaySettings,
}

function AnnotatedPN({pn, displaySettings}: APNProps) {
  const [lbr, rbr] = ProperNounBrackets[displaySettings.writingSystem];

  if (displaySettings.writingSystem === "texting") {
    displaySettings = {...displaySettings, writingSystem: "roman"}
  }

  return (
    <span className="proper-noun">
            <span className={languageClassName(displaySettings.writingSystem)}>{lbr}</span>
      {pn.roots.map((root, i) => (
        <AnnotatedCharacter root={root} displaySettings={displaySettings} key={i} capitalize={i === 0}/>
      ))}
      <span className={languageClassName(displaySettings.writingSystem)}>{rbr}</span>
        </span>
  );
}

const charMappings = new Map<string, [string, string]>([
  // [Original, [CJK, Dots]]
  [' ', ["\u200b", "\u200b"]],
  ['!', ['！', '!']],
  [',', ['，', '']],
  ['~', ['〜', '.']],
  ['.', ['。', '.']],
  ['?', ['？', '?']],
  ['(', ['（ ', '(']],
  [')', ['）', ')']],
  [':', ['：', ':']],
  ['-', ['–', '-']],
  ['“', ['「', '"']],
  ['”', ['」', '"']],
  ['…', ['…', '...']],
]);

export function parseJaobon(sentence: string): ParsingError | (Root | ProperNoun | Literal | string)[] {
  const pieces: (Root | ProperNoun | Literal | string)[] = [];

  let currentWord = "";
  let currentProperNoun: ProperNoun | undefined = undefined;
  let inLiteral = false;

  function pushPiece(piece: Root | Literal | string) {
    if (currentProperNoun === undefined) {
      pieces.push(piece);
    } else {
      if (typeof piece === "string") {
        if (piece !== " ") {
          return {message: "Tried to include punctuation in proper noun"};
        }
      } else if (isLiteral(piece)) {
        throw new Error("Proper noun cannot contain literal")
      } else {
        currentProperNoun.roots.push(piece);
      }
    }
  }

  function popWord() {
    if (currentWord !== "") {
      if (inLiteral) {
        pushPiece({literal: currentWord});
      } else {
        const root = ROOTS.get(currentWord);
        if (root === undefined) {
          console.error(`Unrecognized syllable: ${currentWord}`)
        } else {
          pushPiece(root);
        }
      }
      currentWord = "";
    }
  }

  for (let i = 0; i < sentence.length; i++) {
    const c = sentence[i];
    if (c === '`') {
      popWord();
      inLiteral = !inLiteral;
    } else if (inLiteral) {
      currentWord += c;
    } else if (c.match(/[a-z]/) !== null) {
      currentWord += c;
    } else if (c === '[') {
      if (currentProperNoun !== undefined) {
        return {message: "Nested brackets"};
      }
      currentProperNoun = {
        roots: [],
      };
      pieces.push(currentProperNoun);
    } else if (c === ']') {
      if (currentProperNoun === undefined) {
        return {message: "Unmatched bracket"};
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
    return {message: "Unmatched brackets"};
  }

  return pieces;
}

export type MultiscriptText = { roman: string, CJK: string }

export function multiscriptText(sentence: string): ParsingError | MultiscriptText {
  let roman = "";
  let CJK = "";
  const parsed = parseJaobon(sentence);
  if (isError(parsed)) {
    return parsed;
  }

  parsed.forEach((piece, i) => {
    if (typeof piece === "string") {
      if (piece === '"') {
        piece = (i > 0 && parsed[i - 1] !== " ") ? "”" : "“"
      }

      const pair = charMappings.get(piece);
      if (pair === undefined) {
        console.error(`Unknown char: ${piece}`);
      } else {
        roman += piece;
        if (piece != " ") {
          const [cjkPunct, dotsPunct] = pair;
          CJK += cjkPunct;
        }
      }
    } else if (isLiteral(piece)) {
      roman += piece.literal;
      CJK += piece.literal;
    } else if (isPN(piece)) {
      let romanPn = ""
      CJK += ProperNounBrackets["cjk"][0];
      piece.roots.forEach(root => {
        romanPn += root.syllable;
        CJK += root.CJK;
      });
      CJK += ProperNounBrackets["cjk"][1];
      roman += capitalizeWord(romanPn);
    } else {
      roman += piece.syllable;
      CJK += piece.CJK;
    }
  })

  return {
    roman,
    CJK,
  }
}

type Props = {
  sentence: string,
  displaySettings: DisplaySettings,
  inline: boolean,
}

export default function AnnotatedText(props: Props): JSX.Element {
  const parsed = parseJaobon(props.sentence);
  if (isError(parsed)) {
    return <span style={{color: "red"}}>{parsed.message}</span>;
  }

  return <span className={props.inline ? "inline" : ""}>
        {parsed.map((piece, i) => {
          if (typeof piece === "string") {
            if (piece === '"') {
              piece = (i > 0 && parsed[i - 1] !== " ") ? "”" : "“"
            }

            const pair = charMappings.get(piece);
            if (pair === undefined) {
              console.error(`Unknown char: ${piece}`);
            } else {
              const [cjkPunct, dotsPunct] = pair;
              let punct: string = "";
              switch (props.displaySettings.writingSystem) {
                case "roman":
                case "texting":
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
          } else if (isLiteral(piece)) {
            return <span className={props.displaySettings.writingSystem} key={i}>{piece.literal}</span>;
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
      <p>{(props.displaySettings.showTranslation === "show") && props.translation}</p>
    </div>
  );
}
