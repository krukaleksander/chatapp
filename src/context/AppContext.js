import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';


const AppContext = React.createContext();

export function useAuth() {
    return useContext(AppContext);
};

export default function AppProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    };
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    };
    function logout() {
        return auth.signOut()
    };
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    };
    function updateEmail(email) {
        return currentUser.updateEmail(email);
    };
    function updatePassword(password) {
        return currentUser.updatePassword(password);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
            return unsubscribe
        });
    }, [])


    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
    }

    return (
        <AppContext.Provider value={value}>
            {!loading && children}
        </AppContext.Provider>
    )
}