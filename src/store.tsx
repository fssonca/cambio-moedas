import React, { createContext, useReducer } from "react";

interface IState {
  theme: string;
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
      return { theme: "dark" };
    case "LIGHT":
      return { theme: "light" };
  }
}

const initialState: IState = { theme: "dark" };

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export {Store, StateProvider} ;
