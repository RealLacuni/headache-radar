import FeatureList from "./Forecast/FeatureList.tsx";


const Hero = () => {

    return (
        <div className={"grid pt-20 gap-y-20 pl-4 grid-cols-1 grid-rows-8 lg:grid-cols-12 items-center overflow-x-hidden"}>

            <h1 className={"text-4xl lg:text-6xl lg:py-0 font-bold align-text-bottom row-start-1 col-start-1 lg:col-end-6"}>At a glance...</h1>
            <div className={"row-start-2 lg:row-start-1 lg:row-end-4 col-start-1 col-end-5 lg:col-end-7 gap-12"}>

                <p className={"text-slate-300 lg:mt-10 text-xl font-normal leading-loose pb-10"}>
                    See how the weather may affect you based on factors such as changes in,
                </p>
                <div
                    className="flex py-4 justify-around mr-4 flex-row text-sm lg:text-lg bg-slate-400 rounded-xl text-black font-bold">
                    <p>Pressure</p>
                    <p>|</p>
                    <p>Temperature</p>
                    <p>| </p>
                    <p>Humidity</p>
                    <p>| </p>
                    <p>Wind Speed</p>
                </div>
            </div>

            <FeatureList className={"row-start-4  lg:col-start-1 lg:col-end-12"}/>

            <div id={"img-container"}
                 className={"relative row-start-3 lg:col-start-5 lg:col-end-13 lg:row-start-1 lg:row-end-4"}>
                <div id={"img-wrapper"}
                     className={"relative left-36 lg:left-80 rounded-xl border-slate-950 h-[40rem] shadow-[0px_10px_1px_rgba(0,_0,_0,_1),_0_10px_20px_rgba(61,_108,_179,_1)] overflow-x-hidden "}>
                    <img src={"/forecast-image.jpg"} alt="hero image"
                         className={"absolute w-full h-full object-cover object-left-top inset-0"} aria-hidden={"true"}/>
                    <div className="absolute top-0 left-0 w-full h-[22rem] bg-gradient-to-b from-black opacity-40"/>
                    <div className="absolute bottom-0 left-0 w-full h-[5rem] bg-gradient-to-t from-black opacity-75"/>
                    {/*<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black via-80% "/>*/}
                    {/*<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-primary-600 to-transparent opacity-20 "/>*/}

                </div>
            </div>

        </div>

    )

}
export default Hero;
