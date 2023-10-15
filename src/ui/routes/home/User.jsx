import { useSelector } from "react-redux";
import Button from "../../shared/Button";
import { getUsername } from "../../../data/slices/userSlice";

const User = () => {
  const username = useSelector(getUsername);

  return (
    <div>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome Back!
      </p>

      <Button
        type="link"
        to="/menu"
        size="lg"
        className="!block !mx-auto w-fit"
      >
        Start ordering, {username}
      </Button>
    </div>
  );
};

export default User;
