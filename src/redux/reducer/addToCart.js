
import { addToCartAction } from "../actionCreator/actionString";

const initialState = {
    cartContainer: {},
}
const cartReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case addToCartAction:
            let newCart = action.cart
            return {...prevState, cartContainer: newCart}

        default:
            return prevState;
    }
}

export default cartReducer