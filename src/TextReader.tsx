import React, {useContext, useState} from "react";
import {Link, useParams} from "react-router-dom";

import {Root, ROOTS} from "./roots";
import {
  AnnotatedCharacter,
  isError,
  isLiteral,
  isPN,
  multiscriptText,
  parseJaobon,
  TranslatedLine
} from "./AnnotatedText";
import {DisplaySettingsContext} from "./DisplaySettings";
import {Text, Collection} from "./texts/types";
import collections from "./texts/collections";
import {Coda, Onset, stringToSyllable, Vowel} from "./syllables";
import {Document, h1, h2, h3, p, img, i} from "./formatting";

export const TextsDocument: Document = [
  h1("Texts"),
];

collections.forEach(collection => {
  TextsDocument.push(
    h2(collection.title),
    p(...collection.description || []),
  );

  collection.texts.forEach(text => {
    TextsDocument.push(
      h3(text.title),
      p(...text.description || []),
    );

    text.lines.forEach(line => {
      const mt = multiscriptText(line.jaobon);
      if (isError(mt)) {
        throw new Error(mt.message)
      }

      TextsDocument.push(
        p(mt.CJK),
        p(i(mt.roman)),
        p('"', line.translation, '"'),
      );

      if (line.image !== undefined) {
        TextsDocument.push(img(line.image));
      }
    })
  });
})

type TextStats = {
  frequencies: Map<Root, number>,
  numLines: number,
}

const newTextStats = (): TextStats => ({
  frequencies: new Map<Root, number>(),
  numLines: 0,
});

function addText(stats: TextStats, text: Text) {
  text.lines.forEach(line => {
    stats.numLines++;
    const roots: Root[] = [];
    const text = parseJaobon(line.jaobon);
    if (isError(text)) {
      throw text.message;
    }
    text.forEach(piece => {
      if (typeof piece === "string") {
        return;
      } else if (isLiteral(piece)) {
        return;
      } else if (isPN(piece)) {
        roots.push(...piece.roots);
      } else {
        roots.push(piece);
      }
    })

    roots.forEach(piece => {
      stats.frequencies.set(piece, (stats.frequencies.get(piece) || 0) + 1);
    });
  });
}

function singleTextStats(text: Text) {
  const out = newTextStats();
  addText(out, text);
  return out
}

export function corpusStats(texts: Text[]) {
  const out = newTextStats();
  texts.forEach(text => addText(out, text));
  return out;
}

export function getTotalRoots(frequencies: Map<Root, number>) {
  return Array.from(frequencies.values()).reduce((a, b) => a + b, 0);
}

export function sortedEntries<T>(map: Map<T, number>) {
  return Array.from(map.entries()).sort((a, b) => b[1] - a[1])
}

export function percent(count: number, total: number) {
  return Math.round(10000 * count / total) / 100
}

function rootFrequencyList(frequencies: Map<Root, number>) {
  const totalRoots = getTotalRoots(frequencies);

  return (
    <ul>
      {sortedEntries(frequencies).map(([root, count], i) => (
        <li key={i}>
          <AnnotatedCharacter root={root}/>
          {' '}
          {count}
          {' '}
          ({percent(count, totalRoots)}%)
        </li>
      ))}
    </ul>
  );
}

function phonemeFrequencyList(frquencies: Map<Root, number>) {
  const onsets = new Map<Onset | undefined, number>();
  const vowels = new Map<Vowel, number>();
  const codas = new Map<Coda | undefined, number>();

  frquencies.forEach((count, root) => {
    const syllable = stringToSyllable(root.syllable);

    if (syllable === null) {
      return;
    }

    onsets.set(syllable.onset, (onsets.get(syllable.onset) || 0) + count);
    vowels.set(syllable.vowel, (vowels.get(syllable.vowel) || 0) + count);
    codas.set(syllable.coda, (codas.get(syllable.coda) || 0) + count);
  });

  const totalSyllables = getTotalRoots(frquencies);

  return (
    <>
      <p>Onset counts:</p>

      <ul>
        {sortedEntries(onsets).map(([onset, count], i) => (
          <li key={i}>
            {onset?.transcriptionLetter || "none"}: {count} ({percent(count, totalSyllables)}%)
          </li>
        ))}
      </ul>

      <p>Vowel counts:</p>

      <ul>
        {sortedEntries(vowels).map(([vowel, count], i) => (
          <li key={i}>
            {vowel.transcriptionLetter}: {count} ({percent(count, totalSyllables)}%)
          </li>
        ))}
      </ul>

      <p>Coda counts:</p>

      <ul>
        {sortedEntries(codas).map(([coda, count], i) => (
          <li key={i}>
            {coda || "none"}: {count} ({percent(count, totalSyllables)}%)
          </li>
        ))}
      </ul>
    </>
  );
}

