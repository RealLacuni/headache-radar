import Hero from "../components/Hero";
import {useNavigate} from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    return (
        <div
            className={"bg-gradient-to-b from-slate-950 to-slate-900 via-primary-800 via-40% to-70% font-open-sans text-slate-200 lg:px-2"}>
            <Hero/>
            <div className={"m-auto flex justify-center lg:justify-start"}>
                <button
                    className={"py-4 px-6 lg:py-2 lg:px-4 my-4 rounded-md bg-secondary-700 lg:text-lg text-primary-200 font-bold hover:bg-secondary-900 transition duration-300 ease-in-out hover:shadow-lg hover:text-slate-400"}
                    onClick={() => navigate('/forecast')}>Try now
                </button>
            </div>
        </div>
    )
}

export default Home;