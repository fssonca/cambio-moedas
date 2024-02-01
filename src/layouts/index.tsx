import React from "react";
import "../css/index.css";
import { StateProvider } from "../store";

const Layout = ({ children }) => {
  return <StateProvider>{children}</StateProvider>;
};

export default Layout;
