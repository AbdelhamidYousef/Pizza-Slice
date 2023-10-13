export const fromateCurrency = (value) => {
  const formater = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  });

  return formater.format(value);
};
