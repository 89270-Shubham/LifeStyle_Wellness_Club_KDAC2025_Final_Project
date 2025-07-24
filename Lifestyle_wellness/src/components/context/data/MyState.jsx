import React, { useState } from 'react';
import myContext from './myContext';

function MyState({ children }) {
  const [villas, setVillas] = useState([]);
  const [events, setEvents] = useState([]);
  const [mode, setMode] = useState('light'); // if you have dark/light mode toggle

  return (
    <myContext.Provider value={{ villas, setVillas, events, setEvents, mode, setMode }}>
      {children}
    </myContext.Provider>
  );
}

export default MyState;
