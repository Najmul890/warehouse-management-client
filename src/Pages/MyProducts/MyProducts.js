import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import axios from 'axios';


const MyProducts = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const navigate= useNavigate();

    useEffect(() => {
        const getProducts = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/myProducts?email=${email}`;
            try{
                const {data} = await axios.get(url,{
                    headers:{
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setProducts(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getProducts();

    }, [user]);


    const handleDeleteProduct = (id) => {
        const confirmToDelete = window.confirm('Are you sure, want to delete this product?');
        if (confirmToDelete) {
            const url = `http://localhost:5000/product/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }

                })
        }
    }
    return (
        <div>
            <h2>my products {products.length} </h2>
            <div className="row">

                <div className="col-md-12">

                    <div className="row p-5">
                        <table className="table table-borderLess">
                            <thead>
                                <tr>
                                    <th className="text-secondary text-left" scope="col">Sr No</th>
                                    <th className="text-secondary" scope="col">Image</th>
                                    <th className="text-secondary" scope="col">Product Name</th>
                                    <th className="text-secondary" scope="col">Product Id</th>
                                    <th className="text-secondary" scope="col">Brand</th>
                                    <th className="text-secondary" scope="col">Price</th>
                                    <th className="text-secondary" scope="col">Quantity</th>
                                    <th className="text-secondary" scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, index) =>

                                        <tr key={product._id} >
                                            <td>{index + 1}</td>
                                            <td> <img width={50} src={product.image} alt="" /> </td>
                                            <td>{product.name}</td>
                                            <td>{product._id}</td>
                                            <td>{product.supplier}</td>
                                            <td>${product.price}</td>
                                            <td>{product.quantity}</td>
                                            <td> <FontAwesomeIcon icon={faTrashCan} style={{ cursor: "pointer" }} className='text-danger ms-3' onClick={() => handleDeleteProduct(product._id)} />
                                            </td>

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyProducts;