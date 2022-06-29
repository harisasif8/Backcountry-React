import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const products = (product) => {
    return (
        <div>
            <div className="grid-item" key={product.title}>
                        <div className="card">
                            <img src={`https://www.backcountry.com${product.productMainImage.mediumImg}`} alt="Avatar" className='product-images animate' />
                            <div className="container">
                                <h6 className='brand animate'>{product.title}</h6>
                                <p className='title animate'>{product.brand.name}</p>
                                <p className='price animate'>{`$${product.activePrice.maxListPrice}`}</p>
                                <p className='reviews animate'>
                                    {Array.apply(null, { length: product.customerReviews.average }).map((rating, ratingIndex) => (

                                        <i key={`${product.title}-rating-${ratingIndex}`} ><FontAwesomeIcon icon={faStar} /></i>)
                                    )}
                                </p>
                                <button className='cart-button button animate'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default products;