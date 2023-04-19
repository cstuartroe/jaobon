import React, { Component } from "react";
import { ROOTS } from "./roots";

type CharInfo = {
    char: string,
    simplifiedVariant: string | null,
    totalStrokes: number,
}

type State = {
    charInfo: CharInfo[],
}

export default class Verifier extends Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            charInfo: [],
        };
    }

    componentDidMount() {
        ROOTS.forEach((r, _s) => {
            fetch(`http://ccdb.hemiola.com/characters/string/${r.CJK}?fields=kSimplifiedVariant,kTotalStrokes`)
                .then(res => res.json())
                .then(data => {
                    console.log(r.CJK);
                    console.log(data);
                    this.setState({charInfo: [
                        ...this.state.charInfo,
                            {
                                char: r.CJK,
                                simplifiedVariant: data[0].kSimplifiedVariant,
                                totalStrokes: parseInt(data[0].kTotalStrokes),
                            },
                        ]});
                })
        })
    }

    averageStrokes() {
        const strokes = this.state.charInfo.map(ci => ci.totalStrokes);
        return strokes.reduce((p, n) => p + n, 0) / strokes.length;
    }

    render() {
        return (
            <p style={{fontSize: "200%"}}>
                Average strokes: {this.averageStrokes()}
                <br/>
                {this.state.charInfo
                    .sort((a, b) => a.totalStrokes - b.totalStrokes)
                    .map(ci => (
                    <span style={{color: (ci.simplifiedVariant ? "red" : "black")}} key={ci.char}>
                        {ci.char}
                    </span>
                ))}
            </p>
        );
    }
}