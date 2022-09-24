import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap' 
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

// Card contains all Login informaiton

export default function ForgotPassword() {

    // Initialisers
    const emailRef = useRef()

    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false) // Set to false by default since there is nothing to load

    async function handleSubmit(event) {
        event.preventDefault() // Prevent the form from refreshing

        try {
            setMessage("")
            setError("") // Set to empty string as there is no error yet
            setLoading(true)
            // Call resetPassword function and pass in email
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instruction")
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false) // After waiting for signup
    }

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Reset your password</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email" className="p-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>

                    <div className="text-center">
                        <Button disabled={loading}
                                className="w-50 mt-4" 
                                type="submit">Reset Password</Button>
                    </div>
                    
                </Form>

                <div className="w-100 text-center mt-3">
                    <Link to="/login">Log In</Link>
                </div>
            </Card.Body>
        </Card>
        <div className="2-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
        </div>
    </>
  )
}
