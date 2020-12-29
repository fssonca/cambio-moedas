// exampleComponent.js
import React, { useContext, useState } from "react";
import { Store } from "../store";
import { currencies, money } from "./arrayCurrencies";

function Brl() {
  return (
    <div className="  h-10 w-full  text-right font-medium my-1.5   cursor-pointer flex items-center">
      <div className="h-9 w-9 border border-white">
        <img src={require(`../images/BRL.png`)} />
      </div>
      <div className=" h-10 flex flex-col justify-start  p-0 pl-2 text-primaryTXT">
        <div className="text-base	text-left">BRL</div>
        <div className="text-xs	text-left">Real Brasileiro</div>
      </div>
    </div>
  );
}

function ForeignMoney(currency: money, dispatch) {
  const openModal = () => {
    dispatch({ type: "OPENMODAL" });
  };

  return (
    <div
      className="  h-10 w-full  text-right font-medium my-1.5   cursor-pointer flex items-center"
      onClick={() => openModal()}
    >
      <div className="h-9 w-9 border border-white  ">
        <img src={require(`../images/${currency.code}.png`)} />
      </div>
      <div className=" h-10 flex flex-col justify-start  p-0 text-primaryTXT">
        <div className="text-base	text-left pl-2">{currency.code}</div>
        <div className="text-xs	text-left pl-2">{currency.name}</div>
      </div>

      <svg
        aria-hidden="true"
        className="w-5 h-5 fill-current text-primaryTXT ml-auto mt-3	"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-2.5 -5 100 80"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0,0 l35,50 l35,-50"
        ></path>
      </svg>
    </div>
  );
}

const InputValues: React.FC = () => {
  const globalState = useContext(Store);
  const { dispatch } = globalState;

  const { currency: c, toBRL } = globalState.state;

  const currency = currencies.find((x) => x.code === c);

  const [txtUserValue, setTxtUserValue] = useState("");

  const switchOrigin = () => {
    const t = toBRL ? "TO_BRL" : "FROM_BRL";
    dispatch({ type: t });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;

    const p = v.substr(-1);
    if (p === "." || p === ",") {
      // like Google does
      // you cant have "," and "." in the same input, or theses multiple

      const a = txtUserValue.indexOf(".");
      const b = txtUserValue.indexOf(",");
      if (a > -1 || b > -1) {
        if (v.length > txtUserValue.length) return;
      }
    }

    setTxtUserValue(v);
    valida_num(v);
  };

  const valida_num = (v: string) => {
    if (v !== "") {
      let t = Number(v);

      if (t) {
        dispatch({ type: "VALUE_TO_CONVERT", payload: t });
      } else {
        if (v.indexOf(",") > -1) {
          let x = v.replace(",", ".");
          if (Number(x)) {
            valida_num(x);
          }
        }
      }
    }
  };

  return (
    <div className="border border-primaryTXT  w-full max-w-screen-lg flex sm:flex-col">
      <div className="h-20 border bg-yellow-500 border-primaryTXT   sm:w-1/3  w-full ">
      <span className="text-primaryTXT">Converter</span>
<input
  type="text"
  value={txtUserValue}
  onChange={handleChange}
  className="border border-red-500 h-10 w-full p-2 text-xl	 text-right font-medium my-1.5"
/>
      </div>


<div className="h-20  bg-green-300  sm:w-2/3 w-full">

<div className="h-20 	border border-primaryTXT px-2">
        <span className="text-primaryTXT  ">DE</span>
        {toBRL ? Brl() : ForeignMoney(currency, dispatch)}
      </div>

      <div
        className="h-20 flex items-center justify-center	cursor-pointer"
        onClick={() => switchOrigin()}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="25pt"
          height="18.875pt"
          className="fill-current text-primaryTXT"
          viewBox="0 0 400.000000 302.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,302.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M2740 2780 l0 -240 -1370 0 -1370 0 0 -275 0 -275 1370 0 1370 0 2
-243 3 -244 627 376 c345 207 627 381 627 386 0 9 -1236 755 -1252 755 -4 0
-7 -108 -7 -240z"
            />
            <path
              d="M628 1140 c-345 -206 -626 -379 -624 -385 2 -10 1234 -755 1248 -755
4 0 8 108 8 240 l0 240 1370 0 1370 0 0 275 0 275 -1370 0 -1370 0 -2 243 -3
243 -627 -376z"
            />
          </g>  
        </svg>
      </div>

      <div className="h-20 	border border-primaryTXT px-2">
        <span className="text-primaryTXT ">PARA</span>

        {toBRL ? ForeignMoney(currency, dispatch) : Brl()}
      </div>
</div>

</div>
  );
};

export default InputValues;
