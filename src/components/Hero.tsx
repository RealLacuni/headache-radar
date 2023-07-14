import {Link} from "react-router-dom";
import Card from "./Card.tsx";


const Hero = () => {

    return (
        <div className={"grid pt-20 gap-y-20 pl-4 grid-cols-1 grid-rows-8 lg:grid-cols-12 items-center"}>

            <h1 className={"text-6xl lg:py-0 font-bold align-text-bottom row-start-1 col-start-1 lg:col-end-6"}>At a
                glance...</h1>
            {/*vvvv maybe change this to a flex container vvvv */}
            <div className={"row-start-2 lg:row-start-1 lg:row-end-4 col-start-1 col-end-5 lg:col-end-7 gap-12"}>

                <p className={"text-slate-400 lg:mt-10  text-xl font-normal leading-loose pb-10"}>
                    See how the weather may affect you based on factors such as changes in,
                </p>
                <div className="flex py-4 px-2 justify-around gap-4 mr-4 flex-row text-sm lg:text-lg bg-slate-400 rounded-xl text-black lg:font-bold overflow-hidden">
                        <p className="">Pressure</p>
                        <p className="">Temperature</p>
                        <p className="">Humidity</p>
                        <p className="">Wind Speed</p>
                </div>
            </div>
            <div
                className={"flex flex-col items-center gap-8 lg:gap-12 text-gray-300 lg:text-xl row-start-4 lg:flex-row lg:col-start-1 lg:col-end-12"}>
                <Card className={`h-fit pb-8 pt-2`}><p>Check the upcoming weather forecasts with up to five days of
                    weather data.</p>
                </Card>
                <Card className={"h-fit pb-8 pt-2"}>
                    <p>Save forecasts to your account to view again later <Link to={"/signup"}
                                                                                className={"text-gray-400 underline underline-offset-4 hover:text-secondary-300 hover:opacity-70"}>(account
                        required)</Link>.</p>
                </Card>
                <Card className={"h-fit pb-8 pt-2"}>
                    <p>Check historical forecasts for dates in the past <span
                        className={"text-primary-50"}>(coming soon).</span>
                    </p>
                </Card>
            </div>

            <div id={"img-container"}
                 className={"relative row-start-3 lg:col-start-5 lg:col-end-13 lg:row-start-1 lg:row-end-4 min-h-0 min-w-0 overflow-hidden lg:-mr-2 "}>
                <div id={"img-wrapper"}
                     className={"relative left-36 lg:left-96 w-fit drop-shadow-md border-slate-950 border-8 rounded-xl shadow-black shadow-lg"}>
                    <img src={"../src/assets/images/hero-image2.jpg"} alt="hero image"
                         className={"relative overflow-hidden rounded-md"}/>
                </div>
            </div>

        </div>

    )

}

export default Hero;
