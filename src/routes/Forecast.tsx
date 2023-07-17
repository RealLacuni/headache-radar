import Overview from "../components/Overview.tsx";
import {useAppSelector} from "../hooks/hooks.ts";
import React, {useState} from "react";
import LoadingScreen from "../components/LoadingScreen.tsx";
import SearchInput from "../components/Forecast/SearchInput.tsx";

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

        <main className={"flex flex-col"}>
            {loading && <LoadingScreen/>}
            {(weather.dailyForecast == null) &&
                <>
                    {(weather.dailyForecast != null) && <Overview/>}

                    {(weather.dailyForecast == null && !loading) &&
                        <SearchInput handleZipCodeChange={handleZipCodeChange}
                                     handleZipCodeSubmit={handleZipCodeSubmit}/>
                    }
                </>
            }
        </main>
    )
}

export default Forecast;