import { useContext } from 'react';
import { CartContext, CART } from 'contexts/CartContext';
import { getItemFromLS } from 'helper/utility/LSitems';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from 'reducers/cartReducer';





const Cart = () => {
    const cartItem = getItemFromLS(CART) || '[]';
    let parsedCartItem = JSON.parse(cartItem)

    const [{ cartData }, dispatch] = useContext(CartContext)

    if (cartData.length) {
        const emptyCartContent = document.getElementById('empty-cart-contents')
        emptyCartContent.textContent = ''
    }

    const removeItemFromCart = (event, index) => {
        dispatch({ type: REMOVE_FROM_CART, payload: { deleteIndex: index } })
        parsedCartItem.splice(index, 1)
        localStorage.setItem(CART, JSON.stringify(parsedCartItem))
    }

    const quantityHandler = (e, index) => {
        let item = { ...cartData[index] };
        const decrementBtn = document.getElementById(item.id)

        if (e.target.value === 'increment') {
            item.selectedQuantity += 1;
            dispatch({ type: UPDATE_CART_QUANTITY, payload: { item, selectedIndex: index } })
            parsedCartItem.splice(index, 1, item);
            localStorage.setItem(CART, JSON.stringify(parsedCartItem))

        }
        else {
            item.selectedQuantity -= 1;
            dispatch({ type: UPDATE_CART_QUANTITY, payload: { item, selectedIndex: index } })
            parsedCartItem.splice(index, 1, item);
            localStorage.setItem(CART, JSON.stringify(parsedCartItem))

        }

        if (item.selectedQuantity <= 1) {
            decrementBtn.setAttribute('disabled', 'true')
            console.log(decrementBtn)
        }

        else {
            decrementBtn.removeAttribute('disabled')
            console.log(decrementBtn)
        }
    }

    return (
        <>
            <hr />
            <div className="cart">
                <h1 className="Cart-heading black-color">My Cart</h1>
                <div id="empty-cart-contents">
                    <h2 className="">Your cart is currently empty.</h2>
                    <div className="continue-shopping">
                        <div>
                            <h4>Do you have saved items?</h4>
                            <h5>Sign in to purchase and manage items that you have saved in your cart or wish list.</h5>
                            <button className="signin-shopping-button">Sign In</button>
                        </div>
                        <div>
                            <h4>Want to shop?</h4>
                            <h5>This is the perfect opportunity to shop for the gear you've been wanting.</h5>
                            <button className="signin-shopping-button">Continue Shopping</button>
                        </div>
                    </div>
                </div>

                {cartData.map((filteredProduct, index) => {
                    const { id: productId, title: productTitle, productMainImage: { mediumImg: productImage }, productMainImage: { name: productColor }, selectedSize: productSize, activePrice: { maxListPrice: productPrice }, selectedQuantity: productQuantity } = filteredProduct;
                    return (
                        <div className="ls-cart-contents" key={`cart-item-${productTitle}+${index}`}>
                            <div className="cart-item-image-div">
                                <img className="cart-item-image" src={`https://www.backcountry.com${productImage}`} alt="" />
                            </div>
                            <div className='cart-text'>
                                <h5 className='black-color'>{productTitle}</h5>
                                <h5 >{productId}</h5>
                                <div className="cart-para-text">
                                    <h5 className='black-color'>Color: {productColor}</h5>
                                    <h5 className='black-color'>Size: {productSize}</h5>
                                </div>
                            </div>
                            <div className="cart-quantity">
                                <div>
                                    <button className="quantity-btn" value='decrement' id={productId} disabled={false} onClick={(event) => quantityHandler(event, index)}>-</button>
                                    <span value={productQuantity} className="quantity-value" id='quantity-value'>{productQuantity}</span>
                                    <button className="quantity-btn" value='increment' onClick={(event) => quantityHandler(event, index)}>+</button>
                                </div>
                                <div>
                                    <h5 className='black-color cart-item-price'>${(productPrice * productQuantity).toFixed(2)}</h5>
                                    <button className="remove-btn" onClick={(event) => removeItemFromCart(event, index)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Cart