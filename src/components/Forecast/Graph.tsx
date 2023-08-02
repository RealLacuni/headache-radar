import {useState} from "react";

const features = ["overview", "temperature", "pressure", "humidity"];

const Graph = (props: GraphComponentProps) => {

    //TODO:complete this

    const [feature, setFeature] = useState(features[1]); //temp, pressure, humidity

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
            </data>
        </div>
    )
}

type GraphComponentProps = {
    graphData: GraphData,
    date: string,
}

export default Graph;