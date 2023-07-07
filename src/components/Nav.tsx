import { useState} from "react";
import MobileMenu from "./MobileMenu.tsx";

export const Nav = () => {
    const currPage = window.location.pathname;
    const [currentPage, setCurrentPage] = useState(currPage === "/" ? "/" : currPage[1].toUpperCase() + currPage.slice(2));

    if (currentPage === "/") {
        setCurrentPage("Home");
    }
    return (
        <section className="flex justify-between p-2 h-12 text-xl">
            <div>
                Logo here
            </div>
            <div className={"lg:hidden align-text-bottom absolute left-1/2 transform -translate-x-1/2 text-end underline underline-offset-8"}>
                {currentPage}
            </div>
            <MobileMenu currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </section>
    )
}