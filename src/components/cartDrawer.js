import React, { useContext } from 'react';
import { Drawer } from 'rsuite'
import { CartContext, CART } from 'contexts/CartContext';
import { getItemFromLS } from 'helper/utility/LSitems';
import { REMOVE_FROM_CART } from 'reducers/CartReducer';


const CartDrawer = ({ isDrawerOpen, onDrawerClose }) => {
    const cartItem = getItemFromLS(CART) || '[]';
    let parsedCartItem = JSON.parse(cartItem);

    const [{ cartData }, dispatch] = useContext(CartContext)

    const removeItemFromCartDrawer = (event, index) => {
        dispatch({ type: REMOVE_FROM_CART, payload: { deleteIndex: index } })
        parsedCartItem.splice(index, 1)
        localStorage.setItem(CART, JSON.stringify(parsedCartItem))
    }

    return (
        <Drawer
            placement="right"
            size="sm"
            backdrop={true}
            open={isDrawerOpen}
            onClose={() => onDrawerClose(false)}
            enforceFocus={false}
            autoFocus={false}
            full={true}
        >
            <Drawer.Header>
                <Drawer.Title> <h3>Cart</h3> </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body >

                {cartData.map((cartProduct, index) => {
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
                                <button className='add-cart-button' name="remove-btn" onClick={(event) => removeItemFromCartDrawer(event, index)}>Remove</button>
                                <hr></hr>
                            </div>
                        </div>)
                })}
            </Drawer.Body>
        </Drawer>
    )
}


export default CartDrawer

