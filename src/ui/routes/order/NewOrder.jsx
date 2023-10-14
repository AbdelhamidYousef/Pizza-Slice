import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import AlertMessage from "../../shared/AlertMessage";

const cart = [
  { pizzaId: 3, name: "Romana", quantity: 1, unitPrice: 15, totalPrice: 15 },
];

const NewOrder = () => {
  const errors = useActionData();
  const isSubmitting = useNavigation().state === "submitting";

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
                name="customer"
                placeholder="Enter Your Name"
                className="w-full !m-0"
              />
              {errors?.username && (
                <AlertMessage>{errors.username}</AlertMessage>
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
                <Input
                  name="address"
                  placeholder="Enter Your Address"
                  className="w-full !m-0"
                />
                <span className="absolute right-[3px] md:right-1.5 top-1/2 -translate-y-1/2 z-10">
                  <Button size="md" className="!text-xs">
                    Get position
                  </Button>
                </span>
              </div>

              {errors?.address && <AlertMessage>{errors.address}</AlertMessage>}
            </div>
          </div>

          <div className="mt-6 mb-10 flex items-center gap-5">
            <input
              type="checkbox"
              name="priority"
              id="priority"
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
              value="30.1248866,31.2726856"
            />

            {errors?.cart && (
              <AlertMessage style="full">{errors.cart}</AlertMessage>
            )}
            {errors?.position && (
              <AlertMessage style="full">{errors.position}</AlertMessage>
            )}
          </div>

          <Button size="lg" className="mt-10">
            {isSubmitting ? "Submitting Order..." : "Order Now"}
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default NewOrder;
