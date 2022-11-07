import React from "react";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./Context/AuthContext";
// import {CartContextProvider} from "./Context/CartContext";

function App() {
  return (
    <AuthContextProvider>
      {/* <CartContextProvider> */}
        <Main />
      {/* </CartContextProvider> */}
    </AuthContextProvider>
  );
}

export default App;
