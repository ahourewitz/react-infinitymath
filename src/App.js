import logo from './logo.svg';
import aboutme from './aboutme1.jpeg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MiddleSchool from "./pages/MiddleSchool";
import TeacherPaper from "./pages/TeacherPaper";
import Digital from "./pages/Digital";
import NoPage from "./pages/NoPage";
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function App() {
    return (
        <div className="App">
            <MainTitle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                       <Route index element={<Home />} />
                       <Route path="MiddleSchool" element={<MiddleSchool/>} />
                        <Route path="TeacherPaper" element={<TeacherPaper/>}/>
                        <Route path="Digital" element={<Digital/>}/>
                        <Route path="*" element={<NoPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <AboutMe/>
            <FindHere/>
            <Slideshow/>
            <Footer/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit Bonjour2 <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

function MainTitle() {
    return <h1>Infinitymath</h1>
}

function AboutMe() {
    return (
        <div id="box1">
            <div className="Article-Home">
                <div className="type1">
                    <div className="leftbox">
                        <h2> About me </h2>
                        <p>
                            A  teacher who has embarked on a
                        </p>
                        <img src={aboutme} alt={aboutme}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
function FindHere () {
    return (
        <div id="box1">
            <div className="Article-Home">
                <div className="type1">
                    <div className="leftbox">
                        <h2> What find here ? </h2>
                        <p>
                            A  teacher who has embarked on a
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

function Footer() {
    const year = new Date().getFullYear();
    return "Copyright ©" + year + " by InfinityMath. All Rights Reserved"
}

export default App;
