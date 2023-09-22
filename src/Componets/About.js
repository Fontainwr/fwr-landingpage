import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    const redirectToLearnMore = () => {
        window.location.href = "https://en.another-eden.jp/";
    };

    const redirectToWatchVideo = () => {
        window.location.href = "https://www.youtube.com/watch?v=nq6aIC_4t9A&ab_channel=AnotherEden%3ATheCatBeyondTimeandSpace";
    };

    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Another Eden: The Cat Beyond Time
                </h1>
                <p className="primary-text">
                    The game centers around a boy named Aldo, the game's protagonist, and his sister Feinne.[9] The two live plain and peaceful lives in a small village, however one day the Beast King appears and seeks to use Feinne's dormant abilities to erase humans from the world, leaving the planet only for beast-kin. Aldo desperately attempts to rescue his sister from the Beast King, but a distortion in space-time occurs in the air and whisks Aldo away 800 years into the future.
                </p>
                <p className="primary-text">
                    Another Eden: The Cat Beyond Time and Space[1] is a free-to-play role-playing video game developed and published by Wright Flyer Studios. The game features the collaboration of writer Masato Kato and music composer Yasunori Mitsuda who both worked on Xenogears and the Chrono series of role-playing games. 
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button" onClick={redirectToLearnMore}>
                        Learn More
                    </button>
                    <button className="watch-video-button" onClick={redirectToWatchVideo}>
                        <BsFillPlayCircleFill /> Watch Video
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;