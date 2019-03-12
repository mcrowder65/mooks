import React from "react";

export const useCurrentState = (initialValue) => {
  let actualInitialValue = initialValue;
  if (typeof initialValue === "function") {
    actualInitialValue = initialValue(actualInitialValue);
  }
  const [value, setValue] = React.useState(actualInitialValue);
  const actualValue = React.useRef(actualInitialValue);
  const theirSetValue = (theirNewValue) => {
    let valueToSet;
    if (typeof theirNewValue === "function") {
      valueToSet = theirNewValue(value);
      setValue(valueToSet);
    } else {
      setValue(theirNewValue);
      valueToSet = theirNewValue;
    }
    actualValue.current = valueToSet;
  };
  return [() => actualValue.current, theirSetValue];
};
