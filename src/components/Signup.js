import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap' 

// Card contains all Login informaiton

export default function Signup() {

    // Define refs
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

  return (
    <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                    <Form.Group id="email" className="p-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>

                    <Form.Group id="password" className="p-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>

                    <Form.Group id="password-confirm" className="p-2">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>

                    <div className="text-center">
                        <Button className="w-50 mt-4" type="submit">Sign Up</Button>
                    </div>
                    
                </Form>
            </Card.Body>
        </Card>
        <div className="2-100 text-center mt-2">
            Already have an account? Log In
        </div>
    </>
  )
}
