/* 
This PrivateRoute file is created because even when user is logged out, 
they can still able to access to the Dashboard.
We want the user to be able to access to Login page instead by 
creating a wrapper for the current "Route" in the "Private Route" function below
*/
import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// PrivateRoute is a wrapper for the current "Route"
// Get the component and renamed it to Component
// Otherwise, all the rest of the properties will be at ""...rest"

export default function PrivateRoute({ component: Component, ...rest}) {

    // Initialisers
    const { currentUser } = useAuth()

  return (
    <Route
        {...rest}  // this Route takes all the props

        // define a custom render that takes in props and check to see if we have a currentUser
        render={props => {
            // If we have a currentUser, then render out the Component got passed into our class
            // Otherwise if we don't have a currentUser, don't render the Component and Redirect the user to Login page
            return currentUser ? <Component {...props}/> : <Navigate to="/login" />
        }}
    ></Route>
  )

  // This PrivateRoute will be called in the App.js
}
