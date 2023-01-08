import {Outlet,Link} from "react-router-dom";
const LayoutArticles = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/Article1">Article1</Link>
                    </li>
                    <li>
                        <Link to="/Article2">Article2</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
};
export default LayoutArticles;