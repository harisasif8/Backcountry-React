import React, { useState, createContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import fetcher from './../utils/index';


const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

export const ProductContext = createContext();

export const ProductProvider = props => {
    const [productData, setProductData] = useState({
        products: [],
        isProductLoading: true
    });

    const query = useQuery();
    const searchTerm = query.get('search');

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetcher({
                    url: `${process.env.REACT_APP_PRODUCTS}/${searchTerm}`,
                    method: 'GET',
                    params: {
                        ...(searchTerm ? { q: searchTerm } : {})
                    }

                });

                setProductData({ isProductLoading: false, products: response?.data?.products || [] })
            } catch (err) {
                setProductData({ ...productData, isProductLoading: false })
            }
        };

        getData();
    }, [searchTerm]);

    return (
        <ProductContext.Provider value={[productData, setProductData]}>
            {props.children}
        </ProductContext.Provider>
    );
}

