import {Outlet, NavLink} from "react-router-dom";
import * as PropTypes from "prop-types";
import React, {useState} from "react";
import './Menu.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function ContentView(props) {
    return <div className="ContentView">{props.children}</div>;
}

function MainContentView(props) {
    return <div className={"MainContentView"}
                style={{position: "relative"}}>
        {props.children}
    </div>;
}

MainContentView.propTypes = {children: PropTypes.node};
const LayoutMainMenu = () => {
    const [menuActive, setMenuActive] = useState(false);


    return (
        <>
            <nav className={"Menu MainMenu"} onClick={() => setMenuActive(!menuActive)}>
                <NavLink style={menuActive ? {display: 'block'} : null} to="/">HOME</NavLink>
                <NavLink style={menuActive ? {display: 'block'} : null} to="/MiddleSchool">MIDDLESCHOOL</NavLink>
                <NavLink style={menuActive ? {display: 'block'} : null} to="/TeacherPaper">TEACHER PAPER</NavLink>
                <NavLink style={menuActive ? {display: 'block'} : null} to="/Digital">DIGITAL</NavLink>
                <FontAwesomeIcon className={"icon"} icon={faBars}/>
            </nav>
            <ContentView>
                <MainContentView>
                    <Outlet/>
                </MainContentView>
            </ContentView>
        </>
    )
}

export default LayoutMainMenu;