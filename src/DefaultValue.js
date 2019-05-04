import React from "react";
import PropTypes from "prop-types";
import { useDefaultValues } from "./DefaultValues";

function DefaultValue({ children, value }) {
  const {
    startedGettingValue = () => ({}),
    gotValue = () => ({}),
  } = useDefaultValues();

  React.useEffect(
    () => {
      if (value === undefined) {
        startedGettingValue();
      } else if (value !== undefined) {
        gotValue();
      }
    },
    [value],
  );
  return value === undefined ? null : children;
}
DefaultValue.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any,
};
export default DefaultValue;
