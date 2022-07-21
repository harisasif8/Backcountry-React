import React, { useContext } from 'react';
import { Drawer } from 'rsuite'
import { CartContext } from 'contexts/CartContext';


const CartDrawer = ({ isDrawerOpen, onDrawerClose }) => {

    const [{ filteredCartData, cartData }] = useContext(CartContext)
    console.log('filteredCartData', filteredCartData);
    console.log('cartData', cartData);

    


    const removeItemFromCartDrawer = (e) => {

    }

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

                {filteredCartData.map((cartProduct, index) => {
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
                                <button className='add-cart-button' name="remove-btn" onClick={(event) => removeItemFromCartDrawer(event)}>Remove</button>
                                <hr></hr>
                            </div>
                        </div>)
                })}
            </Drawer.Body>
        </Drawer>
    )
}


export default CartDrawer

