import React from "react";
import aboutme from "../aboutme1.jpeg";
import HomeSlideshow from "./HomeSlideshow";

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
                        <img style={{width: "80%"}}  src={aboutme} alt={aboutme}/>
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
                        <img style={{width: "80%"}} src={aboutme} alt={aboutme}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Home = () => {
    return (
        <>
            <div className={"Home"}>
                <HomeSlideshow/>
                <AboutMe/>
                <FindHere/>
            </div>
        </>
    )
};
export default Home;

