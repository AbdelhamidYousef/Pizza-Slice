const Order = () => {
  return (
    <section className="mx-auto max-w-3xl space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #7F9S3U status</h2>
        <div className="space-x-2">
          <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
            Priority
          </span>
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            preparing order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">Only 46 minutes left 😃</p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: Oct 13, 07:44 AM)
        </p>
      </div>

      <ul className="dive-stone-200 divide-y border-b border-t">
        <li className="space-y-1 py-3">
          <div className="flex items-center justify-between gap-4 text-sm">
            <p>
              <span className="font-bold">1×</span> Romana
            </p>
            <p className="font-bold">€15.00</p>
          </div>
          <p className="text-sm capitalize italic text-stone-500">
            tomato, mozzarella, prosciutto
          </p>
        </li>
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: €15.00
        </p>
        <p className="text-sm font-medium text-stone-600">
          Price priority: €3.00
        </p>
        <p className="font-bold">To pay on delivery: €18.00</p>
      </div>
    </section>
  );
};

export default Order;
