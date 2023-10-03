import {createContext, ReactNode} from "react";
import Stripe from "stripe";

export type CartContextProps = {
    items?: Stripe.Price[]
    remove?: (priceID: string) => void
    add?: (product: Stripe.Price) => void
    alert?: ReactNode | null
}

const cartContextProps: CartContextProps = {}

const CartContext = createContext(cartContextProps);

export default CartContext;
