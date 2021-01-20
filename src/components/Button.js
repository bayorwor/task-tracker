import PropTypes from "prop-types";
const Button = ({ color, text, onShow }) => {
  return (
    <button style={{ background: color }} className="btn" onClick={onShow}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
export default Button;
