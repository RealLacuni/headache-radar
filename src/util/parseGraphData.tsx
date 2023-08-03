
const parseGraphData = ({compiledForecasts}: { compiledForecasts: CompiledForecasts }) => {
    const dateToHourlyData = compiledForecasts.dateToHourlyData;

    const tempRiskGraphData = convertToGraphData(dateToHourlyData, "temperature", "hsl(0, 100%, 50%)");
    const pressureRiskGraphData = convertToGraphData(dateToHourlyData, "pressure", "hsl(120, 100%, 50%)");
    const humidityRiskGraphData = convertToGraphData(dateToHourlyData, "humidity", "hsl(240, 100%, 50%)");

    return [tempRiskGraphData, pressureRiskGraphData, humidityRiskGraphData];
}

function convertToGraphData(dateToHourlyData:  Map<string, HourlyData[]>, feature: keyof HourlyData, color: string): Map<string, FeatureGraphData > {
     const res = new Map<string, FeatureGraphData>();

    const dates = Array.from(dateToHourlyData.keys());
    for (const date of dates) {
        const data = [];
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
        res.set(date,{
            id: feature,
            color: color,
            data: data,
        } as FeatureGraphData);
    }
    return res;
}

export default parseGraphData;