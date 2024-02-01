import React from 'react';
import CurrencyBox from './CurrencyBox';

const Boxes = () => {
  const buyType = {
    label: 'ADQUIRIR',
    description: 'ASK - preço do vendedor',
    color: 'yellow-300'
  };

  const sellType = {
    label: 'VENDER',
    description: 'BID - oferta do comprador',
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