const BASE_URL = "http://localhost:3000/api/v1/notes";

// return note
export const getNotes = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

//create note
export const createNote = async (note) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return res.json();
};

//update note
export const updateNote = async (id, updatedNote) => {
  const response = await axios.put(`${API_BASE_URL}/notes/${id}`, updatedNote);
  return response.data;
};


//delete note
export const deleteNote = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/notes/${id}`);
  return response.data;
};
