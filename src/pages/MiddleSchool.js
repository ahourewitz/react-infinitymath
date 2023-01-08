import Article1 from "./Article1"
import Article2 from "./Article1"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import LayoutArticles from "./LayoutArticles";

const MiddleSchool = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutArticles />}>
                    <Route path="Article1" element={<Article1/>} />
                    <Route path="Article2" element={<Article2/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
export default MiddleSchool;
