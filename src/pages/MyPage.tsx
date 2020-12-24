// exampleComponent.js
import React, { useContext } from "react";
import { Store } from "../store";
import InputValues from "./InputValues"
import Modal from "./ModalCurrencies"
import SwitchButton from "./SwitchButton"

const MyPage: React.FC = () => {
  const globalState = useContext(Store);
  const { dispatch } = globalState;
  const { theme } = globalState.state;

  const setTheme = () => {
    const t = theme !== "light" ? "LIGHT" : "DARK";
    dispatch({ type: t });
  };

  return (
    <div
      className={theme === "light" ? "theme-light" : "theme-dark"}
    
    >
      <div className="bg-primaryBG transition-all h-screen	w-screen justify-center	flex">
        <SwitchButton/>
        <Modal/>
       <InputValues/>
      </div>
    </div>
  );
};

export default MyPage;
