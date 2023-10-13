import { PropTypes } from "prop-types";
import { fromateCurrency } from "../../../helper";
import Button from "../../shared/Button";

const MenuItem = ({ pizza }) => {
  const { id, imageUrl, name, ingredients, unitPrice, soldOut } = pizza;

  return (
    <li key={id} className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`${soldOut ? "opacity-70 grayscale" : ""} h-24`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <p
            className={`${
              soldOut ? "font-medium uppercase text-stone-500" : ""
            } text-sm`}
          >
            {soldOut ? "Sold Out" : fromateCurrency(unitPrice)}
          </p>

          <Button size="md">Add to cart</Button>
        </div>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default MenuItem;
