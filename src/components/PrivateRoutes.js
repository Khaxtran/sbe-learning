/* 
This PrivateRoutes file is created because even when user is logged out, 
they can still able to access to the Dashboard. 
We want the user to be able to access to Login page instead by 
creating a wrapper for the current "Route" in the "Private Route" function below
*/
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom' // Outlet allows nested routes
import { useAuth } from '../contexts/AuthContext'

// PrivateRoute is a wrapper for the current "Route"
export default function PrivateRoutes() {

    // Initialisers
    const { currentUser } = useAuth() // Determine if there is a user
    
    // If we have a currentUser, then render out the Component got passed into our class
    // Otherwise if we don't have a currentUser, don't render the Component and Navigate the user to Login page
    // "replace" is to keep the history clean. This will avoid extra redirects after the user click back. 
    return( 
        currentUser ? <Outlet/> : <Navigate replace to="/login" />
    )
    // This PrivateRoutes will be called in the App.js
}
