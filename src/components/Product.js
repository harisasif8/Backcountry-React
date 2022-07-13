import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Drawer } from 'rsuite'



const Product = ({ product }) => {
    const addToCart = 'Add To Cart';
    const removeFromCart = 'Remove From Cart';
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [cartBtnText, setCartBtnText] = useState(addToCart)

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    }

    const removeFromCartBtn = (event) => {
        if (event.target.value === addToCart) {
            setCartBtnText(removeFromCart)
            setIsDrawerOpen(true);
        }
        else if (event.target.value === removeFromCart) {
            setCartBtnText(addToCart)
            setIsDrawerOpen(false);
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
                    <input type = 'button' onClick={(event) => removeFromCartBtn(event)} className='cart-button' id='cart-btn' value={cartBtnText}></input>

                    <Drawer
                        placement="right"
                        size="sm"
                        backdrop={true}
                        open={isDrawerOpen}
                        onClose={() => closeDrawer()}
                    >
                        <Drawer.Header>
                            <Drawer.Title> <h3>Cart</h3> </Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body className='cart-card'>
                            <div className='cart-img'>
                                <img src={`https://www.backcountry.com${productImage}`} alt="Avatar" className='cart-product-img' />
                            </div>
                            <div className='cart-info'>
                                <h6>{productTitle}</h6>
                                <h6>Quantity: 1</h6>
                                <h6>{`Color: ${BrandName}`}</h6>
                                <h6>{`Price : $${productPrice}`}</h6>
                                <button className='add-cart-button'>Remove</button>
                            </div>
                        </Drawer.Body>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}

export default Product;