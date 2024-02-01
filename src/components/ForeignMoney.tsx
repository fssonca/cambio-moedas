import React from "react";
import { Money } from "../types";

type Props = {
  currency: Money;
  onOpenModal: () => void;
};

const ForeignMoney = React.memo(({ currency, onOpenModal }: Props) => {
  // Create a require context for the images directory
  const images = require.context("../images", true);

  // Function to get image path using require context
  const getFlagImagePath = (code) => {
    try {
      return images(`./${code}.png`).default;
    } catch (err) {
      console.error("Image loading failed", err);
      return ""; // Return a default image or an empty string as fallback
    }
  };

  return (
    <div
      className="h-10 w-full text-right font-medium my-1.5 cursor-pointer flex items-center"
      onClick={onOpenModal}
    >
      <div className="h-9 w-9 border border-white">
        <img src={getFlagImagePath(currency.code)} alt={`${currency.code} flag`} />
      </div>
      <div className="h-10 flex flex-col justify-start p-0 text-primaryTXT">
        <div className="text-base text-left pl-2">{currency.code}</div>
        <div className="text-xs	text-left pl-2">{currency.name}</div>
      </div>

      <svg
        aria-hidden="true"
        className="w-5 h-5 fill-current text-primaryTXT ml-auto mt-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-2.5 -5 100 80"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0,0 l35,50 l35,-50"></path>
      </svg>
    </div>
  );
});

export default ForeignMoney;
