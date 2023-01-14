import Article1 from "./Article1"
import Article2 from "./Article2"
import {BrowserRouter, Link, Outlet, Route, Routes, useParams} from "react-router-dom";
import React from "react";
import LayoutArticles from "./LayoutArticles";
import Article from "./ArticleCard";


const articles = { // LEFT : Link Path. RIGHT : Component name
    Article1 : Article1,
    Article2 : Article2
};

function ArticleLoader() {
    let { id } = useParams();
    const SpecificArticle = articles[id];
    return <SpecificArticle/>;
}

const MiddleSchool = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<LayoutArticles/>}/>
                <Route path="/:id" element={<ArticleLoader/>}/>
            </Routes>
        </>
    )
};
export default MiddleSchool;
