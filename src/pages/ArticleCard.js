import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./ArticleCard.scss"

function ArticleCard({title, img_src, short_description, link, flexGrow=1}){
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches( e.matches ));
    }, []);


    return (
        <article className={"article-card"}>
            <h3 className={"title"}>{title}</h3>
            <div className={"preview"}>
                <img className={"poster"} style={{flex:flexGrow}}  src={img_src} alt={title}/>
                <div className={"description"} style={{flex:1}}>
                    <p>{short_description}</p>
                    <Link to={link}>Read more</Link>
                </div>
            </div>
        </article>
    )
}

export default ArticleCard