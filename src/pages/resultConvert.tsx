// exampleComponent.js
import React, { useContext } from "react";
import { Store } from "../store";

function formatterMoney(v: number, currency: string) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency }).format( v );
}

const ResultConvert: React.FC = () => {
  const globalState = useContext(Store);

  const { rates, toBRL, currency, value } = globalState.state;

  const origin = (): string => {
    if (toBRL) return formatterMoney(value, "BRL");
    return formatterMoney(value, currency);
  };

  const converted = (): string => {
    const r: number = rates[currency].ask;
    let t: number;
    if (toBRL) {
      t = value * r;
      return formatterMoney(t, currency);
    }

    t = value / r;
    return formatterMoney(t, "BRL");
  };

  if (!rates) return null;

  return (
    <div className="h-30 w-full text-primaryTXT text-center	my-5 flex flex-col">
      <span className="text-lg">{origin()} = </span>
      <span className="text-3xl">{converted()}</span>
    </div>
  );
};

export default ResultConvert;