type FrequenciesTallyProps = {
  stats: TextStats,
  collectionType: string,
}

function FrequenciesTally(props: FrequenciesTallyProps) {
  const {stats, collectionType} = props;
  const displaySettings = useContext(DisplaySettingsContext);

  const totalRoots = getTotalRoots(stats.frequencies);

  const [showRootFrequencies, setShowRootFrequencies] = useState<boolean>();
  const [showPhonemeFrequencies, setSgowPhonemeFrequencies] = useState<boolean>();

  return (
    <div style={{border: "1px solid black", padding: "1vw", marginBottom: "2vh"}}>
      <p>
        This {collectionType} has{' '}
        {stats.numLines} lines,{' '}
        {totalRoots} roots total,{' '}
        and {stats.frequencies.size} distinct roots.
      </p>

      <p>
        <a href="#" onClick={() => setShowRootFrequencies(!showRootFrequencies)}>
          Click to {showRootFrequencies ? "hide" : "show"} root frequencies for this {collectionType}
        </a>
      </p>

      {showRootFrequencies && rootFrequencyList(stats.frequencies)}

      {showRootFrequencies && (stats.frequencies.size > 250) && (
        <p style={{marginBottom: 0}}>
          Unused roots:{' '}
          {Array.from(ROOTS.values())
            .filter(r => stats.frequencies.get(r) === undefined)
            .map(r => (
              <>
                <AnnotatedCharacter root={r}/>
                {displaySettings.writingSystem == "roman" ? " " : "\u200b"}
              </>
            ))
          }
        </p>
      )}

      <p>
        <a href="#" onClick={() => setSgowPhonemeFrequencies(!showPhonemeFrequencies)}>
          Click to {showPhonemeFrequencies ? "hide" : "show"} phoneme frequencies for this {collectionType}
        </a>
      </p>

      {showPhonemeFrequencies && phonemeFrequencyList(stats.frequencies)}
    </div>
  );
}

export default function TextReader(props: {}) {
  const {textId, collectionId} = useParams();

  if (textId === undefined || collectionId === undefined) {
    return null;
  }

  const collection = collections.find(c => c.slug == collectionId);
  if (collection === undefined) {
    return null;
  }

  const text = collection.texts.find(t => t.slug == textId);
  if (text === undefined) {
    return null;
  }

  const stats = singleTextStats(text);

  return (
    <>
      <h2>{text.title}</h2>

      {text.description && (
        <p>{text.description}</p>
      )}

      <FrequenciesTally stats={stats} collectionType={'text'}/>

      {text.lines.map((line, i) => <div key={i}>
        <TranslatedLine jaobon={line.jaobon} translation={line.translation}
                        number={text.show_numbers ? i + 1 : undefined}/>
        {line.image && (
          <img className="inline-image" src={`/static/img/${line.image}`} style={{maxWidth: "50%"}}/>
        )}
      </div>)}
    </>
  );
}

export const CORPUS_STATS = corpusStats(Array.from(collections.reduce((l: Text[], c: Collection) => l.concat(c.texts), [])));


export function TextList(props: {}) {
  return (
    <>
      <h1>Texts</h1>

      <FrequenciesTally stats={CORPUS_STATS} collectionType={'corpus'}/>

      {collections.map((collection, i) => (
        <React.Fragment key={i}>
          <h2 key={collection.slug}>{collection.title}</h2>
          {collection.texts.map(text => (
            <h3 key={text.slug}><Link to={`/texts/${collection.slug}/${text.slug}`}>{text.title}</Link></h3>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}
