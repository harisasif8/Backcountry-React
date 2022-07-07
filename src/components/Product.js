import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Drawer } from 'rsuite'



const Product = ({ product }) => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    }




    return (
        <div className="grid-item" key={product.title}>
            <div className="card">
                <img src={`https://www.backcountry.com${product.productMainImage.mediumImg}`} alt="Avatar" className='product-images ' />
                <div className="container">
                    <h6 className='brand '>{product.title}</h6>
                    <p className='title '>{product.brand.name}</p>
                    <p className='price '>{`$${product.activePrice.maxListPrice}`}</p>
                    <p className='reviews '>
                        {Array.apply(null, { length: product.customerReviews.average }).map((rating, ratingIndex) => (
                            <i key={`${product.title}-rating-${ratingIndex}`} ><FontAwesomeIcon icon={faStar} /></i>)
                        )}
                    </p>
                    <button onClick={() => { setIsDrawerOpen(true); }} className='cart-button' id='cart-btn'>Add To Cart</button>
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
                        <Drawer.Body>
                            <img src={`https://www.backcountry.com${product.productMainImage.mediumImg}`} alt="Avatar" className='cart-img' />
                            <h6>{product.title}</h6>
                            <h6>Quantity: 1</h6>
                            <h6>{`Color: ${product.productMainImage.name}`}</h6>
                            <h6>{`Price : $${product.activePrice.maxListPrice}`}</h6>

                            <button className='add-cart-button'>Remove</button>


                        </Drawer.Body>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}

export default Product;