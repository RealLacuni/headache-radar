import Overview from "../components/Overview.tsx";
import React, {useState} from "react";
import LoadingScreen from "../components/LoadingScreen.tsx";
import SearchInput from "../components/Forecast/SearchInput.tsx";
import * as sampleJson from "../assets/forecastJSON.json";

const mockRetrieveData = () => {
    return sampleJson as FullForecast;
}

const parseDataByDay = (data: FullForecast): ParsedForecast | null => {

    const dayMap = new Map<string, CombinedForecast>();

    if (data.hourlyDataList == null || data.dailyForecastList == null) {
        return null;
    }
    //extract days from the daily forecast list
    const days = data.dailyForecastList.map((dailyForecast) => {
        return dailyForecast.date;
    });
    console.log(days)
    //Filter hourly and daily data according to the days and save to map
    days.forEach((day) => {
        const dailyForecast = data.dailyForecastList?.find((dailyForecast) => {
            return dailyForecast.date === day;
        });
        const hourlyList = data.hourlyDataList?.filter((hourlyForecast) => {
            return hourlyForecast.time.substring(0, 10) === day;
        });
        if (dailyForecast != null && hourlyList != null) {
            const combined: CombinedForecast = {dailyForecast: dailyForecast, hourlyDataList: hourlyList};
            dayMap.set(day.toLocaleString(), combined);
        }
    });
    console.log(dayMap)
    const parsedForecast = {
        dayMap: dayMap,
        overallRisk: data.overallRisk,
        tempRisk: data.tempRisk,
        humidityRisk: data.humidityRisk,
        pressureRisk: data.pressureRisk,
        date: data.date,
        location: data.location
    }
    return parsedForecast;
}


const Forecast = () => {
    const [zipCode, setZipCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [forecast, setForecast] = useState<ParsedForecast | null>(null); // [dailyForecastList, hourlyList

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
            setForecast(parseDataByDay(data));
        }, 1000)
    }

    return (

        <main className={"flex flex-col"}>
            {loading && <LoadingScreen/>}
            {(forecast == null) &&
                <>

                    {(forecast == null && !loading) &&
                        <SearchInput handleZipCodeChange={handleZipCodeChange}
                                     handleZipCodeSubmit={handleZipCodeSubmit}/>
                    }
                </>
            }
            {(forecast != null) &&
                <>
                    <Overview parsedForecast={forecast}/>
                </>
            }
        </main>
    )
}

export default Forecast;