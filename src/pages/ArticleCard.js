import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./ArticleCard.scss"

function ArticleCard({title, img_src, short_description, link, imgRatioWidth=0.5}){
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches( e.matches ));
    }, []);


    const imgRatioWidthStr = matches ?
        imgRatioWidth.toLocaleString("en", {style: "percent"}) :
        '100%';
    const descRatioWidthStr = matches ?
        (1-imgRatioWidth).toLocaleString("en", {style: "percent"}) :
        '100%';
    return (
        <article className={"article-card"}>
            <h3 className={"title"}>{title}</h3>
            <div className={"preview"}>
                <img className={"poster"} style={{maxWidth: imgRatioWidthStr}}  src={img_src} alt={title}/>
                <div className={"description"} style={{width:descRatioWidthStr}}>
                    <p>{short_description}</p>
                    <Link to={link}>Read more</Link>
                </div>
            </div>
        </article>
    )
}

export default ArticleCard