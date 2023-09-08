// App.js
import React, { useState } from 'react';
import './App.css';
import Note from './Note';
import NoteForm from './NoteForm';

function App() {
  const [notes, setNotes] = useState([]);
  
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes App</h1>
      </header>
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </div>
      <NoteForm addNote={addNote} />
    </div>
  );
}

export default App;
