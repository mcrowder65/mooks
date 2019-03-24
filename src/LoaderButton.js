import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/core/styles/withStyles";

function LoaderButton(props) {
  const { children, isLoading, classes, circleSize, ...otherProps } = props;

  return (
    <Button {...otherProps} disabled={isLoading === true}>
      {children}
      {isLoading ? (
        <CircularProgress
          size={circleSize}
          className={classes.loader}
          data-testid="circular-progress"
        />
      ) : null}
    </Button>
  );
}

LoaderButton.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  circleSize: PropTypes.number,
};

LoaderButton.defaultProps = {
  isLoading: false,
  circleSize: 30,
};
const styles = {
  loader: {
    position: "absolute",
  },
};

export default withStyles(styles)(LoaderButton);
