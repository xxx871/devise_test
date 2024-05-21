// app/game/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import * as Tone from 'tone';
import { fetchUserRandomNote, fetchGuestRandomNote, Note, saveUserScore, fetchUserScores, updateUserScore } from '../../lib/api';

export default function GamePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty');
  const gender = searchParams.get('gender');
  const [score, setScore] = useState(0);
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    const getRandomNote = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        let randomNote: Note | null = null;
  
        if (authToken) {
          // ログインユーザー向けのランダムな音を取得
          randomNote = await fetchUserRandomNote();
        } else if (gender) {
          const genderNumber = parseInt(gender);
          if (!isNaN(genderNumber)) {
            // ログインしていないユーザー向けのランダムな音を取得
            randomNote = await fetchGuestRandomNote(genderNumber);
          } else {
            console.error('Invalid gender value:', gender);
          }
        }
  
        if (randomNote) {
          setNote(randomNote);
        } else {
          console.error('Failed to fetch random note: No note returned');
        }
      } catch (error) {
        const err = error as { response?: { status?: number } };  // 型アサーションを使用
        console.error('Failed to fetch random note:', err);
        if (err.response?.status === 401) {
          router.push('/login');
        }
      }
    };
  
    getRandomNote();
  }, [gender]);
  

  const playRandomNote = async () => {
    if (!note) return;
    const synth = new Tone.Synth().toDestination();
    if (Tone.getContext().state !== 'running') {
      await Tone.getContext().resume();
    }
    synth.triggerAttackRelease(note.name, '8n');
  };

  const analyzeUserInput = async () => {
    const userInput = 'C4'; // 例として固定の入力。実際は録音された音を解析する
    const isCorrect = userInput === (note ? note.name : '');
    if (isCorrect) {
      setScore(score + 1);
    }

    // スコアを保存
    const mode = searchParams.get('mode'); // モードを取得
    if (mode && difficulty) {
      const modeId = getModeId(mode); // モードIDを取得する関数（実装は後述）
      const difficultyId = getDifficultyId(difficulty); // 難易度IDを取得する関数（実装は後述）

      if (modeId && difficultyId) {
        try {
          const existingScores = await fetchUserScores();
          const existingScore = existingScores.find(
            (s) => s.mode_id === modeId && s.difficulty_id === difficultyId
          );

          if (existingScore && score > existingScore.score) {
            if (existingScore.id !== undefined) {
              await updateUserScore(existingScore.id, { id: existingScore.id, mode_id: modeId, difficulty_id: difficultyId, score });
            }
          } else if (!existingScore) {
            await saveUserScore({ mode_id: modeId, difficulty_id: difficultyId, score });
          }
          
          
        } catch (error) {
          console.error('Failed to save score:', error);
        }
      }
    }

    router.push(`/result?score=${score}`);
  };

  const getModeId = (mode: string): number => {
    switch (mode) {
      case 'light': return 1;
      case 'dark': return 2;
      case 'system': return 3;
      default: return 0;
    }
  };

  const getDifficultyId = (difficulty: string): number => {
    switch (difficulty) {
      case 'easy': return 1;
      case 'normal': return 2;
      case 'hard': return 3;
      default: return 0;
    }
  };

  return (
    <main className="text-white">
      <div>
        <h1 className="text-6xl mt-16 text-center font-palettemosaic font-bold">
          ゲーム画面
        </h1>
      </div>
      <div className="mt-16 w-72 mx-auto text-2xl font-palettemosaic text-slate-300">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4" onClick={playRandomNote}>
          スピーカー
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={analyzeUserInput}>
          マイク
        </button>
      </div>
      <div className="mt-16 w-16 mx-auto font-palettemosaic mb-24">
        <p>スコア: {score}</p>
      </div>
    </main>
  );
}
