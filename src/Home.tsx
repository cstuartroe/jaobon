import React, { Component } from "react";

type Props = {
}

type State = {
}

export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <>
          <h1>Jaobon!</h1>

          <p>
              is a constructed language with only 350 morphemes, all monosyllabic.

              Notably, these 350 syllables are the entire set of syllables distinguishable by Jaobon phonology; thus,
              every phonologically possible syllable has a meaning assigned to it.

              Almost all of these morphemes are derived from Mandarin, Spanish, and English, although there are a handful
              derived in whole or part from other languages: Japanese, Hindi, Latin, Arabic, etc.
          </p>

          <p>
              Like Mandarin, Jaobon has no morphology which modifies phonemes or results in syllable rebracketing.
              In this sense, Jaobon can be said to be a purely analytical language.
          </p>

          <p>
              The syntax of Jaobon is mostly head-initial, with SVO default word order, prepositions, and relative
              clauses which occur after the noun. However, compound nouns are head-final, and adjectives and other
              noun modifiers may appear before the noun when restrictive. Demonstratives and cardinal numbers appear
              before the noun. This syntax is broadly similar to the main source languages - Mandarin, Spanish, and
              English. Jaobon also uses <a href="https://en.wikipedia.org/wiki/Relational_noun">relational</a> nouns
              extensively in a manner similar to Mandarin, appearing after a noun.
          </p>

          <p>
              Jaobon is in large part inspired by, and in response to, Toki Pona; it shares many similarities but
              also a few key philosophical differences: more roots, shorter roots, and an explicitly prescribed
              dictionary of root collocations to express more complex concepts. Also, in contrast to Toki Pona's
              fairly neutral/unique flavor, I think that Jaobon has a distinct affinity with the{' '}
              <a href="https://en.wikipedia.org/wiki/Mainland_Southeast_Asia_linguistic_area">
                  Mainland Southeast Asia linguistic area
              </a>
              {' '}(particularly with Chinese languages) in its phonotactics, syntax, semantics, and overall feel.
          </p>

          <p>
              Jaobon has three canonical writing systems:
          </p>

          <ul>
              <li>The Latin alphabet, which is preferable for input methods and informal communication.</li>
              <li>
                  CJK characters, with a set of 350 in use in a one-to-one relationship with Jaobon morphemes.
                  I use simplified Chinese characters to write Jaobon, with the justification that visual simplicity
                  should be prioritized for such a small grapheme set.
                  {' '}
                  I prefer the use of CJK characters when reading; all texts on this site are rendered in CJK characters
                  by default.
              </li>
              <li>
                  A general-purpose featural script called Featural Dots, which is space-efficient and cool!
              </li>
          </ul>

          <p>
              If you look at the root list, you may soon realize that <i>jao bon</i> means "foot-bottom"
              (<i>bon</i> being a relational noun), or, logically,
              the sole of the foot. Why would I name the language something so random?
              In the <a href="https://app.memrise.com/course/409937/basic-jaobon/">first iteration of Jaobon</a>,{' '}
              <i>jao bon</i> was a direct calque of the name of Toki Pona, coming from Mandarin 叫 and Spanish{' '}
              <i>bueno</i>. In the next version, the meanings of most syllables were reassigned, and <i>jao bon</i>{' '}
              happened to now mean "foot-bottom"; I was charmed by the new semantics and decided not to rename the
              language. Jaobon is now on its third iteration, but the meanings of both <i>jao</i> and <i>bon</i>{' '}
              happen not to have changed since version 2, and I like the nonsense name as much as I ever did.
          </p>
      </>
    );
  }
}
