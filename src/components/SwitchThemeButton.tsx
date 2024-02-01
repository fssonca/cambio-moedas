import React, { useContext } from "react";
import { Store } from "../store";

const SwitchThemeButton: React.FC = () => {
  const globalState = useContext(Store);
  const { dispatch } = globalState;
  const { theme } = globalState.state;

  const setTheme = () => {
    const t = theme !== "LIGHT" ? "LIGHT" : "DARK";
    dispatch({ type: t });
  };

  return (
    <div className={`h-10 w-10`}>
      <button
        aria-label="Activate Light Mode"
        title="Activate Light Mode"
        onClick={() => setTheme()}
        className="block hover:text-accent transition duration-150 rotate-180 focus:outline-none"
      >
        <svg
          aria-hidden="true"
          className="w-6 h-6  fill-current text-primaryTXT"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 18.75V1.25a8.75 8.75 0 100 17.5zM10 20a10 10 0 100-20 10 10 0 000 20z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default SwitchThemeButton;
