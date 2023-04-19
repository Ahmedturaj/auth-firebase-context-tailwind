import { applyActionCode, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';

export const AuthContext= createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);

const [loading, setLoading]= useState(true);
const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const SignIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}
const LogOut = () =>{
    signOut(auth)
}

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log('auth state changed:', currentUser);
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>{
        unSubscribe();
    } 
},[])
const authInfo= {
    user,
    createUser,
    SignIn,
    LogOut,
    loading
}
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;