import {Outlet, Link, useParams} from "react-router-dom";
import React, {lazy} from "react";
import ArticleCard from "./ArticleCard"
import NoPage from "./NoPage";

const LayoutArticles = (props) => {
    let {section, subsection} = useParams();
    section = section ? section : props.section;
    subsection = subsection ? subsection : props.subsection;

    const articlesContext = require.context('../articles/', true);
    try {
        const articles = articlesContext(`./${section}/${subsection}/articles.json`);
        return (
            <>
                <nav className={"layout_articles"}>
                    {
                        articles.map((article, key) => {
                            return <ArticleCard key={key}
                                                title={article.title}
                                                short_description={article.description}
                                                img_src={articlesContext(`./${section}/${subsection}/cards/${article.img_src}`)}
                                                link={`/articles/${section}/${subsection}/${article.link}`}
                                                flexGrow={article.flexGrow ? article.flexGrow : 1}/>
                        })
                    }
                </nav>
                <Outlet/>
            </>
        )

    } catch (e) {
        console.log(e);
        return <NoPage/>;
    }
};
export default LayoutArticles;