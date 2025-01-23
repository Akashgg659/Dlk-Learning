import React, { createContext, useContext, useState } from "react";

// Create Context
const MobileSearchContext = createContext();

// Provider Component
export const MobileSearchProvider = ({ children }) => {
  const [mobileSearchActive, setMobileSearchActive] = useState(false);

  return (
    <MobileSearchContext.Provider value={{ mobileSearchActive, setMobileSearchActive }}>
      {children}
    </MobileSearchContext.Provider>
  );
};

// Custom Hook for easy access
export const useMobileSearch = () => useContext(MobileSearchContext);