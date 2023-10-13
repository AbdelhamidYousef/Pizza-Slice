import { API_URL } from "../../config";

export const menuLoader = async () => {
  const response = await fetch(`${API_URL}/menu`);
  const data = await response.json();

  if (!response.ok) throw Error("Failed getting menu");

  console.log(data);

  return data;
};
