import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Button from "../../shared/Button";

const cart = [
  {
    id: 1,
    name: "Margherita",
    quantity: 1,
    unitPrice: 12,
    totalPrice: 12,
  },
  {
    id: 2,
    name: "Margherita",
    quantity: 1,
    unitPrice: 12,
    totalPrice: 12,
  },
];

const Cart = () => {
  return (
    <section className="mx-auto max-w-3xl px-4 py-3">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        ← Back to menu
      </Link>
      <h2 className="mt-7 text-xl font-semibold">Your cart, dsfgdg</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="link" size="lg" to="/order/new">
          Order pizzas
        </Button>

        <button className="inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5">
          Clear cart
        </button>
      </div>
    </section>
  );
};

export default Cart;
