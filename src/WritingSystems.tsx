import React, {Component} from "react";
import NoteManager from "./notes";
import {Link} from "react-router-dom";

const noBreakSpace = '\xa0';

function dots(s: string) {
    return <span className="dots">{s.replace(' ', noBreakSpace)}</span>
}

function inlineDots(s: string) {
    return <span className="inline">{dots(s)}</span>
}

function IPA(props: React.PropsWithChildren<{}>) {
    return <span style={{fontFamily: "Gentium"}}>/{props.children}/</span>;
}

const latinNotes = {
    glottal_stop: 'The glottal stop is not written in romanization.',
};

const fdNotes = {
    h: <><IPA>h</IPA> is written as though it were velar (which is a valid alternative pronunciation of the phoneme).</>,
    glottal_stop: (
        'The glottal stop is written as though it were a velar approximant, with the idea that both behave something like' +
        'a zero onset. Non-coincidentally, the velar place of articulation and approximant manner of articulation are' +
        'both denoted by the absence of marks, so that this zero onset is written with essentially no grapheme.'
    ),
    extra_symbols: <>
        <IPA>ɲ ŋ f</IPA> are not phonemic in Jaobon, and though the corresponding Featural Dots graphemes are not used
        for native Jaobon vocabulary, they are implied by the featural nature of the script and may be used in
        transcribing proper nouns.
    </>,
}

type Props = {}

type State = {}

