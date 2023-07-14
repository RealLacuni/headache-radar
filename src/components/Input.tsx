import React from "react";

type InputProps = {
    label: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {

  return (
      <div className="border w-56 bg-gray-600 border-gray-400 rounded px-3 py-1 shadow-sm focus-within:ring-1 focus-within:ring-secondary-600 focus-within:border-secondary-600">
          <label htmlFor="zip-code" className="block text-xs font-medium text-gray-100 invalid:text-red-500">
              {props.label}
          </label>
          <input
              type="text"
              pattern={"[0-9]{5}"}
              name={props.label}
              id={props.label}
              className="block bg-gray-600 outline-none border-0 p-0 text-gray-200 placeholder-gray-400 focus:ring-0 sm:text-sm"
              placeholder={props.placeholder}
                onChange={props.onChange}
          />
      </div>
  )

}

export default Input;