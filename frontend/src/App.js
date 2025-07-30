import React, { useEffect, useState } from 'react';
import { getNotes, createNote, updateNote, deleteNote } from './api';
import NoteList from './Components/NoteList';
import NoteEditor from './Components/NoteEditor';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const fetchNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSave = async (note) => {
    if (note.id) {
      await updateNote(note.id, note);
    } else {
      await createNote(note);
    }
    setEditingNote(null);
    fetchNotes();
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };

  return (
    <div className="container" >
      <h1>Markdown Notes</h1>
      <NoteEditor selectedNote={editingNote} onSave={handleSave} />
      <hr />
      <NoteList notes={notes} onEdit={setEditingNote} onDelete={handleDelete} />
    </div>
  );
};

export default App;
