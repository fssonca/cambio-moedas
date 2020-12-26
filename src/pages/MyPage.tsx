// exampleComponent.js
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../store";
import InputValues from "./InputValues";
import Modal from "./ModalCurrencies";
import SwitchButton from "./SwitchButton";
import ResultConvert from "./resultConvert"

const MyPage: React.FC = () => {
  const globalState = useContext(Store);
  const { dispatch } = globalState;
  const { theme, rates, currency } = globalState.state;

  const [load, setLoad] = useState(false);

  const currencyAPI = () => {
    fetch(
      "https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL,CAD-BRL,GBP-BRL",
      { cache: "no-cache" }
    )
      .then((response) => response.json())
      .then(
        (res) => {
          dispatch({ type: "VALUES_CURRENCY", payload: res });
          setLoad(true);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  useEffect(() => {
    if (!load && !rates) {
      currencyAPI();
    }
  });

  return (
    <div className={theme === "light" ? "theme-light" : "theme-dark"}>
      <div className="bg-primaryBG transition-all h-screen	w-screen 	flex flex-col items-center	">
        <SwitchButton />
        <Modal />
        <InputValues />

        {rates ? (
          <div className="text-primaryTXT text-xs my-1	 flex flex-col">
            <span>
              1 {currency} = {rates[currency].ask} BRL
            </span>
            {currency !== "BTC" && (
              <span>
                1 BRL = {(1 / rates[currency].ask).toFixed(4)} {currency}
              </span>
            )}
          </div>
        ) : (
          <div> - </div>
        )}

<ResultConvert/>


      </div>
    </div>
  );
};

export default MyPage;
