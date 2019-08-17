import React from "react";
import isEqual from "react-fast-compare";

const useObjectState = (initialState = {}) => {
  if (typeof initialState !== "object" || Array.isArray(initialState)) {
    throw new Error("Initial state must be an object or undefined");
  }
  const [state, ...args] = React.useState(initialState);
  const setState = (newState) => {
    const [set] = args;
    if (typeof newState === "function") {
      set((prevState) => {
        const evenNewerState = newState(prevState);
        set({ ...state, ...evenNewerState });
      });
    } else if (isEqual(newState, {})) {
      set(newState);
    } else {
      set((prevState) => ({ ...prevState, ...newState }));
    }
  };
  return [state, setState];
};
export default useObjectState;
