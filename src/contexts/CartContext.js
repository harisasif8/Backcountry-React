import { useState, createContext, useEffect, useReducer, useContext } from 'react';
import { getItemFromLS } from 'helper/utility/LSitems'
import cartReducer, { initialCartState } from 'hooks/cartReducer';
import { ProductContext } from 'contexts/ProductContext'



export const CartContext = createContext();
export const CART = 'Cart'


export const CartProvider = props => {

    const [state, dispatch] = useReducer(cartReducer, initialCartState);
    const [{ products }] = useContext(ProductContext);


    useEffect(() => {
        const cartItem = getItemFromLS(CART) || '[]';
        let parsedCartItem = JSON.parse(cartItem)
        dispatch({ type: 'ADD_TO_CART', payload: { cartData: [...parsedCartItem] } })
    }, []);

    useEffect(() => {
        const items = products.filter((cartProductId) =>
            state.cartData.find((cartId) => cartProductId.id === cartId.id)
        )
        dispatch({ type: 'FILTER_CART_ITEM', payload: { filteredCartData: [...items] } });
    }, [state.cartData]);

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {props.children}
        </CartContext.Provider >
    );

}

