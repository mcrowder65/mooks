import React from "react";
import store from "store";
import isEqual from "react-fast-compare";
function useLocalStorageSetState(initialValue, name, checkKeys = false) {
  if (!name) {
    throw new Error(
      "Name must be provided to persist properly to localStorage",
    );
  }
  if (
    process.env.NODE_ENV !== "production" &&
    typeof initialValue === "object" &&
    checkKeys &&
    store.get(name) !== undefined &&
    !isEqual(Object.keys(initialValue), Object.keys(store.get(name)))
  ) {
    store.set(name, initialValue);
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
