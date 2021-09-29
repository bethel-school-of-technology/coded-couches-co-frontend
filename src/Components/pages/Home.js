import React from 'react';
import CCC1 from '../../Images/CCC1(2).png';
import CCC2 from '../../Images/CCC2(2).png';
import CCC3 from '../../Images/CCC3(2).png';
import CCC4 from '../../Images/CCC4.png';
import { useEffect } from 'react';


const Home = () => {

useEffect (() => {
const slideshowImages = document.querySelectorAll(".slideshow-img");

const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)
console.log(slideshowImages);
slideshowImages[currentImageCounter].style.opacity = 1;
console.log(currentImageCounter)
setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.opacity = 0;
  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.opacity = 1;
};

},[])
    return(
        <header className="intro">
            <img src={CCC1} alt="" className="slideshow-img"/>
            <img src={CCC2} alt="" className="slideshow-img"/>
            <img src={CCC3} alt="" className="slideshow-img"/>
            <img src={CCC4} alt="" className="slideshow-img"/>
        </header>
    );   
};

export default Home;