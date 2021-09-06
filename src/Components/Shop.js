import React from 'react';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';

import './Shop.css';

const Shop = () => {
    
    return (
        <header>
        <div>
            
            <img src={image1} alt='image1' /><br/>
            <img src={image2} alt='image2' /><br/>
            <img src={image3} alt='image3' /><br/>
            <img src={image4} alt='image4' /><br/>
            <img src={image5} alt='image5' /><br/>
            <img src={image6} alt='image6' /><br/>
            
            
        </div>
        </header>
    );
    
};

export default Shop;
