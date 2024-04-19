import React, { Component } from "react";
import {validSyllableString} from "./syllables";
import {Link} from "react-router-dom";
import NoteManager from "./notes";

type Props = {
}

type State = {
}


const notes = {
  alveolar: 'In free variation with dental place of articulation.',
  stops: 'The fortis-lenis distinction may surface as a difference in voicing, aspiration, or both. I notate stops/affricates in broad transcription as though they contrast in voicing.',
  affricates: <>May be any coronal affricate: <IPA>[t͡ʃ d͡ʒ]</IPA>, <IPA>[t͡ɕ d͡ʑ]</IPA>, <IPA>[t͡ʂ d͡ʐ]</IPA>, or even <IPA>[t͡s d͡z]</IPA>.'</>,
  fricatives: 'Voicing is non-contrastive in fricatives, but they preferably remain unvoiced. This is because some listeners may have trouble distinguishing between voiced affricates and fricatives.',
  shush: <>Free variation: <IPA>[ʃ~ɕ~ʂ]</IPA>.</>,
  liquids: 'May be any lateral or rhotic consonant.',
  h: <>Free variation: <IPA>[x~χ~h]</IPA></>,
};

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

export function IPA(props: React.PropsWithChildren<{}>) {
  return <span style={{fontFamily: "Gentium"}}>{props.children}</span>;
}


export default class Phonology extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }


  render() {
    const nm = NoteManager(notes);

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
              <th>Alveolar{nm.noteRef('alveolar')}</th>
              <th>Palatal</th>
              <th>Velar</th>
              <th>Glottal</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>Nasal</th>
              <td><IPA>m</IPA></td>
              <td><IPA>n</IPA></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>Fortis stop/affricate{nm.noteRef('stops')}</th>
              <td><IPA>p</IPA></td>
              <td><IPA>t</IPA></td>
              <td><IPA>t͡ʃ</IPA>{nm.noteRef('affricates')}</td>
              <td><IPA>k</IPA></td>
              <td><IPA>ʔ</IPA></td>
            </tr>
            <tr>
              <th>Lenis stop/affricate{nm.noteRef('stops')}</th>
              <td><IPA>b</IPA></td>
              <td><IPA>d</IPA></td>
              <td><IPA>d͡ʒ</IPA>{nm.noteRef('affricates')}</td>
              <td><IPA>g</IPA></td>
              <td></td>
            </tr>
            <tr>
              <th>Fricative{nm.noteRef('fricatives')}</th>
              <td></td>
              <td><IPA>s</IPA></td>
              <td><IPA>ʃ</IPA>{nm.noteRef('shush')}</td>
              <td colSpan={2}><IPA>h</IPA>{nm.noteRef('h')}</td>
            </tr>
            <tr>
              <th>Approximant</th>
              <td><IPA>w</IPA></td>
              <td><IPA>l</IPA>{nm.noteRef('liquids')}</td>
              <td><IPA>j</IPA></td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>

          {nm.notesInOrder()}

          <p>Jaobon has the common system of five cardinal vowels <IPA>/a e i o u/</IPA>. It also has two diphthongs <IPA>/ai̯ au̯/</IPA>.</p>

          <p>A number of initial-vowel sequences are disallowed: <IPA>/ti/</IPA>, <IPA>/di/</IPA>, <IPA>/si/</IPA>, <IPA>/hi/</IPA>, <IPA>/ji/</IPA>, and <IPA>/wu/</IPA>.</p>

          <p>Jaobon has three possible coda consonant phonemes:</p>

          <ul>
            <li>A stop <IPA>/Q/</IPA>, which is typically pronounced <IPA>[k̚]</IPA> or <IPA>[ʔ]</IPA>, but may optionally assimilate in place to a following consonant.</li>
            <li>A nasal <IPA>/N/</IPA>, which is typically <IPA>[n~ŋ~ɴ]</IPA> before a pause, but usually assimilates in place to a following consonant. May also surface as nasalization of the previous vowel.</li>
            <li>A fricative <IPA>/S/</IPA>, which is preferably <IPA>[s]</IPA> but may be any fricative sound.</li>
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
              {initials.map(i => <th key={i}><IPA>{i}</IPA></th>)}
            </tr>
            </thead>
            <tbody>
            {rimes.map(r => (
                <tr key={r}>
                  <th><IPA>{r}</IPA></th>
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
