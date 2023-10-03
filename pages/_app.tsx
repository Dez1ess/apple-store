import '../styles/globals.css'
import type {AppProps} from 'next/app'
import CartContext, {CartContextProps} from "../components/context/CartContext";
import {useState, ReactNode} from "react";
import _ from "lodash";
import {Stripe} from "stripe";
import { Alert } from '@mui/material';

function MyApp({Component, pageProps}: AppProps) {
    const [items, setItems] = useState<Stripe.Price[]>([]);
    const [alert, setAlert] = useState<ReactNode | null>(null); // Initialize alert state

    const remove = (priceID: string) => {
        let i = _.reject(items, function (item) {
            return item.id === priceID;
        });
        setItems(i)
    }

    const add = (product: Stripe.Price) => {
        const isProductInCart = items.some(item => item.id === product.id);
        if (!isProductInCart) {
            let updatedItems = [...items, product];
            setItems(updatedItems);
            setAlert(<Alert style={{fontSize: "1rem", padding: "0.5rem"}} severity='success'>Successfully added</Alert>);
        } else {
            setAlert(<Alert style={{fontSize: "1rem", padding: "0.5rem"}} severity='info'>Already added</Alert>);
        }

        setTimeout(() => {
            setAlert(null); 
          }, 2000);
    }

    const cartContext: CartContextProps = {
        items: items,
        add: add,
        remove: remove,
        alert: alert,
    }


    return (
        <CartContext.Provider value={cartContext}>
            <Component {...pageProps} />
        </CartContext.Provider>
    )
}

export default MyApp
