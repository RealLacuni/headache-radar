import { useState} from "react";
import MobileMenu from "./MobileMenu.tsx";
import {RadarIcon} from '../assets/svg/Icons'

export const Nav = () => {
    const currPage = window.location.pathname;
    const [currentPage, setCurrentPage] = useState(currPage === "/" ? "/" : currPage[1].toUpperCase() + currPage.slice(2));

    if (currentPage === "/") {
        setCurrentPage("Home");
    }
    return (
        <header className="flex justify-between items-start p-2 h-12 text-xl">
            <div className={"relative text-xs font-semibold text-gray-400 flex self-center flex-col items-end p-1 z-20"}>
                Headache <span className={"text-secondary-700 font-semibold"}>Radar</span> <RadarIcon className={"absolute fill-secondary-700 left-1 top-[1.25rem] h-4 w-4"}/>
            </div>
            <div className={"lg:hidden align-text-bottom absolute left-1/2 transform -translate-x-1/2 text-end underline underline-offset-8"}>
                {currentPage}
            </div>
            <MobileMenu currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </header>
    )
}