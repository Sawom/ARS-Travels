import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import LOGO from '../../../images/logo.png'
import auth from '../../../Firebase/Firebase'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = ()=>{
    signOut(auth);
     alert('You are sign out');
  }
  
    return (
        <div  className="sticky-top headStyles">
            <Navbar   collapseOnSelect expand="lg" bg="light" >
                    <Container>
                        <Navbar.Brand id='name' > <img height={160}  src={LOGO} alt="" /> <span className='text-success' >ARS Travels</span> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            {/* menue */}
                        <Nav className="me-auto">
                            <Nav.Link as={Link} className='menue' to="home">Home</Nav.Link>
                            <Nav.Link as={Link} className='menue' to="about">About</Nav.Link>
                            <Nav.Link as={Link} className='menue' to="packages">Packages</Nav.Link>
                        </Nav>
                        {/* 2 */}   
                        <Nav>  
                            {
                            user ?
                            <Button variant='success' onClick={ handleSignOut} >Sign Out</Button>
                            :
                            <Nav.Link as={Link} to="Login" >
                                <Button variant='success'  >Sign In</Button>
                            </Nav.Link>
                            }
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
        </div>
    );
};

export default Header;