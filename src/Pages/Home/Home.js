import React from 'react';
import Banner from './Banner/Banner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <h2 className="my-5 text-center">Ice Storage Management</h2>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;