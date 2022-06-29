import React from 'react';
import { useEffect, useState } from 'react';
import { ShimmerPostList } from "react-shimmer-effects";
import fetcher from './utils';
import products from './products';

const ProductListing = () => {
    const [bcData, setBcData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetcher({
                    url: process.env.REACT_APP_PRODUCTS,
                    method: 'GET'
                })
                setBcData(response.data.products)
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return (
        <div className="grid-container" id='productsListing'>
            {
                // bcData.map((product) => (
                //     <div className="grid-item" key={product.title}>
                //         <div className="card">
                //             <img src={`https://www.backcountry.com${product.productMainImage.mediumImg}`} alt="Avatar" className='product-images animate' />
                //             <div className="container">
                //                 <h6 className='brand animate'>{product.title}</h6>
                //                 <p className='title animate'>{product.brand.name}</p>
                //                 <p className='price animate'>{`$${product.activePrice.maxListPrice}`}</p>
                //                 <p className='reviews animate'>
                //                     {Array.apply(null, { length: product.customerReviews.average }).map((rating, ratingIndex) => (

                //                         <i key={`${product.title}-rating-${ratingIndex}`} ><FontAwesomeIcon icon={faStar} /></i>)
                //                     )}
                //                 </p>
                //                 <button className='cart-button button animate'>Add To Cart</button>
                //             </div>
                //         </div>
                //     </div>
                // ))

                bcData.map((product) => (
                    products(product)
                ))
            }

            {loading && <ShimmerPostList postStyle="STYLE_EIGHT" col={4} row={4} gap={30} className='loader' />}
        </div>
    );
}

export default ProductListing;
