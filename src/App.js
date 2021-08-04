import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import RegisteredRoute from './components/RegisteredRoute';

import CartDetail from './pages/CartDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import SignUp from './pages/Signup';

import AuthContextProvider from './contexts/AuthContext';
import CartContextProvider from './contexts/CartContext';
import ProductContextProvider from './contexts/ProductContext';

const App = () => {
    return (
        <Router>
            <AuthContextProvider>
                <ProductContextProvider>
                    <CartContextProvider>
                        <div>
                            <Switch>
                                <ProtectedRoute exact path="/">
                                    <Home />
                                </ProtectedRoute>
                                <ProtectedRoute path="/cart-detail">
                                    <CartDetail />
                                </ProtectedRoute>
                                <ProtectedRoute path="/products/:id">
                                    <ProductDetail />
                                </ProtectedRoute>
                                <RegisteredRoute path="/login">
                                    <Login />
                                </RegisteredRoute>
                                <RegisteredRoute path="/signup">
                                    <SignUp />
                                </RegisteredRoute>
                            </Switch>
                        </div>
                    </CartContextProvider>
                </ProductContextProvider>
            </AuthContextProvider>
        </Router>
    )
}

export default App

