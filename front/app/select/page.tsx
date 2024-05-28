// // app/select/page.tsx
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/elements/Select/Select";
// import { Button } from "../components/elements/Button/Button";

// interface SelectPageProps {
//   difficulties: { id: number; name: string }[];
//   genders: { id: number; name: string }[];
// }

// export default function SelectPage({ difficulties, genders }: SelectPageProps) {
//   const router = useRouter();
//   const [difficulty, setDifficulty] = useState('');
//   const [gender, setGender] = useState('');

//   const handleGameStart = () => {
//     router.push(`/game?difficulty=${difficulty}&gender=${gender}`);
//   };

//   return (
//     <main className="text-white">
//       <div>
//         <h1 className="text-6xl mt-16 text-center font-palettemosaic font-bold">
//           選択画面
//         </h1>
//       </div>
//       <div className="mt-16 w-72 mx-auto text-2xl font-palettemosaic text-slate-300">
//         <Select onValueChange={setDifficulty}>
//           <SelectTrigger className="w-[288px]">
//             <SelectValue placeholder="難易度選択"/>
//           </SelectTrigger>
//           <SelectContent>
//             {difficulties.map((difficulty) => (
//               <SelectItem key={difficulty.id} value={difficulty.id}>
//                 {difficulty.name}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//         <Select onValueChange={setGender}>
//           <SelectTrigger className="w-[288px]">
//             <SelectValue placeholder="性別選択"/>
//           </SelectTrigger>
//           <SelectContent>
//             {genders.map((gender) => (
//               <SelectItem key={gender.id} value={gender.id}>
//                 {gender.name}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>
//       <div className="mt-16 w-16 mx-auto font-palettemosaic mb-24">
//         <Button variant="outline" onClick={handleGameStart}>ゲーム開始</Button>
//       </div>
//     </main>
//   );
// }

// export async function getData() {
//   const [difficultiesRes, gendersRes] = await Promise.all([
//     fetch('http://localhost:3000/api/v1/difficulties'),
//     fetch('http://localhost:3000/api/v1/genders')
//   ]);

//   const [difficulties, genders] = await Promise.all([
//     difficultiesRes.json(),
//     gendersRes.json()
//   ]);

//   return { difficulties, genders };
// }

// export async function generateMetadata() {
//   const { difficulties, genders } = await getData();
//   return {
//     title: '選択画面',
//     difficulties,
//     genders
//   };
// }
