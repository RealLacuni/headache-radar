/* This example requires Tailwind CSS v2.0+ */
import {CheckIcon, ExclamationCircleIcon} from '@heroicons/react/24/solid'
import {temperatureIcon, humidityIcon, pressureIcon} from '../assets/svg/Icons'
import ErrorPage from "./ErrorPage.tsx";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type OverViewProps = {
    compiledForecasts: CompiledForecasts;
}

const Overview = (props : OverViewProps) => {
    const compliedForecasts = props.compiledForecasts;
    if (compliedForecasts == null || compliedForecasts.dateToHourlyData == null) {
        console.log("Error: Compiled Forecasts is null")
        return <ErrorPage/>;
    }
    const combinedForecastList = Array.from(compliedForecasts.dateToHourlyData.values());
    console.log(combinedForecastList)
    const stats = [
        {id: 1, name : "Temperature", stat : compliedForecasts.dailyForecastList[0].averageTemperature.toFixed(2), icon : temperatureIcon, risk: compliedForecasts.tempRisk},
        {id: 2, name : "Humidity", stat : compliedForecasts.dailyForecastList[0].averageHumidity.toFixed(2), icon : humidityIcon, risk: compliedForecasts.humidityRisk},
        {id: 3, name : "Pressure", stat : compliedForecasts.dailyForecastList[0].averagePressure.toFixed(2), icon : pressureIcon, risk: compliedForecasts.pressureRisk},
        ]
    return (
        <div className={"flex flex-col gap-6"}>
            <h3 className="leading-8 font-semibold text-2xl text-primary-100 border-b pb-2">Overview</h3>
            <dl className="mt-5 grid gap-5 grid-cols-1 lg:grid-cols-3">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-gray-600 pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                    >
                        <dt>
                            <div className="absolute bg-primary-500 rounded-md p-3">
                                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <p className="ml-16 text-sm font-medium text-gray-200 truncate">{item.name}</p>
                        </dt>
                        <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
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
                                    <a href="#" className="font-medium text-indigo-200 hover:text-indigo-500">
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

export default Overview;
