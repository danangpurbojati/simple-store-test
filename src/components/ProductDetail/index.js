import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';
import Cart from '../Cart';

const ProductDetail = () => {
    const { id } = useParams();
    const { storeProducts, reduceStock } = useContext(ProductContext);
    const { cart, addItem } =  useContext(CartContext);
    const [product, setProduct] = useState();
    const [ amount, setAmount] = useState(0);

    const amountChange = (event) => {
        setAmount(event.target.value)
    }

    const addProduct = (event) => {
        event.preventDefault();
        addItem(product, parseInt(amount));
        reduceStock(id, parseInt(amount));
        setAmount(0)
    }
    
    useEffect(() => {
        const filterProductById = (id) => {
            const productById = storeProducts.filter(product => product.id === id)[0];
            setProduct(productById);
        };

        filterProductById(id);
    })

    console.log(cart)
    return (
        <div>
            <h1>halaman product detail</h1>
            <h4>product id {id}</h4>

            {
                product && (
                    <div>
                        <img src={product.image} alt={product.name} />
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <p>{product.stock}</p>
                        <form onSubmit={addProduct}>
                            <input value={amount} onChange={amountChange} type="number" min="0" max={product.stock} />
                            <button type="submit" disabled={product.stock === 0}>beli</button>
                        </form>
                    </div>
                )
            }

            <Cart />
        </div>
    )
}

export default ProductDetail
