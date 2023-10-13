import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import Input from "../../shared/Input";

const NewOrder = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-3xl">
      <div className="px-4 py-6">
        <h2 className="mb-8 text-xl font-semibold">
          Ready to order? Let&apos;s go!
        </h2>

        <form>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="firstname" className="sm:basis-40">
              First Name
            </label>

            <Input
              name="firstname"
              placeholder="Enter Your Name"
              className="w-full !m-0"
            />
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="phone" className="sm:basis-40">
              Phone number
            </label>
            <Input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone number"
              className="w-full !m-0"
            />
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="address" className="sm:basis-40">
              Address
            </label>

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
          </div>

          <div className="mb-12 flex items-center gap-5">
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
            <input type="hidden" name="cart" />
            <input type="hidden" name="position" />

            <Button
              type="button"
              size="lg"
              onClick={() => navigate("/order/x1")}
            >
              Order now from €57.00
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewOrder;
