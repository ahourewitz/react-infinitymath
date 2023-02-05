import {NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";
import {React} from "react";
import './Menu.scss';
import LayoutArticles from "./LayoutArticles";



function MiddleSchoolMenu() {
    return (
        <>
            <nav className={"Menu SubMenu"}>
                <NavLink to={"Grade6"}>Grade 6</NavLink>
                <NavLink to={"Grade7"}>Grade 7</NavLink>
                <NavLink to={"Grade8"}>Grade 8</NavLink>
            </nav>
            <Outlet/>
        </>
    );
}

const MiddleSchool = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MiddleSchoolMenu/>}>
                    <Route index element={<LayoutArticles section={'MiddleSchool'} subsection={'Home'}/>}/>
                    <Route path=":subsection" element={<LayoutArticles section={'MiddleSchool'}/>}/>
                </Route>
            </Routes>
        </>
    )
};
export default MiddleSchool;
