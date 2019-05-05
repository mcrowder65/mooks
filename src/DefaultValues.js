import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";

const Context = React.createContext();

function DefaultValues({ Loader, children, isLoading }) {
  if (isLoading) {
    return <Loader />;
  }
  return <Context.Provider value={{ isLoading }}>{children}</Context.Provider>;
}

DefaultValues.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  Loader: PropTypes.node,
  children: PropTypes.node,
};

DefaultValues.defaultProps = {
  Loader: () => (
    <CircularProgress color="primary" data-testid="circular-progress" />
  ),
  isLoading: false,
};

export default DefaultValues;
export function useDefaultValues() {
  const { isLoading } = React.useContext(Context) || {};
  return {
    isLoading,
  };
}
