import {Link} from "react-router-dom";
import React from "react";

function ArticleCard({title, img_src, short_description, link, imgRatioWidth=0.5}){
    const imgRatioWidthStr = imgRatioWidth.toLocaleString("en", {style: "percent"});
    const descRatioWidthStr = (1-imgRatioWidth).toLocaleString("en", {style: "percent"});
    return (
        <div className={"article_card"}>
            <h3 className={"article_card_title"}>{title}</h3>
            <div style={{display: "flex"}}>
                <img style={{maxWidth: imgRatioWidthStr}} className={"article_card_poster"} src={img_src} alt={title}/>
                <div style={{display: "flex", flexDirection: "column", width:descRatioWidthStr, justifyContent: "space-between"}}>
                    <p className={"article_short_desc"}>{short_description}</p>
                    <Link className={"article_link"} to={link}>Read more</Link>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard