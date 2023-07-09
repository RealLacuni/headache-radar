import Input from "../components/Input.tsx";

const Forecast = () => {
    return (
        <>
            <div className={"flex flex-row mt-20 pb-16 pt-20 items-center justify-center gap-8 p-2 border-b border-gray-400"}>
                <p className={"text-secondary-200 text-lg"}>Search by entering your Zip Code:</p>
                <Input/>
            </div>
        </>
    )
}

export default Forecast;