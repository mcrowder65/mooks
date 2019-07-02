import React from "react";

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
    } else {
      set((prevState) => ({ ...prevState, ...newState }));
    }
  };
  return [state, setState];
};
export default useObjectState;
