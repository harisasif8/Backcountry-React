import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Product = ({ product }) => {
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
                    <button className='cart-button'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product;