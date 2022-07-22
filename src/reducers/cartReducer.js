import { deleteItem, updateItem } from "utils";

export const addToCart = "ADD_TO_CART";
export const filterCartItem = "FILTER_CART_ITEM";
export const removeFromCart = "REMOVE-FROM-CART"
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY"


export const initialCartState = {
    cartData: [],
}

const CartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case addToCart:
            return {
                ...state,
                cartData: [...state.cartData, ...payload.cartData]
            }
        case removeFromCart:
            return {
                ...state,
                cartData: deleteItem([...state.cartData], payload.deleteIndex),
            }
        case UPDATE_CART_QUANTITY:
            {
                console.log('payload', payload.selectedIndex, payload.item);
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

