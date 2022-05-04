import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
        
  
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    const [updateProfile] = useUpdateProfile(auth);


    const handleRegister= async(event)=>{
        event.preventDefault();
        const name= event.target.name.value;
        const email= event.target.email.value;
        const password= event.target.password.value;

        toast('email sent to verify your email address');
        await createUserWithEmailAndPassword(email, password);
        
        await updateProfile({ displayName: name });
    }


    return (
        <div className='container w-50 mx-auto' >
            <h2 className='text-success text-center mt-2'>Please Register</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="name" type="text" placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="email" type="email" placeholder="Your email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="password" minLength={6} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="success w-50 mx-auto d-block mb-2" type="submit">
                        Register
                    </Button>
                </Form>
                <p>Already have an account? <Link to="/login" >Login</Link> </p>
                <GoogleSignIn></GoogleSignIn>
        </div>
    );
};

export default Register;