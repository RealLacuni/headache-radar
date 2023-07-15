import FeatureCards from "./FeatureCards.tsx";


const Hero = () => {

    return (
        <div className={"grid pt-20 gap-y-20 pl-4 grid-cols-1 grid-rows-8 lg:grid-cols-12 items-center"}>

            <h1 className={"text-4xl lg:text-6xl lg:py-0 font-bold align-text-bottom row-start-1 col-start-1 lg:col-end-6"}>At a
                glance...</h1>
            {/*vvvv maybe change this to a flex container vvvv */}
            <div className={"row-start-2 lg:row-start-1 lg:row-end-4 col-start-1 col-end-5 lg:col-end-7 gap-12"}>

                <p className={"text-slate-200 lg:mt-10 text-xl font-normal leading-loose pb-10"}>
                    See how the weather may affect you based on factors such as changes in,
                </p>
                <div className="flex py-4 justify-around mr-4 flex-row text-sm lg:text-lg bg-slate-400 rounded-xl text-black font-bold">
                        <p className="">Pressure</p>
                        <p className="">Temperature</p>
                        <p className="">Humidity</p>
                        <p className="">Wind Speed</p>
                </div>
            </div>

            <FeatureCards className={"row-start-4  lg:col-start-1 lg:col-end-12"}/>

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
