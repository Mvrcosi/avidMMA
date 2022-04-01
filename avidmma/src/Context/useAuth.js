import React, { createContext, useContext, useEffect, useState } from 'react'
import { TwitterAuthProvider, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'

const authContext = createContext({})


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    function logIn(userCredentials) {
        setUser({ user: userCredentials })
    }

    function logOut() {
        return signOut(auth)
    }

    function emailSignUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function twitterSignIn() {
        const provider = new TwitterAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                setUser(res.user)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    function googleSignIn() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                setUser(res.user)
            })
            .catch((err) => {
                console(err.message)
            })
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    function emailSignIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    return (
        <authContext.Provider value={{ user, logIn, logOut, emailSignUp, googleSignIn, twitterSignIn }}>
            {children}
        </authContext.Provider>
    )
}


export default function useAuth() {

    const { user, logIn, logOut, emailSignIn, emailSignUp, googleSignIn, twitterSignIn } = useContext(authContext)
    return { user, logIn, logOut, emailSignIn, emailSignUp, googleSignIn, twitterSignIn }
}