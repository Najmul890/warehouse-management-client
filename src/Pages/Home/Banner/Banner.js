import React from 'react';
import bannerImg from "../../../img/banner.jpg";

const Banner = () => {
    return (
        <div className='container bg-info p-5' >
            <div className="row">
                <div className="col-md-6 text-center p-5">
                     <h4>Discover the </h4>
                     <h2>Refreshment of life</h2>
                     <h3>Delicious treat natural products</h3>
                </div>
                <div className="col-md-6">
                     <img className='img-fluid' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;