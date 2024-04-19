import React from "react";

export default function NoteManager(notes: { [key: string]: React.ReactNode }) {
    const noteOrder = new Map<string, number>([]);
    const noteNum = (id: string) => (noteOrder.get(id) || 0) + 1;

    const noteRef = (id: string) => {
        if (noteOrder.get(id) === undefined) {
            noteOrder.set(id, noteOrder.size);
        }

        return <sup>{noteNum(id)}</sup>;
    }

    const noteBody = (id: string) => {
        return (
            <p key={id} className="note">
                <sup>{noteNum(id)}</sup> {notes[id]}
            </p>
        )
    }

    const notesInOrder = () => (
        <div className="notes">
            {Array.from(noteOrder.entries())
                .sort((a, b) => (a[1] - b[1]))
                .map(([id, _n], _i) => noteBody(id))}
        </div>
    );

    return {noteRef, notesInOrder};
}