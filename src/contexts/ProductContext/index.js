import React, { createContext, useState} from 'react';
import products from './products';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [storeProducts, setStoreProducts] = useState(products);

    const value = {
        storeProducts
    }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
