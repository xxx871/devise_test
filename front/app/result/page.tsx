// app/result/page.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get('score');

  const handlePlayAgain = () => {
    router.push('/game');
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <main className="text-white">
      <div>
        <h1 className="text-6xl mt-16 text-center font-palettemosaic font-bold">
          リザルト画面
        </h1>
      </div>
      <div className="mt-16 w-72 mx-auto text-2xl font-palettemosaic text-slate-300">
        <p>あなたのスコア: {score}</p>
      </div>
      <div className="mt-16 w-16 mx-auto font-palettemosaic mb-24">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4" onClick={handlePlayAgain}>
          もう一度遊ぶ
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleBackToHome}>
          トップ画面に戻る
        </button>
      </div>
    </main>
  );
}
