import React, { createContext, useState } from "react";

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [hiddenMenu, sethiddenMenu] = useState(false);

  const showMenu = () => {
    sethiddenMenu(false);
  };

  const hideMenu = () => {
    sethiddenMenu(true);
  };

  return (
    <UiContext.Provider value={{ hiddenMenu, showMenu, hideMenu }}>
      {children}
    </UiContext.Provider>
  );
};
