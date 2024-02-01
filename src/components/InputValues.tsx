import React, { useContext, useState } from "react";
import { Store } from "../store";
import { Money } from "../types";
import Brl from "./Brl";
import ForeignMoney from "./ForeignMoney";
import SwitchCurrencyButton from "./SwitchCurrencyButton";
import { currencies } from "../utils/constants";

const InputValues: React.FC = () => {
  const {
    state: { currency: c, toBRL },
    dispatch,
  } = useContext(Store);
  const currency = currencies.find((x) => x.code === c);
  const [txtUserValue, setTxtUserValue] = useState("");

  const switchOrigin = () => dispatch({ type: toBRL ? "TO_BRL" : "FROM_BRL" });
  const onOpenModal = () => dispatch({ type: "OPEN_MODAL" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (validateInput(newValue)) {
      setTxtUserValue(newValue);
      validateAndDispatch(newValue);
    }
  };

  const validateInput = (input: string) => {
    const lastChar = input.slice(-1);
    if (lastChar === "." || lastChar === ",") {
      const hasDot = txtUserValue.includes(".");
      const hasComma = txtUserValue.includes(",");
      if ((hasDot || hasComma) && input.length > txtUserValue.length) return false;
    }
    return true;
  };

  const validateAndDispatch = (value: string) => {
    if (value !== "") {
      let numericValue = Number(value.replace(",", "."));
      if (!isNaN(numericValue) && numericValue !== 0) {
        dispatch({ type: "VALUE_TO_CONVERT", payload: numericValue });
      }
    }
  };

  return (
    <div className="w-full max-w-screen-lg flex flex-col sm:flex-row">
      <div className="h-20   sm:w-1/3  w-full ">
        <span className="text-primaryTXT">To convert</span>
        <input
          type="text"
          value={txtUserValue}
          onChange={handleChange}
          className="border border-gray-300 h-10 w-full p-2 text-xl text-right font-medium my-1.5"
        />
      </div>

      <div className="h-20 sm:w-2/3 w-full  grid grid-cols-12 ">
        <div className="h-20 px-2 col-span-5">
          <span className="text-primaryTXT">FROM</span>
          {toBRL ? (
            <Brl />
          ) : (
            <ForeignMoney currency={currency as Money} onOpenModal={onOpenModal} />
          )}
        </div>

        <SwitchCurrencyButton switchOrigin={switchOrigin} />

        <div className="h-20 px-2 col-span-5">
          <span className="text-primaryTXT ">TO</span>

          {toBRL ? (
            <ForeignMoney currency={currency as Money} onOpenModal={onOpenModal} />
          ) : (
            <Brl />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputValues;
