import React from "react";
import { useCurrencyConversion } from "../hooks/useCurrencyConversion";

interface CurrencyBoxProps {
  type: {
    label: string;
    description: string;
    color: string;
  };
}

const CurrencyInfo = ({ label, value }) => (
  <div className="text-lg">
    <span className="font-bold">{value}</span>
    <span className="ml-2">{label}</span>
  </div>
);

const CurrencyDetailsRow = ({ label, value, labelStyle = "" }) => (
  <div className="flex justify-between md:w-1/3">
    <span className={`font-bold ${labelStyle}`}>{label}</span>
    <span className={`font-bold ${labelStyle}`}>{value}</span>
  </div>
);

const CurrencyBox: React.FC<CurrencyBoxProps> = ({ type }) => {
  const currencyConversion = useCurrencyConversion();

  if (!currencyConversion) return null;

  const { formatted } = currencyConversion;

  // Depending on whether this box is for buying or selling, render the appropriate content
  let content;
  if (type.label === "ADQUIRIR") {
    content = (
      <>
        <CurrencyInfo label="" value={formatted.ask} />
        <CurrencyInfo label="(+IOF 1.1% - EM ESPÉCIE)" value={formatted.iofCash} />
        <CurrencyInfo label="(+IOF 6.38% - DEMAIS OPERAÇÕES)" value={formatted.iofOthers} />
      </>
    );
  } else {
    content = (
      <>
        <CurrencyInfo label="" value={formatted.brlValueNonTaxed} />

        <div className="p-2 text-sm bg-primaryBG flex flex-col text-primaryTXT">
          <div className="text-lg mb-2">Income Tax (20%)</div>
          <CurrencyDetailsRow
            label="Gross:"
            value={formatted.foreignCurrencyValue}
            labelStyle="text-gray-400"
          />
          <CurrencyDetailsRow
            label="Net:"
            value={formatted.foreignCurrencyValueTaxed}
            labelStyle="text-primaryTXT"
          />
          <div className="my-2" /> {/* Spacer */}
          <CurrencyDetailsRow
            label="Gross:"
            value={formatted.brlValueNonTaxed}
            labelStyle="text-gray-400"
          />
          <CurrencyDetailsRow
            label="Net:"
            value={formatted.brlValueTaxed}
            labelStyle="text-primaryTXT"
          />
        </div>
      </>
    );
  }

  const colorClasses = {
    "green-400": "bg-green-400",
    "yellow-300": "bg-yellow-300",
  };

  return (
    <div
      className={`border h-64 border-primaryTXT w-full sm:w-2/4 my-2 flex-col flex p-2 ${colorClasses[type.color]}`}
    >
      <div>
        <span className="text-lg font-bold"> {type.label} </span>
        <span className="text-xs">({type.description})</span>
      </div>
      <div className="my-2 text-lg flex flex-col">{content}</div>
    </div>
  );
};

export default CurrencyBox;
