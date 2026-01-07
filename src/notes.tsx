import {TextualChunk, UnorderedListSection, p, sup, ul} from "./formatting";

export default function NoteManager(notes: { [key: string]: TextualChunk[] }) {
    const noteOrder = new Map<string, number>([]);
    const noteNum = (id: string) => (noteOrder.get(id) || 0) + 1;

    const noteRef = (id: string) => {
        if (noteOrder.get(id) === undefined) {
            noteOrder.set(id, noteOrder.size);
        }

        return sup(noteNum(id) + "");
    }

    const notesInOrder = (): UnorderedListSection => ({
        type: "unordered list",
        show_bullet: false,
        items: Array.from(noteOrder.entries())
          .sort((a, b) => (a[1] - b[1]))
          .map(([id, _n], _i) => [sup(noteNum(id) + ""), " ", ...notes[id]])
    });

    return {noteRef, notesInOrder};
}