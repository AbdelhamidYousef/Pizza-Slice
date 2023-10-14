import { useRouteError } from "react-router-dom";
import Error404 from "./Error404";
import ErrorMessage from "./ErrorMessage";

const Error = () => {
  const error = useRouteError();

  console.log("🎈🎈🎈🎈", error.message, error.data);

  if (error.status) return <Error404 />;

  if (error.message === "Failed to fetch")
    return (
      <ErrorMessage
        error={
          "There is something wrong with the server, Please try again later"
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
