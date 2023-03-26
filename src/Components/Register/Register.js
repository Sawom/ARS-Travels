import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useAuthState } from 'react-firebase-hooks/auth';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ confirmpass, setConfirmpass] = useState('');
    const [ error, setError] = useState('');
    const auth = getAuth();
    const[user] = useAuthState(auth);
    
    const navigate = useNavigate();

     if(user){
        navigate('/home');
    }

    
    // name
    const handleName = event =>{
        setName(event.target.value);
    }
    // email
    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    // password
    const handlePassword = event =>{
        setPassword(event.target.value);
    }
    // confirm password
    const handleConfirmpass = event =>{
        setConfirmpass(event.target.value);
    }
    // verify email
    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then((result)=>{
            console.log(result);
        })
    }
    // register new user
    const registerNewUser = (email,password) =>{
        createUserWithEmailAndPassword(auth, email , password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
        })
        .catch(error => {
        setError(error.message);
      })
    }
    // set user name
    const setUserName = () => {
        const auth = getAuth();
        updateProfile(auth.currentUser, { displayName: name })
        .then(result => {  
            console.log(result);
         })
    }
    
    // create user
    const handleRegistration = event =>{
        event.preventDefault();
         if(password !== confirmpass){
            setError("Your password did not match! ");
            return;
        }
        if(password.length < 6){
            setError('Password Must be at least 6 characters long.');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        registerNewUser(email, password);
    }


    return (
        <div>
            <h4 className='App my-4'>Register Here</h4>
            <div className='container my-4 center' >
                <Form className='my-4' onSubmit={handleRegistration} >
                    {/* name */}
                    <Form.Group className="mb-3" controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onBlur={handleName} placeholder="Name" />
                    </Form.Group>
                    {/* email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onBlur={handleEmail} placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    {/* password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handlePassword} placeholder="Password" required />
                    </Form.Group>
                    {/* Confirm Password */}
                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" onBlur={handleConfirmpass} placeholder="Confirm Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                         Register
                    </Button>
                    <br /> <br />
                <p className='text-danger' > {error} </p> 
                <p>Already have an account? <Link className='btn btn-link text-primary pe-auto text-decoration-none' to="/login">Login Here</Link></p>
                <SocialLogin></SocialLogin>
                </Form>
            </div>
            <br />
        </div>
    );
};

export default Register;