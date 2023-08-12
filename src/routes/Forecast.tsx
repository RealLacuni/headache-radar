import Overview from "../components/Overview.tsx";
import React, {useState} from "react";
import LoadingScreen from "../components/LoadingScreen.tsx";
import SearchInput from "../components/Forecast/SearchInput.tsx";
import ForecastGraphSection from "../components/Forecast/ForecastGraphSection.tsx";
import {useGetCurrentForecastQuery} from "../features/api/APISlice.ts";

// import * as sampleJson from "../assets/forecastJSON.json";

// const mockRetrieveData = () => {
//     const dateToHourlyDataMap: Map<string, HourlyData[]> = new Map(Object.entries(sampleJson.dateToHourlyData));
//     //convert the raw times in hourly data list to Date objects and then to local hour
//     dateToHourlyDataMap.forEach((hourlyDataList: HourlyData[]) => {
//         hourlyDataList.forEach((hourlyData: HourlyData) => {
//             hourlyData.time = String(new Date(hourlyData.time).getHours());
//         });
//     });
// // Create the CompiledForecasts object with the correct types
// const compiledForecasts: CompiledForecasts = {
//     dailyForecastList: sampleJson.dailyForecastList,
//     dateToHourlyData: dateToHourlyDataMap,
//     overallRisk: sampleJson.overallRisk,
//     tempRisk: sampleJson.tempRisk,
//     pressureRisk: sampleJson.pressureRisk,
//     humidityRisk: sampleJson.humidityRisk,
//     date: sampleJson.date,
//     location: sampleJson.location,
// };
// return compiledForecasts;
// }


const Forecast = () => {
    const [zipCode, setZipCode] = useState("");
    const [submittedZipCode, setSubmittedZipCode] = useState("");
    const params = {location: zipCode, date: getDateFormatted(Date.now())}
    const {data, isError, isLoading} = useGetCurrentForecastQuery(params, {
        skip: submittedZipCode === "",
    });

    const refs : Refs = {
        humidityRef: React.createRef(),
        pressureRef: React.createRef(),
        temperatureRef: React.createRef(),
    }

    const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setZipCode(event.target.value);
    }

    const handleZipCodeSubmit = async () => {
        setSubmittedZipCode(zipCode);
    }

    if (isError) return <div>An error has occurred!</div>

    return (

        <main className={"flex flex-col mt-12"}>
            {isLoading && <LoadingScreen/>}
            {(data == null) &&
                <>

                    {(!isLoading) &&
                        <SearchInput handleZipCodeChange={handleZipCodeChange}
                                     handleZipCodeSubmit={handleZipCodeSubmit}
                                        disabled={zipCode.length != 5}/>
                    }
                </>
            }
            {(data != null && data.dateToHourlyData != null) &&
                <div className={"flex flex-col gap-20"}>
                    <Overview compiledForecasts={data} refs={refs}/>
                    <ForecastGraphSection compiledForecasts={data} refs={refs}/>
                </div>

            }
        </main>
    )
}

function getDateFormatted(dateNum: number) {
    const date = new Date(dateNum);

    const year = date.getFullYear();

    // Months in JavaScript are 0-indexed, so January is 0 and December is 11.
    // By adding 1, you get the actual month number, but make sure it's two digits with `String().padStart()`.
    const month = (date.getMonth() + 1).toString().padStart(2, '0');

    // Similarly, ensure the day of the month is two digits.
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export default Forecast;