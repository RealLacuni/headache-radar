import {useNavigate} from "react-router-dom";


const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className={"grid py-8 px-1 gap-8 lg:gap-2 grid-cols-1 grid-rows-12 lg:grid-cols-4 items-center"}>
            <h1 className={"text-4xl font-bold align-text-bottom self-end"}>Hero</h1>
            <p className={"text-slate-200 row-start-2 col-start-1 col-end-3 text-2xl"}>At a glance..
                <br/> be notified of
                <span className={"text-secondary-500 font-bold"}> large pressure swings</span>,
                <span className={"text-secondary-500 font-bold"}> high humidity</span>,
                <span className={"text-secondary-500 font-bold"}> temperature changes</span>,
                and more.</p>

            <img src={"../src/assets/images/hero-image.jpg"} alt="hero image"
                 className={"row-start-3  lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-4 p-3"}/>

            <div className={"flex gap-2 row-start-4 align-middle items-center col-start-1 col-end-3 lg:col-start-1 lg:col-end-3"}>
                <p>Check the upcoming weather forecasts with up to five days of weather data.</p>
                <p>Save forecasts to your account to view again later <span className={"text-gray-600"}>(account required).</span></p>
                <p>Check historical forecasts for dates in the past <span className={"text-primary-50"}>(coming soon).</span></p>
            </div>

            <div className={"col-start-1 row-start-5"}>
                <button className={"py-3 px-2 rounded-lg bg-primary-400 text-black font-bold hover:bg-primary-500 transition duration-300 ease-in-out hover:shadow-lg hover:text-white"}
                        onClick={() => navigate('/forecast')}>Try me now
                </button>
            </div>
            {/*<div id={"hero-image"} style={{backgroundImage: "url('../src/assets/images/hero-image.jpg')"}}*/}
            {/*     className={"lg:col-start-4 lg:row-start-1 lg:row-end-4 bg-primary-700 object-scale-down"}>*/}
            {/*</div>*/}
        </div>
    )

}

export default Hero;