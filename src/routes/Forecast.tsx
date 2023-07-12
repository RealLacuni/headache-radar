import Input from "../components/Input.tsx";
import Overview from "../components/Overview.tsx";
import { useAppSelector} from "../hooks/hooks.ts";
import React, {useState} from "react";

const Forecast = () => {
    const [zipCode, setZipCode] = useState("");
    const weather = useAppSelector((state) => state.forecast);
    console.log(weather)

    const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setZipCode(event.target.value);
    }

    console.log(zipCode);
    return (

        <div className={"flex flex-col"}>
            {(weather.dailyForecast != null) && <Overview/>}

            <div
                className={"flex flex-row mt-20 py-20 items-center justify-center gap-8 p-2 border-b border-gray-400"}>
                <p className={"text-gray-300 text-lg"}>Search by entering your Zip Code:</p>
                <Input label={"Zip Code"} placeholder={"90210"} onChange={handleZipCodeChange}/>
            </div>
        </div>
    )
}

export default Forecast;