export const addToCart = "ADD_TO_CART";
export const filterCartItem = "FILTER_CART_ITEM";
export const removeFromCart = "REMOVE-FROM-CART"


export const initialCartState = {
    cartData: [],
    filteredCartData: []
}

const CartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case addToCart:
            return {
                ...state,
                cartData: [...state.cartData, ...payload.cartData]
            }
        case filterCartItem:
            return {
                ...state,
                filteredCartData: [...payload.filteredCartData]
            }
        case removeFromCart:
            return {
                ...state,
                cartData: [...payload.cartData],
            }

        default:
            throw new Error('No case for type')
    }
}

export default CartReducer;

