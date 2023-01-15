import React from "react";
import aboutme from "../aboutme1.jpeg";
import {Slide} from "react-slideshow-image";

function AboutMe() {
    return (
        <div id="box1">
            <div className="Article-Home">
                <div className="type1">
                    <div className="leftbox">
                        <h2> About me </h2>
                        <p>
                            A teacher who has embarked on a
                        </p>
                        <img src={aboutme} alt={aboutme}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FindHere() {
    return (
        <div id="box1">
            <div className="Article-Home">
                <div className="type1">
                    <div className="leftbox">
                        <h2> What find here ? </h2>
                        <p>
                            A teacher who has embarked on a
                        </p>
                        <img src={aboutme} alt={aboutme}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide>
                <div className="each-slide">
                    <div>
                        <img src={aboutme} alt={aboutme}/>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={aboutme} alt={aboutme}/>
                    </div>
                </div>
            </Slide>
        </div>
    )
}
const Home = () => {
    return (
        <>
            <div className={"Home"}>
                <h1>Home</h1>
                <AboutMe/>
                <FindHere/>
                <Slideshow/>
            </div>
        </>
    )
};
export default Home;

