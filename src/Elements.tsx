import React, {Component} from "react";

import AnnotatedText, {AnnotatedCharacter} from "./AnnotatedText";
import dictionary from "./dictionary.json";
import {ROOTS} from "./roots";

const elementTranslations = new Map(
  dictionary.find(section => section.title === "Chemical elements")!.entries.map(e => (
    [e.English, e.Jaobon]
  ))
);

const periodicTable: ([string, string] | null)[][] = [
  [["hydrogen", "H"], null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, ["helium", "He"]],
  [["lithium", "Li"], ["beryllium", "Be"], null, null, null, null, null, null, null, null, null, null, ["boron", "B"], ["carbon", "C"], ["nitrogen", "N"], ["oxygen", "O"], ["fluorine", "F"], ["neon", "Ne"]],
  [["sodium", "Na"], ["magnesium", "Mg"], null, null, null, null, null, null, null, null, null, null, ["aluminium", "Al"], ["silicon", "Si"], ["phosphorus", "P"], ["sulfur", "S"], ["chlorine", "Cl"], ["argon", "Ar"]],
  [["potassium", "K"], ["calcium", "Ca"], ["scandium", "Sc"], ["titanium", "Ti"], ["vanadium", "V"], ["chromium", "Cr"], ["manganese", "Mn"], ["iron", "Fe"], ["cobalt", "Co"], ["nickel", "Ni"], ["copper", "Cu"], ["zinc", "Zn"], ["gallium", "Ga"], ["germanium", "Ge"], ["arsenic", "As"], ["selenium", "Se"], ["bromine", "Br"], ["krypton", "Kr"]],
  [["rubidium", "Rb"], ["strontium", "Sr"], ["yttrium", "Y"], ["zirconium", "Zr"], ["niobium", "Nb"], ["molybdenum", "Mo"], ["technetium", "Tc"], ["ruthenium", "Ru"], ["rhodium", "Rh"], ["palladium", "Pd"], ["silver", "Ag"], ["cadmium", "Cd"], ["indium", "In"], ["tin", "Sn"], ["antimony", "Sb"], ["tellurium", "Te"], ["iodine", "I"], ["xenon", "Xe"]],
  [["caesium", "Cs"], ["barium", "Ba"], null, ["hafnium", "Hf"], ["tantalum", "Ta"], ["tungsten", "W"], ["rhenium", "Re"], ["osmium", "Os"], ["iridium", "Ir"], ["platinum", "Pt"], ["gold", "Au"], ["mercury", "Hg"], ["thallium", "Tl"], ["lead", "Pb"], ["bismuth", "Bi"], ["polonium", "Po"], ["astatine", "At"], ["radon", "Rn"]],
  [["francium", "Fr"], ["radium", "Ra"], null, ["rutherfordium", "Rf"], ["dubnium", "Db"], ["seaborgium", "Sg"], ["bohrium", "Bh"], ["hassium", "Hs"], ["meitnerium", "Mt"], ["darmstadtium", "Ds"], ["roentgenium", "Rg"], ["copernicium", "Cn"], ["nihonium", "Nh"], ["flerovium", "Fl"], ["moscovium", "Mc"], ["livermorium", "Lv"], ["tennessine", "Ts"], ["oganesson", "Og"]],
  Array(18).fill(null),
  [null, null, null, ["lanthanum", "La"], ["cerium", "Ce"], ["praseodymium", "Pr"], ["neodymium", "Nd"], ["promethium", "Pm"], ["samarium", "Sm"], ["europium", "Eu"], ["gadolinium", "Gd"], ["terbium", "Tb"], ["dysprosium", "Dy"], ["holmium", "Ho"], ["erbium", "Er"], ["thulium", "Tm"], ["ytterbium", "Yb"], ["lutetium", "Lu"]],
  [null, null, null, ["actinium", "Ac"], ["thorium", "Th"], ["protactinium", "Pa"], ["uranium", "U"], ["neptunium", "Np"], ["plutonium", "Pu"], ["americium", "Am"], ["curium", "Cm"], ["berkelium", "Bk"], ["californium", "Cf"], ["einsteinium", "Es"], ["fermium", "Fm"], ["mendelevium", "Md"], ["nobelium", "No"], ["lawrencium", "Lr"]],
];

