import React from 'react';
import CCCicon from '../Images/CCCicon.png';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import pinterest from '../Images/pinterest.png';
import twitter from '../Images/twitter.png';

const Footer = () => {
    return(
        <footer className="social-footer">
            <div className="social-footer-left">
                <a href="/"><img className="logo" src={CCCicon}/></a>
            </div>
            <div className="social-footer-icons">
                <ul className="menuSimple">
                    <li className="icons"><a href="https://www.facebook.com/"><img className="icons" src={facebook}></img></a></li>
                    <li className="icons"><a href="https://www.instagram.com/?hl=en"><img className="icons" src={instagram} ></img></a></li>
                    <li className="icons"><a href="https://twitter.com/?lang=en"><img className="icons" src={twitter} ></img></a></li>
                    <li className="icons"><a href="https://www.pinterest.com/"><img className="icons" src={pinterest} ></img></a></li>
                </ul>
            </div>
        </footer>

    )
};

export default Footer;