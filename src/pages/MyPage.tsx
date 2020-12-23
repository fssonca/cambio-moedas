// exampleComponent.js
import React, { useContext } from "react";
import { Store } from "../store";

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
      onClick={() => setTheme()}
    >
      <div className="bg-primaryBG transition-all h-full	w-full">
        <h1 className="text-primaryTXT">Câmbio de moedas</h1>
        <h1 className="text-primaryTXT">Theme: {theme}</h1>
      </div>
    </div>
  );
};

export default MyPage;
