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

    useEffect(() => {
        if (products.length && state.cartData.length) {
            const items = products.filter((cartProductId) =>
                state.cartData.find((cartId) => cartProductId.id === cartId.id)
            )
            dispatch({ type: filterCartItem, payload: { filteredCartData: [...items] } });
        }



    }, [state.cartData, products]);

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {props.children}
        </CartContext.Provider >
    );

}

