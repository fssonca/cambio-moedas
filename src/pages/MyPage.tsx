// exampleComponent.js
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../store";
import InputValues from "../components/InputValues";
import Modal from "../components/ModalCurrencies";
import SwitchButton from "../components/SwitchButton";
import ResultConvert from "../components/resultConvert";
import Boxes from "../components/Boxes";

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

  let rate;
  if (rates) {
    const { ask, bid } = rates[currency];
    rate = Math.min(ask, bid);
  }

  return (
    <div className={theme === "light" ? "theme-light" : "theme-dark"}>
      <div className="bg-primaryBG transition-all h-screen	w-screen 	flex flex-col items-center p-2	">
        <SwitchButton />
        <Modal />
        <InputValues />

        {rates ? (
          <div className="text-primaryTXT text-xs my-1	 flex flex-col">
            <span>
              1 {currency} = {rate} BRL
            </span>
            {currency !== "BTC" && (
              <span>
                1 BRL = {(1 / rate).toFixed(4)} {currency}
              </span>
            )}
          </div>
        ) : (
          <div> - </div>
        )}

        <ResultConvert />
        <Boxes />
      </div>
    </div>
  );
};

export default MyPage;
