import React from "react";
import store from "store";
function useLocalStorageSetState(initialValue, name) {
  if (!name) {
    throw new Error(
      "Name must be provided to persist properly to localStorage",
    );
  }
  let actualInitialValue =
    store.get(name) !== undefined ? store.get(name) : initialValue;
  if (typeof initialValue === "function") {
    actualInitialValue = initialValue(actualInitialValue);
  }

  const [value, setValue] = React.useState(actualInitialValue);
  React.useEffect(
    () => {
      store.set(name, value);
    },
    [value],
  );
  return [value, setValue];
}

export default useLocalStorageSetState;
