import React, { useContext } from "react";
import { Store } from "../store";
import { formatCurrency } from "../utils/formatters";

const ResultConvert: React.FC = () => {
  const {
    state: { rates, toBRL, currency, value },
  } = useContext(Store);

  if (!rates || !(currency in rates)) return null;

  const { ask, bid } = rates[currency];
  const rate = Math.min(ask, bid);

  let originValue, convertedValue;

  if (toBRL) {
    originValue = formatCurrency(value, "BRL");
    convertedValue = formatCurrency(value / rate, currency);
  } else {
    originValue = formatCurrency(value, currency);
    convertedValue = formatCurrency(value * rate, "BRL");
  }

  return (
    <div className="h-30 w-full text-primaryTXT text-center my-5 flex flex-col">
      <span className="text-lg">{originValue} = </span>
      <span className="text-3xl">{convertedValue}</span>
    </div>
  );
};

export default ResultConvert;
