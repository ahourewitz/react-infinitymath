import {Outlet, NavLink} from "react-router-dom";
import * as PropTypes from "prop-types";
import React from "react";
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

    return (
        <>
            <nav className={"Menu MainMenu"}>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/MiddleSchool">MIDDLESCHOOL</NavLink>
                <NavLink to="/TeacherPaper">TEACHER PAPER</NavLink>
                <NavLink to="/Digital">DIGITAL</NavLink>
                <a className={"icon"} href={"#"}><FontAwesomeIcon icon={faBars}/></a>
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