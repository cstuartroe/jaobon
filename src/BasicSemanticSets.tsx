import React from "react";

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

function rootList(roots: string[]) {
  return (
    <ul>
      {roots.map(root => (
        <li key={root}>
          <AnnotatedText sentence={root} inline={false}/>{' '}
          "{ROOTS.get(root)!.definition}"
        </li>
      ))}
    </ul>
  );
}

function text(s: string) {
  return <AnnotatedText sentence={s} inline={true}/>;
}

export default function BasicSemanticSets(props: {}) {
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

      {rootList(["dak", "wai", "hon", "lan", "kun", "gin"])}

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
        Jaobon has {animalsInOrder.length} roots referring to animals, including {text('an')},
        which can refer to any animal but might have a default mammalian connotation. A few roots refer to broad
        groupings of non-mammals, while a large number refer to specific mammals.
      </p>

      {rootList(animalsInOrder)}

      <p>
        {text('con')} has quite a broad semantic range, seemingly including any protostome except some
        or all
        aquatic molluscs. I've given some cephalopods names with {text('yu')} as the head noun. I'm not
        really
        sure how I'd name bivalves; maybe they're weird enough to just get a term based on {text('an')}.
      </p>

      <p>
        Aside from cephalopods, {text('yu')} prototypically refers to fish (that is, the paraphyletic
        grouping of organisms which are members of Vertebrata but not Tetrapoda).
      </p>

      <p>
        {text('xis')} includes, in turn, all organisms which are members of Tetrapoda but not Synapsida
        or
        Aves; that is, all amphibians and non-bird reptiles.
      </p>

      <p>
        {text('pak')} can include most or all birds. {text('poi')} refers to fowl
        (which is *probably*
        a cladistic grouping, but is at least a well-defined grouping), and I'd probably consider it to be a hyponym
        of {text('pak')}. That is, any {text('poi')} is
        a {text('pak')} IMO.
      </p>

      <p>
        Another way to consider the meaning of {text('poi')} is to regard it not as a biological
        grouping,
        but a functional one, referring to domesticated birds, and maybe their close wild relatives (a category with
        considerable overlap with a biological category of fowl). This aligns with the fact that most of the roots
        referring to specific mammals refer to domesticated
        mammals: {text('dok')}, {text('gak')},{' '}
        {text('bak')}, {text('pok')}, {text('yan')}, {text('hos')}.
        In general, humans
        tend to talk more about domesticated animals than wild animals, and I think this semantic allocation
        approximately matches the vibes of natural languages. The roots referring to mostly non-domestic mammals
        are {text('mus')}, {text('os')}, {text('hus')}.
      </p>

      <p>
        {text('pak')} and {text('yu')} can simply refer to large groups of animals on
        their own.
        Most other large clades of animals need their own terms, to cope with the vagueness
        of {text('an')}, {text('xis')},
        and {text('con')}: {text('lak an')} "mammal",
        {' '}{text('sek gos xis')} "reptile", {text('wa gos xis')} "amphibian",{' '}
        {text('cek con')} "arthropod", {text('ses jao con')} "insect".
      </p>

      <p>
        I think the most psychologically or culturally significant animal snubbed for its own root was the snake.
        I imagine it was mostly left out merely because most of its good candidates for roots needed to be used
        for higher-priority meanings: {text('xe')} from Mandarin
        蛇, {text('sek')} from Spanish{' '}
        <i>serpiente</i>, etc. Luckily it's pretty conceptually easy to express the idea of a
        snake: {text('cao xis')}.
      </p>

      <h2>Positionals</h2>

      <p>
        Jaobon has {positionalsInOrder.length} positionals:
      </p>

      {rootList(positionalsInOrder)}

      <p>
        Some of these are clearly in pairs of
        opposites: {text('cen')} vs. {text('bek')},
        {' '}{text('xan')} vs. {text('bon')}, {text('is')} vs. {text('yok')}.
        The rest could be laid along a spectrum of
        proximity: {text('mes')} and {text('den')},
        {' '}then {text('pi')} and {text('la')}, then {text('yak')},
        then {text('ek')}.
      </p>

      <p>
        An argument could be made that I *could* have gotten away without
        a {text('mes')} vs. {text('den')}
        {' '}distinction and a {text('pi')} vs. {text('la')} distinction, but I see
        pretty clear
        distinctions in usage. {text('den')} refers to somewhere in the interior of a space, or the
        entire
        interior, and prototypically refers to three-dimensional space, while {text('mes')} is the
        exact
        center and prototypically refers to one-dimensional spectra. {text('pi')} is simply a surface
        or edge,
        while {text('la')} is the lateral sides of something as opposed to the front or back, and not
        necessarily
        the actual surface but perhaps the immediately adjacent space. Maybe, one might
        argue, {text('la')} and{' '}
        {text('yak')} should be the same root, but I still like the distinction between lateral
        adjacency vs.
        nearness in any direction.
      </p>

      <h2>Numerals</h2>

      <p>
        Jaobon has {numeralsInOrder.length} numeric roots:
      </p>

      {rootList(numeralsInOrder)}

      <p>
        Not much to say. It's base ten and has powers of ten up to 10<sup>3</sup>. Beyond that, further powers of ten
        need
        to be expressed
        compositionally: {text('das tao')} 10<sup>4</sup>, {text('bai tao')} 10<sup>5</sup>,
        {' '}{text('tao tao')} 10<sup>6</sup>, {text('tao mon se san bes')} 10<sup>9</sup>.
      </p>
    </>
  );
}
