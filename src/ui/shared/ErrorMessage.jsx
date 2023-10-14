import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const ErrorMessage = ({ error }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 pt-6">
      <h2 className="font-bold text-lg sm:text-3xl mb-5">
        Something went wrong 😢
      </h2>
      <p className="text-sm sm:text-base mb-5">{error}</p>

      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 hover:underline text-sm sm:text-base mb-1"
      >
        &larr; Go back
      </button>
    </div>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
