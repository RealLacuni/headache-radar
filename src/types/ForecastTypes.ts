type dailyForecast = {
    id: number;
    date: string;
    location: string;

    averageTemperature: number;
    averagePressure: number;
    averageHumidity: number;
}

type hourlyData = {
id: number;
date: string;
forecastId : number;
temperature: number;
pressure: number;
humidity: number;
duration: number;
time: string;
}

type FullForecast = {
    dailyForecast: dailyForecast | null;
    hourlyData: hourlyData[];
}
