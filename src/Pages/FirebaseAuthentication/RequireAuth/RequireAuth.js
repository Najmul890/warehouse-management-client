import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);



    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    const sendVerificationEmail = async () => {
        await sendEmailVerification();
        toast('Sent email');
    }

    if (!user.emailVerified) {
        return <div className='text-center mt-5'>
            
                    <h3 className='text-danger'>Your Email is not verified!!</h3>
                    <h5 className='text-success'> Please Verify your email address</h5>
                    <button onClick={sendVerificationEmail} className="btn-primary">Send mail again!</button>

                    <h3 className="fw-bold text-warning">*** Note: Please reload the page after verify your email</h3>

               </div>

    }

    return children;
};

export default RequireAuth;