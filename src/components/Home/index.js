import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Home = () => {
    const { logout, activeUser } = useContext(AuthContext);

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
            <h1>home</h1>
            {
                activeUser && (
                    <h3>hallo {activeUser.email}</h3>
                )
            }
            <button onClick={testlogout}>logout</button>
        </div>
    )
}

export default Home
