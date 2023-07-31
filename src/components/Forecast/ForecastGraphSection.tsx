import {useState} from "react";
import Tabs from "../Tabs.tsx";
import Card from "../Card.tsx";
import Graph from "./Graph.tsx";


const ForecastGraphSection = ({compiledForecasts}: { compiledForecasts: CompiledForecasts }) => {

    const tabs = compiledForecasts.dailyForecastList.map((dailyForecast) => {
        return {
            name: dailyForecast.date,
            href: "#"
        }
    })

    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <section className={"flex flex-col gap-6"}>
            <Card>
                <Tabs tabs={tabs} setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
                <div>{selectedTab.name}</div>
                {compiledForecasts.dateToHourlyData &&
                    <Graph date={selectedTab.name} dateToHourlyData={compiledForecasts.dateToHourlyData}/>
                }
            </Card>
        </section>
    )
}



export default ForecastGraphSection;
