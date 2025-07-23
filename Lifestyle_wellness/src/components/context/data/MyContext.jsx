import React, { createContext, useState } from 'react';

const myContext = createContext();

export const MyProvider = ({ children }) => {
  const [villas, setVillas] = useState([]);
  const [mode, setMode] = useState('light'); // if you use dark mode toggle

  return (
    <myContext.Provider value={{ villas, setVillas, mode, setMode }}>
      {children}
    </myContext.Provider>
  );
};

export default myContext;
