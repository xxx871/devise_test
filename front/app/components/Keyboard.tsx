// front/app/components/Keyboard.tsx
import { Note, fetchNotes } from '@/lib/api';
import React, { useEffect, useState } from 'react';
import * as Tone from 'tone';

const Keyboard: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const loadNotes = async () => {
      const data = await fetchNotes();
      setNotes(data);
    };
    loadNotes();
  }, []);

  useEffect(() => {
    if (notes.length === 0) return;

    const synth = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.005, decay: 0.005, sustain: 0.9, release: 0.005 },
    }).toDestination();

    const totalWidth = window.innerWidth;
    const sizePerNote = (totalWidth / notes.length) * 1.5;
    const piano = document.getElementById('piano')!;

    piano.innerHTML = ''; // 以前の鍵盤をクリア

    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      const node = document.createElement('li');
      node.className = note.en_note_name.includes('#') ? 'blackkey' : 'whitekey';
      node.style.height = note.en_note_name.includes('#') ? '60px' : '80px';
      node.style.width = note.en_note_name.includes('#') ? `${sizePerNote / 1.6}px` : `${sizePerNote}px`;
      node.setAttribute('data-key', note.en_note_name);
      piano.appendChild(node);
    }

    const startAudioContext = (e: any) => {
      e.preventDefault();
      Tone.start().then(() => playSound(e));
    };

    const playSound = (e: any) => {
      const key = e.target.dataset.key;
      if (!key) return;
      document.getElementById('currentNote')!.textContent = `Current Note: ${key}`;
      synth.triggerAttackRelease(key, '8n');
    };

    const pianoElement = document.getElementById('piano')!;
    pianoElement.addEventListener('mousedown', startAudioContext);
    pianoElement.addEventListener('touchstart', startAudioContext);

    return () => {
      pianoElement.removeEventListener('mousedown', startAudioContext);
      pianoElement.removeEventListener('touchstart', startAudioContext);
    };
  }, [notes]);

  return (
    <div>
      <ul id="piano"></ul>
      <div id="currentNote">Current Note: None</div>
    </div>
  );
};

export default Keyboard;
