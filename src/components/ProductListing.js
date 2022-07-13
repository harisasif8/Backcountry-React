import React, { useContext, useState, useEffect } from 'react';
import { ShimmerPostList } from "react-shimmer-effects";
import Product from './Product';
import { ProductContext } from './ProductContext'
import UseDebounce from './../hooks/UseDebounce'
import UseQuery from '../hooks/UseQuery';


const ProductListing = () => {
    const [{ products, isProductLoading }] = useContext(ProductContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState('');

    const debouncedText = UseDebounce(searchText, 500).toLowerCase();

    const query = UseQuery();
    const searchTerm = query.get('search');


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
            <div className="ui-search-box">
                <input type="searchbar" className='ui-search-input' placeholder={`Search ${searchTerm}`} id='searchBar' onChange={(e) => setSearchText(e.target.value)} />
            </div>
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
