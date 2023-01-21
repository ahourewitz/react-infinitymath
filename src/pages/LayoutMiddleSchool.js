import {Outlet, Link} from "react-router-dom";
import React from "react";
import ArticleCard from "./ArticleCard";
import backtoschool_notebook from "./articles/poster/backtoschool_notebook.svg"

const LayoutMiddleSchool = () => {
    return (
        <>
            <nav className={"layout_articles"}>
                <ul>
                    <li>
                        <ArticleCard title={"Back to School : Notebook"}
                                     short_description={"This is the notebook that you can use for your next Back to School Activity ! ENJOY !"}
                                     img_src={backtoschool_notebook}
                                     link={"Article2"}
                                     imgRatioWidth={0.8}/>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
};
export default LayoutMiddleSchool;