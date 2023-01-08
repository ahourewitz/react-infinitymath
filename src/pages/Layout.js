import {Outlet,Link} from "react-router-dom";
const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/MiddleSchool">MiddleSchool</Link>
                </li>
                <li>
                    <Link to="/TeacherPaper">Teacherpaper</Link>
                </li>
                <li>
                    <Link to="/Digital">Digital</Link>
                </li>
            </ul>
        </nav>
            <Outlet/>
        </>
    )
}

export default Layout;