export default class WritingSystems extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }


    render() {
        const latinNm = NoteManager(latinNotes);
        const fdNm = NoteManager(fdNotes);

        return (
            <>
                <p>
                    Jaobon has three canonical writing systems - Latin alphabet, CJK characters, and Featural Dots,
                    which are described in that order on this page.
                </p>

                <h1>Latin alphabet</h1>

                <p>
                    Jaobon uses a purely phonemic romanization scheme, that hopefully largely satisfies the principle of
                    least
                    surprise, although in an effort to keep every consonant spelling to one letter, I made the perhaps
                    mildly spicy choices <IPA>t͡ʃ</IPA> ⟨c⟩ and <IPA>ʃ</IPA> ⟨x⟩ (take up any complaints with Indonesian
                    and Portuguese, respectively). Its romanization for syllable-initial consonants is
                    as follows:
                </p>

                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Labial</th>
                        <th>Alveolar</th>
                        <th>Palatal</th>
                        <th>Velar</th>
                        <th>Glottal</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Nasal</th>
                        <td><IPA>m</IPA> ⟨m⟩</td>
                        <td><IPA>n</IPA> ⟨n⟩</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Fortis stop/affricate</th>
                        <td><IPA>p</IPA> ⟨p⟩</td>
                        <td><IPA>t</IPA> ⟨t⟩</td>
                        <td><IPA>t͡ʃ</IPA> ⟨c⟩</td>
                        <td><IPA>k</IPA> ⟨k⟩</td>
                        <td><IPA>ʔ</IPA> ⟨⟩{latinNm.noteRef('glottal_stop')}</td>
                    </tr>
                    <tr>
                        <th>Lenis stop/affricate</th>
                        <td><IPA>b</IPA> ⟨b⟩</td>
                        <td><IPA>d</IPA> ⟨d⟩</td>
                        <td><IPA>d͡ʒ</IPA> ⟨j⟩</td>
                        <td><IPA>g</IPA> ⟨g⟩</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Fricative</th>
                        <td></td>
                        <td><IPA>s</IPA> ⟨s⟩</td>
                        <td><IPA>ʃ</IPA> ⟨x⟩</td>
                        <td colSpan={2}><IPA>h</IPA> ⟨h⟩</td>
                    </tr>
                    <tr>
                        <th>Approximant</th>
                        <td><IPA>w</IPA> ⟨w⟩</td>
                        <td><IPA>l</IPA> ⟨l⟩</td>
                        <td><IPA>j</IPA> ⟨y⟩</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>

                {latinNm.notesInOrder()}

                <p>
                    The vowels <IPA>a e i o u</IPA> are romanized ⟨a e i o u⟩,
                    because I'm not a madman.{' '}
                    <IPA>ai̯ au̯ oi̯</IPA> are ⟨ai ao oi⟩ (with ⟨ao⟩ taking inspiration from Mandarin Pinyin),
                    and the coda consonants <IPA>Q N S</IPA> are spelled ⟨k n s⟩.
                </p>

                <h1>CJK Characters</h1>

                <p>
                    Every one of Jaobon's 366 roots has an assigned CJK character spelling, which can be found in
                    the{' '}
                    <Link to="/roots">root list</Link>.
                </p>

                <p>
                    For roots taken from Mandarin and Japanese, I use the (simplified) character used to spell the
                    source word/morpheme;
                    for the handful of roots which derive from multiple Mandarin terms which happen to have similar
                    sounds and meanings, I picked the character used for whichever, in my judgement, is closest to the
                    core meaning of the Jaobon root. Roots derived from two-character Mandarin words generally take
                    their
                    initial consonant and their vowel from the first Mandarin syllable, and their final consonant from
                    the initial consonant of the second Mandarin syllable; in such cases, I spell the Jaobon root with
                    the first character of the Mandarin word, since it contributes the bulk of the phonetic information.
                </p>

                <p>
                    For roots derived from languages not conventionally spelled with CJK characters, I simply chose
                    a CJK character whose meaning matches the Jaobon root.
                </p>

                <p>
                    Of note: I strictly use simplified characters to spell Jaobon, as their greater graphical simplicity
                    suits the fact that Jaobon uses many fewer characters than any other language using CJK characters.
                    It would actually be non-trivial to convert Jaobon spelling to traditional
                    equivalents, as many single characters used in Jaobon are the simplified variant of
                    multiple traditional characters of different meanings, with the meaning of more than one traditional
                    character serving as inspiration for the meaning of the root as used in Jaobon.
                </p>

                <h1>Featural Dots</h1>

                <p>
                    The third writing system I use for Jaobon is an original script I designed for it, which is
                    nevertheless general-purpose and easily extensible. Featural Dots is a simple featural writing
                    system which stacks segments into syllable blocks like so:{' '}
                    {inlineDots('kaN')} <IPA>kaN</IPA>.
                    In this block, {inlineDots('k ')} represents <IPA>k</IPA>,{' '}
                    {inlineDots('a')} represents <IPA>a</IPA>, and{' '}
                    {inlineDots(' N')} represents <IPA>N</IPA>.
                    For the rest of this section, initial and final consonant characters will be desplayed along with
                    the vowel grapheme {inlineDots('a')} <IPA>a</IPA>, in order to clearly see the positioning of the
                    consonant grapheme relative to the vowel.
                </p>

                {/*<p>*/}
                {/*    This section describes the mode of Featural Dots as used in Jaobon. For more detailed information*/}
                {/*    about Featural Dots as a general-purpose script, see{' '}*/}
                {/*    <Link to="/featural_dots">the dedicated page</Link>.*/}
                {/*</p>*/}

                <p>
                    Initial consonants are written with two distinct rows, with the top row denoting manner of
                    articulation and the second row denoting the place of articulation:
                </p>

                <table className="fd-phoneme-chart">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Labial {dots('wa')}</th>
                        <th>Alveolar {dots('la')}</th>
                        <th>Palatal {dots('ya')}</th>
                        <th>Velar {dots('a')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Nasal {dots('qa')}</th>
                        <td><IPA>m</IPA> {dots('ma')}</td>
                        <td><IPA>n</IPA> {dots('na')}</td>
                        <td><IPA>ɲ</IPA> {dots('qya')}{fdNm.noteRef('extra_symbols')}</td>
                        <td><IPA>ŋ</IPA> {dots('qa')}{fdNm.noteRef('extra_symbols')}</td>
                    </tr>
                    <tr>
                        <th>Fortis stop/affricate {dots('ka')}</th>
                        <td><IPA>p</IPA> {dots('pa')}</td>
                        <td><IPA>t</IPA> {dots('ta')}</td>
                        <td><IPA>t͡ʃ</IPA> {dots('ca')}</td>
                        <td><IPA>k</IPA> {dots('ka')}</td>
                    </tr>
                    <tr>
                        <th>Lenis stop/affricate {dots('ga')}</th>
                        <td><IPA>b</IPA> {dots('ba')}</td>
                        <td><IPA>d</IPA> {dots('da')}</td>
                        <td><IPA>d͡ʒ</IPA> {dots('ja')}</td>
                        <td><IPA>g</IPA> {dots('ga')}</td>
                    </tr>
                    <tr>
                        <th>Fricative {dots('ha')}</th>
                        <td><IPA>f</IPA> {dots('fa')}{fdNm.noteRef('extra_symbols')}</td>
                        <td><IPA>s</IPA> {dots('sa')}</td>
                        <td><IPA>ʃ</IPA> {dots('xa')}</td>
                        <td><IPA>h</IPA> {dots('ha')}{fdNm.noteRef('h')}</td>
                    </tr>
                    <tr>
                        <th>Approximant {dots('a')}</th>
                        <td><IPA>w</IPA> {dots('wa')}</td>
                        <td><IPA>l</IPA> {dots('la')}</td>
                        <td><IPA>j</IPA> {dots('ya')}</td>
                        <td><IPA>ʔ</IPA> {dots('a')}{fdNm.noteRef('glottal_stop')}</td>
                    </tr>
                    </tbody>
                </table>

                {fdNm.notesInOrder()}

                <p>
                    Vowels are visually distinguished by being written around a vertical stem, the only vertical line
                    used by Featural Dots. Vowels are also featural, with height and frontness being marked by the
                    position of a horizontal spoke off the vertical stem.
                </p>

                <table className="fd-phoneme-chart">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Front</th>
                        <th>Central</th>
                        <th>Back</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>High</th>
                        <td><IPA>i</IPA> {dots('i')}</td>
                        <td></td>
                        <td><IPA>u</IPA> {dots('u')}</td>
                    </tr>
                    <tr>
                        <th>Mid</th>
                        <td><IPA>e</IPA> {dots('e')}</td>
                        <td></td>
                        <td><IPA>o</IPA> {dots('o')}</td>
                    </tr>
                    <tr>
                        <th>Low</th>
                        <td></td>
                        <td><IPA>a</IPA> {dots('a')}</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>

                <p>
                    Due to there being so few in Jaobon, the Featural Dots mode for Jaobon writes final consonants/semivowels
                    with a kind of shorthand for the initial graphemes, which hints at either a place or a manner of
                    articulation.
                </p>

                <p>
                    The diphthongs <IPA>ai̯ au̯ oi̯</IPA> are written {inlineDots('aI aU oI')}, respectively, with
                    the single dots beneath using the same back = left / front = right symbolism as the vowels and
                    initial consonants, with {inlineDots('aI aU oI')} <IPA>ai̯ au̯</IPA> specifically looking like vertically
                    flipped versions of {inlineDots('ya wa yo')} <IPA>ja wa jo</IPA>.
                </p>

                <p>
                    In contrast, the final consonant graphemes are essentially bare manner of articulation markers,
                    since that is their only explicitly contrastive feature. <IPA>aN</IPA> is {inlineDots('aN')}, using
                    the same center dot as nasal initials, <IPA>aQ</IPA> is {inlineDots('aK')}, using the characteristic
                    double dot of fortis stops, and <IPA>aS</IPA> is {inlineDots('aS')}, using the horizontal line of
                    fricatives.
                </p>

                <h1>Representation of proper nouns</h1>

                <p>
                    Proper nouns like personal names and place names are set apart orthographically in all
                    writing systems for Jaobon. In the Latin alphabet, names are written capitalized, with
                    all syllables grouped together without spaces: <span className="roman">Toma</span>.
                    In CJK characters double angle brackets are placed around the name:{' '}
                    <span className="inline"><span className="cjk">《头妈》</span></span>. In Featural Dots, similar bracket characters are used
                    in the same way: {inlineDots('<toma>')}.
                </p>
            </>
        );
    }
}
