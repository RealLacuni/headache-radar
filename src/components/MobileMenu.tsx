import React, {ReactElement, useState} from "react"
import {Bars3Icon} from "@heroicons/react/24/solid";
import {Link, useNavigate} from "react-router-dom";


const pages: string[] = ["", "Forecast", "Projects", "Contact"];

const MobileMenu = (props: MobileMenuProps): ReactElement => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();


    const toggleOpen = () => {
        const menu = document.getElementById("hamburger-menu") as HTMLElement;
        menu.classList.toggle("bg-primary-800");
        setTimeout(() => {
            menu.classList.toggle("bg-primary-800");
        }, 1000);

        setOpen(!open);
    }

    const handleNavigate = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const target = event.target as HTMLElement;
        const path = target.id;

        if (path === "") {
            props.setCurrentPage("Home");
            navigate("/");
        } else {
            props.setCurrentPage(path[0].toUpperCase() + path.slice(1));
            navigate(path);
        }
    }

    return (
        <>
            <div className={"hidden lg:block"}>
                {pages.map((page: string) => {
                    return (
                        <Link to={`/${page.toLowerCase()}`} key={page}
                              className="px-4 py-2 text-primary-200 text-sm hover:bg-slate-600 hover:text-white"
                              state={{page: page}}>
                        </Link>
                    )
                })}
            </div>

            <div className={"lg:hidden"}>
                <Bars3Icon id="hamburger-menu" className="h-8 w-8 text-primary-200 hover:text-white"
                           onClick={toggleOpen}/>
            </div>
            {open && (
                <div className="lg:hidden flex flex-col absolute left-0 right-0 mt-10 space-y-8 py-8 px-1 bg-slate-900">
                    {pages.map((page: string) => {
                        return (
                            <Link to={`/${page.toLowerCase()}`} key={page}
                                    id={page}
                                  className="h-10 w-auto px-3 py-2 rounded-sm text-center text-primary-950 font-bold bg-accent-400"
                                  onClick={handleNavigate}>
                                {page == "" ? "Home" : page}
                            </Link>
                        )
                    })}
                </div>
            )}


        </>
    )
};

// <Popover className="relative lg:hidden">
//     <Popover.Button onClick={toggleOpen}
//                     className={`${open ? '' : 'text-opacity-90'} group inline-flex items-center rounded-xl bg-secondary-900 px-3 py-2 text-base font-medium text-primary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>{props.currentPage}
//         <ChevronDownIcon className={`${open ? '' : 'text-opacity-70'}
//                   ml-2 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
//                          aria-hidden="true"/>
//     </Popover.Button>
//     <Popover.Panel className="z-10 w-screen">
//         <div className="flex flex-col items-center py-2">
//             {filteredPages.map((page: string) => {
//                 return (
//                     <Link to={`/${page.toLowerCase()}`} key={page}
//                           className="px-4 py-2 text-primary-200 text-sm hover:bg-slate-600 hover:text-white"
//                           onClick={() => props.setCurrentPage(page)}>
//                         {page}
//                     </Link>
//                 )
//             })}
//         </div>
//         <img src={"https://via.placeholder.com/150"} alt="placeholder"/>
//     </Popover.Panel>
// </Popover>


type MobileMenuProps = {
    currentPage: string;
    setCurrentPage: (currentPage: string) => void;
}

export default MobileMenu;
