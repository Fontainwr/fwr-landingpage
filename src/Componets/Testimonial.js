import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
    return (
        <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className="primary-text">
            Another Eden: The Cat Beyond Time and Space is a free-to-play game written by Masato Kato of Chrono Trigger and Chrono Cross fame. 
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
            It's a shame because, at its core, Another Eden is a strong RPG experience, but its gacha components occasionally bog it down.
            </p>
            <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            </div>
            <h2>JayDub From Cali!</h2>
        </div>
        </div>
    );
};

export default Testimonial;
