import React, { createContext, useState } from "react";

const RestroContext = createContext(null);

const RestroProvider = ({ children }) => {
  const [restroById, setRestroById] = useState(null);

  return (
    <RestroContext.Provider value={{ restroById, setRestroById }}>
      {children}
    </RestroContext.Provider>
  );
};

export { RestroProvider, RestroContext };
