import React, { createContext, useReducer } from "react";

interface IState {
  theme: string;
  modalOpen: boolean;
  currency: string;
  toBRL: boolean;
}

type IAction = {
  type: string;
};

interface IContextProps {
  state: IState;
  dispatch: ({ type }: { type: string }) => void;
}

const Store = createContext({} as IContextProps);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "DARK":
      return { ...state, theme: "dark" };
    case "LIGHT":
      return { ...state, theme: "light" };
    case "OPENMODAL":
      return { ...state, modalOpen: true };
    case "CLOSEMODAL":
      return { ...state, modalOpen: false };
    case "USD":
    case "EUR":
    case "GBP":
    case "CAD":
    case "BTC":
      return { ...state, currency: action.type };
    case "FROM_BRL":
      return { ...state, toBRL: true };
    case "TO_BRL":
      return { ...state, toBRL: false };
  }
  
  return  state
}

const initialState: IState = {
  theme: "dark",
  modalOpen: false,
  currency: "USD",
  toBRL: false,
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export { Store, StateProvider };
