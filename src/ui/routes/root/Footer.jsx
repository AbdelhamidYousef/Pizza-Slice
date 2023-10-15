import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartPrice } from "../../../data/slices/cartSlice";
import { getCartQuantity } from "../../../data/slices/cartSlice";
import { formatCurrency } from "../../../helpers";

const Footer = () => {
  const cartQuantity = useSelector(getCartQuantity);
  const cartPrice = useSelector(getCartPrice);

  if (cartQuantity === 0) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{cartQuantity} pizzas</span>
        <span>{formatCurrency(cartPrice)}</span>
      </p>
      <Link to="/cart">Open cart →</Link>
    </div>
  );
};

export default Footer;
