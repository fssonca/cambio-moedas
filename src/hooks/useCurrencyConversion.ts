import { useContext } from "react";
import { Store } from "../store";
import { formatCurrency } from "../utils/formatters";

// Constants for magic numbers
const IOF_CASH_MULTIPLIER = 1.011;
const IOF_OTHERS_MULTIPLIER = 1.0638;
const INCOME_TAX_MULTIPLIER = 0.8;

export const useCurrencyConversion = () => {
  const { state } = useContext(Store);
  const { rates, toBRL, currency, value } = state;

  // Check for required data
  if (!rates?.[currency]) return null;

  // Function to calculate conversion based on type
  const calculateConversion = (type: "ask" | "bid") =>
    toBRL ? value : value * rates[currency][type];

  // Calculate conversions
  const conversion = {
    ask: calculateConversion("ask"),
    bid: calculateConversion("bid"),
  };

  // Calculate taxes
  const taxes = {
    iofCash: conversion.ask * IOF_CASH_MULTIPLIER,
    iofOthers: conversion.ask * IOF_OTHERS_MULTIPLIER,
    incomeTax: conversion.bid * INCOME_TAX_MULTIPLIER,
  };

  // Formatted values for display
  const formatted = {
    ask: formatCurrency(conversion.ask, "BRL"),
    bid: formatCurrency(conversion.bid, "BRL"),
    iofCash: formatCurrency(taxes.iofCash, "BRL"),
    iofOthers: formatCurrency(taxes.iofOthers, "BRL"),
    brlValueNonTaxed: formatCurrency(toBRL ? value : conversion.ask, "BRL"),
    brlValueTaxed: formatCurrency((toBRL ? value : conversion.ask) * INCOME_TAX_MULTIPLIER, "BRL"),
    foreignCurrencyValue: formatCurrency(toBRL ? value / rates[currency]?.ask : value, currency),
    foreignCurrencyValueTaxed: formatCurrency(
      (toBRL ? value / rates[currency]?.ask : value) * INCOME_TAX_MULTIPLIER,
      currency,
    ),
  };

  return {
    conversion,
    taxes,
    formatted,
  };
};
