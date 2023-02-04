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

function ExpandableNavLink({menuActive, to, children}) {
    const preventMenuEnabling = (e) => {
        if (!menuActive) {
            e.stopPropagation();
        }
    }
    return <NavLink onClick={preventMenuEnabling} style={menuActive ? {display: 'inline'} : null} to={to}>{children}</NavLink>;
}

const LayoutMainMenu = () => {
    const [menuActive, setMenuActive] = useState(false);


    return (
        <>
            <nav className={"Menu MainMenu"} onClick={() => setMenuActive(!menuActive)}>
                <ExpandableNavLink menuActive={menuActive} to={"/"}>Home</ExpandableNavLink>
                <ExpandableNavLink menuActive={menuActive} to={"/MiddleSchool"}>Middle School</ExpandableNavLink>
                <ExpandableNavLink menuActive={menuActive} to={"/TeacherPaper"}>Teacher Paper</ExpandableNavLink>
                <ExpandableNavLink menuActive={menuActive} to={"/Digital"}>Digital</ExpandableNavLink>
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