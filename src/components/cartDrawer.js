import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from 'contexts/ProductContext'
import { Drawer } from 'rsuite'
import { CartContext } from 'contexts/CartContext';
import AddedToCartItems from 'helper/utility/AddedToCartItems';

const CartDrawer = ({ isDrawerOpen, onDrawerClose }) => {

    const [{ products }] = useContext(ProductContext);
    const [cartData] = useContext(CartContext);
    const [filteredCartProduct, setFilteredCartProduct] = useState([]);


    useEffect(() => {
        const items = products.filter((cartProductId) =>
            cartData.find((cartId) => cartProductId.id === cartId.id)
        )
        setFilteredCartProduct([...items])

    }, [cartData]);

    //    const a = AddedToCartItems(addedToCartItems)



    return (
        <Drawer
            placement="right"
            size="sm"
            backdrop={true}
            open={isDrawerOpen}
            onClose={() => onDrawerClose(false)}
        >
            <Drawer.Header>
                <Drawer.Title> <h3>Cart</h3> </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body >

                {filteredCartProduct.map((cartProduct, index) => {
                    const { title: productTitle, productMainImage: { name: BrandName }, activePrice: { maxListPrice: productPrice }, productMainImage: { mediumImg: productImage }, id: ProductId } = cartProduct;
                    return (
                        <div key={`cart-${ProductId}${index}`} className='cart-card'>
                            <div className='cart-img'>
                                <img src={`https://www.backcountry.com${productImage}`} alt="Avatar" className='cart-product-img' />
                            </div>
                            <div className='cart-info'>
                                <h6>{productTitle}</h6>
                                <h6>Quantity: 1</h6>
                                <h6>{`Color: ${BrandName} `}</h6>
                                <h6>{`Price : $${productPrice}`}</h6>
                                <button className='add-cart-button'>Remove</button>
                                <hr></hr>
                            </div>
                        </div>)
                })}
            </Drawer.Body>
        </Drawer>
    )
}




export default CartDrawer
