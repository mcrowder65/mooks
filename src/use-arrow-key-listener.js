import React from "react";
import { useCurrentState } from "./use-current-state";
const POSSIBLE_KEYS = {
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
};

export const useArrowKeyListener = ({ onLeftKeyPress, onRightKeyPress }) => {
  const [getFocusCount, setFocusCount] = useCurrentState(0);

  const handleKey = ({ key }) => {
    if (getFocusCount() === 0) {
      if (key === POSSIBLE_KEYS.ARROW_LEFT) {
        onLeftKeyPress();
      } else if (key === POSSIBLE_KEYS.ARROW_RIGHT) {
        onRightKeyPress();
      }
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);
  const onBlur = () => setFocusCount((state) => state - 1);
  const onFocus = () => setFocusCount((state) => state + 1);
  return {
    onBlur,
    onFocus,
  };
};
