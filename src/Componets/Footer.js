import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                </div>
                <div className="footer-icons">
                    <a href="https://twitter.com/rpg_AE" target="_blank" rel="noopener noreferrer">
                        <BsTwitter />
                    </a>
                    <a href="https://www.youtube.com/@anotheredenthecatbeyondtim5616" target="_blank" rel="noopener noreferrer">
                        <BsYoutube />
                    </a>
                    <a href="https://www.facebook.com/AnotherEdenRPG.en/" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                </div>
                <div className="footer-section-columns">
                </div>
                <div className="footer-section-columns">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
