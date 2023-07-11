import Input from "../components/Input.tsx";
import Overview from "../components/Overview.tsx";

const Forecast = () => {
    return (

        <div className={"flex flex-col"}>
            <Overview/>
            <div
                className={"flex flex-row mt-20 pb-16 pt-20 items-center justify-center gap-8 p-2 border-b border-gray-400"}>
                <p className={"text-secondary-200 text-lg"}>Search by entering your Zip Code:</p>
                <Input/>
            </div>
        </div>
    )
}

export default Forecast;