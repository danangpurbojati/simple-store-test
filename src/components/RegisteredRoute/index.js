import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const RegisteredRoute = ({children, ...rest}) => {
    const { activeUser } = useContext(AuthContext);

    return (
        <Route { ...rest }>
            {
                !activeUser ? children : <Redirect to="/" />
            }
        </Route>
    )
}

export default RegisteredRoute