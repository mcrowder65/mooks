import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";

const Context = React.createContext();

export default function DefaultValues({ Loader, children }) {
  const [loadCount, setLoadCount] = React.useState(0);

  if (loadCount > 0) {
    return <Loader />;
  }

  const startedGettingValue = () => {
    setLoadCount((count) => count + 1);
  };

  const gotValue = () => {
    setLoadCount((count) => count - 1);
  };
  return (
    <Context.Provider value={{ startedGettingValue, gotValue }}>
      {children}
    </Context.Provider>
  );
}

DefaultValues.propTypes = {
  Loader: PropTypes.node,
  children: PropTypes.node,
};

DefaultValues.defaultProps = {
  Loader: () => (
    <CircularProgress color="primary" data-testid="circular-progress" />
  ),
};
export function useDefaultValues() {
  const { startedGettingValue, gotValue } = React.useContext(Context) || {};
  return {
    startedGettingValue,
    gotValue,
  };
}
