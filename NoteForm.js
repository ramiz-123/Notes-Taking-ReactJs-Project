// NoteForm.js
import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    color: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(formData);
    setFormData({ title: '', description: '', color: '' });
  };

  return (
    <div className="note-form">
      <h2>Create a New Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        {/* Add input for image/video link */}
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
}

export default NoteForm;
