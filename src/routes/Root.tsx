import React from "react";
import {Outlet} from "react-router-dom";
import {Nav} from "../components/Header/Nav.tsx";
import Footer from "../components/Footer.tsx";


const Root = (): React.ReactElement => {
    return (
        <div className={"flex flex-col min-h-screen font-open-sans"}>
            <div className={"flex-grow bg-gradient-to-b from-slate-950 to-slate-900 via-primary-800 text-slate-300"}>
                <Nav/>
                <Outlet/>
            </div>
            <Footer/>
        </div>

    );
}

export default Root;