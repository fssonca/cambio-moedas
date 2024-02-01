import React from "react";
import InputValues from "../components/InputValues";
import Modal from "../components/ModalCurrencies";
import SwitchThemeButton from "../components/SwitchThemeButton";
import ResultConvert from "../components/resultConvert";
import Footer from "../components/Footer";
import Boxes from "../components/Boxes";
import useCurrencyData from "../hooks/useCurrencyData";

const MyPage: React.FC = () => {
  const { theme, rates, currency } = useCurrencyData();

  if (!rates) return <div className="text-center m-5">Loading...</div>;

  const rate = rates && currency ? Math.min(rates[currency].ask, rates[currency].bid) : null;

  return (
    <div className={theme === "LIGHT" ? "theme-light" : "theme-dark"}>
      <div className="bg-primaryBG transition-all h-full min-h-screen w-screen flex flex-col items-center p-2">
        <SwitchThemeButton />
        <Modal />
        <InputValues />

        {rate && (
          <div className="text-primaryTXT text-xs my-3 sm:my-1 flex flex-col">
            <span>
              1 {currency} = {rate} BRL
            </span>
            {currency !== "BTC" && rate !== null && (
              <span>
                1 BRL = {(1 / rate).toFixed(4)} {currency}
              </span>
            )}
          </div>
        )}

        <ResultConvert />
        <Boxes />
        <Footer />
      </div>
    </div>
  );
};

export default MyPage;
