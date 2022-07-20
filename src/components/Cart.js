import { useContext } from 'react';
import logo from 'assets/images/products listing/stoicblack.jpeg'
import { CartContext } from 'contexts/CartContext';



const CartItem = () => {
    const [{ filteredCartData }] = useContext(CartContext)
    console.log('filteredCartData', filteredCartData);
    return (
        <>
            <hr />
            <div className="cart">
                <h1 className="Cart-heading black-color">My Cart</h1>
                {/* <div id="empty-cart-contents">
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
                </div> */}
                {filteredCartData.map((filteredProduct) => {
                    console.log('filteredProduct.id', filteredProduct.id);
                    <div className="ls-cart-contents">
                        <div className="cart-item-image-div">
                            <img className="cart-item-image" src={logo} alt="" />
                        </div>
                        <div className='cart-text'>
                            <h5 className='black-color'>Backcountry BC 96 T-Shirt - Men's</h5>
                            <h5 >BCCZ2OT-HEAMET-M</h5>
                            <div className="cart-para-text">
                                <h5 className='black-color'>Color: Heavy Metal</h5>
                                <h5 className='black-color'>Size: M</h5>
                            </div>
                        </div>
                        <div className="cart-quantity">
                            <div>
                                <button className="quantity-btn">-</button>
                                <span value={0} className="quantity-value">0</span>
                                <button className="quantity-btn">+</button>
                            </div>
                            <div>
                                <h5 className='black-color cart-item-price'>$22.00</h5>
                                <button className="remove-btn">Remove</button>
                            </div>
                        </div>
                    </div>
                })}
                {/* <div className="ls-cart-contents">
                    <div className="cart-item-image-div">
                        <img className="cart-item-image" src={logo} alt="" />
                    </div>
                    <div className='cart-text'>
                        <h5 className='black-color'>Backcountry BC 96 T-Shirt - Men's</h5>
                        <h5 >BCCZ2OT-HEAMET-M</h5>
                        <div className="cart-para-text">
                            <h5 className='black-color'>Color: Heavy Metal</h5>
                            <h5 className='black-color'>Size: M</h5>
                        </div>
                    </div>
                    <div className="cart-quantity">
                        <div>
                            <button className="quantity-btn">-</button>
                            <span value={0} className="quantity-value">0</span>
                            <button className="quantity-btn">+</button>
                        </div>
                        <div>
                            <h5 className='black-color cart-item-price'>$22.00</h5>
                            <button className="remove-btn">Remove</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default CartItem