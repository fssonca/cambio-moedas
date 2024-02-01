import React, { createContext, useReducer } from "react";
import { Action, ContextProps, State } from "./types";

const Store = createContext({} as ContextProps);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "DARK":
      return { ...state, theme: "DARK" };

    case "LIGHT":
      return { ...state, theme: "LIGHT" };

    case "OPEN_MODAL":
      return { ...state, modalOpen: true };

    case "CLOSE_MODAL":
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

    case "VALUES_CURRENCY":
      return { ...state, rates: action.payload };

    case "VALUE_TO_CONVERT":
      return { ...state, value: action.payload };
  }

  return state;
}

const initialState: State = {
  theme: "DARK",
  modalOpen: false,
  currency: "USD",
  toBRL: false,
  rates: null,
  value: 0,
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

export { Store, StateProvider };
