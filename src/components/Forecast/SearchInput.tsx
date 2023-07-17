import classNameProps from "../../types/classNameProps";
import Input from "../Input.tsx";
import Card from "../Card.tsx";

type SearchInputProps = classNameProps & {
    handleZipCodeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleZipCodeSubmit: () => void;
}

const SearchInput = (props : SearchInputProps) => {
    return (

            <Card className={"flex flex-col lg:w-[50%] self-center h-72 items-center justify-center gap-4 bg-slate-800 rounded-xl mt-20"}>
                <p className={"text-gray-300 text-lg"}>Start by entering your Zip Code:</p>
                <Input label={"Zip Code"} placeholder={"90210"} onChange={props.handleZipCodeChange} className={"grow-0 w-60"}/>
                <button type={"button"} onClick={props.handleZipCodeSubmit} value={"Search"}
                        className={"grow-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}> Search
                </button>

            </Card>
    )
}

export default SearchInput;