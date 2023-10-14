import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData();

  return (
    <section className="mx-auto max-w-3xl">
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </section>
  );
};

export default Menu;
