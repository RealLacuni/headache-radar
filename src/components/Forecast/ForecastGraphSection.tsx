import {useState} from "react";
import Tabs from "../Tabs.tsx";
import Card from "../Card.tsx";
import Graph from "./Graph.tsx";
import parseGraphData from "../../util/parseGraphData.tsx";

const ForecastGraphSection = ({compiledForecasts}: { compiledForecasts: NormalizedForecastData }) => {

    //get all the dates from the dateToHourlyData map keys
    const dates = compiledForecasts.dateToHourlyData.map((normalized => normalized.date));
    const tabs = dates.map(date => ({
        name: date,
        href: '#'
    }));
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const graphData = parseGraphData({compiledForecasts: compiledForecasts})

    return (
        <section className={"flex flex-col gap-6 mb-20 px-2"}>
            <Card className={"rounded-xl"}>
                <Tabs tabs={tabs} setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
                {compiledForecasts.dateToHourlyData &&
                    <Graph date={selectedTab.name} graphData={graphData}/>
                }
            </Card>
        </section>
    )
}



export default ForecastGraphSection;
