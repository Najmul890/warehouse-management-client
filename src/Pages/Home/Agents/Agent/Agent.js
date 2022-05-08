import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Agent = ({agent}) => {
    const {name, img, brand}=agent;
    return (
        <Col >
            <Card className='p-5 text-white element-bg' >
                <Card.Img variant="top" className='mb-5' src={img} height={250}  />
                <h3>{name} </h3>
                <h4 className='mt-3' >CEO of <span className="main-color">{brand}</span> </h4>
            </Card>
       </Col>
    );
};

export default Agent;