import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const {name, image, _id, price, quantity, shortDescription, supplier} = product;
    useEffect( () =>{
        const url = `http://localhost:5000/product/${id}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [])


    const updateProductQuantity=(productQuantity)=>{
        const updatedProduct = {name, image, _id, price, quantity:productQuantity, shortDescription, supplier};

        // send data to the server
        
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            if(data.modifiedCount>0){
                setProduct(updatedProduct)
            }
        })

    }


    const handleUpdateProductQuantity = () =>{
        
        const productQuantity=product.quantity-1;
        updateProductQuantity(productQuantity)

        
    }

    const handleProductStock=(event)=>{
        event.preventDefault();
        const productQuantity= product.quantity + parseInt(event.target.quantity.value);
        updateProductQuantity(productQuantity)

    }

    return (
        <div className='container' >
            <h2 className='text-center mt-5' >this is inventory </h2>
            <div className="row">
                <div className="col-md-6 p-5">
                    <div className="float-end">
                    <h4> {name} </h4>
                    <p>product id: <span className="fw-bold">{_id}</span> </p>
                    <p> {shortDescription} </p>
                    <p>quantity: {quantity} </p>
                    <p>price: ${price} </p>
                    <p className='fw-bold' > {supplier} </p>
                    <button onClick={handleUpdateProductQuantity} className="btn btn-success">Delivered</button>

                    <div>
                    <form  onSubmit={handleProductStock} >
                    <input type="number" name="quantity" id="" />
                    <button type="submit" className="btn btn-warning ">Restock this product</button>
                    </form>
                    </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <img height={400} src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Inventory;