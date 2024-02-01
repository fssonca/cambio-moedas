import { useContext, useEffect } from "react";
import { Store } from "../store";
import { CURRENCIES_API } from "../utils/constants";

const useCurrencyData = () => {
  const { state, dispatch } = useContext(Store);
  const { rates } = state;

  useEffect(() => {
    if (!rates) {
      fetch(CURRENCIES_API, { cache: "no-cache" })
        .then((response) => response.json())
        .then(
          (data) => dispatch({ type: "VALUES_CURRENCY", payload: data }),
          (error) => console.error(error),
        );
    }
  }, [rates, dispatch]);

  return state;
};

export default useCurrencyData;