import { createContext, useEffect, useReducer } from 'react';
import { getItemFromLS } from 'helper/utility/LSitems'
import cartReducer, { initialCartState, ADD_TO_CART } from 'reducers/CartReducer';



export const CartContext = createContext();
export const CART = 'Cart'


export const CartProvider = props => {

    const [state, dispatch] = useReducer(cartReducer, initialCartState);

    useEffect(() => {
        const cartItem = getItemFromLS(CART) || '[]';
        let parsedCartItem = JSON.parse(cartItem)
        if (parsedCartItem.length) {
            dispatch({ type: ADD_TO_CART, payload: { cartData: [...parsedCartItem] } })
        }
    }, []);

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {props.children}
        </CartContext.Provider >
    );

}

