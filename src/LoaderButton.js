import React from "react"
import PropTypes from "prop-types"
import { Button, CircularProgress } from "@material-ui/core"
function LoaderButton(props) {
  const { children, isLoading, circleSize, ...otherProps } = props
  return (
    <Button {...otherProps} disabled={isLoading === true}>
      {isLoading ? (
        <CircularProgress size={circleSize} data-testid="circular-progress" />
      ) : (
        children
      )}
    </Button>
  )
}

LoaderButton.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  circleSize: PropTypes.number,
}

LoaderButton.defaultProps = {
  isLoading: true,
  circleSize: 30,
}

export default LoaderButton