const numElements = periodicTable.reduce((m, row) => m + row.reduce((n, e) => n + (e === null ? 0 : 1), 0), 0);

const classifierColors: { [key: string]: string } = {
  "gas": "#ccddff",
  "us": "#ffffcc",
  "jin": "#ffcccc",
};

function elementContent(element: [string, string], rootSet: Set<string>) {
  const [elementName, symbol] = element;

  let annotatedChar: JSX.Element;
  let backgroundColor = "white";

  const translation = elementTranslations.get(elementName);
  if (translation == undefined) {
    annotatedChar = <pre style={{margin: 0}}>{' '}</pre>;
  } else {
    const [elementRoot, classifier] = translation.split(" ");
    if (rootSet.has(elementRoot)) {
      console.log(`Duplicate root: ${elementRoot}`);
    }
    rootSet.add(elementRoot);
    annotatedChar = <AnnotatedCharacter root={ROOTS.get(elementRoot)!}/>;
    backgroundColor = classifierColors[classifier];
  }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor, padding: "10px"}}>
      {annotatedChar}
      {symbol}
    </div>
  );
}

export default function Elements(props: {}) {
  const rootSet: Set<string> = new Set();

  const text = (s: string) => <AnnotatedText sentence={s} inline={true}/>

  return (
    <>
      <h1>Chemical elements in Jaobon</h1>

      <p>
        Jaobon identifies each chemical element by a single root.
        In many cases, roots were selected by calquing existing etymologies (e.g., oxygen from Greek <i>ὀξύς</i> "sharp,
        sour").
        In some cases, this is even done for purely mythological etymologies, e.g. cadmium, which is named for the Greek
        king Cadmus, whose name ultimately stems from Semitic <i>q-d-m</i> "precede".
        I've avoided merely phonetic matching, even when elements are named for proper nouns with no clear further
        etymology.
        For cases where calquing existing etymologies is not possible, either because the element is named for a proper
        noun,
        or because its etymology isn't clearly traceable to any derived name (e.g., tin), or the etymological origin
        is difficult to map onto any Jaobon root, I've merely named it for some physical property (e.g., indium for its
        softness, tin for the crackling <a href="https://en.wikipedia.org/wiki/File:Zinnschrei.webm" target="_blank">"tin
        cry"</a>)
        or biological property (e.g. bismuth for the gastrointestinal soothing provided by bismuth subsalicylate, and
        arsenic for its toxicity).
        Roots which have other important meanings in chemical terminology, including the roots {text('jin gas us sun ku yen hun lon')},
        are avoided as the identifying roots of elements; for example, my original term for oxygen {text('sun us')} which
        was coined by analogy with German <i>Sauerstoff</i> has been abandoned in favor of {text('kin us')}.
        Many elements have not yet been named, and I am open to suggestions. Overall, there are {numElements} described
        elements at time of writing, and 366 Jaobon roots, so there should be plenty of headroom to pick fitting element
        names.{' '}
        {elementTranslations.size} elements are currently named in Jaobon.
      </p>

      <p>
        In isolation, full element names are the single root plus a suffix identifying the "type" of the element:{' '}
        {text('jin')} for metals (color-coded red in the table below), {text('gas')} for noble gases (blue), and{' '}
        {text('us')} for other nonmetals (yellow). For example, the normal term for carbon is {text('cun us')}.
      </p>

      <table>
        <tbody>
        {periodicTable.map((row, i) => (
          <tr key={i}>
            {row.map((element, j) => (
              <td key={j} style={{padding: 0, border: (element === null ? "none" : "1px solid black")}}>
                {element !== null && elementContent(element, rootSet)}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>

      <p>
        In the names of compounds, this suffix is dropped, e.g. {text('cun dos kin hun')} "carbon dioxide".
      </p>
    </>
  );
}
