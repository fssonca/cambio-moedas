// exampleComponent.js
import React, { useContext } from "react";
import { Store } from "../store";

function formatterMoney(v: number, currency: string) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency }).format(
    v
  );
}

const Boxes: React.FC = () => {
  const globalState = useContext(Store);

  const { rates, toBRL, currency, value } = globalState.state;

  if (!rates) {
    return null;
  }

  const { ask, bid } = rates[currency];
  let v = value;
  let c = value;

  if (toBRL) {
    v = value / ask;
  }

  if (toBRL) {
    c = value / bid;
  }

  return (
    <div className="  h-auto    w-full my-2 max-w-screen-lg flex-row flex">
      <div className="border h-64 border-primaryTXT bg-yellow-300  w-2/4 my-2  flex-col flex p-2">
        <div>
          <span className=" text-lg font-bold	"> ADQUIRIR </span>
          <span className=" text-xs "> ( ASK - preço do vendedor )</span>
        </div>

        <div className="my-2 text-lg flex flex-col">
          <div className=" text-lg ">
            {" "}
            <span className="font-bold">
              {formatterMoney(ask * v, "BRL")}
            </span>{" "}
          </div>
          <div className=" text-lg ">
            <span className="font-bold">
              {formatterMoney(ask * v * 1.011, "BRL")}
            </span>{" "}
            (+IOF 1.1% - EM ESPÉCIE)
          </div>
          <div className=" text-lg ">
            <span className="font-bold">
              {formatterMoney(ask * v * 1.0638, "BRL")}
            </span>{" "}
            (+IOF 6.38% - DEMAIS OPERAÇÕES)
          </div>
        </div>
      </div>

      <div className="border h-64 border-primaryTXT bg-green-400 w-2/4	 my-2 p-2 ">
        <div>
          <span className=" text-lg font-bold	"> VENDER </span>
          <span className=" text-xs "> ( BID - oferta do comprador )</span>
        </div>

        <div className="my-2  text-gray-800flex flex-col">
          <div className=" text-lg ">
            <span className="font-bold">{formatterMoney(bid * c, "BRL")}</span>
          </div>

          <div className="p-2 text-sm bg-primaryBG flex flex-col text-primaryTXT">

          <div className=" text-lg ">
            <span className="">Imposto de Renda (20%)</span>
          </div>

            <table className="relative w-min my-2 ">
              <tbody>
                <tr>
                  <td>
                    <span className="font-bold text-gray-400">Bruto:</span>
                  </td>
                  <td>
                    <span className="font-bold text-gray-400 ml-2">
                      {formatterMoney(c, currency)}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className="font-bold text-primaryTXT">Líq:</span>
                  </td>
                  <td>
                    <span className="font-bold text-primaryTXT ml-2">
                      {formatterMoney(c * 0.8, currency)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>{"- "}</td>
                  <td>{""}</td>
                </tr>
                <tr>
                  <td>
                    <span className="font-bold text-gray-400">Bruto:</span>
                  </td>
                  <td>
                    <span className="font-bold text-gray-400 ml-2">
                      {formatterMoney(bid * c, "BRL")}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className="font-bold text-primaryTXT">Líq:</span>
                  </td>
                  <td>
                    <span className="font-bold text-primaryTXT ml-2">
                      {formatterMoney(bid * c * 0.8, "BRL")}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
