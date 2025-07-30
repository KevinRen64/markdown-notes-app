import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const NoteEditor = ({ selectedNote, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [selectedNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: selectedNote?.id,
      title,
      content,
    });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>{selectedNote ? 'Edit Note' : 'New Note'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Note title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        /><br />
        <textarea
          placeholder="Write your markdown here..."
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={8}
          required
        /><br />
        <button type="submit">Save</button>
      </form>
      <h3>Preview</h3>
      <div className="preview">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default NoteEditor;
