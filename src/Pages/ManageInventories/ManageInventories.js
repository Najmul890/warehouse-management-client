import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { UseProducts } from '../../Hooks/UseProducts/UseProducts';

const ManageInventories = () => {
    const [products, setProducts] = UseProducts();

    const handleDeleteProduct = (id) => {
        const confirmToDelete = window.confirm('Are you sure, want to delete this product?');
        if (confirmToDelete) {
            const url = `https://sleepy-reaches-87605.herokuapp.com/product/${id}`;

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
        <div className='container-fluid' >
            <h2>Manage Your Inventories</h2>
            <div className="me-5">
                <Link to="/addInventory" > <button className="btn btn-success">Add new product</button> </Link>
            </div>
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
                                            <td> <FontAwesomeIcon icon={faTrashCan}  style={{cursor:"pointer"}} className='text-danger ms-3'  onClick={()=>handleDeleteProduct(product._id)}/> 
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

export default ManageInventories;