import Hero from "../components/Hero";
import {ArrowRightIcon} from "@heroicons/react/24/solid";


const Home = () => {
    return (
        <div
            className={"flex flex-col bg-gradient-to-b from-slate-950 to-slate-900 via-primary-800 via-40% to-70% font-open-sans text-slate-200 lg:px-2"}>
            <Hero/>
            <a
                href={"/forecast"}
                className={"py-4 self-center px-6 lg:mt-20 lg:px-4 my-4 rounded-md lg:text-lg text-primary-200 font-bold transition duration-300 ease-in-out hover:text-secondary-200 hover:shadow-lg"}>
                Try it out
                <ArrowRightIcon className={"inline-block ml-2 h-4 w-4"}/>
            </a>
        </div>
    )
}

export default Home;