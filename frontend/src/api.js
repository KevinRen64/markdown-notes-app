import axios from 'axios';

const BASE_URL = "http://localhost:3000/api/v1/notes";

// Get all notes
export const getNotes = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Create a note
export const createNote = async (note) => {
  const response = await axios.post(BASE_URL, { note });
  return response.data;
};

// Update a note
export const updateNote = async (id, updatedNote) => {
  const response = await axios.put(`${BASE_URL}/${id}`, { note: updatedNote });
  return response.data;
};

// Delete a note
export const deleteNote = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
