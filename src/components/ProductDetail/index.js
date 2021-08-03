import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { storeProducts } = useContext(ProductContext);
    const [product, setProduct] = useState();
    const [ amount, setAmount] = useState(0);

    const amountChange = (event) => {
        setAmount(event.target.value)
    }

    const addProduct = () => {
        console.log('tambah', amount);
        setAmount(0)
    }

    const filterProductById = () => {
        const productById = storeProducts.filter(product => product.id === id)[0];
        setProduct(productById);
    };

    useEffect(() => {

        filterProductById();
    }, [id])

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
                        <input value={amount} onChange={amountChange} type="number" />
                        <button onClick={addProduct}>beli</button>
                    </div>
                )
            }

        </div>
    )
}

export default ProductDetail
