import { useSelector } from "react-redux";
import UserForm from "./UserForm";
import { getUsername } from "../../../data/slices/userSlice";
import User from "./User";

const Home = () => {
  const username = useSelector(getUsername);

  return (
    <section className="mx-auto max-w-3xl">
      <div className="my-10 px-4 text-center sm:my-16">
        <h1 className="mb-8 text-xl font-semibold md:text-3xl">
          The best pizza.
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        {username ? <User /> : <UserForm />}
      </div>
    </section>
  );
};

export default Home;
