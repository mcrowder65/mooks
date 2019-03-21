import PropTypes from "prop-types";

function DefaultValue({ children, value }) {
  return value === undefined ? null : children;
}
DefaultValue.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any,
};
export default DefaultValue;
