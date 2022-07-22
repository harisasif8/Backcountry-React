import { createContext, useEffect, useReducer, useContext } from 'react';
import { getItemFromLS } from 'helper/utility/LSitems'
import cartReducer, { initialCartState, addToCart, filterCartItem, removeFromCart } from 'reducers/cartReducer';
import { ProductContext } from 'contexts/ProductContext'



export const CartContext = createContext();
export const CART = 'Cart'


export const CartProvider = props => {

    const [state, dispatch] = useReducer(cartReducer, initialCartState);
    const [{ products }] = useContext(ProductContext);


    useEffect(() => {
        const cartItem = getItemFromLS(CART) || '[]';
        let parsedCartItem = JSON.parse(cartItem)
        if (parsedCartItem.length) {
            dispatch({ type: addToCart, payload: { cartData: [...parsedCartItem] } })
        }

    }, []);

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {props.children}
        </CartContext.Provider >
    );

}

