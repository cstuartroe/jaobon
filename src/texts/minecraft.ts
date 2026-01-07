import {Collection} from "./types";
import {translations, splashes} from "../minecraft";

const minecraft: Collection = {
  title: "Minecraft",
  slug: "minecraft",
  texts: [
    {
      title: "Game Text",
      slug: "game_text",
      description: ["Translations of Minecraft in-game text"],
      lines: (
        translations
          .filter(t => !t.key.startsWith("language."))
          .map(t => ({jaobon: t.Jaobon, translation: t.English}))
      ),
    },
    {
      title: "Splash Texts",
      slug: "splash_texts",
      description: ["Translations of selected splash texts... I aimed to translate the spirit, not the literal meaning, in many cases"],
      lines: splashes.map(([translation, jaobon]) => ({jaobon, translation})),
    },
  ],
};

export default minecraft;
