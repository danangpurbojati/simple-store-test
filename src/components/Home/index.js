import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ProductContext } from '../../contexts/ProductContext';
import { Link } from 'react-router-dom';
import Cart from '../Cart';

const Home = () => {
    const { logout, activeUser } = useContext(AuthContext);
    const { storeProducts } = useContext(ProductContext);

    const testlogout = async () => {
        try {
            const logoutData = await logout();
            console.log('logout', logoutData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Simple Store</h1>
            {
                activeUser && (
                    <h3>hallo {activeUser.email}</h3>
                )
            }
            <button onClick={testlogout}>logout</button>

            <table>
                <thead>
                    <tr>
                        <th>Gambar</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        storeProducts.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <img src={product.image} alt={product.name} />
                                </td>
                                <td>
                                    {product.name}
                                </td>
                                <td>
                                    {product.price}
                                </td>
                                <td>
                                    <Link to={`/products/${product.id}`}>lihat detail</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Cart />
        </div>
    )
}

export default Home
