import Article1 from "./Article1"
import Article2 from "./Article1"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import React from "react";

const MiddleSchool = () => {
    return (
        <>
            <Routes>
                <Route path="Article1" element={<Article1/>}/>
                <Route path="Article2" element={<Article2/>}/>
            </Routes>
            <Link to="/MiddleSchool/Article1">Article1</Link>
        </>
    )
};
export default MiddleSchool;
