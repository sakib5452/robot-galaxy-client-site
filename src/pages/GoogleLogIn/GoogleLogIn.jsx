import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app from '../../firebase/firebase.config';

const GoogleLogIn = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div>

                {
                    user ?
                        <button onClick={handleSignOut}>Sign out</button> :
                        <>
                            <div className="social-button-container w-55 mt-3">
                                <img
                                    onClick={handleGoogleSignIn}
                                    className=" social-button"
                                    src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                                    alt=""
                                />
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default GoogleLogIn;