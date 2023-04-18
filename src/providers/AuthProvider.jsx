import { applyActionCode, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../firebase.config';

export const AuthContext= createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const SignIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}
const authInfo= {
    user,
    createUser,
    SignIn
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