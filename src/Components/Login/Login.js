import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();
    // email
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    // password
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    // handle login
    const handleLogin = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch((error) => {
               setError(error.message);
            });
    }
    // user login
    const handleUserLogin = event =>{
        event.preventDefault();
        handleLogin(email, password);
    }
    // reset password
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(auth, email)
            .then(result =>{})
            alert('email sent');
        }
        else{
            alert('please enter your email address');
        }
    }

    return (
        <div>
            <h4 className='App my-4'>Login Here</h4>
            <div className='container my-4 center' >
                <Form className='my-4' onSubmit={handleUserLogin} >
                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" required onBlur={handleEmail} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required onBlur={handlePassword} placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        <FaSignInAlt></FaSignInAlt> Login
                    </Button> 
                    <br />
                    <p className='text-danger' > {error} </p> 
                     <br />
                    <p>New to ARS Travels? <Link as={Link} className='txt' to="/register">Register Here</Link>  </p>
                    <SocialLogin></SocialLogin>
                    {/* reset password */}
                     <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'
             onClick={resetPassword}>Reset Password</button> </p>
                </Form>
            </div>
        </div>
    );
};

export default Login;