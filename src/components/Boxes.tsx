import React from 'react';
import CurrencyBox from './CurrencyBox';

const Boxes = () => {
  const buyType = {
    label: 'PURCHASE',
    description: "ASK - seller's price",
    color: 'yellow-300'
  };

  const sellType = {
    label: 'SELL',
    description: "BID - buyer's offer",
    color: 'green-400'
  };

  return (
    <div className="h-auto w-full my-2 max-w-screen-lg flex-col flex sm:flex-row">
      <CurrencyBox type={buyType} />
      <CurrencyBox type={sellType} />
    </div>
  );
};

export default Boxes;