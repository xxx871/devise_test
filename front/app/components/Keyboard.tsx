// components/Keyboard.tsx
import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import { fetchNotes, Note } from '@/lib/api';

const Keyboard: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const getNotes = async () => {
      const fetchedNotes = await fetchNotes();
      setNotes(fetchedNotes);
    };
    getNotes();
  }, []);

  const playNote = async (e: React.MouseEvent<HTMLButtonElement>, frequency: number) => {
    e.preventDefault();  // デフォルト動作を防ぐ
    if (Tone.getContext().state !== 'running') {
      await Tone.getContext().resume();
    }
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(frequency, '8n');
  };

  return (
    <div className="keyboard">
      {notes.map((note) => (
        <button
          key={note.name}
          className="key"
          onClick={(e) => playNote(e, note.frequency)}
        >
          {note.name}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
