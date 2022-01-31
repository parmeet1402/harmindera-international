import React, { useState, useEffect } from "react";
import { safeWindow } from "@utils/ssr";

const useKeyboardOpen = () => {
  const [prevScreenHeight, setPrevScreenHeight] = useState(0);

  const determineKeyboardOpen = () => {
    const currentScreenHeight = safeWindow.innerHeight;

    if (prevScreenHeight > currentScreenHeight) {
      setPrevScreenHeight(currentScreenHeight);
      return true;
    } else {
      setPrevScreenHeight(currentScreenHeight);
      return false;
    }
  };

  const [isKeyboardOpen, setKeyboardOpen] = useState(false);

  const determineKeyboardOpenAndUpdateState = () => {
    setKeyboardOpen(determineKeyboardOpen());
  };

  useEffect(() => {
    window.addEventListener("resize", determineKeyboardOpenAndUpdateState);

    return () => {
      window.removeEventListener("resize", determineKeyboardOpenAndUpdateState);
    };
  }, []);

  return [isKeyboardOpen];
};

export default useKeyboardOpen;
