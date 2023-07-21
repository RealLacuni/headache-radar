type DailyForecast = {
    id: number;
    date: string;
    location: string;

    averageTemperature: number;
    averagePressure: number;
    averageHumidity: number;
}

type HourlyData = {
id: number;
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
type ParsedForecast = {
    dayMap: Map<string, CombinedForecast>;
    overallRisk: number;
    tempRisk: number;
    pressureRisk: number;
    humidityRisk: number;
    date: string;
    location: string;
}
type CombinedForecast = {
    dailyForecast: DailyForecast;
    hourlyDataList: HourlyData[];
}
