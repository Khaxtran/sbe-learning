import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="text-center">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Welcome to Stray Balloon</h2>

                    <div className="w-100 text-center mt-3">
                    <Button><Link style={{color: 'white', textDecoration: 'none'}} to="/login">Teacher</Link></Button>
                    </div>

                    <div className="w-100 text-center mt-3">
                        <Button><Link style={{color: 'white', textDecoration: 'none'}} to="/EnterGameCode">Student</Link></Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default HomePage;
