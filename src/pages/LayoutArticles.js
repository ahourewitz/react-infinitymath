import {Outlet, Link, useParams} from "react-router-dom";
import React, {lazy} from "react";
import ArticleCard from "./ArticleCard"

const LayoutArticles = (props) => {
    let {section, subsection} = useParams();
    if (!section){
        section=props.section;
    }
    const articles_context = require.context('../articles/', true);
    const articles = articles_context(`./${section}/${subsection}/articles.json`)
    return (
        <>
            <nav className={"layout_articles"}>
                {
                    articles.map((article, key) => {
                        return <ArticleCard key={key}
                                            title={article.title}
                                            short_description={article.description}
                                            img_src={articles_context(`./${section}/${subsection}/cards/${article.img_src}`)}
                                            link={article.link}/>
                    })
                }
            </nav>
            <Outlet/>
        </>
    )
};
export default LayoutArticles;