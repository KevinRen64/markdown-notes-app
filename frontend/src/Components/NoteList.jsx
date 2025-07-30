import React from 'react';

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div>
      <h2>All Notes</h2>
      {notes.length === 0 ? <p>No notes yet.</p> : null}
      {notes.map(note => (
        <div key={note.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{note.title}</h3>
          <button onClick={() => onEdit(note)}>Edit</button>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
