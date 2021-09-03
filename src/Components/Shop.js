import React from 'react';

const imgStyle = {
    height: '150px',
    width: '150px',
    padding: '10px'

};

const Shop = () => {
    
    return (
        <div>
            <h1>
                This is the Shop page!
            </h1>
            <img style={imgStyle} src={'./Components/Images/img1.jpg'} alt='img1' /><br/>
            <img style={imgStyle} src={'./Components/Images/img2.jpg'} alt='img2' /><br/>
            <img style={imgStyle} src={'./Components/Images/img3.jpg'} alt='img3' /><br/>
            <img style={imgStyle} src={'./Components/Images/img4.jpg'} alt='img4' /><br/>
            <img style={imgStyle} src={'./Components/Images/img5.jpg'} alt='img5' /><br/>
            <img style={imgStyle} src={'./Components/Images/img6.jpg'} alt='img6' /><br/>
            
            
        </div>
    );
    
};

export default Shop;
