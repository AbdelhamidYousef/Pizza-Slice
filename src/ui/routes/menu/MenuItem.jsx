import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../../helpers";
import Button from "../../shared/Button";
import {
  addItem,
  decrementQuantity,
  deleteItem,
  getCart,
  incrementQuantity,
} from "../../../data/slices/cartSlice";

const MenuItem = ({ pizza }) => {
  const { id, imageUrl, name, ingredients, unitPrice, soldOut } = pizza;

  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const quantity = cart.find((item) => item.id === id)?.quantity || 0;

  const handleAddItem = () => {
    if (quantity !== 0 || soldOut) return;

    const newItem = { ...pizza, quantity: 1, totalPrice: pizza.unitPrice };

    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
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
            {soldOut ? "Sold Out" : formatCurrency(unitPrice)}
          </p>

          {quantity ? (
            <div className="flex items-center gap-3 sm:gap-8">
              <div className="flex items-center gap-2 md:gap-3">
                <Button
                  onClick={() => dispatch(decrementQuantity(id))}
                  size="sm"
                >
                  -
                </Button>
                <span className="text-sm font-medium">{quantity}</span>
                <Button
                  onClick={() => dispatch(incrementQuantity(id))}
                  size="sm"
                >
                  +
                </Button>
              </div>
              <Button onClick={() => dispatch(deleteItem(id))} size="md">
                Delete
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleAddItem}
              size="md"
              className={`${soldOut ? "!hidden" : ""}`}
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default MenuItem;
