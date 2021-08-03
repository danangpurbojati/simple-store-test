import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

import './App.css';
import Home from './components/Home';

import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import RegisteredRoute from './components/RegisteredRoute';
import SignUp from './components/Signup';
import AuthContextProvider from './contexts/AuthContext';

const App = () => {
    return (
        <Router>
            <AuthContextProvider>
                <div className="App">
                    <Switch>
                        <ProtectedRoute exact path="/">
                            <Home />
                        </ProtectedRoute>
                        <RegisteredRoute path="/login">
                            <Login />
                        </RegisteredRoute>
                        <RegisteredRoute path="/signup">
                            <SignUp />
                        </RegisteredRoute>
                    </Switch>
                </div>
            </AuthContextProvider>
        </Router>
    )
}

export default App

