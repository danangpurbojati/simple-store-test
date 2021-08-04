import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (product, amount) => {
        if (cart.find(item => item.id === product.id)) {
            setCart(
                cart.map(item => ({...item, qty: item.id === product.id ? item.qty + amount : item.qty}))
            )
        } else {
            setCart([...cart, { ...product, qty: amount}])
        }
    }

    const removeItem = (product, amount) => {
        setCart(
            cart.map(item => ({...item, qty: item.id === product.id ? item.qty - amount : item.qty})).filter(item => item.qty > 0)
        )
    }

    const clearCart = () => {
        setCart([])
    }

    const value = {
        cart,
        addItem,
        removeItem,
        clearCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
