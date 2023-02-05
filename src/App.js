import './App.scss';
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import LayoutMainMenu from "./pages/LayoutMainMenu";
import Home from "./pages/Home";
import MiddleSchool from "./pages/MiddleSchoolMenu";
import TeacherPaper from "./pages/TeacherPaper";
import Digital from "./pages/Digital";
import NoPage from "./pages/NoPage";
import React from "react";
import ArticleLoader from "./pages/ArticleLoader";
import LayoutArticles from "./pages/LayoutArticles";

function App() {
    return (
        <div className="App">
            <MainTitle/>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<LayoutMainMenu/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/TeacherPaper" element={<TeacherPaper/>}/>
                        <Route path="/Digital" element={<Digital/>}/>
                        {/*<Route path=":section/:subsection" element={<LayoutArticles/>}/>*/}
                        <Route path="/:section/:subsection/:article" element={<ArticleLoader/>}/>
                        <Route path="/MiddleSchool/*" element={<MiddleSchool/>}/>
                        <Route path="/*" element={<NoPage/>}/>
                    </Route>
                </Routes>
            </HashRouter>
            <Footer/>
        </div>
    );
}

function MainTitle() {
    return <h1 className={"MainTitle"}>INFINITY MATH</h1>
}

function Footer() {
    const year = new Date().getFullYear();
    return <div className={"footer"}><p>Copyright ©{year} by InfinityMath. All Rights Reserved</p></div>
}

export default App;
