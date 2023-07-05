import React from "react";
import {Outlet} from "react-router-dom";
import {Nav} from "../components/Nav.tsx";


const Root = (): React.ReactElement => {
    return (
        <>
            <div className="h-[300vh] bg-gradient-to-b from-slate-900 to-slate-800 via-primary-900">
                <Nav/>
                <Outlet/>
            </div>
        </>
    );
}

export default Root;