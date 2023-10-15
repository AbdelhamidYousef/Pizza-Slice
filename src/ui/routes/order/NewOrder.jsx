import { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";
import EmptyCart from "../cart/EmptyCart";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import AlertMessage from "../../shared/AlertMessage";
import { useSelector } from "react-redux";
import { getCart, getCartPrice } from "../../../data/slices/cartSlice";
import { fetchAddress, getUser } from "../../../data/slices/userSlice";
import { formatCurrency } from "../../../helpers";
import useTitle from "../../../helpers/useTitle";

const NewOrder = () => {
  useTitle("Order Now | Pizza Slice");

  // Local States
  const [withPriority, setWithPriority] = useState(false);

  // Route Action States
  const errors = useActionData();
  const isSubmitting = useNavigation().state === "submitting";
  const cart = useSelector(getCart);

  // Global UI States
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector(getUser);

  const totalCartPrice = useSelector(getCartPrice);
  const totalPrice = withPriority ? totalCartPrice * 1.2 : totalCartPrice;

  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;
  return (
    <section className="mx-auto max-w-3xl">
      <div className="px-4 py-6">
        <h2 className="mb-8 text-xl font-semibold">
          Ready to order? Let&apos;s go!
        </h2>

        <Form method="post">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="username" className="sm:basis-40">
              First Name
            </label>

            <div className="w-full">
              <Input
                type="text"
                name="customer"
                placeholder="Enter Your Name"
                defaultValue={username}
                className="w-full !m-0"
              />
              {errors?.customer && (
                <AlertMessage>{errors.customer}</AlertMessage>
              )}
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="phone" className="sm:basis-40">
              Phone number
            </label>

            <div className="w-full">
              <Input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone number"
                className="w-full !m-0"
              />
              {errors?.phone && <AlertMessage>{errors.phone}</AlertMessage>}
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="address" className="sm:basis-40">
              Address
            </label>

            <div className="w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter Your Address"
                  defaultValue={address}
                  required={true}
                  disabled={addressStatus === "loading"}
                  className="w-full !m-0 rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3 mb-8"
                />

                {addressStatus === "error" && (
                  <AlertMessage>{errorAddress}</AlertMessage>
                )}

                {!address && addressStatus !== "error" && (
                  <span className="absolute right-[3px] md:right-1.5 top-1/2 -translate-y-1/2 z-10">
                    <Button
                      type="button"
                      onClick={() => dispatch(fetchAddress())}
                      size="md"
                      className="!text-xs"
                    >
                      Get position
                    </Button>
                  </span>
                )}
              </div>

              {errors?.address && <AlertMessage>{errors.address}</AlertMessage>}
            </div>
          </div>

          <div className="mt-6 mb-10 flex items-center gap-5">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
              className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 cursor-pointer"
            />
            <label htmlFor="priority" className="font-medium">
              Want to yo give your order priority?
            </label>
          </div>

          <div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <input
              type="hidden"
              name="position"
              value={
                position.longitude && position.latitude
                  ? `${position.latitude},${position.longitude}`
                  : ""
              }
            />

            {errors?.cart && (
              <AlertMessage style="full">{errors.cart}</AlertMessage>
            )}
            {errors?.position && (
              <AlertMessage style="full">{errors.position}</AlertMessage>
            )}
          </div>

          <Button
            disabled={isSubmitting || addressStatus === "loading"}
            size="lg"
            className="mt-10"
          >
            {isSubmitting
              ? "Placing order...."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default NewOrder;
