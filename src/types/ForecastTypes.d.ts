type DailyForecast = {
    date: string;
    location: string;

    averageTemperature: number;
    averagePressure: number;
    averageHumidity: number;
}

type HourlyData = {
temperature: number;
pressure: number;
humidity: number;
duration: number;
time: string;
}

type normalizedDateToHourlyData = {
    date: string;
    hourlyData: HourlyData[];

}

type RawForecastData = {
    dailyForecastList: DailyForecast[];
    dateToHourlyData: Map<string, HourlyData[]>;
    overallRisk: number;
    tempRisk: number;
    pressureRisk: number;
    humidityRisk: number;
    date: string;
    location: string;
}

type NormalizedForecastData = {
    dailyForecastList: DailyForecast[];
    dateToHourlyData: normalizedDateToHourlyData[];
    overallRisk: number;
    tempRisk: number;
    pressureRisk: number;
    humidityRisk: number;
    date: string;
    location: string;
}

type FeatureGraphData = {
    id: string;
    color: string;
    data: {
        x: string;
        y: number;
    }[];
}
type GraphData = featureGraphData[]