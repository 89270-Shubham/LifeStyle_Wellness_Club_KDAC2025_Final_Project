
import React, { createContext, useContext, useState } from 'react';

const EnrolledContext = createContext();

export const EnrolledProvider = ({ children }) => {
  const [enrolled, setEnrolled] = useState([]);

  const addEnrollment = (eventId) => {
    setEnrolled(prev => (prev.includes(eventId) ? prev : [...prev, eventId]));
  };

  const removeEnrollment = (eventId) => {
    setEnrolled(prev => prev.filter(id => id !== eventId));
  };

  return (
    <EnrolledContext.Provider value={{ enrolled, addEnrollment, removeEnrollment }}>
      {children}
    </EnrolledContext.Provider>
  );
};

export const useEnrolled = () => useContext(EnrolledContext);

