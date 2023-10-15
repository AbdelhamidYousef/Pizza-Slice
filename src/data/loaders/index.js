import { API_URL } from "../../config";

export const menuLoader = async () => {
  const response = await fetch(`${API_URL}/menu`);
  const data = await response.json();

  if (!response.ok) {
    console.error("❌Error:", data.message);
    throw Error(
      `There is something wrong with the server (server responded with: ${data.message})`
    );
  }

  return data.data;
};

export const orderLoader = async ({ params }) => {
  const response = await fetch(`${API_URL}/order/${params.id}`);
  const data = await response.json();

  if (!response.ok) {
    console.error("❌Error:", data.message);
    throw Error(
      `Something went wrong, Make sure of your order ID and try again, or contact us for help.`
    );
  }

  return data.data;
};
