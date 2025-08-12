import React, { Component } from "react";
import {Link} from "react-router-dom";

type Props = {
}

type State = {
}

export default class Musings extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <>
        <h1>Musings</h1>

        <p>
          These are just some brief articles not worthy of a direct link in the sitewide menu:
        </p>

        <h3><Link to="/musings/basic_semantic_sets">Basic semantic sets</Link></h3>
        <h3><Link to="/musings/toki_pona_cognates">Toki Pona cognates</Link></h3>
        <h3><Link to="/musings/texting_slang">Texting in Jaobon</Link></h3>
        <h3><Link to="/musings/zipf">Frequency statistics</Link></h3>
        <h3><Link to="/musings/elements">Chemical elements in Jaobon</Link></h3>
      </>
    );
  }
}
