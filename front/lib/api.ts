import axios from "axios";

export interface Note {
  name: string;
  frequency: number;
}

export const fetchNotes = async ():Promise<Note[]> => {
  const response = await axios.get('http://localhost:3000/api/v1/notes');
  return response.data;
}