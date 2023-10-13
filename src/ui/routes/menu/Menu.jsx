import { useLoaderData, useNavigation } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useEffect } from "react";
import LoadingScreen from "../../shared/LoadingScreen";

const Menu = () => {
  const { data: menu } = useLoaderData();
  // const status = useNavigation().state;

  // useEffect(() => {
  //   console.log(status);
  // }, [status]);

  // if (status === "loading") return <div>loading</div>;

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
