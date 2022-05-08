import React from 'react';
import pepsiLogo from '../../../img/logo-pepsi.png';
import cocacolaLogo from '../../../img/logo-cocacola.png';
import polarLogo from '../../../img/logo-polar.png';
import iglooLogo from '../../../img/logo-iglo.png';
import bellissimoLogo from '../../../img/bellissimo.png';;

const Brand = () => {
    return (
        <div className='container p-5 mt-5 d-flex' >
            <img className='mx-5' width={100} height={60} src={pepsiLogo} alt="pepsi logo" />
            <img className='mx-5' width={100} height={60} src={iglooLogo} alt="igloo logo" />
            <img  className='mx-5'width={100} height={60} src={bellissimoLogo} alt="bellissimo logo" />
            <img className='mx-5' width={100} height={60} src={cocacolaLogo} alt="cocacola logo" />
            <img className='mx-5' width={100} height={60} src={polarLogo} alt="polar logo" />
        </div>
    );
};

export default Brand;