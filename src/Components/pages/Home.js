import React from 'react';
import CCC1 from '../../Images/CCC1.png';
import CCC2 from '../../Images/CCC2.png';
import CCC3 from '../../Images/CCC3.png';
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
        </header>


    );

    
};


// export default function Home(props) {
//     return( <header class="intro">
//     <img src="/src/Images/CCC1.jpg" alt="" class="slideshow-img">
//     <img src="/src/Images/CCC2.jpg" alt="" class="slideshow-img">
//     <img src="/src/Images/CCC3.jpg" alt="" class="slideshow-img">
//   </header>;
// );
// };

export default Home;