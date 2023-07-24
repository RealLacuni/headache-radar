import Card from "../Card.tsx";
import {Link} from "react-router-dom";
import classNameProps from "../../types/classNameProps";


const FeatureList = (props : classNameProps) => {
    return (
        <div
            className={`flex flex-col items-center gap-8 lg:gap-12 text-gray-300 lg:text-xl lg:flex-row ${props.className}`}>
            <Card className={`mb-2 w-64 h-64 hover:bg-secondary-100 hover:bg-opacity-20`}>
                <h3 className={"text-white font-bold text-xl pt-2"}>Up to 5 days of forecasts</h3>

                <p className={"text-gray-400 text-lg"}>Check the upcoming weather forecasts with up to five days of
                weather data.</p>
            </Card>
            <Card className={"mb-2 w-64 h-64 hover:bg-secondary-100 hover:bg-opacity-20"}>
                <h3 className={"text-white font-bold text-xl"}>Save forecasts for later</h3>
                <p className={"text-gray-400 text-lg"}>Save forecasts to your account to view again in the future. <Link to={"/signup"}
                                                                            className={"text-gray-400 underline underline-offset-4 hover:text-secondary-300 hover:opacity-70"}>(account
                    required)</Link>.</p>
            </Card>
            <Card className={"mb-2 w-64 h-64 hover:bg-secondary-100 hover:bg-opacity-20"}>
                <h3 className={"text-white font-bold text-xl"}>Save forecasts</h3>

                <p className={"text-gray-400 text-lg"}>Check historical forecasts for dates in the past <span
                    className={"text-red-300"}>(coming soon).</span>
                </p>
            </Card>
        </div>

    )
}

export default FeatureList;