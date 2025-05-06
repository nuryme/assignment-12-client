import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import auth from './../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()


    const newUser = (email, password) => {
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const existingUser = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
    
    const updateUser = (name, photo) => {
        setLoading(true)
      return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
    }

    const googleSignIn = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }
    

    const signOutUser = () => {
     setLoading(true) 
     return signOut(auth)
    }
    
    

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

        if(currentUser) {
            setUser(currentUser)
            setLoading(false)
        }

        else {
            setUser(currentUser)
            setLoading(false)
        }

        return () => unSubscribe()

      }
      )
    }
    , [])
    


    const authInfo = {
        user,
        setUser,
        loading,
        newUser,
        existingUser,
        updateUser,
        signOutUser,
        googleSignIn
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;