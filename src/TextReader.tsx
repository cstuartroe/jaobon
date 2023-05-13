import {Root, ROOTS} from "./roots";
import {AnnotatedCharacter, parseJaobon, TranslatedLine} from "./AnnotatedText";
import {DisplaySettings} from "./DisplaySettings";
import {Link, useParams} from "react-router-dom";
import React, {Component, useState} from "react";
import texts, {Text} from "./texts";

function rootFrequencies(text: Text) {
    const out = new Map<Root, number>();

    text.lines.forEach(line => {
        parseJaobon(line.jaobon).forEach(piece => {
            if (typeof piece !== "string") {
                out.set(piece, (out.get(piece) || 0) + 1);
            }
        })
    })

    return out
}

function textRootInfo(text: Text) {
    const frequencies = rootFrequencies(text);

    const totalRoots = Array.from(frequencies.values())
        .reduce((a, b) => a + b, 0);

    return {
        frequencies,
        totalRoots,
    }
}

function rootFrequencyList(textInfo: ReturnType<typeof textRootInfo>, displaySettings: DisplaySettings) {
    return (
        <ul>
            {Array.from(textInfo.frequencies.entries())
                .sort((a, b) => b[1] - a[1])
                .map(([root, count], i) => (
                    <li>
                        <AnnotatedCharacter root={root} displaySettings={displaySettings}/>
                        {' '}
                        {count}
                        {' '}
                        ({Math.round(10000 * count / textInfo.totalRoots)/100}%)
                    </li>
                ))}
        </ul>
    );
}

type Props = {
    displaySettings: DisplaySettings,
}

export default function TextReader(props: Props) {
    const { textId } = useParams();
    const [showFrequencies, setShowFrequencies] = useState<boolean>();

    if (textId === undefined) {
        return null;
    }

    const text = texts.get(textId);

    if (text === undefined) {
        return null;
    }

    const textInfo = textRootInfo(text);

    return (
        <>
            <h2>{text.title}</h2>

            {text.description && (
                <p>{text.description}</p>
            )}

            <div style={{border: "1px solid black", padding: "1vw", marginBottom: "2vh"}}>
                <p>
                    This text has{' '}
                    {text.lines.length} lines,{' '}
                    {textInfo.totalRoots} roots total,{' '}
                    and {textInfo.frequencies.size} distinct roots.
                </p>

                <p>
                    <a href="#" onClick={() => setShowFrequencies(!showFrequencies)}>
                        Click to {showFrequencies ? "hide" : "show"} root frequencies for this text
                    </a>
                </p>

                {showFrequencies && rootFrequencyList(textInfo, props.displaySettings)}

                {showFrequencies && (textInfo.frequencies.size > 150) && (
                    <p style={{marginBottom: 0}}>
                        Unused roots:{' '}
                        {Array.from(ROOTS.values())
                            .filter(r => textInfo.frequencies.get(r) === undefined)
                            .map(r => (
                                <>
                                    <AnnotatedCharacter root={r} displaySettings={props.displaySettings}/>
                                    {props.displaySettings.writingSystem == "roman" ? " " : "\u200b"}
                                </>
                            ))
                        }
                    </p>
                )}
            </div>

            {text.lines.map((line, i) => (
                <TranslatedLine key={i} jaobon={line.jaobon} translation={line.translation} number={i+1}
                                displaySettings={props.displaySettings}/>
            ))}
        </>
    );
}

export class TextList extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <>
                <h1>Texts</h1>

                {Array.from(texts.entries()).map(([textId, text], _) => (
                    <h2 key={textId}><Link to={`/texts/${textId}`}>{text.title}</Link></h2>
                ))}
            </>
        );
    }
}
