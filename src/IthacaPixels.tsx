import React from "react";
import littleprince from "./texts/littleprince";
import {corpusStats, getTotalRoots} from "./TextReader";

const charPixels: {[key: string]: number} = {
  "a": 25,
  "b": 32,
  "c": 20,
  "d": 32,
  "e": 25,
  "g": 34,
  "h": 32,
  "i": 19,
  "j": 21,
  "k": 32,
  "l": 18,
  "m": 43,
  "n": 28,
  "o": 26,
  "p": 32,
  "s": 21,
  "t": 20,
  "u": 28,
  "w": 38,
  "x": 27,
  "y": 34,
};

type Props = {}

export default function IthacaPixels({}: Props) {
  const princeStats = corpusStats(littleprince.texts);

  const roots_in_prince = getTotalRoots(princeStats.frequencies);
  let total_pixels = 0;
  princeStats.frequencies.forEach((count, root) => {
    Array.from(root.syllable).forEach(letter => {
      total_pixels += charPixels[letter]*count;
    });
  });

  const pixels_per_root = total_pixels/roots_in_prince;
  const pixels_in_day = 2*60*24;

  return (
    <>
      <p>The average root takes {Math.round(pixels_per_root)} pixels to write in the Ithaca font.</p>
      <p>In one day you can write {pixels_in_day}/{Math.round(pixels_per_root)} = {Math.round(pixels_in_day/pixels_per_root)} roots.</p>
      <p>The Little Prince has {roots_in_prince} roots. At this pace, it would take {Math.round(roots_in_prince*pixels_per_root/pixels_in_day)} days to write out the whole story.</p>
    </>
  );
}
