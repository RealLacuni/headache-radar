import {Link} from "react-router-dom";
import Card from "./Card.tsx";


const Hero = () => {

    return (
        <div className={"grid pt-20 gap-y-20 px-2 grid-cols-1 grid-rows-8 lg:grid-cols-12 items-center"}>

            <h1 className={"text-4xl lg:py-0 font-bold align-text-bottom self-end"}>Hero</h1>
            <p className={"text-slate-200 lg:mt-10 pr-12 row-start-2 col-start-1 col-end-5 text-xl font-normal leading-loose"}>At
                a glance...
                <br/> see how the weather will affect you based on factors such as:
                <span className={"text-secondary-500 font-bold"}> large pressure swings</span>,
                <span className={"text-secondary-500 font-bold"}> high humidity</span>,
                <span className={"text-secondary-500 font-bold"}> temperature changes</span>,
                and more.</p>



            <div className={"flex flex-col items-center gap-8 lg:gap-12 text-gray-300 lg:text-xl row-start-6 lg:flex-row lg:row-start-4 lg:col-start-1 lg:col-end-12"}>
                <Card className={`h-fit pb-8 pt-2`}><p>Check the upcoming weather forecasts with up to five days of weather data.</p>
                </Card>
                <Card className={"h-fit pb-8 pt-2"}>
                    <p>Save forecasts to your account to view again later <Link to={"/signup"}
                                                                                className={"text-gray-400 underline underline-offset-4 hover:text-secondary-300 hover:opacity-70"}>(account
                        required)</Link>.</p>
                </Card>
                <Card className={"h-fit pb-8 pt-2"}>
                    <p>Check historical forecasts for dates in the past <span className={"text-primary-50"}>(coming soon).</span>
                    </p>
                </Card>
            </div>

            <img src={"../src/assets/images/hero-image.jpg"} alt="hero image"
                 className={"row-start-3 p-3 row-end-5 lg:col-start-5 lg:col-end-13 lg:row-start-1 lg:row-end-4"}/>
        </div>
    )

}

export default Hero;
