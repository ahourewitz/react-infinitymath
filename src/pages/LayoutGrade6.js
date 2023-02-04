import {Outlet, Link} from "react-router-dom";
import React, {lazy} from "react";
import ArticleCard from "./ArticleCard"
import articles from '../articles/MiddleSchool/Grade6/articles.json'

const LayoutGrade6 = () => {
    const cards = require.context("../articles/MiddleSchool/Grade6/cards", true);
    return (
        <>
            <nav className={"layout_articles"}>
                {
                    articles.map((article, key) => {
                        // const card = lazy(() => import(`${article.img_src}`));
                        return <ArticleCard key={key}
                                    title={article.title}
                                     short_description={article.description}
                                     img_src={cards(article.img_src)}
                                     link={article.link}/>
                    })
                }
            </nav>
            <Outlet/>
        </>
    )
};
export default LayoutGrade6;