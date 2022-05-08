import React from 'react';
import bannerImg from "../../../img/banner.jpg";

const Banner = () => {
    return (
        <div className='container p-5 mt-5 element-bg' >
            <div className="row">
                <div className="col-md-6 p-5 text-white mt-5">
                     <h4>Discover the </h4>
                     <h2><span className="fw-bold main-color">Refreshment</span> of life</h2>
                     <h3>Delicious treat, natural products</h3>
                </div>
                <div className="col-md-6">
                     <img className='img-fluid' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;