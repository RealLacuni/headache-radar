import {Popover} from "@headlessui/react";
import {ReactElement, useState} from "react"
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

const pages: string[] = ["Home", "About", "Projects", "Contact"];
const MobileMenu = (props: MobileMenuProps): ReactElement => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    const filteredPages = pages.filter((page) => page !== props.currentPage);

    return (
        <>
            <div className={"hidden lg:block"}>
                {filteredPages.map((page: string) => {
                    return (
                        <Link to={`/${page.toLowerCase()}`} key={page}
                              className="px-4 py-2 text-primary-200 text-sm hover:bg-slate-600 hover:text-white"
                              onClick={() => props.setCurrentPage(page)}>
                            {page}
                        </Link>
                    )
                })}
            </div>
            <Popover className="relative lg:hidden">
                <Popover.Button onClick={toggleOpen}
                                className={`${open ? '' : 'text-opacity-90'} group inline-flex items-center rounded-xl bg-secondary-900 px-3 py-2 text-base font-medium text-primary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>{props.currentPage}
                    <ChevronDownIcon className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                     aria-hidden="true"/>
                </Popover.Button>
                <Popover.Panel className="absolute z-10">
                    <div className="flex flex-col items-center py-2">
                        {filteredPages.map((page: string) => {
                            return (
                                <Link to={`/${page.toLowerCase()}`} key={page}
                                      className="px-4 py-2 text-primary-200 text-sm hover:bg-slate-600 hover:text-white"
                                      onClick={() => props.setCurrentPage(page)}>
                                    {page}
                                </Link>
                            )
                        })}
                    </div>
                    <img src={"https://via.placeholder.com/150"} alt="placeholder"/>
                </Popover.Panel>
            </Popover>
        </>
    )
};

type MobileMenuProps = {
    currentPage: string;
    setCurrentPage: (currentPage: string) => void;
}

export default MobileMenu;
