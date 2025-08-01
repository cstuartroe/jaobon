import React from "react";
import {DisplaySettings} from "./DisplaySettings";
import AnnotatedText from "./AnnotatedText";
import {PartOfSpeech, ROOTS} from "./roots";

function assertListSetEquality<T>(l1: T[], l2: T[]) {
  if (l1.length !== l2.length) {
    throw `Unequal lists: ${l1} ${l2}`;
  }
  l1.forEach(e => {
    if (!l2.includes(e)) {
      throw `Unequal lists: ${l1} ${l2}`;
    }
  });
}

function allPOSRoots(pos: PartOfSpeech) {
  return Array.from(ROOTS.values()).filter(r => r.pos.includes(pos)).map(root => root.syllable);
}

function rootList(roots: string[], displaySettings: DisplaySettings) {
  return (
    <ul>
      {roots.map(root => (
        <li key={root}>
          <AnnotatedText sentence={root} displaySettings={displaySettings} inline={false}/>{' '}
          "{ROOTS.get(root)!.definition}"
        </li>
      ))}
    </ul>
  );
}

function text(s: string, displaySettings: DisplaySettings) {
  return <AnnotatedText sentence={s} displaySettings={displaySettings} inline={true}/>;
}

type Props = {
  displaySettings: DisplaySettings,
}

