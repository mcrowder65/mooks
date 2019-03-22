import React from "react";
import PropTypes from "prop-types";
import { Card, LinearProgress } from "@material-ui/core";

function LoaderCard({ children, isFetching, ...props }) {
  return (
    <Card {...props}>
      {isFetching ? <LinearProgress data-testid="linear-progress" /> : null}
      {children}
    </Card>
  );
}
LoaderCard.propTypes = {
  children: PropTypes.node.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default LoaderCard;
