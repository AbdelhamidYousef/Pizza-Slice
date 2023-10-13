import { fromateCurrency } from "../../../helper";
import Button from "../../shared/Button";

const menu = [
  {
    id: 1,
    name: "Margherita",
    unitPrice: 12,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg",
    ingredients: ["tomato", "mozzarella", "basil"],
    soldOut: false,
  },
  {
    id: 2,
    name: "Capricciosa",
    unitPrice: 14,
    imageUrl:
      "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-2.jpg",
    ingredients: ["tomato", "mozzarella", "ham", "mushrooms"],
    soldOut: true,
  },
];

const Menu = () => {
  return (
    <section className="mx-auto max-w-3xl">
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((pizza) => (
          <li key={pizza.id} className="flex gap-4 py-2">
            <img
              src={pizza.imageUrl}
              alt={pizza.name}
              className={`${pizza.soldOut ? "opacity-70 grayscale" : ""} h-24`}
            />
            <div className="flex grow flex-col pt-0.5">
              <p className="font-medium">{pizza.name}</p>
              <p className="text-sm capitalize italic text-stone-500">
                {pizza.ingredients.join(", ")}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <p
                  className={`${
                    pizza.soldOut ? "font-medium uppercase text-stone-500" : ""
                  } text-sm`}
                >
                  {pizza.soldOut
                    ? "Sold Out"
                    : fromateCurrency(pizza.unitPrice)}
                </p>

                <Button size="md">Add to cart</Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
