import React, { Component } from "react";

import {Root, ROOTS} from "./roots";
import {MultiscriptText, multiscriptText} from "./AnnotatedText";

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
];

type Props = {
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
    return (
        <>
          <p onClick={() => navigator.clipboard.writeText(json)} style={{cursor: "pointer"}}>Copy</p>
          <p>
            <pre>
              {json}
            </pre>
          </p>
        </>
    );
  }
}
