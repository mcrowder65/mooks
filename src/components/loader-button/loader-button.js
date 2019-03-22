import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/core/styles/withStyles";

function LoaderButton(props) {
  const { children, isFetching, classes, circleSize, ...otherProps } = props;
  return (
    <Button {...otherProps} disabled={isFetching === true}>
      {children}
      {isFetching ? (
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
  isFetching: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  circleSize: PropTypes.number,
};

LoaderButton.defaultProps = {
  isFetching: false,
  circleSize: 30,
};
const styles = {
  loader: {
    position: "absolute",
  },
};

export default withStyles(styles)(LoaderButton);
