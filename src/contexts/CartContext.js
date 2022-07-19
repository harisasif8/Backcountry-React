import { useState, createContext, useEffect } from 'react';
import { getItemFromLS } from 'helper/utility/LSitems'


export const CartContext = createContext();
export const CART = 'Cart'


export const CartProvider = props => {
    const [cartData, setCartData] = useState({})

    useEffect(() => {
        const cartItem = getItemFromLS(CART) || '[]';
        let parsedCartItem = JSON.parse(cartItem)
        setCartData([...parsedCartItem]);

    }, [])

    return (
        <CartContext.Provider value={[cartData, setCartData]}>
            {props.children}
        </CartContext.Provider >
    );

}

