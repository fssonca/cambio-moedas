export interface Rates {
    [key: string]: {
      bid: number;
      ask: number;
      timestamp: number;
    };
  }
  
  export interface State {
    theme: "DARK" | "LIGHT";
    modalOpen: boolean;
    currency: string;
    toBRL: boolean;
    rates: Rates | null;
    value: number;
  }
  
  export type Action = {
    type: string;
    payload?: any;
  };
  
  export interface ContextProps {
    state: State;
    dispatch: ({ type, payload }: { type: string; payload?: any }) => void;
  }
  
  export type Money = {
    code: string;
    name: string;
  };
  