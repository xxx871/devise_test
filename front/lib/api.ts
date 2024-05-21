// front/lib/api.ts
import axios from 'axios';

export interface Note {
  id: number;
  frequency: number;
  name: string;
  ja_note_name: string;
  en_note_name: string;
}

export interface Score {
  mode_id: number;
  difficulty_id: number;
  score: number;
}

export interface Score {
  id?: number;
  mode_id: number;
  difficulty_id: number;
  score: number;
}

export const fetchUserRandomNote = async (): Promise<Note> => {
  const response = await axios.get('http://localhost:3000/api/v1/notes/random');
  return response.data;
};

export const fetchGuestRandomNote = async (gender_id: number): Promise<Note> => {
  const response = await axios.get(`http://localhost:3000/api/v1/notes/random?gender=${gender_id}`);
  return response.data;
};

export const saveUserScore = async (score: Score): Promise<void> => {
  const response = await axios.post('http://localhost:3000/api/v1/scores', { score });
  return response.data;
};

export const fetchUserScores = async (): Promise<Score[]> => {
  const response = await axios.get('http://localhost:3000/api/v1/scores');
  return response.data;
};

export const updateUserScore = async (scoreId: number, score: Score): Promise<void> => {
  const response = await axios.put(`http://localhost:3000/api/v1/scores/${scoreId}`, { score });
  return response.data;
};

export const fetchNotes = async (): Promise<Note[]> => {
  const response = await axios.get('/api/v1/notes');
  return response.data;
};