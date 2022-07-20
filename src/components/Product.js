import { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { CartContext, CART } from 'contexts/CartContext';
import { getItemFromLS } from 'helper/utility/LSitems';


const cartItem = getItemFromLS(CART) || '[]';
const parsedCartItem = JSON.parse(cartItem)

const Product = ({ product, onDrawerOpen }) => {
    const addToCart = 'Add To Cart';
    const removeFromCart = 'Remove From Cart';
    const [cartBtnText, setCartBtnText] = useState(addToCart)
    const [{ cartData }, dispatch] = useContext(CartContext)
    const isAddedToCart = parsedCartItem.find((cartProduct) => cartProduct.id === product.id)

    useEffect(() => {
        if (isAddedToCart) {
            setCartBtnText(removeFromCart)
        }
    }, [isAddedToCart])


    const AddToCartDrawer = (event) => {
        const data = {
            id: product.id,
            price: product.activePrice.maxListPrice,
            quantity: 1

        }
        if (event.target.value === addToCart) {
            dispatch({ type: 'ADD_TO_CART', payload: { cartData: [...cartData, data] } })


            const cartItem = getItemFromLS(CART) || '[]';
            let parsedCartItem = JSON.parse(cartItem)
            parsedCartItem.push(data);
            localStorage.setItem(CART, JSON.stringify(parsedCartItem));

            onDrawerOpen(true);
            setCartBtnText(removeFromCart)
        }
        else if (event.target.value === removeFromCart) {
            setCartBtnText(addToCart)
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