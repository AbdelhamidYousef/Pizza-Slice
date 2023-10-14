import { redirect } from "react-router-dom";
import { API_URL } from "../../config";
import { isValidPhone } from "../../helpers";

const validateForm = ({ customer, phone, address, cart }) => {
  const errors = {};

  if (!customer) errors.customer = "Your name is required";
  if (!isValidPhone(phone)) errors.phone = "Invalid Phone Number";
  if (!address) errors.address = "Address is required";
  if (!cart.length) errors.cart = "Cart is empty!!!";

  return errors;
};

const sendOrder = async (order) => {
  const reponse = await fetch(`${API_URL}/order`, {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await reponse.json();

  if (!reponse.ok)
    throw Error(
      `There is something wrong with the server, Please try again later or contact support`
    );

  return data.data;
};

export const newOrderAction = async ({ request }) => {
  // Getting the form data
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Styling Order
  const order = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };

  // Validating Order
  const errors = validateForm(order);
  if (Object.keys(errors).length) return errors;

  // Sending to API
  const newOrder = await sendOrder(order);

  return redirect(`/order/${newOrder.id}`);
};
