import Tabs from "../Tabs.tsx";
import {useState} from "react";


const ForecastGraphSection = ({compiledForecasts}: { compiledForecasts: CompiledForecasts }) => {

    const tabs = compiledForecasts.dailyForecastList.map((dailyForecast) => {
        return {
            name: formatDate(dailyForecast.date),
            href: "#",
            current: false
        }
    })
    tabs[0].current = true;

    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <section className={"flex flex-col gap-6"}>
            <h3 className="leading-8 font-semibold text-2xl text-primary-100 border-b pb-2">Graphs</h3>
            <Tabs tabs={tabs} setSelectedTab={setSelectedTab}/>
            <div>{selectedTab.name}</div>
        </section>
    )
}

function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export default ForecastGraphSection;
