import {Link} from "react-router-dom";


const Hero = () => {
    return (
        <div className={"grid py-8 px-1 gap-8 lg:gap-2 grid-cols-1 grid-rows-8 lg:grid-cols-4 items-center"}>
            <h1 className={"text-4xl pt-20 lg:py-0 font-bold align-text-bottom self-end"}>Hero</h1>
            <p className={"text-slate-200 pt-10 lg:pt-10 row-start-2 col-start-1 col-end-3 text-xl font-normal leading-loose"}>At a glance..
                <br/> be notified of
                <span className={"text-secondary-500 font-bold"}> large pressure swings</span>,
                <span className={"text-secondary-500 font-bold"}> high humidity</span>,
                <span className={"text-secondary-500 font-bold"}> temperature changes</span>,
                and more.</p>

            <img src={"../src/assets/images/hero-image.jpg"} alt="hero image"
                 className={"row-start-4 pt-20 lg:pt-0 row-end-6 lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-4 p-3"}/>

            <div className={"flex gap-4 pt-20 row-start-3 items-baseline col-start-1 lg:col-start-1 lg:col-end-3"}>
                <p>Check the upcoming weather forecasts with up to five days of weather data.</p>
                <p>Save forecasts to your account to view again later <Link to={"/signup"} className={"text-gray-400 underline underline-offset-4 hover:text-secondary-300 hover:opacity-70"}>(account required)</Link>.</p>
                <p>Check historical forecasts for dates in the past <span className={"text-primary-50"}>(coming soon).</span></p>
            </div>
        </div>
    )

}

export default Hero;