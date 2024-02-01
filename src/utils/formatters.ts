import { months } from "./constants";

export const formatterDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${hour}:${minutes}:${seconds} - ${day}/${month}/${year}`;
};

export const formatCurrency = (value: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
};
