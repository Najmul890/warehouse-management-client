import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {name, _id, image, shortDescription, price, quantity,supplier}= product;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} height={400}  />
                <Card.Body>
                <Card.Title> {name} </Card.Title>
                <Card.Text>
                    {shortDescription}
                </Card.Text>
                <Card.Text>Quantity: {quantity} </Card.Text>
                <h4>Price: ${price} </h4>
                <Card.Text>Brand: {supplier}  </Card.Text>
                </Card.Body>
                <Link to={`inventory/${_id}`} >
                   <Button> Update </Button>
                </Link>
            </Card>
       </Col>
    );
};

export default Product;