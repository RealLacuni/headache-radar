import {useState} from "react";
import {ResponsiveLine} from "@nivo/line";

const features = ["overview", "temperature", "pressure", "humidity"];

const Graph = (props: GraphComponentProps) => {
    const [feature, setFeature] = useState(features[1]); //temp, pressure, humidity
    console.log(props.date, feature)
    console.log(props.dateToHourlyData[props.date][feature])
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-row gap-4"}>
                {features.map((featureName) => {
                    return (
                        <button
                            className={`rounded-md px-2 py-1 font-normal ${feature == featureName ? `text-primary-400 bg-gray-900 shadow-lg` : `bg-gray-800`} `}
                            onClick={() => setFeature(featureName)}>{featureName && featureName[0].toUpperCase() + featureName.slice(1)}</button>
                    )
                })}
            </div>
            <data>
                {feature == "overview" && <div>Overview</div>}
                {ResponsiveLineGraph(props.dateToHourlyData[props.date][feature])
                }
            </data>
        </div>

    )
}

const ResponsiveLineGraph = ({data}: HourlyData[]) => {

    return (
        <ResponsiveLine
            data={data}
            margin={{top: 50, right: 110, bottom: 50, left: 60}}
            xScale={{type: 'point'}}
            yScale={{type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false}}
            yFormat=" >-.2f"
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{theme: 'background'}}
            pointBorderWidth={2}
            pointBorderColor={{from: 'serieColor'}}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}/>
    )
}

type GraphComponentProps = {
    dateToHourlyData: Map<string, HourlyData[]>,
    date: string
}

export default Graph;