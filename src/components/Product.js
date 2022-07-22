import { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { CartContext, CART } from 'contexts/CartContext';
import { addToCart, removeFromCart } from 'reducers/cartReducer';
import { getItemFromLS } from 'helper/utility/LSitems';




const Product = ({ product, onDrawerOpen }) => {
    const cartItem = getItemFromLS(CART) || '[]';
    let parsedCartItem = JSON.parse(cartItem)
    const addToCartText = 'Add To Cart';
    const removeFromCartText = 'Remove From Cart';
    const [cartBtnText, setCartBtnText] = useState(addToCartText)
    const [{ cartData }, dispatch] = useContext(CartContext)
    const isAddedToCart = parsedCartItem.find((cartProduct) => cartProduct.id === product.id)
    useEffect(() => {

        setCartBtnText(isAddedToCart ? removeFromCartText : addToCartText)
    }, [isAddedToCart])


    const AddToCartDrawer = (event) => {

        if (event.target.value === addToCartText) {
            dispatch({ type: addToCart, payload: { cartData: [product] } })

            parsedCartItem.push(product);
            localStorage.setItem(CART, JSON.stringify(parsedCartItem));

            onDrawerOpen(true);
            setCartBtnText(removeFromCartText)
        }
        else if (event.target.value === removeFromCartText) {
            const isAddedToCartIndex = parsedCartItem.indexOf(isAddedToCart)
            dispatch({ type: removeFromCart, payload: { deleteIndex: isAddedToCartIndex } })

            parsedCartItem.splice(isAddedToCartIndex, 1)
            localStorage.setItem(CART, JSON.stringify(parsedCartItem))

            setCartBtnText(addToCartText)

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
                    <input type='button' onClick={(event) => AddToCartDrawer(event)} className='cart-button' value={cartBtnText}></input>
                </div>
            </div>
        </div>
    )
}

export default Product;