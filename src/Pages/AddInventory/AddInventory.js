import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddInventory = () => {
      const handleAddProduct=(event)=>{
          event.preventDefault();
          const name=event.target.name.value;
          const image=event.target.image.value;
          const shortDescription=event.target.shortDescription.value;
          const price=event.target.price.value;
          const quantity=event.target.quantity.value;
          const supplier=event.target.supplier.value;

          const newProduct={name,image,shortDescription,price,quantity,supplier};
          console.log(newProduct);
      }
    return (
        <div className='container' >
            <h2>add a new product</h2>
            <Form onSubmit={handleAddProduct}>
                <Form.Group className="mb-3">
                    <Form.Control name="name"  type="text" placeholder="Enter product name" required />
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