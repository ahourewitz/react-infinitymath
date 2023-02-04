import {useParams} from "react-router-dom";
import {lazy, React, Suspense} from "react";

function ArticleLoader() {
    let {section, subsection, article} = useParams();
    const SpecificArticle = lazy(() => import(`../articles/${section}/${subsection}/${article}`));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SpecificArticle/>
        </Suspense>
    )
}

export default ArticleLoader;