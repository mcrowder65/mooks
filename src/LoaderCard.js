import React from "react"
import PropTypes from "prop-types"
import { Card, LinearProgress } from "@material-ui/core"

function LoaderCard({ children, isLoading, ...props }) {
  return (
    <React.Fragment>
      {isLoading ? <LinearProgress data-testid="linear-progress" /> : null}
      <Card {...props}>{children}</Card>
    </React.Fragment>
  )
}
LoaderCard.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default LoaderCard
