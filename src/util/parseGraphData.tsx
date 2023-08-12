
const parseGraphData = ({compiledForecasts}: { compiledForecasts: NormalizedForecastData }) => {
    // const dateToHourlyData = compiledForecasts.dateToHourlyData;
    const dateToHourlyData = compiledForecasts.dateToHourlyData;

    const tempRiskGraphData = convertToGraphData(dateToHourlyData, "temperature", "hsl(0, 100%, 50%)");
    const pressureRiskGraphData = convertToGraphData(dateToHourlyData, "pressure", "hsl(120, 100%, 50%)");
    const humidityRiskGraphData = convertToGraphData(dateToHourlyData, "humidity", "hsl(240, 100%, 50%)");
    return [tempRiskGraphData, pressureRiskGraphData, humidityRiskGraphData];
}

function convertToGraphData(dateToHourlyData: NormalizedDateToHourlyData[], feature: keyof HourlyData, color: string): Map<string, FeatureGraphData > {
     const res = new Map<string, FeatureGraphData>();
        dateToHourlyData.forEach((normalizedDateToHourlyData: NormalizedDateToHourlyData) => {
            const date = normalizedDateToHourlyData.date;
            const hourlyDataList = [...normalizedDateToHourlyData.hourlyData];
            hourlyDataList.sort((a, b) => {
                const dateA = new Date(`1970-01-01 ${a.time}`);
                const dateB = new Date(`1970-01-01 ${b.time}`);
                return dateA.getTime() - dateB.getTime();
            });
            const featureDataList = hourlyDataList.map((hourlyData: HourlyData) => {
                //convert to am/pm
                const timeStr = new Date(hourlyData.time).getUTCHours().toString();
                return {
                    x: timeStr,
                    y: hourlyData[feature] as number,
                }
            });

            res.set(date, {
                id: feature,
                color: color,
                data: featureDataList,
            });
        });
        return res;
}

export default parseGraphData;