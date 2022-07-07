import { useState, createContext } from 'react';


export const cartContext = createContext();
const cart = 'Cart'



export const cartProvider = props => {
    const [cartData, setCartData] = useState({
        id: '',
        price: '',
        quantity: 1
    }
    )

    const getDataFromLS = () => {
        const cartItem = localStorage.getItem(cart) || '[]';
        const parsedCartItem = JSON.parse(cartItem);
        parsedCartItem.push(cartData);

        localStorage.setItem(cart, JSON.stringify(parsedCartItem));


    }
    getDataFromLS()


    return (
        <cartContext.Provider value={[cartData, setCartData]}>
            {props.children}
        </cartContext.Provider>
    );

}

