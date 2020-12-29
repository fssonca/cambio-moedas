// exampleComponent.js
import React, { useContext } from "react";
import { Store } from "../store";

const Footer: React.FC = () => {
  const globalState = useContext(Store);

  const { rates, currency } = globalState.state;

  const date = (d: number) => {
    const x = new Date(d * 1000);

    const hour = "0" + x.getHours();
    const sec = "0" + x.getSeconds();
    const min = "0" + x.getMinutes();
    const day = "0" + x.getDate();
    const year = x.getFullYear().toString();
    const m = x.getMonth();
    const months = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Maio",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];

    return (
      hour.substr(-2) +
      ":" +
      min.substr(-2) +
      ":" +
      sec.substr(-2) +
      " -  " +
      day.substr(-2) +
      "/" +
      months[m] +
      "/" +
      year
    );
  };

  if (!rates) return null;

  return (
    <div className="h-16 w-full mt-6  text-sm	 text-primaryTXT text-center flex flex-col">
      <span>Valor atualizado em {date(rates[currency].timestamp)}</span>

      <div className="flex flex-row text-center justify-center">
        <span className="">
          Página do projeto:
          <a
            href="https://github.com/fssonca/cambio-moedas"
            className="underline italic ml-2"
          >
            https://github.com/fssonca/cambio-moedas
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
