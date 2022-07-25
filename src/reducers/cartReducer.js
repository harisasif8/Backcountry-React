import { deleteItem, updateItem } from "utils";

export const ADD_TO_CART = "ADD_TO_CART";
export const FILTER_CART_ITEM = "FILTER_CART_ITEM";
export const REMOVE_FROM_CART = "REMOVE-FROM-CART"
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY"


export const initialCartState = {
    cartData: [],
}

const CartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartData: [...state.cartData, ...payload.cartData]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartData: deleteItem([...state.cartData], payload.deleteIndex),
            }
        case UPDATE_CART_QUANTITY:
            {
                return {
                    ...state,
                    cartData: updateItem([...state.cartData], payload.selectedIndex, payload.item)
                }
            }

        default:
            throw new Error('No case for type')
    }
}

export default CartReducer;

