import Overview from "../components/Overview.tsx";
import React, {useState} from "react";
import LoadingScreen from "../components/LoadingScreen.tsx";
import SearchInput from "../components/Forecast/SearchInput.tsx";
import * as sampleJson from "../assets/forecastJSON.json";
import ForecastGraphSection from "../components/Forecast/ForecastGraphSection.tsx";

const mockRetrieveData = () => {
    const dateToHourlyDataMap: Map<string, HourlyData[]> = new Map(Object.entries(sampleJson.dateToHourlyData));
    //convert the raw times in hourly data list to Date objects and then to local hour
    dateToHourlyDataMap.forEach((hourlyDataList: HourlyData[]) => {
        hourlyDataList.forEach((hourlyData: HourlyData) => {
            hourlyData.time = String(new Date(hourlyData.time).getHours());
        });
    });
// Create the CompiledForecasts object with the correct types
    const compiledForecasts: CompiledForecasts = {
        dailyForecastList: sampleJson.dailyForecastList,
        dateToHourlyData: dateToHourlyDataMap,
        overallRisk: sampleJson.overallRisk,
        tempRisk: sampleJson.tempRisk,
        pressureRisk: sampleJson.pressureRisk,
        humidityRisk: sampleJson.humidityRisk,
        date: sampleJson.date,
        location: sampleJson.location,
    };
    return compiledForecasts;
}

const Forecast = () => {
    const [zipCode, setZipCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [forecast, setForecast] = useState<CompiledForecasts | null>(null); // [dailyForecastList, hourlyList

    const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setZipCode(event.target.value);
    }

    const handleZipCodeSubmit = async () => {
        console.log(zipCode)
        setZipCode("")
        //make api calls here
        //render loading screen
        setLoading(true)
        setTimeout(async () => {
            setLoading(false)
            //mock data
            const data = await mockRetrieveData();
            setForecast(data);
        }, 1000)
    }

    return (

        <main className={"flex flex-col mt-12"}>
            {loading && <LoadingScreen/>}
            {(forecast == null) &&
                <>

                    {(forecast == null && !loading) &&
                        <SearchInput handleZipCodeChange={handleZipCodeChange}
                                     handleZipCodeSubmit={handleZipCodeSubmit}/>
                    }
                </>
            }
            {(forecast != null && forecast.dateToHourlyData != null) &&
                <div className={"flex flex-col gap-20 px-4"}>
                    <Overview compiledForecasts={forecast}/>
                    <ForecastGraphSection compiledForecasts={forecast}/>
                </div>

            }
        </main>
    )
}

export default Forecast;