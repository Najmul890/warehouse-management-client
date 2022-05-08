import React from 'react';
import Agents from './Agents/Agents';
import Banner from './Banner/Banner';
import Discount from './Discount/Discount';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <h2 className="my-5 text-center fw-bold main-color">Ice Storage <span className="color-dark">Management</span></h2>
            <Banner></Banner>
            <Discount></Discount>
            <Products></Products>
            <Agents></Agents>
        </div>
    );
};

export default Home;