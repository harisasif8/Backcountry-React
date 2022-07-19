import { useContext, useState, useEffect } from 'react';
import { ProductContext } from 'contexts/ProductContext'
import { CartContext } from 'contexts/CartContext';



const AddedToCartItems = ({}) => {
    const [{ products }] = useContext(ProductContext);
    const [cartData] = useContext(CartContext);
    const [filteredCartProduct, setFilteredCartProduct] = useState([]);

    useEffect(() => {
        const items = products.filter((cartProductId) =>
            cartData.find((cartId) => cartProductId.id === cartId.id)
        )
        setFilteredCartProduct([...items])

    }, [cartData]);
}

export default AddedToCartItems;

