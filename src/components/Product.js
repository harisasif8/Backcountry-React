import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Drawer } from 'rsuite'
import { CartContext, CART } from './CartContext';
import CartDrawer from './cartDrawer';


const Product = ({ product, onDrawerOpen }) => {
    const addToCart = 'Add To Cart';
    const removeFromCart = 'Remove From Cart';
    const [cartData, setCartData] = useContext(CartContext)
    const [cartBtnText, setCartBtnText] = useState(addToCart)


    const AddToCartDrawer = (event) => {

        if (event.target.value === addToCart) {
            setCartData({
                id: product.id,
                price: product.activePrice.maxListPrice,
                quantity: 1

            })
            onDrawerOpen(true);
            setCartBtnText(removeFromCart)
        }
        else if (event.target.value === removeFromCart) {
            setCartBtnText(addToCart)
            onDrawerOpen(false);
        }
    }

    const { title: productTitle, brand: { name: BrandName }, activePrice: { maxListPrice: productPrice }, customerReviews: reviews, productMainImage: { mediumImg: productImage } } = product;

    return (
        <div className="grid-item" key={productTitle}>
            <div className="card">
                <img src={`https://www.backcountry.com${productImage}`} alt="Avatar" className='product-images ' />
                <div className="container">
                    <h6 className='brand '>{productTitle}</h6>
                    <p className='title '>{BrandName}</p>
                    <p className='price '>{`$${productPrice}`}</p>
                    <p className='reviews '>
                        {Array.apply(null, { length: reviews.average }).map((rating, ratingIndex) => (
                            <i key={`${product.title}-rating-${ratingIndex}`} ><FontAwesomeIcon icon={faStar} /></i>)
                        )}
                    </p>
                    <input type='button' onClick={(event) => AddToCartDrawer(event)} className='cart-button' id='cart-btn' value={cartBtnText}></input>
                </div>
            </div>
        </div>
    )
}

export default Product;