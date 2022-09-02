import { useState, createContext, useEffect } from 'react';
import { fetcher } from '../utils/index';
import UseQuery from '../hooks/UseQuery';

export const ProductContext = createContext();

export const ProductProvider = props => {
    const [productData, setProductData] = useState({
        products: [],
        isProductLoading: true
    });

    const query = UseQuery();
    const searchTerm = query.get('search');

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetcher({
                    url: `${process.env.REACT_APP_PRODUCTS}/${searchTerm ? searchTerm : null}`,
                    method: 'GET',
                    params: {
                        ...(searchTerm ? { q: searchTerm } : { q: '' })
                    }
                });
                setProductData({ isProductLoading: false, products: response?.data?.products })
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

