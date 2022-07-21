import { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { CartContext, CART } from 'contexts/CartContext';
import { addToCart, filterCartItem, removeFromCart } from 'reducers/cartReducer';
import { getItemFromLS } from 'helper/utility/LSitems';


const cartItem = getItemFromLS(CART) || '[]';
let parsedCartItem = JSON.parse(cartItem)

const Product = ({ product, onDrawerOpen }) => {
    const addToCartText = 'Add To Cart';
    const removeFromCartText = 'Remove From Cart';
    const [cartBtnText, setCartBtnText] = useState(addToCartText)
    const [{ cartData, filteredCartData }, dispatch] = useContext(CartContext)
    // console.log('cartData', cartData);
    // console.log('filteredCartData', filteredCartData);



    const isAddedToCart = parsedCartItem.find((cartProduct) => cartProduct.id === product.id)

    useEffect(() => {
        if (isAddedToCart) {
            setCartBtnText(removeFromCartText)
        }
    }, [isAddedToCart])


    const AddToCartDrawer = (event) => {
        const data = {
            id: product.id,
            price: product.activePrice.maxListPrice,
            quantity: 1

        }
        if (event.target.value === addToCartText) {
            console.log('cartData', cartData);
            dispatch({ type: addToCart, payload: { cartData: [data] } })

            parsedCartItem.push(data);
            localStorage.setItem(CART, JSON.stringify(parsedCartItem));

            onDrawerOpen(true);
            setCartBtnText(removeFromCartText)
        }
        //REMOVE_FROM_CART = "REMOVE_FROM_CART"
        else if (event.target.value === removeFromCartText) {
            const isAddedToCartIndex = parsedCartItem.indexOf(isAddedToCart)
            const items = cartData.filter((cartItem) => cartItem.id !== product.id);
            dispatch({ type: removeFromCart, payload: { cartData: [...items] } })
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