export default function BasicSemanticSets({displaySettings}: Props) {
  const positionalsInOrder = ["cen", "bek", "xan", "bon", "is", "yok", "la", "pi", "den", "mes", "yak", "ek"];
  assertListSetEquality(positionalsInOrder, allPOSRoots("positional"))

  const numeralsInOrder = ["nin", "ban", "un", "dos", "san", "cak", "u", "ses", "ci", "ok", "nai", "das", "bai", "tao"];
  assertListSetEquality(numeralsInOrder, allPOSRoots("numeral"))

  const animalsInOrder = ["an", "con", "yu", "xis", "pak", "poi", "dok", "gak", "bak", "pok", "yan", "hos", "mus", "os", "hus"];

  return (
    <>
      <h1>Basic semantic sets</h1>

      <p>
        I just wanted to list a few sets of roots here and discuss why certain concepts were included or left out.
        Some of these (positionals, numerals) correspond to entire parts of speech, others not.
      </p>

      <h2>Colors</h2>

      <p>
        Jaobon has six basic color terms:
      </p>

      {rootList(["dak", "wai", "hon", "lan", "kun", "gin"], displaySettings)}

      <p>
        It's not a particularly interesting set of color terms; six is the modal number of basic color terms{' '}
        <a href="https://wals.info/feature/133A#2/32.5/151.9" target="_blank">according to WALS</a>, and this
        is the canonical set if you're going to have six terms.
      </p>

      <p>
        I like the six-color model because it forms three pairs of optical opposites. This is the same logic
        by which I decided to give the{' '}
        <a href="http://celestial-cards.conorstuartroe.com/calendar/explanation" target="blank">Celestial Calendar</a>
        {' '}a six-color logic, and Jaobon has{' '}
        <a href="https://bsky.app/profile/jaobon.bsky.social" target="_blank">some connection to that calendar</a>.
      </p>

      <h2>Animals</h2>

      <p>
        Jaobon has {animalsInOrder.length} roots referring to animals, including {text('an', displaySettings)},
        which can refer to any animal but might have a default mammalian connotation. A few roots refer to broad
        groupings of non-mammals, while a large number refer to specific mammals.
      </p>

      {rootList(animalsInOrder, displaySettings)}

      <p>
        {text('con', displaySettings)} has quite a broad semantic range, seemingly including any protostome except some
        or all
        aquatic molluscs. I've given some cephalopods names with {text('yu', displaySettings)} as the head noun. I'm not
        really
        sure how I'd name bivalves; maybe they're weird enough to just get a term based on {text('an', displaySettings)}.
      </p>

      <p>
        Aside from cephalopods, {text('yu', displaySettings)} prototypically refers to fish (that is, the paraphyletic
        grouping of organisms which are members of Vertebrata but not Tetrapoda).
      </p>

      <p>
        {text('xis', displaySettings)} includes, in turn, all organisms which are members of Tetrapoda but not Synapsida
        or
        Aves; that is, all amphibians and non-bird reptiles.
      </p>

      <p>
        {text('pak', displaySettings)} can include most or all birds. {text('poi', displaySettings)} refers to fowl
        (which is *probably*
        a cladistic grouping, but is at least a well-defined grouping), and I'd probably consider it to be a hyponym
        of {text('pak', displaySettings)}. That is, any {text('poi', displaySettings)} is
        a {text('pak', displaySettings)} IMO.
      </p>

      <p>
        Another way to consider the meaning of {text('poi', displaySettings)} is to regard it not as a biological
        grouping,
        but a functional one, referring to domesticated birds, and maybe their close wild relatives (a category with
        considerable overlap with a biological category of fowl). This aligns with the fact that most of the roots
        referring to specific mammals refer to domesticated
        mammals: {text('dok', displaySettings)}, {text('gak', displaySettings)},{' '}
        {text('bak', displaySettings)}, {text('pok', displaySettings)}, {text('yan', displaySettings)}, {text('hos', displaySettings)}.
        In general, humans
        tend to talk more about domesticated animals than wild animals, and I think this semantic allocation
        approximately matches the vibes of natural languages. The roots referring to mostly non-domestic mammals
        are {text('mus', displaySettings)}, {text('os', displaySettings)}, {text('hus', displaySettings)}.
      </p>

      <p>
        {text('pak', displaySettings)} and {text('yu', displaySettings)} can simply refer to large groups of animals on
        their own.
        Most other large clades of animals need their own terms, to cope with the vagueness
        of {text('an', displaySettings)}, {text('xis', displaySettings)},
        and {text('con', displaySettings)}: {text('lak an', displaySettings)} "mammal",
        {' '}{text('sek gos xis', displaySettings)} "reptile", {text('wa gos xis', displaySettings)} "amphibian",{' '}
        {text('cek con', displaySettings)} "arthropod", {text('ses jao con', displaySettings)} "insect".
      </p>

      <p>
        I think the most psychologically or culturally significant animal snubbed for its own root was the snake.
        I imagine it was mostly left out merely because most of its good candidates for roots needed to be used
        for higher-priority meanings: {text('xe', displaySettings)} from Mandarin
        蛇, {text('sek', displaySettings)} from Spanish{' '}
        <i>serpiente</i>, etc. Luckily it's pretty conceptually easy to express the idea of a
        snake: {text('cao xis', displaySettings)}.
      </p>

      <h2>Positionals</h2>

      <p>
        Jaobon has {positionalsInOrder.length} positionals:
      </p>

      {rootList(positionalsInOrder, displaySettings)}

      <p>
        Some of these are clearly in pairs of
        opposites: {text('cen', displaySettings)} vs. {text('bek', displaySettings)},
        {' '}{text('xan', displaySettings)} vs. {text('bon', displaySettings)}, {text('is', displaySettings)} vs. {text('yok', displaySettings)}.
        The rest could be laid along a spectrum of
        proximity: {text('mes', displaySettings)} and {text('den', displaySettings)},
        {' '}then {text('pi', displaySettings)} and {text('la', displaySettings)}, then {text('yak', displaySettings)},
        then {text('ek', displaySettings)}.
      </p>

      <p>
        An argument could be made that I *could* have gotten away without
        a {text('mes', displaySettings)} vs. {text('den', displaySettings)}
        {' '}distinction and a {text('pi', displaySettings)} vs. {text('la', displaySettings)} distinction, but I see
        pretty clear
        distinctions in usage. {text('den', displaySettings)} refers to somewhere in the interior of a space, or the
        entire
        interior, and prototypically refers to three-dimensional space, while {text('mes', displaySettings)} is the
        exact
        center and prototypically refers to one-dimensional spectra. {text('pi', displaySettings)} is simply a surface
        or edge,
        while {text('la', displaySettings)} is the lateral sides of something as opposed to the front or back, and not
        necessarily
        the actual surface but perhaps the immediately adjacent space. Maybe, one might
        argue, {text('la', displaySettings)} and{' '}
        {text('yak', displaySettings)} should be the same root, but I still like the distinction between lateral
        adjacency vs.
        nearness in any direction.
      </p>

      <h2>Numerals</h2>

      <p>
        Jaobon has {numeralsInOrder.length} numeric roots:
      </p>

      {rootList(numeralsInOrder, displaySettings)}

      <p>
        Not much to say. It's base ten and has powers of ten up to 10<sup>3</sup>. Beyond that, further powers of ten
        need
        to be expressed
        compositionally: {text('das tao', displaySettings)} 10<sup>4</sup>, {text('bai tao', displaySettings)} 10<sup>5</sup>,
        {' '}{text('tao tao', displaySettings)} 10<sup>6</sup>, {text('tao mon se san bes', displaySettings)} 10<sup>9</sup>.
      </p>
    </>
  );
}
