import React, { Component } from "react";
import {ROOTS} from "./roots";
import {stringToSyllable, Syllable, syllableToDots} from "./syllables";

export type WritingSystem = "roman" | "cjk" | "dots" | "texting";

export type DisplaySettings = {
  writingSystem: WritingSystem,
}

const displaySettingsKeys = ["writingSystem"] as const;

const defaultDisplaySettings: DisplaySettings = {
  writingSystem: "roman",
}

function assignDisplaySetting<T extends keyof DisplaySettings>(key: T, value: DisplaySettings[T], settings: DisplaySettings) {
  settings[key] = value;
}

export function getStartingDisplaySettings(): DisplaySettings {
  const out = defaultDisplaySettings;

  displaySettingsKeys.forEach(key => {
    const value = localStorage.getItem(`displaySettings:${key}`);
    if (value !== null) {
      assignDisplaySetting<typeof key>(key, value as DisplaySettings[typeof key], out);
    }
  })

  return out;
}

type Props = {
  displaySettings: DisplaySettings,
  setDisplaySettings: (d: DisplaySettings) => void,
}

type State = {
}

export class DisplaySettingsWidget extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  radioButtons<T extends keyof DisplaySettings>(key: T, title: string, options: [string | JSX.Element, DisplaySettings[T]][]) {
    return (
        <div>
          <p style={{marginBottom: "5px"}}><b>{title}</b></p>

          <div className="display-radio-buttons">
            {options.map(([label, value], i) => (
                <div key={i} className="display-radio-option">
                  <input
                      type="radio"
                      value={value}
                      name={key}
                      checked={this.props.displaySettings[key] == value}
                      onChange={e => {
                        localStorage.setItem(`displaySettings:${key}`, value)
                        this.props.setDisplaySettings({
                          ...this.props.displaySettings,
                          [key]: e.target.value,
                        });
                      }}
                  />
                  <div>
                    <p style={{marginBottom: 0}}>{label}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
    );
  }


  render() {
    return (
      <div className="display-settings-widget">
        {this.radioButtons(
            "writingSystem",
            "Writing System",
            [
              [<span className="roman">jao</span>, "roman"],
                [<span className="cjk">{ROOTS.get('jao')?.CJK}</span>, "cjk"],
                [<span className="dots">{syllableToDots(stringToSyllable('jao') as Syllable)}</span>, "dots"],
            ]
        )}
      </div>
    );
  }
}
