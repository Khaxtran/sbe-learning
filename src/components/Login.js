import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container, Row, Col } from 'react-bootstrap' 
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

// Card contains all Login informaiton

export default function Login() {

    // Initialisers
    const emailRef = useRef()
    const passwordRef = useRef()

    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false) // Set to false by default since there is nothing to load
    const navigate = useNavigate() // To go back to Dashboard when successfully authenticate

    async function handleSubmit(event) {
        event.preventDefault() // Prevent the form from refreshing

        try {
            setError("") // Set to empty string as there is no error yet
            setLoading(true)
            // Call signup function and pass in email and password
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/dashboard") // Go back to Dashboard after user logged in
        } catch {
            setError("Failed to sign in")
        }

        setLoading(false) // After waiting for signup
    }

  return (
    <>
        <h2 className="text-center mb-4">Hello Teachers!</h2>
        <Card>
            <Card.Body>

                <Container>
                    <Row>
                        <Col>
                            <Button variant="secondary">
                                <Link style={{color: 'white', textDecoration: 'none'}} to="/"><FaArrowLeft /></Link>
                            </Button>
                        </Col>

                        <Col><h2 className="m-1 text-center">Log In</h2></Col>
                        <Col></Col>
                    </Row>
                </Container>
                
                <Card.Subtitle className="m-2 text-muted text-center">Please log in to continue</Card.Subtitle>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email" className="p-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>

                    <Form.Group id="password" className="p-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>

                    <div className="text-center">
                        <Button disabled={loading}
                                className="w-50 mt-4" 
                                type="submit">Log In</Button>
                    </div>
                    
                </Form>

                <div className="w-100 text-center mt-3">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </Card.Body>
        </Card>
        <div className="2-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
        </div>
    </>
  )
}
