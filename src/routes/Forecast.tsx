import Input from "../components/Input.tsx";
import Overview from "../components/Overview.tsx";
import {useAppSelector} from "../hooks/hooks.ts";
import React, {useState} from "react";
import LoadingScreen from "../components/LoadingScreen.tsx";

const Forecast = () => {
    const [zipCode, setZipCode] = useState("");
    const [loading, setLoading] = useState(false);
    const weather = useAppSelector((state) => state.forecast);

    const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setZipCode(event.target.value);
    }

    const handleZipCodeSubmit = () => {
        console.log(zipCode)
        setZipCode("")
        //make api calls here
        //render loading screen
        setLoading(true)
    }

    return (

        <div className={"flex flex-col"}>
            {loading && <LoadingScreen/>}
            {(weather.dailyForecast == null) &&
                <>
            {(weather.dailyForecast != null) && <Overview/>}

            {(weather.dailyForecast == null) && <div
                className={"flex flex-col lg:flex-row mt-20 py-20 items-center justify-center gap-8 p-2"}>
                <p className={"text-gray-300 text-lg"}>Search by entering your Zip Code:</p>
                <Input label={"Zip Code"} placeholder={"90210"} onChange={handleZipCodeChange}/>
                <button type={"button"} onClick={handleZipCodeSubmit} value={"Search"}
                        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}> Search
                </button>

            </div>
            }
            </>
            }
        </div>
    )
    }

    export default Forecast;