
const parseGraphData = ({compiledForecasts}: { compiledForecasts: CompiledForecasts }) => {
    const dateToHourlyData = compiledForecasts.dateToHourlyData;

    const tempRiskGraphData = convertToGraphData(dateToHourlyData, "temperature", "#FF0000");
    const pressureRiskGraphData = convertToGraphData(dateToHourlyData, "pressure", "#00FF00");
    const humidityRiskGraphData = convertToGraphData(dateToHourlyData, "humidity", "#0000FF");

    return [tempRiskGraphData, pressureRiskGraphData, humidityRiskGraphData];
}

function convertToGraphData(dateToHourlyData:  Map<string, HourlyData[]>, feature: keyof HourlyData, color: string): FeatureGraphData {
    const data = [];

    const dates = Array.from(dateToHourlyData.keys());
    for (const date of dates) {
        const hourlyDataList = dateToHourlyData.get(date);
        if (hourlyDataList == null) {
            continue;
        }
        hourlyDataList.sort((a, b) => Number(a.time).valueOf() - Number(b.time).valueOf());
        for (const hourlyData of hourlyDataList) {

            data.push({
                x: hourlyData.time,
                y: hourlyData[feature]
            });
        }
    }
    return {
        id: feature,
        color: color,
        data: data,
    } as FeatureGraphData;
}

export default parseGraphData;