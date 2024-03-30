import "../styles/globals.css";
import type { AppProps } from "next/app";
import CartContext, {
  CartContextProps,
} from "../components/context/CartContext";
import { useState, ReactElement } from "react";
import _ from "lodash";
import { Stripe } from "stripe";
import { Alert, Slide } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  const [items, setItems] = useState<Stripe.Price[]>([]);
  const [alert, setAlert] = useState<ReactElement | null>(null); 
  const [alertVisible, setAlertVisible] = useState<boolean | undefined>(false);

  function playSound(sound: string) {
    new Audio(`/sounds/${sound}`).play();
  }

  const remove = (priceID: string) => {
    let i = _.reject(items, function (item) {
      return item.id === priceID;
    });
    setItems(i);
  };

 const add = (product: Stripe.Price) => {
  const isProductInCart = items.some((item) => item.id === product.id);
  if (!isProductInCart) {
    let updatedItems = [...items, product];
    setItems(updatedItems);
    setAlert(
      <Alert
        style={{ fontSize: "1rem", padding: "0.5rem" }}
        severity="success"
      >
        Successfully added
      </Alert>,
    );
    setAlertVisible(true);
    playSound("notification-success.mp3");
  } else {
    setAlert(
      <Alert style={{ fontSize: "1rem", padding: "0.5rem" }} severity="info">
        Already added
      </Alert>,
    );
    setAlertVisible(true);
    playSound("notification-warning.mp3")
  }

  setTimeout(() => {
    setAlert(null);
    setAlertVisible(false);
  }, 2000);
};

  const cartContext: CartContextProps = {
    items: items,
    add: add,
    remove: remove,
    alert: alert,
    isAlertVisible: alertVisible,
  };

  return (
    <CartContext.Provider value={cartContext}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp;
