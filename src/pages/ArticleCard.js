import {Link} from "react-router-dom";
import React from "react";

function ArticleCard({title, img_src, short_description, link}){
    return (
        <div className={"article_card"}>
            <h3 className={"article_title"}>{title}</h3>
            <div style={{display: "flex"}}>
                <img className={"article_card_poster"} src={img_src} alt={title}/>
                <div >
                    <p className={"article_short_desc"}>{short_description}</p>
                    <Link to={"/MiddleSchool/"+link}>Read more</Link>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard