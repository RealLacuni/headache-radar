import Input from "../components/Input.tsx";

const Forecast = () => {
    return (
        <div className={"flex flex-col gap-8 justify-center h-64 px-4"}>
            <h1>Search by entering your Zip Code:</h1>
            <Input/>
        </div>
    )
}

export default Forecast;