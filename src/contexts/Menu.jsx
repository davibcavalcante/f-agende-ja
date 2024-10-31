import React, { createContext, useState } from 'react';

const MenuConetext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuConetext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuConetext.Provider>
  );
};

export default MenuConetext;