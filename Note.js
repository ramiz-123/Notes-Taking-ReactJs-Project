// Note.js
import React from 'react';

function Note({ note }) {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.description}</p>
      {/* Add image/video link here */}
      <div className="note-color" style={{ backgroundColor: note.color }}>
        Color Palette
      </div>
    </div>
  );
}

export default Note;
