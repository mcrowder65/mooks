import React from "react";
import PropTypes from "prop-types";
import { Card, LinearProgress } from "@material-ui/core";

function LoaderCard({ children, isLoading, ...props }) {
  return (
    <Card {...props}>
      {isLoading ? <LinearProgress data-testid="linear-progress" /> : null}
      {children}
    </Card>
  );
}
LoaderCard.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoaderCard;
