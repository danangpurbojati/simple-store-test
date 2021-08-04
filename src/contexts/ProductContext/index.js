import React, { createContext, useState} from 'react';
import products from './products';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [storeProducts, setStoreProducts] = useState(products);

    const reduceStock = (id, amount) => {
        setStoreProducts(
            storeProducts.map(product => (
                { 
                    ...product,
                    stock: product.id === id ? product.stock - parseInt(amount) : product.stock
                }
            ))
        )
    }

    const restoreStock = (id, amount) => {
        setStoreProducts(
            storeProducts.map(product => (
                {
                    ...product,
                    stock: product.id === id ? product.stock + parseInt(amount) : product.stock
                }
            ))
        )
    }

    const value = {
        storeProducts,
        reduceStock,
        restoreStock,
        setStoreProducts
    }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
