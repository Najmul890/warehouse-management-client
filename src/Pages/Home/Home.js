import React from 'react';
import Banner from './Banner/Banner';
import Brand from './Brand/Brand';
import Discount from './Discount/Discount';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <h2 className="my-5 text-center fw-bold main-color">Ice Storage <span className="color-dark">Management</span></h2>
            <Banner></Banner>
            <Brand></Brand>
            <Discount></Discount>
            <Products></Products>
        </div>
    );
};

export default Home;