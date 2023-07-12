/* This example requires Tailwind CSS v2.0+ */
import {ArrowSmallDownIcon, ArrowSmallUpIcon} from '@heroicons/react/24/solid'
import {temperatureIcon, humidityIcon, pressureIcon} from '../assets/svg/Icons'

const stats = [
    {id: 1, name: 'Temperature', stat: '71,897', icon: temperatureIcon, change: '122', changeType: 'increase'},
    {id: 3, name: 'Pressure', stat: '24.57%', icon: pressureIcon, change: '3.2%', changeType: 'decrease'},
    {id: 2, name: 'Humidity', stat: '58.16%', icon: humidityIcon, change: '5.4%', changeType: 'increase'},
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Overview = () => {
    return (
        <div className={"px-4"}>
            <h3 className="leading-8 font-semibold text-3xl text-primary-100">Overview</h3>

            <dl className="mt-5 grid gap-5 grid-cols-2 lg:grid-cols-3">
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
                            <p className="text-2xl font-semibold text-gray-100">{item.stat}</p>
                            <p
                                className={classNames(
                                    item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                                    'ml-2 flex items-baseline text-sm font-semibold'
                                )}
                            >
                                {item.changeType === 'increase' ? (
                                    <ArrowSmallUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                                                      aria-hidden="true"/>
                                ) : (
                                    <ArrowSmallDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                                                        aria-hidden="true"/>
                                )}

                                <span
                                    className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                                {item.change}
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
