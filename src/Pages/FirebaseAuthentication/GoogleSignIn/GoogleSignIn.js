import React from 'react';
import { auth } from '../../../firebase.init';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import { UseToken } from '../../../Hooks/UseToken/UseToken';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token]= UseToken(user);
    const navigate = useNavigate();
    const location= useLocation();

    const from= location.state?.from?.pathname || "/";
    
    let errorElement;

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (token) {
        navigate(from, {replace: true});
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='element-bg w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='element-bg w-50'></div>
            </div>
            {errorElement}

            <div>
                <button onClick={() => signInWithGoogle()} className="btn text-white element-bg">Sign in with google</button>
                
            </div>
        </div>
    );
};

export default GoogleSignIn;