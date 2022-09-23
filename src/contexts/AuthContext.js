import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase' // This is used to support the signup() method in the AuthProvider()

// This context will be used inside the AuthProvider()
const AuthContext = React.createContext()

// This function will allow us to use the context above as a hook
export function useAuth() { 
    return useContext(AuthContext)
}

// AuthProvider will return a value that contains all the information that we want to provide within authentication
export function AuthProvider({ children }) {

    // Handler
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true) // By default loading is true, but set to false once user is authenticated

    // Create new user method
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    // User login method
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    // User logout method
    function logout() {
        return auth.signOut
    }

    // Setting the currentUser
    useEffect(() => {
        // setCurrentUser will be called whenever the createUserWithEmailAndPassword is called to set the currentUser
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user) // set user should always be placed before loading
            setLoading(false) // When the user is verified, stop loading
        })

        return unsubscribe // unsubscribe is used to unsubscribe the listener onAuthStateChanged once it done
    }, [])

    // Intialise an object called "value" to store currentUser
    const value = {
        currentUser,
        signup,
        login,
        logout
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children} 
        {/* If not loading, then render the children 
        (we don't want to render anything until there's a user) */}
    </AuthContext.Provider>
  )
}
