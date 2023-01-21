import {Outlet, Link} from "react-router-dom";
import React from "react";
import ArticleCard from "./ArticleCard";
import article3_card_poster from "../aboutme1.jpeg"

const LayoutGrade6 = () => {
    return (
        <>
            <nav className={"layout_articles"}>
                <ul>
                    <li>
                        <ArticleCard title={"Titre Article 3"}
                                     short_description={"\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"\n" +
                                         "\n"}
                                     img_src={article3_card_poster}
                                     link={"Article3"}/>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
};
export default LayoutGrade6;