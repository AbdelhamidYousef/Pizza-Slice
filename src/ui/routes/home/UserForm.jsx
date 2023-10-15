import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import AlertMessage from "../../shared/AlertMessage";
import { updateUsername } from "../../../data/slices/userSlice";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3)
      return setError("Name should have at least 3 characters");

    dispatch(updateUsername(name));
    navigate("/menu");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="username"
        className="mb-4 text-sm text-stone-600 md:text-base"
      >
        👋 Welcome! Please start by telling us your name:
      </label>

      <div className="mb-6 text-center space-y-1">
        <Input
          type="text"
          id="username"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="!m-0"
        />
        {error && (
          <AlertMessage className="justify-center">{error}</AlertMessage>
        )}
      </div>

      <Button type="submit" size="lg" className="!block !mx-auto w-fit">
        Start ordering
      </Button>
    </form>
  );
};

export default UserForm;
