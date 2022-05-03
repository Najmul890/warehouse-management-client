import React from 'react';
import { auth } from '../../../firebase.init';
import { useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';

const GoogleSignIn = () => {
    const [signInWithGoogle]= useSignInWithGoogle(auth);
    const [user]=useAuthState(auth);
    const handleSignInWithGoogle=()=>{
        signInWithGoogle()
        console.log(user);
    }
    return (
        <div>
            <h2>google sign in</h2>
            <button onClick={handleSignInWithGoogle} >sign in</button>
        </div>
    );
};

export default GoogleSignIn;