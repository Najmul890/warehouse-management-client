import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const {name, image, _id, price, quantity, shortDescription, supplier} = product;

    useEffect( () =>{
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [])


    const updateProductQuantity=(productQuantity)=>{
        const updatedProduct = {...product, quantity:productQuantity};

        //update a product and send data to the server
        
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


    const handleProductQuantityWhileDelivered = () =>{
        
        const productQuantity=product.quantity-1;
        updateProductQuantity(productQuantity)

        
    }

    const handleProductStock=(event)=>{
        event.preventDefault();
        const newlyStokedProducts=parseInt(event.target.quantity.value);
        if(newlyStokedProducts>0){
            const productQuantity= product.quantity + newlyStokedProducts;
            updateProductQuantity(productQuantity);
            event.target.reset();
            toast(`successfully added of ${newlyStokedProducts} products to ${name} stock`)
        }else{
            toast("please put a positive value to stock your newly products")
        }
        

    }

    return (
        <div className='container' >
            <h2 className='text-center m-5' > Update this product </h2>
            <div className="row">
                <div className="col-md-6 p-5">
                    <div className="float-end">
                    <h4> {name} </h4>
                    <p>product id: <span className="fw-bold">{_id}</span> </p>
                    <p> {shortDescription} </p>
                    <p>quantity: {quantity} </p>
                    <p>price: ${price} </p>
                    <p>Brand: <span className='fw-bold'> {supplier} </span></p>
                    <button onClick={handleProductQuantityWhileDelivered} className="btn btn-success">Delivered</button>

                    <div className='mt-5' >
                    <form  onSubmit={handleProductStock} >
                    <input placeholder='input product quantity' type="number" name="quantity" id="" />
                    <button type="submit" className="btn btn-warning ms-2 ">Restock this product</button>
                    </form>
                    </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <img className='rounded' height={400} src={image} alt="" />
                </div>
            </div>
            <p className='fw-bold ms-5' >To manage all inventories visit the page <Link to="/manageInventories" >Manage Inventories</Link> via clicking the link</p>
        </div>
    );
};

export default Inventory;