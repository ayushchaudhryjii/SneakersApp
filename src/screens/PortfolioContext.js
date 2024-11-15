// src/context/PortfolioContext.js
import React, { createContext, useContext, useState } from 'react';

const PortfolioContext = createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  const addItemToPortfolio = (item) => {
    setPortfolioItems((prevItems) => [...prevItems, item]);
  };

  return (
    <PortfolioContext.Provider value={{ portfolioItems, addItemToPortfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};
