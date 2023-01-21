import {Outlet, Link} from "react-router-dom";
import * as PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import React, {useState} from "react";


function ContentView(props) {
    return <div className="ContentView">{props.children}</div>;
}

function MainContentView(props) {
    const sidebarWidthPercentage = props.width.toLocaleString("en", {style: "percent"});
    return <div className={"MainContentView"}
                style={{width: sidebarWidthPercentage, position: "relative"}}>
        {/*<button style={{display: "inline", position: "absolute", right: 0, top: "50%"}} onClick={hideSidebar}>>></button>*/}
        {props.children}
    </div>;
}

MainContentView.propTypes = {children: PropTypes.node};
const LayoutMainMenu = () => {
    const [sidePanelWidth, setSidePanelWidth] = useState(0);

    const hideSidebar = () => {
        console.log(sidePanelWidth)
        if (sidePanelWidth === 0){
            setSidePanelWidth(0.2);
        } else {
            setSidePanelWidth(0);
        }
    }

    return (
        <>
            <nav className={"Menu MainMenu"}>
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
                    <li style={{position: "absolute", right: "1em"}}>
                        <a onClick={hideSidebar} href={"#"}>SIDEBAR</a>
                    </li>
                </ul>
            </nav>
            <ContentView>
                <MainContentView width={1 - sidePanelWidth}>
                    <Outlet/>
                </MainContentView>
                <Sidebar width={sidePanelWidth}/>
            </ContentView>
        </>
    )
}

export default LayoutMainMenu;