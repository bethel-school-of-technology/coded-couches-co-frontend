import React from 'react';
import Redding from '../../Images/Redding.png'

const AboutMe = () => {
    return (
        <div className= "page aboutUs">
            
            <div><br></br>
            <h1 className= "heading">Welcome to Coded Couches Company!</h1>
            
                <h2>We are a small start-up company based out of Redding California. We have been operating since fall of 2021. </h2><br></br>
                <div className ="imageBoxRedding">
                <img src={Redding} className ="imageRedding"  alt="" />
                </div>
                <br></br>
                
                <p className="heading">Current Staff</p>
                    
                <h3>Nichole O'Neill</h3><br></br>
                <h3>Zach Brinsley</h3><br></br>
                <h3>Steven Galland</h3><br></br>
            </div>  
            <div id="footSpace">empty info until footer is move below visible area</div><br></br>
      </div>
    )
}

export default AboutMe; 