import { useRouteError } from "react-router-dom";
import Error404 from "./Error404";
import ErrorMessage from "./ErrorMessage";

const Error = () => {
  const error = useRouteError();

  console.error("❌", error);

  if (error.status) return <Error404 />;

  if (error.message === "Failed to fetch")
    return (
      <ErrorMessage
        error={
          "Something went wrong. Please check your internet connection and try again or contact support"
        }
      />
    );

  return (
    <div>
      <ErrorMessage error={error.message || error.data} />
    </div>
  );
};

export default Error;
