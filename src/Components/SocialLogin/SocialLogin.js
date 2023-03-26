import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';



const SocialLogin = () => {
    const [user, setUser] = useState({});

    const googleLogIn = ()=>{
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
            signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
        }

    return (
        <div>
              <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
              </div>
              {/* button */}
              <div>
                <Button size="sm" onClick={googleLogIn} > <FaGoogle></FaGoogle>  <span>Login with Google</span>  </Button>
              </div>
        </div>
    );
};

export default SocialLogin;