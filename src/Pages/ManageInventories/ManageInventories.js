import React from 'react';
import { Link } from 'react-router-dom';
import { UseProducts } from '../../Hooks/UseProducts/UseProducts';

const ManageInventories = () => {
    const [products]= UseProducts();
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
                                            <td>{product.name}</td>
                                            <td>{product._id}</td>
                                            <td>{product.supplier}</td>
                                            <td>${product.price}</td>
                                            <td>{product.quantity}</td>
                                            <td>Delete</td>

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