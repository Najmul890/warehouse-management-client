import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';

const AddInventory = () => {
    const [user]=useAuthState(auth);

    const handleAddProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const shortDescription = event.target.shortDescription.value;
        const price = parseInt(event.target.price.value);
        const quantity = parseInt(event.target.quantity.value);
        const supplier = event.target.supplier.value;
        const sold=0;

        const userEmail=user?.email;

        const newProduct = { name, image, shortDescription, price, quantity, supplier, userEmail, sold };
        
        fetch('https://sleepy-reaches-87605.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                toast("product added successfully")
                event.target.reset();
            })
    }
    return (
        <div className='container' >
            <h2>add a new product</h2>
            <Form className='w-50' onSubmit={handleAddProduct}>
                <Form.Group className="mb-3">
                    <label htmlFor="email">Your Email:</label>
                    <Form.Control name="email" type="email" value={user?.email} required readOnly />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="name" type="text" placeholder="Enter product name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="image" type="text" placeholder="Enter image URL" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="shortDescription" type="text" placeholder="Enter a short description about the product" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="price" type="number" placeholder="Enter the product price" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="quantity" type="number" placeholder="Enter quantity of the product" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name="supplier" type="text" placeholder="Enter the supplier name" required />
                </Form.Group>
                <Button variant="success w-50 mx-auto d-block mb-2" type="submit">
                    Add
                </Button>
            </Form>
        </div>
    );
};

export default AddInventory;