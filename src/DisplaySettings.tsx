import React, {createContext, useContext} from "react";
import {ROOTS} from "./roots";
import {stringToSyllable, Syllable, syllableToDots} from "./syllables";

export type WritingSystem = "roman" | "cjk" | "dots" | "texting";
export type TranslationDisplay = "show" | "hide";

export type DisplaySettings = {
  writingSystem: WritingSystem,
  showTranslation: TranslationDisplay,
}

const displaySettingsKeys = ["writingSystem", "showTranslation"] as const;

const defaultDisplaySettings: DisplaySettings = {
  writingSystem: "roman",
  showTranslation: "show",
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

export const DisplaySettingsContext = createContext(defaultDisplaySettings);

function radioButtons<T extends keyof DisplaySettings>(key: T, title: string, options: [string | JSX.Element, DisplaySettings[T]][], setDisplaySettings: (ds: DisplaySettings) => void) {
  const displaySettings = useContext(DisplaySettingsContext);

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
              checked={displaySettings[key] == value}
              onChange={e => {
                localStorage.setItem(`displaySettings:${key}`, value)
                setDisplaySettings({
                  ...displaySettings,
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

export function DisplaySettingsWidget(props: { setDisplaySettings: (ds: DisplaySettings) => void }) {
  return (
    <div className="display-settings-widget">
      {radioButtons(
        "showTranslation",
        "Translations",
        [
          ["show", "show"],
          ["hide", "hide"],
        ],
        props.setDisplaySettings,
      )}
      {radioButtons(
        "writingSystem",
        "Writing System",
        [
          [<span className="roman">jao</span>, "roman"],
          [<span className="cjk">{ROOTS.get('jao')?.CJK}</span>, "cjk"],
          [<span className="dots">{syllableToDots(stringToSyllable('jao') as Syllable)}</span>, "dots"],
        ],
        props.setDisplaySettings,
      )}
    </div>
  );
}
