import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ type, size, onClick, to, disabled, className, children }) => {
  if (type === "link")
    return (
      <Link
        to={to}
        className={`${className} inline-block text-sm rounded-full bg-yellow-400 font-semibold   uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed 
    ${size === "sm" && "px-2.5 py-1 md:px-3.5 md:py-2"}
    ${size === "md" && "px-4 py-2 md:px-5 md:py-2.5"}
    ${size === "lg" && "px-4 py-3 md:px-6 md:py-4"}
    `}
      >
        {children}
      </Link>
    );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} inline-block text-sm rounded-full bg-yellow-400 font-semibold   uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed 
      ${size === "sm" && "px-2.5 py-1 md:px-3.5 md:py-2"}
      ${size === "md" && "px-4 py-2 md:px-5 md:py-2.5"}
      ${size === "lg" && "px-4 py-3 md:px-6 md:py-4"}
      `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
