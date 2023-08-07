import {useState} from "react";
import {ResponsiveLine} from "@nivo/line";

const features = ["overview", "temperature", "pressure", "humidity"];

const Graph = (props: GraphComponentProps) => {
    console.log(props.graphData)

    const [feature, setFeature] = useState(features[0]); //temp, pressure, humidity
    const graphData = props.graphData.map((d) => d.get(props.date))

    return (
        <>

            <div className={"flex flex-col gap-4"}>
                <div className={"flex flex-col lg:flex-row gap-4 p-2 lg:self-center bg-slate-500 rounded"}>
                    {/*TODO: Turn these buttons into a prettier component. Looks ugly on desktop now, sad*/}
                    {features.map((featureName) => {
                        return (
                            <button key={featureName}
                                    className={`rounded-md px-2 py-1 border${feature == featureName ? `text-primary-400 bg-primary-700 border-primary-300 shadow-lg` : `text-gray-200 border-gray-400 bg-gray-800 `} `}
                                    onClick={() => setFeature(featureName)}>{featureName && featureName[0].toUpperCase() + featureName.slice(1)}</button>
                        )
                    })}
                </div>
            </div>

            <div className={"border-4 border-gray-900 bg-primary-800 mt-10 flex-none w-100 overflow-x-scroll lg:overflow-hidden -mx-6"}>
                <div className={"h-96 w-[50rem]"}>
                    <ResponsiveLineGraph data={graphData as GraphData} feature={feature}/>
                </div>
            </div>
        </>
    )
}

const ResponsiveLineGraph = (props: ResponseLineGraphProps) => {
    let data = props.data;
    const feature = props.feature;
    if (["temperature", "pressure", "humidity"].includes(feature)) {
        data = data.filter((d) => d.id == feature)
    }
    return (
        <ResponsiveLine
            data={data}
            margin={{top: 50, right: 110, bottom: 50, left: 60}}
            xScale={{type: 'point'}}
            yScale={{
                type: 'linear',
                min: feature == "overview" ? 0 : 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Hour',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: `${feature[0].toUpperCase() + feature.slice(1)}`,
                legendOffset: -50,
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
            ]}
            theme={{
                background: '#1A3267',
                axis: {
                    ticks: {
                        line: {
                            stroke: '#777777'
                        },
                        text: {
                            fill: '#eeeeee'
                        }
                    },
                    legend: {
                        text: {
                            fill: '#eeeeee'
                        }
                    }
                },
                grid: {
                    line: {
                        stroke: '#555555'
                    }
                },
                textColor: '#eeeeee',
            }}/>
    )
}

type GraphComponentProps = {
    graphData: GraphData,
    date: string,
}

type ResponseLineGraphProps = {
    data: GraphData,
    feature: string,
}

export default Graph;