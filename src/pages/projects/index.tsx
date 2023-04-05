import Navbar from "../../components/navbar";
import {Outlet} from "react-router-dom";

export default function ProjectsHome() {
    return (
        <>
            <Navbar showHome={true}/>
            <Outlet/>
        </>
    );
};