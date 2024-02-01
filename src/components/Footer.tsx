import React, { useContext } from "react";
import { Store } from "../store";
import { formatterDate } from "../utils/formatters";

const Footer: React.FC = () => {
  const {
    state: { rates, currency },
  } = useContext(Store);

  if (!rates || !rates[currency]) return null;

  return (
    <div className="h-16 w-full mt-6 text-sm text-primaryTXT text-center flex flex-col">
      <span>Valor atualizado em {formatterDate(rates[currency].timestamp)}</span>
      <div className="flex flex-row text-center justify-center">
        <span className="">
          Página do projeto:
          <a href="https://github.com/fssonca/cambio-moedas" className="underline italic ml-2">
            https://github.com/fssonca/cambio-moedas
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
