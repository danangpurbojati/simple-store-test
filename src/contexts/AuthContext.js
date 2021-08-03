import React, { createContext, useEffect, useState } from 'react';
import firebase from '../config/firebase';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [activeUser, setActiveUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(
            email,
            password
        );
    };

    const login = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(
            email,
            password
        );
    };

    const logout = () => {
        return firebase.auth().signOut();
    };

    const socialMediaAuth = (provider) => {
        return firebase.auth().signInWithPopup(provider);
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setActiveUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, []);

    const value = {
        signup,
        login,
        logout,
        socialMediaAuth,
        activeUser
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
