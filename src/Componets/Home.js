import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
    // Define the Google Play Store link
    const googlePlayStoreLink = "https://play.google.com/store/apps/details?id=games.wfs.anothereden&hl=en_GB";

    return (
        <div className="home-container">
            <Navbar />
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Fan Site for the Best Online Mobile Game app!
                    </h1>
                    <p className="primary-text">
                        The game centers around a boy named Aldo, the game's protagonist, and his sister Feinne. The two live plain and peaceful lives in a small village, however one day the Beast King appears and seeks to use Feinne's dormant abilities to erase humans from the world, leaving the planet only for beast-kin.
                    </p>
                    {/* Use an anchor tag for the "Download Now!" button */}
                    <a href={googlePlayStoreLink} target="_blank" rel="noopener noreferrer">
                        <button className="secondary-button">
                            Download Now! <FiArrowRight />{" "}
                        </button>
                    </a>
                </div>
                <div className="home-image-section">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};
export default Home;