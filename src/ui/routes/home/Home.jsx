import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import Input from "../../shared/Input";

const Home = () => {
  const navigate = useNavigate();

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

        <form>
          <label
            htmlFor="username"
            className="mb-4 text-sm text-stone-600 md:text-base"
          >
            👋 Welcome! Please start by telling us your name:
          </label>

          <Input type="text" id="username" placeholder="Your Full Name" />

          <Button
            onClick={() => navigate("/menu")}
            size="lg"
            className="!block !mx-auto"
          >
            Start ordering
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Home;
