import { PropTypes } from "prop-types";
import { formatCurrency } from "../../../helpers";
import Button from "../../shared/Button";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
} from "../../../data/slices/cartSlice";

const CartItem = ({ data }) => {
  const { id, name, quantity, totalPrice } = data;

  const dispatch = useDispatch();

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}× {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex items-center gap-2 md:gap-3">
          <Button onClick={() => dispatch(decrementQuantity(id))} size="sm">
            -
          </Button>
          <span className="text-sm font-medium">{quantity}</span>
          <Button onClick={() => dispatch(incrementQuantity(id))} size="sm">
            +
          </Button>
        </div>

        <Button onClick={() => dispatch(deleteItem(id))} size="md">
          Delete
        </Button>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CartItem;
