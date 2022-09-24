import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {

    // Initialisers
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError("") // Initially error message is empty

        // User presses "Log out", the method will:
        try {
            await logout()
            console.log(currentUser.email)
            navigate("/login") // Go back to login page

        } catch {
            setError("Failed to log out")
        }
    }

  return (
    <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}

            <div className="text-center">
                <Link to="/update-profile" className="btn btn-primary w-100 mt-4">Update Profile</Link>
            </div>
            
            </Card.Body>
        </Card>

        <div className="2-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout} >Log out</Button>
        </div>
    </>
  )
}
