import {addToCartAction} from "./actionString";

export const addToCart = (cart) => {
    return {
        type: addToCartAction,
        cart: cart
    }
}