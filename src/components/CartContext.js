import { useState, createContext, useEffect } from 'react';


export const CartContext = createContext();
export const CART = 'Cart'


export const CartProvider = props => {
    const [cartData, setCartData] = useState({}
    )

    const getDataFromLS = () => {
        const cartItem = localStorage.getItem(CART) || '[]';
        const parsedCartItem = JSON.parse(cartItem)
        parsedCartItem.push(cartData);
        localStorage.setItem(CART, JSON.stringify(parsedCartItem));
    }

    useEffect(() => {
        if (Object.keys(cartData).length) {
            getDataFromLS()

        }

    }, [cartData])


    return (
        <CartContext.Provider value={[cartData, setCartData]}>
            {props.children}
        </CartContext.Provider>
    );

}

