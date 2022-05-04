import React from 'react';
import { Row } from 'react-bootstrap';
import { UseProducts } from '../../../Hooks/UseProducts/UseProducts';
import Loading from '../../Shared/Loading/Loading';
import Product from './Product/Product';

const Products = () => {
    const [products]=UseProducts();
    if(!products){
       return <Loading></Loading>
    }
    
    return (
        <div className='container p-5' >
            <h2 className='text-center' > <span className="text-success">Products</span>, we discover for you </h2>
            <Row xs={1} md={3} className="g-5 py-5">
                {
                    products.slice(0,6).map(product=> <Product 
                    key={product._id}
                    product={product}
                    
                        ></Product> )
                }
            </Row>
        </div>
    );
};

export default Products;