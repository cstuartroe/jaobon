import {TextLine, Collection} from "./types";
import {DAILY_ROOTS} from "../DailyWords";
import React from "react";

const challenges: Collection = {
  title: "Challenges",
  slug: "challenges",
  texts: [
    {
      title: "Jaobon Root A Day",
      slug: "rootaday",
      description: <>
        Follow along over on{' '}
        <a href="https://bsky.app/profile/jaobon.bsky.social" target="_blank">
          Bluesky
        </a>!
      </>,
      lines: DAILY_ROOTS.map(dr => dr && ({
        jaobon: `${dr.root.syllable}: ${dr.example_sentence.Jaobon_source}`,
        translation: `${dr.root.definition}: ${dr.example_sentence.English}`,
      })).filter(l => l !== null) as TextLine[],
    },
  ],
};

export default challenges;
