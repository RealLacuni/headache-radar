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

type FullForecast = {
    dailyForecastList: DailyForecast[] | null;
    hourlyDataList: HourlyData[] | null;
    overallRisk: number;
    tempRisk: number;
    pressureRisk: number;
    humidityRisk: number;
    date: string;
    location: string;
}
type CompiledForecasts = {
    dailyForecastList: DailyForecast[];
    dateToHourlyData: Map<string, HourlyData[]> | null;
    overallRisk: number;
    tempRisk: number;
    pressureRisk: number;
    humidityRisk: number;
    date: string;
    location: string;
}

