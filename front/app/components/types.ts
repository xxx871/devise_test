export interface Note {
  id: number;
  name: string;
  frequency: number;
  created_at: string;
  updated_at: string;
}

export interface Gender {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Score {
  id: number;
  mode: string;
  difficulty: string;
  score: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: Gender;
  created_at: string;
  updated_at: string;
  user_high_note: Note;
  user_low_note: Note;
  scores: Score[];
}
