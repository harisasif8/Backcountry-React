import { useState, createContext, useEffect } from 'react';


export const CartContext = createContext();
export const CART = 'Cart'


export const CartProvider = props => {
    const [cartData, setCartData] = useState([])


    // useEffect(() => {
    //     if (Object.keys(cartData).length) {
    //         getDataFromLS()

    //     }

    // }, [cartData])

    useEffect(() => {
        const cartItem = localStorage.getItem(CART) || '[]';
        let parsedCartItem = JSON.parse(cartItem)
        setCartData([...parsedCartItem]);

    }, [])

    return (
        <CartContext.Provider value={[cartData, setCartData]}>
            {props.children}
        </CartContext.Provider>
    );

}

