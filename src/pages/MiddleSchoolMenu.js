import {NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";
import {React, lazy, Suspense} from "react";
import LayoutGrade6 from "./LayoutGrade6";
import LayoutGrade7 from "./LayoutGrade7";
import LayoutGrade8 from "./LayoutGrade8";
import LayoutMiddleSchool from "./LayoutMiddleSchool";
import './Menu.scss';



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
                    <Route index element={<LayoutMiddleSchool/>}/>
                    <Route path="Grade6" element={<LayoutGrade6/>}/>
                    <Route path="Grade7" element={<LayoutGrade7/>}/>
                    <Route path="Grade8" element={<LayoutGrade8/>}/>
                </Route>
            </Routes>
        </>
    )
};
export default MiddleSchool;
