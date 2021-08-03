import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

import './App.css';
import Home from './components/Home';

import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import ProtectedRoute from './components/ProtectedRoute';
import RegisteredRoute from './components/RegisteredRoute';
import SignUp from './components/Signup';

import AuthContextProvider from './contexts/AuthContext';
import ProductContextProvider from './contexts/ProductContext';

const App = () => {
    return (
        <Router>
            <AuthContextProvider>
                <ProductContextProvider>
                    <div className="App">
                        <Switch>
                            <ProtectedRoute exact path="/">
                                <Home />
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
                </ProductContextProvider>
            </AuthContextProvider>
        </Router>
    )
}

export default App

