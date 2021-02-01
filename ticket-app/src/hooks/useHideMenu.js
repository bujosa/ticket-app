import React, { useContext, useEffect } from "react";
import { UiContext } from "../context/UiContext";

export const useHideMenu = (hide) => {
  const { showMenu, hideMenu } = useContext(UiContext);
  useEffect(() => {
    if (hide) {
      hideMenu();
    } else {
      showMenu();
    }
  }, [hide, hideMenu, showMenu]);
};
