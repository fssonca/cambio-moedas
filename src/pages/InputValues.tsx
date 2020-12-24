// exampleComponent.js
import React, { useContext, useState } from "react";
import { Store } from "../store";

const InputValues: React.FC = () => {
    
  const globalState = useContext(Store);
  const { dispatch } = globalState;

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
          className="border border-black h-10 w-full  text-right font-medium my-1.5 cursor-pointer"
          onClick={() => openModal()}
        ></div>
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
