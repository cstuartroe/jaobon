import React, {Component} from "react";
import AnnotatedText, {multiscriptText} from "./AnnotatedText";

type Props = {}

type State = {
  latin_text: string,
}

export default class Transliterate extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      latin_text: "",
    };
  }


  render() {
    return (
      <>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <div style={{height: "20vh"}}/>

            <p>
              Type Jaobon in the Latin alphabet and it will be rendered in CJK.
            </p>

            <div style={{height: "5vh"}}/>

            <textarea
              value={this.state.latin_text}
              onChange={(e) => this.setState({latin_text: e.target.value})}
              style={{width: "100%"}}
            />

            <div style={{height: "5vh"}}/>

            <AnnotatedText sentence={this.state.latin_text} displaySettings={{writingSystem: "cjk"}} inline={false}/>

            <p
              onClick={() => navigator.clipboard.writeText(multiscriptText(this.state.latin_text).CJK)}
              style={{cursor: "pointer"}}
            >
              Copy
            </p>
          </div>
        </div>
      </>
    );
  }
}
