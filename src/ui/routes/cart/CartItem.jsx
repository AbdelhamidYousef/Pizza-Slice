import { PropTypes } from "prop-types";
import { fromateCurrency } from "../../../helper";
import Button from "../../shared/Button";

const CartItem = ({ data }) => {
  const { name, quantity, totalPrice } = data;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}× ${name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">${fromateCurrency(totalPrice)}</p>
        <div className="flex items-center gap-2 md:gap-3">
          <Button size="sm">-</Button>

          <span className="text-sm font-medium">${quantity}</span>

          <Button size="sm">+</Button>
        </div>

        <Button size="md">Delete</Button>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CartItem;
