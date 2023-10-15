import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import useTitle from "../../../helpers/useTitle";

const Menu = () => {
  const menu = useLoaderData();
  useTitle("Menu | Pizza Slice");

  return (
    <section className="mx-auto max-w-4xl">
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </section>
  );
};

export default Menu;
