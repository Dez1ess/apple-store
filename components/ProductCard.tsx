import {FunctionComponent, useContext} from "react";
import Stripe from "stripe";
import CartContext from "./context/CartContext";
import {getPriceTotal, getProductDescription, getProductImage, getProductName} from "../utils/computed";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";

export type CardProps = {
    price: Stripe.Price,
    cardId: string,
}

const ProductCard: FunctionComponent<CardProps> = ({price, cardId}) => {
    const {add} = useContext(CartContext)

    const addToCart = (p: Stripe.Price) => {
        if (add) {
            add(p)
        }
    }

    return (
        <div className="w-[80%] md:w-[300px] shadow-lg">
            <Link href={`/products/${cardId}`}>
            <div title="SEE THE PRODUCT" className="relative w-full cursor-pointer">
                {/* Image */}
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                        <LazyLoadImage
                            src={getProductImage(price.product)}
                            alt={getProductDescription(price.product)}
                            className="max-w-full min-h-full object-cover"
                        />
                </div>
                {/* Product Name */}
                <div className="relative mt-4">
                    <h3 className="text-sm text-center pl-4 font-[600] text-[1rem] text-gray-900">{getProductName(price.product)}</h3>
                </div>
                {/* Price */}
                <div className="absolute top-0 inset-x-0 h-72  p-4 flex items-end justify-start overflow-hidden">
                    <div
                        aria-hidden="true"  
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-bold text-white">
                        ${getPriceTotal(price)}
                    </p>
                </div>
            </div>
            </Link>
            {/* Add to bag */}
            <div className="mt-4">
                <button
                    onClick={() => addToCart(price)}
                    className="relative w-full flex bg-gray-200 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                    Add to bag
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
