import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h4 className='App my-4'>Login Here</h4>
            <div className='container my-4 center' >
                <Form className='my-4' >
                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        <FaSignInAlt></FaSignInAlt> Login
                    </Button> 
                    <br /> <br />
                    <p>New to ARS Travels? <Link as={Link} className='txt' to="/register">Register Here</Link>  </p>
                    <SocialLogin></SocialLogin>
                </Form>
            </div>
        </div>
    );
};

export default Login;