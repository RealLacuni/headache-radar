import {useState} from "react";
import MobileMenu from "./MobileMenu.tsx";

export const Nav = () => {
    const [currentPage, setCurrentPage] = useState("Home");

    return (
        <section className="flex justify-between px-1 py-1">
            <div>
                Logo here
            </div>
            <MobileMenu currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </section>
    )
}