import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { restoreStock } = useContext(ProductContext);
    const { cart, removeItem } =  useContext(CartContext);

    const removeProduct = (item) => {
        removeItem(item, item.qty);
        restoreStock(item.id, item.qty);
    }

    return (
        <div>
            <h3>Daftar Belanja</h3>
            {
                cart.length > 0 ? (
                    <div>
                        {cart.map(item => (
                            <div  key={item.id}>
                                <h1>{item.name}</h1>
                                <img src={item.image} alt={item.name} />
                                <p>{item.qty}</p>
                                <p>{item.qty * item.price}</p>
                                <button onClick={() => removeProduct(item)}>remove cart</button>
                            </div>
                        ))}

                        <Link to="/cart-detail">halaman checkout</Link>
                    </div>
                ) : (
                    <h1>tidak ada barang</h1>
                )
            }
        </div>
    )
}

export default Cart
