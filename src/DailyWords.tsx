import React, { Component } from "react";

import {Root, ROOTS} from "./roots";
import AnnotatedText, {MultiscriptText, multiscriptText} from "./AnnotatedText";
import {DisplaySettings} from "./DisplaySettings";

type DailyRoot = {
  root: Root,
  example_sentence: {
    English: string,
    Jaobon: MultiscriptText,
  }
}

function dr(rootStr: string, Jaobon: string, English: string): DailyRoot {
  const root = ROOTS.get(rootStr);

  if (root === undefined) {
    throw "root not found";
  }

  return {
    root,
    example_sentence: {
      English,
      Jaobon: multiscriptText(Jaobon),
    }
  }
}

export const DAILY_ROOTS: DailyRoot[] = [
    // NYD
    dr("nu", "je son kai nu nen!", "Today begins a new year!"),

    // Imbolc
    dr("lus", "son lus as ke ten bin wa ben lu.", "The sunlight melts the snow."),

    // Tiger
    dr("gak", "en lek nao ne den, men jen xi kan pik nis gak.", "On the internet, many people like looking at pictures of cats."),
    dr("xin", "lus xas xin no ken es kan.", "During the daytime, stars cannot be seen."),
    dr("un", "me jen jo bi en un cok man guk we.", "All people live together in just one world."),
    dr("dos", "jao pao ce yo dos lun.", "Bicycles have two wheels."),
    dr("san", "san huk jan es la jan ki mas duk.", "Triangles are the strongest shape."),
    dr("cak", "cun xas es un de cak pis de nen.", "Spring is one quarter of the year."),

    dr("u", "mi xo yo u xo cik. ki mas kok es min nis ho xo cik.", "My hand has five fingers. The shortest is called the thumb."),
    dr("ses", "cun us gok yo ses sun gok.", "A carbon atom has six protons."),
    dr("ci", "jen men des ke ci es ji ki se mas xi mas bes de me o ji.", "People say that seven is their favorite number more often than any other number."),
    dr("ok", "en lek nao de je xas des guk yo ok yes o no.", "In modern computers, a byte has eight bits."),
    dr("nai", "ji xe cik ki en bek de goi nes es nai hen men bes.", "The last digit of a price is very often nine."),
    dr("das", "mi men gai yus das o das dos nis ji gen?", "Should we use ten or twelve as a numerical base?"),

    dr("gas", "mi ce yo gas lun ki ca.", "My car has bad tires."),
    dr("mu", "mu es yus we ki mak mu pen.", "Wood is used to make paper."),
    dr("ik", "ik hoi mek as ik xok yos.", "An engine burns gasoline."),
    dr("jin", "mi pas no yo jin ki go nis mai tek je to te.", "I didn't have enough money to buy the hat."),
    dr("wa", "ni yao bin wa i sun gos pon a ni wa o?", "Do you want ice and lemon to put in your water?"),
    dr("tu", "mi men ken ba tu pik de gon tu ge ni.", "We can give you a map of the park."),

    dr("wai", "je hun wa ki yo wai yun sai es mas xi nis mi.", "The soup with cauliflower is my favorite."),
    dr("gin", "sai gos ki no lis es gin mas bes.", "Unripe fruit is usually green."),
    dr("kun", "gu xas jen men as yus kun jin mak mai jin.", "In old times people made money from gold."),
    dr("hon", "pi de jin xin es jus jin sun hun, loi es hon.", "The surface of Mars is iron oxide, that's why it's red."),
    dr("lan", "juk yek de nus ma i nan ma es lan, yek de cik mos ye lan.", "If the eyes of the mother and father are both blue, the eyes of their child must also be blue."),
    dr("dak", "xok bok den es mas dak de me o luk ki mi pas bis.", "The inside of the cave is the darkest place I've ever been."),

    dr("non", "en non tu mi men as non yan i wa poi.", "On the farm we raise goats and ducks."),
    dr("wi", "juk tak, je an no as wi - jas we ta ak we ki pas mo.", "When it's afraid, the animal doesn't run away - it actually pretends to be dead."),
    dr("bus", "ni jo bus as ca mi han wa gan o?", "Did you just break my umbrella on purpose?"),
    dr("hoi", "me dos das nai ban son xas, mun hoi wis man lun.", "Every twenty-nine days, the moon completes an orbit."),
    dr("nek", "je pek jon cik as ke mi nek den yo doi.", "This virus makes my throat hurt."),
];

type Props = {
  displaySettings: DisplaySettings,
}

type State = {
}

export default class DailyWords extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const json = JSON.stringify(DAILY_ROOTS, null, 2);

    const usedRoots: Set<string> = new Set();
    DAILY_ROOTS.forEach(root => {
      usedRoots.add(root.root.syllable);
    })
    const unusedRoots: [number, Root][] = [];
    ROOTS.forEach(root => {
      if (!usedRoots.has(root.syllable)) {
        unusedRoots.push([Math.random(), root]);
      }
    });
    unusedRoots.sort();

    return (
      <>
        <p style={{paddingTop: "10px"}}>
          {unusedRoots.length} unused roots:{' '}
          <AnnotatedText
            sentence={unusedRoots.map(([_, root]) => root.syllable).join(' ')}
            displaySettings={this.props.displaySettings}
            inline={true}
          />
        </p>
        <p onClick={() => navigator.clipboard.writeText(json)} style={{cursor: "pointer"}}>Copy</p>
        <pre>
          {json}
        </pre>
      </>
    );
  }
}
