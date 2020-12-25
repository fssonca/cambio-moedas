// exampleComponent.js
import React, { useContext } from "react";
import { Store } from "../store";
import { currencies } from "../components/arrayCurrencies";

const InputValues: React.FC = () => {
  const globalState = useContext(Store);
  const { dispatch } = globalState;

  const { currency: c } = globalState.state;

  const currency = currencies.find((x) => x.code === c);

  const openModal = () => {
    dispatch({ type: "OPENMODAL" });
  };

  return (
    <div className="border-2 border-primaryTXT h-auto w-full max-w-screen-lg flex-row flex">
      <div className="h-20 w-72	border border-primaryTXT">
        <span className="text-primaryTXT">Converter</span>
        <input
          type="text"
          className="border border-red-500 h-10 w-full p-2 text-xl	 text-right font-medium my-1.5	"
        />
      </div>

      <div className="h-20 w-72	border border-primaryTXT">
        <span className="text-primaryTXT">DE</span>
        <div
          className="  h-10 w-full  text-right font-medium my-1.5 pl-2 cursor-pointer flex items-center"
          onClick={() => openModal()}
        >
          <div className="h-9 w-9 	border border-white">
            <img src={require(`../images/${currency.code}.png`)} />
          </div>
          <div className=" h-10 flex flex-col justify-start  p-0 pl-2 text-primaryTXT">
            <div className="text-base	text-left">{currency.code}</div>
            <div className="text-xs	text-left">{currency.name}</div>
          </div>
        </div>
      </div>

      <div className="h-20 flex items-center	cursor-pointer	">
        <img className="h-7" src={require("../images/arrows.png")} />
      </div>

      <div className="h-20 w-72	border border-primaryTXT">
        <span className="text-primaryTXT">PARA</span>
        <div className="border border-black h-10 w-full   text-right font-medium my-1.5 cursor-pointer"></div>
      </div>
    </div>
  );
};

export default InputValues;
