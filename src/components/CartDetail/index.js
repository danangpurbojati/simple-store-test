import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useHistory } from 'react-router-dom';

const CartDetail = () => {
    const { cart, clearCart } =  useContext(CartContext);
    const history = useHistory();

    const stripeButton = () => {
        clearCart();
        history.push("/")
    }

    const sumPrice = (items) => {
        return items.reduce((acc, curr) => acc + (curr.price * curr.qty), 0)
    }
    return (
        <div>
            <h1>ini card detail</h1>
            {
                cart.length > 0 ? (
                    <div>
                        {cart.map(item => (
                            <div  key={item.id}>
                                <h1>{item.name}</h1>
                                <img src={item.image} alt={item.name} />
                                <p>{item.qty}</p>
                                <p>{item.qty * item.price}</p>
                            </div>
                        ))}

                        <h1>Total {sumPrice(cart)}</h1>
                        <button onClick={stripeButton}>ke stripejs</button>
                    </div>
                ) : (
                    <h1>tidak ada barang</h1>
                )
            }
        </div>
    )
}

export default CartDetail
