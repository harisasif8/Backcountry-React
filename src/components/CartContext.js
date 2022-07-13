import { useState, createContext, useEffect } from 'react';


export const CartContext = createContext();
export const CART = 'Cart'


export const CartProvider = props => {
    const [cartData, setCartData] = useState({
        id: '',
        price: '',
        quantity: 1
    }
    )

    useEffect(() => {
        const getDataFromLS = () => {
            const cartItem = localStorage.getItem(CART) || [];
            const parsedCartItem = JSON.parse(cartItem);
            parsedCartItem.push(cartData);
            localStorage.setItem(CART, JSON.stringify(parsedCartItem));
        }
        getDataFromLS()
    }, [cartData])


    return (
        <CartContext.Provider value={[cartData, setCartData]}>
            {props.children}
        </CartContext.Provider>
    );

}

