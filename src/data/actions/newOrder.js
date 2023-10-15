import { redirect } from "react-router-dom";
import { API_URL } from "../../config";
import { isValidPhone } from "../../helpers";
import store from "../store/store";
import { clearCart } from "../slices/cartSlice";

const validateForm = ({ customer, phone, address, cart }) => {
  const errors = {};

  if (!customer) errors.customer = "Your name is required";
  if (!isValidPhone(phone)) errors.phone = "Invalid Phone Number";
  if (!address) errors.address = "Address is required";
  if (!cart.length) errors.cart = "Cart is empty!!!";

  return errors;
};

const sendOrder = async (order) => {
  const res = await fetch(`${API_URL}/order`, {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  if (!res.ok) {
    console.error("✖ Error:", data.message);
    throw Error(
      `There is something wrong with the server, Please try again later or contact support (Server responded with: ${data.message})`
    );
  }

  return data.data;
};

export const newOrderAction = async ({ request }) => {
  // Getting the form data
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Styling Order
  const order = {
    ...data,
    priority: data.priority === "true",
    cart: JSON.parse(data.cart),
  };

  order.cart = order.cart.map((item) => ({
    ...item,
    pizzaId: item.id,
  }));

  // cart = [{
  //     pizzaId: 3,
  //     name: "Romana",
  //     quantity: 1,
  //     totalPrice: 15,
  //     unitPrice: 15,
  //   }];

  // Validating Order
  const errors = validateForm(order);
  if (Object.keys(errors).length) return errors;

  // Sending to API & Clearing Cart
  const newOrder = await sendOrder(order);
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
};
