import PropTypes from "prop-types"
import { useDefaultValues } from "./DefaultValues"

function DefaultValue({ children, value }) {
  const { isLoading } = useDefaultValues()
  // as long as isLoading is false and value is defined, then return children.
  return !isLoading && value === undefined ? null : children
}
DefaultValue.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any,
}
export default DefaultValue
