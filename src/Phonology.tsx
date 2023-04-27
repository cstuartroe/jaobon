import React, { Component } from "react";
import {validSyllableString} from "./syllables";
import {Link} from "react-router-dom";

type Props = {
}

type State = {
}


const notes = {
  alveolar: 'In free variation with dental place of articulation.',
  stops: 'The fortis-lenis distinction may surface as a difference in voicing, aspiration, or both. I notate stops/affricates in broad transcription as though they contrast in voicing.',
  affricates: 'May be any coronal affricate: [t͡ʃ d͡ʒ], [t͡ɕ d͡ʑ], [t͡ʂ d͡ʐ], or even [t͡s d͡z].',
  fricatives: 'Voicing is non-contrastive in fricatives, but they preferably remain unvoiced. This is because some listeners may have trouble distinguishing between voiced affricates and fricatives.',
  shush: 'Free variation: [ʃ~ɕ~ʂ].',
  liquids: 'May be any lateral or rhotic consonant.',
  h: 'Free variation: [x~χ~h]',
};

type noteId = keyof typeof notes;

export const initials = ['ʔ', 'm', 'n', 'p', 't', 't͡ʃ', 'k', 'b', 'd', 'd͡ʒ', 'g', 's', 'ʃ', 'h', 'w', 'l', 'j'];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const codas = ['', 'Q', 'N', 'S'];
const rimes: string[] = [];
vowels.forEach(v => {
  codas.forEach(c => {
    rimes.push(v + c);
  })
  if (v === 'a') {
    rimes.push('ai̯', 'au̯');
  }
});

function ipa2Syllable(ipa: string) {
  return ipa
      .replace('ʔ', '')
      .replace('j', 'y')
      .replace('t͡ʃ', 'c')
      .replace('d͡ʒ', 'j')
      .replace('ʃ', 'x')
      .replace('ai̯', 'ai')
      .replace('au̯', 'ao')
      .replace('Q', 'k')
      .replace('N', 'n')
      .replace('S', 's')
}


export default class Phonology extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }


  render() {
    const noteOrder = new Map<noteId, number>([]);
    const noteNum = (id: noteId) => (noteOrder.get(id) || 0) + 1;

    const noteRef = (id: noteId) => {
      if (noteOrder.get(id) === undefined) {
        noteOrder.set(id, noteOrder.size);
      }

      return <sup>{noteNum(id)}</sup>;
    }

    const noteBody = (id: noteId) => {
      return (
          <p key={id}><sup>{noteNum(id)}</sup> {notes[id]}</p>
      )
    }

    let syllableCount = 0;

    return (
        <>
          <h1>Phonology</h1>

          <p>
            Like most languages in the{' '}
            <a href="https://en.wikipedia.org/wiki/Mainland_Southeast_Asia_linguistic_area" target="_blank">
              Mainland Southeast Asia linguistic area
            </a>,
            Jaobon has a phonology heavily centered upon the syllable, with no clear level of phonological organization
            above the syllable.
            Also like most of those languages, the set of consonants appearing in the syllable onset is markedly
            different from the set appearing in the syllable coda.
            Unlike most of those languages, Jaobon does not employ contrastive syllable tone;
            indeed, Jaobon does not use any kind of lexically contrastive prosody.
          </p>

          <p>Jaobon has 17 initial consonants:</p>

          <table>
            <thead>
            <tr>
              <th></th>
              <th>Labial</th>
              <th>Alveolar{noteRef('alveolar')}</th>
              <th>Palatal</th>
              <th>Velar</th>
              <th>Glottal</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>Nasal</th>
              <td>m</td>
              <td>n</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>Fortis stop/affricate{noteRef('stops')}</th>
              <td>p</td>
              <td>t</td>
              <td>t͡ʃ{noteRef('affricates')}</td>
              <td>k</td>
              <td>ʔ</td>
            </tr>
            <tr>
              <th>Lenis stop/affricate{noteRef('stops')}</th>
              <td>b</td>
              <td>d</td>
              <td>d͡ʒ{noteRef('affricates')}</td>
              <td>g</td>
              <td></td>
            </tr>
            <tr>
              <th>Fricative{noteRef('fricatives')}</th>
              <td></td>
              <td>s</td>
              <td>ʃ{noteRef('shush')}</td>
              <td colSpan={2}>h{noteRef('h')}</td>
            </tr>
            <tr>
              <th>Approximant</th>
              <td>w</td>
              <td>l{noteRef('liquids')}</td>
              <td>j</td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>

          {Array.from(noteOrder.entries())
              .sort((a, b) => (a[1] - b[1]))
              .map(([id, _n], _i) => noteBody(id))
          }

          <p>Jaobon has the common system of five cardinal vowels /a e i o u/. It also has two diphthongs /ai̯ au̯/.</p>

          <p>A number of initial-vowel sequences are disallowed: /ti/, /di/, /si/, /hi/, /ji/, and /wu/.</p>

          <p>Jaobon has three possible coda consonant phonemes:</p>

          <ul>
            <li>A stop /Q/, which is typically pronounced [k̚] or [ʔ], but may optionally assimilate in place to a following consonant.</li>
            <li>A nasal /N/, which is typically [n~ŋ~ɴ] before a pause, but usually assimilates in place to a following consonant. May also surface as nasalization of the previous vowel.</li>
            <li>A fricative /S/, which is preferably [s] but may be any fricative sound.</li>
          </ul>

          <p>
            Jaobon syllable structure is CV(C), with an initial consonant and a vowel required and a coda optional.
            A coda consonant may not occur after a diphthong. These phonotactics result in 350 permissible syllables.
            In Jaobon, all 350 possible syllables are morphemes with a specific meaning:
          </p>

          <table>
            <thead>
            <tr>
              <th/>
              {initials.map(i => <th key={i}>{i}</th>)}
            </tr>
            </thead>
            <tbody>
            {rimes.map(r => (
                <tr>
                  <th>{r}</th>
                  {initials.map(i => {
                    const syllable = ipa2Syllable(i + r);
                    const permissible = validSyllableString(syllable);

                    return (
                        <td key={i} style={{backgroundColor: permissible ? 'transparent' : '#777'}}>
                          {permissible ? (
                              <Link to={`/roots#${syllable}`}>{++syllableCount}</Link>
                          ) : null}
                        </td>
                    );
                  })}
                </tr>
            ))}
            </tbody>
          </table>
        </>
    );
  }
}
