/* This example requires Tailwind CSS v2.0+ */
import {CheckIcon, ExclamationCircleIcon} from '@heroicons/react/24/solid'
import {temperatureIcon, humidityIcon, pressureIcon} from '../assets/svg/Icons'
import ErrorPage from "./ErrorPage.tsx";
import React from "react";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type OverViewProps = {
    compiledForecasts: NormalizedForecastData;
    refs: Refs;
}

const Overview = (props : OverViewProps) => {
    const compliedForecasts = props.compiledForecasts;
    if (compliedForecasts == null || compliedForecasts.dateToHourlyData == null) {
        console.log("Error: Compiled Forecasts is null")
        return <ErrorPage/>;
    }
    const stats = [
        {id: 1, name : "Temperature", stat : compliedForecasts.dailyForecastList[0].averageTemperature.toFixed(2), icon : temperatureIcon, risk: compliedForecasts.tempRisk},
        {id: 2, name : "Humidity", stat : compliedForecasts.dailyForecastList[0].averageHumidity.toFixed(2), icon : humidityIcon, risk: compliedForecasts.humidityRisk},
        {id: 3, name : "Pressure", stat : compliedForecasts.dailyForecastList[0].averagePressure.toFixed(2), icon : pressureIcon, risk: compliedForecasts.pressureRisk},
        ]
    return (
        <div className={"flex flex-col gap-6 px-2"}>
            <h3 className="leading-8 font-semibold text-2xl text-primary-100 border-b pb-2 tracking-normal">Weekly Overview</h3>
            <dl className="mt-5 grid gap-5 grid-cols-1 lg:grid-cols-4">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-gray-600 pt-2.5 px-2 pb-12 sm:pt-3 sm:px-3 shadow rounded-lg overflow-hidden"
                    >

                        <dt>
                            <div className="absolute mt-1 bg-primary-500 rounded-md p-3 lg:p-3">
                                <item.icon className="h-4 w-4 text-white" aria-hidden="true" />
                            </div>
                            <p className="ml-12 text-sm font-medium text-gray-200 truncate">{item.name}</p>
                        </dt>
                        <dd className="ml-12 pb-4 flex items-baseline sm:pb-7">
                            <p className="sm:text-md text-xl font-semibold text-gray-100">{item.stat}</p>
                            <p
                                className={classNames(
                                    item.risk == 0 ? 'text-green-600' : 'text-red-600',
                                    'ml-2 flex items-baseline text-sm font-semibold'
                                )}
                            >
                                {item.risk === 0 ? (
                                    <CheckIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                                                      aria-hidden="true"/>
                                ) : (
                                    <ExclamationCircleIcon className="self-center flex-shrink-0 h-5 w-5"
                                                        aria-hidden="true"/>
                                )}

                            </p>
                            <div className="absolute bottom-0 inset-x-0 bg-gray-800 px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-200 hover:text-indigo-500"    onClick={(e) => {
                                        e.preventDefault(); // To prevent the default behavior of the anchor tag
                                        console.log(`${item.name.toLowerCase()}Ref`)
                                        console.log(props.refs)
                                        scrollToRef(props.refs["humidityRef"]);
                                    }}>
                                        {' '}
                                        View graph<span className="sr-only"> {item.name} stats</span>
                                    </a>
                                </div>
                            </div>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}

const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref == null || ref.current == null) {
        console.log("Error: ref is null")
        return;
    }
    ref.current.scrollIntoView({behavior: 'smooth'});
}


export default Overview;
