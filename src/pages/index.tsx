import * as React from "react";
import "../css/index.css";

import { StateProvider } from "../store";
import MyPage from "./MyPage"

function App() {
  return (
    <StateProvider>
      <MyPage />
    </StateProvider>
  );
}
export default App;
