import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    const handleRegister=(event)=>{
        event.preventDefault();
        const name= event.target.name.value;
        const email= event.target.email.value;
        const password= event.target.password.value;

        console.log(name, email, password);
    }
    return (
        <div className='container w-50 mx-auto' >
            <h2 className='text-primary text-center mt-2'>Please Register</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="name" type="text" placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="email" type="email" placeholder="Your email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                        Login
                    </Button>
                </Form>
        </div>
    );
};

export default Register;