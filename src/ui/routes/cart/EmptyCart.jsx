import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 py-3">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        ← Back to menu
      </Link>

      <h2 className="mt-7 text-lg font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </h2>
    </section>
  );
};

export default EmptyCart;
