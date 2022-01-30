import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [modalActive, setModalActive] = useState(false);

  const activeModalHandler = () => {
    setModalActive(true);
  };
  const hideModalHandler = () => {
    setModalActive(false);
  };

  return (
    <CartProvider>
      {modalActive && <Cart hideModal={hideModalHandler} />}
      <Header activeModal={activeModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
