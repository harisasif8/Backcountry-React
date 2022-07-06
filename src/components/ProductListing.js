import React, { useContext, useState, useEffect } from 'react';
import { ShimmerPostList } from "react-shimmer-effects";
import Product from './Product';
import { ProductContext } from './ProductContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import UseDebounce from './../hooks/UseDebounce'

const ProductListing = () => {
    const [{ products, isProductLoading }] = useContext(ProductContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState('');
    
    const debouncedText = UseDebounce(searchText, 500).toLowerCase();
    // const debouncedText = <UseDebounce searchText={searchText} delay={500} />


    useEffect(
        () => {
            const searchItem = () => {
                const filteredBcProducts = debouncedText ? products.filter((product) => {
                    const { brand: { name: brandName }, title: productTitle } = product;
                    return (
                        brandName.toLowerCase().includes(debouncedText) || productTitle.toLowerCase().includes(debouncedText)
                    );
                }) : products;

                setFilteredProducts(filteredBcProducts)
            };

            searchItem()

        }, [debouncedText, products]
    );

    return (
        <>
            <form action="" className='search-bar' >
                <div className="input-icons">
                    <span type='button' > <i><FontAwesomeIcon icon={faSearch} className='search-icon' /> </i></span>
                    <input type="searchbar" className='search-box' placeholder="Search gear & apparel" id='searchBar' onChange={(e) => setSearchText(e.target.value)} />
                </div>
            </form>
            <div className="grid-container" id='productsListing'>
                {
                    filteredProducts.map((product) => <Product product={product} key={product.id} />)
                }

                {isProductLoading && <ShimmerPostList col={4} row={4} gap={30} className='loader' />}
            </div>
        </>
    );


}

export default ProductListing;
