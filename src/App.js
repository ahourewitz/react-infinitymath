import logo from './logo.svg';
import aboutme from './aboutme1.jpeg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MiddleSchool from "./pages/MiddleSchool";
import TeacherPaper from "./pages/TeacherPaper";
import Digital from "./pages/Digital";
import NoPage from "./pages/NoPage";
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Article1 from "./pages/Article1";
import Article2 from "./pages/Article2";
import React from "react";

function App() {
    return (
        <div className="App">
            <MainTitle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="MiddleSchool/*" element={<MiddleSchool/>}/>
                        <Route path="TeacherPaper" element={<TeacherPaper/>}/>
                        <Route path="Digital" element={<Digital/>}/>
                        <Route path="*" element={<NoPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

function MainTitle() {
    return <h1>Infinitymath</h1>
}

function Footer() {
    const year = new Date().getFullYear();
    return <p>Copyright ©{year} by InfinityMath. All Rights Reserved</p>
}

export default App;
