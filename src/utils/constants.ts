import { Money } from "../types";

export const CURRENCIES_API =
  "https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL,CAD-BRL,GBP-BRL";

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const currencies: Money[] = [
  { code: "USD", name: "American Dolar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "Pound Sterling" },
  { code: "CAD", name: "Canadian Dolar" },
  { code: "BTC", name: "Bitcoin" },
];
