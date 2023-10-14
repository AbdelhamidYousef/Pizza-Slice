import { API_URL } from "../../config";

const updateOrder = async (id, updateObj) => {
  const res = await fetch(`${API_URL}/order/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updateObj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw Error("Can't update order priority");
};

export const orderAction = async ({ params }) => {
  const data = { priority: true };
  await updateOrder(params.id, data);
  return null;
};
