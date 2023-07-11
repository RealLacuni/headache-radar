import React from "react";
import {Outlet} from "react-router-dom";
import {Nav} from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";


const Root = (): React.ReactElement => {
    return (
        <div className="h-screen bg-gradient-to-b from-slate-950 to-slate-900 via-primary-800
            font-open-sans text-slate-300">
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>

    );
}

export default Root;