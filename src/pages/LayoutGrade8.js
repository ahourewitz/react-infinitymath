import {Outlet, Link} from "react-router-dom";
import React from "react";
import ArticleCard from "./ArticleCard";
import article1_card_poster from "../aboutme1.jpeg"
import article2_card_poster from "../aboutme1.jpeg"

const LayoutGrade6 = () => {
    return (
        <>
            <nav className={"layout_articles"}>
                <ul>
                    <li>
                        <ArticleCard title={"Titre Article 2 POUR GRADE 8"}
                                     short_description={"Description Article 2"}
                                     img_src={article2_card_poster}
                                     link={"Article2"}/>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
};
export default LayoutGrade6;