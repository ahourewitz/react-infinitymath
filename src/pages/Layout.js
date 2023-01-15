import {Outlet, Link} from "react-router-dom";
import * as PropTypes from "prop-types";

function Sidebar(props) {
    return <div className="Sidebar">
        <p>Contenu de la sidebar</p>
    </div>;
}

function ContentView(props) {
    return <div className="ContentView">{props.children}</div>;
}

function MainContentView(props) {
    return <div className={"MainContentView"}>{props.children}</div>;
}

MainContentView.propTypes = {children: PropTypes.node};
const Layout = () => {
    return (
        <>
                <nav className={"MainMenu"}>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/MiddleSchool">MIDDLESCHOOL</Link>
                        </li>
                        <li>
                            <Link to="/TeacherPaper">TEACHER PAPER</Link>
                        </li>
                        <li>
                            <Link to="/Digital">DIGITAL</Link>
                        </li>
                    </ul>
                </nav>
                <ContentView>
                    <MainContentView>
                        <Outlet/>
                    </MainContentView>
                    <Sidebar/>
                </ContentView>
        </>
    )
}

export default Layout;