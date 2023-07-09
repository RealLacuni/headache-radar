


const Input = () => {

  return (
      <div className="border bg-gray-600 border-gray-400 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-secondary-600 focus-within:border-secondary-600">
          <label htmlFor="zip-code" className="block text-sm font-medium text-gray-400 invalid:text-red-500">
              Zip Code
          </label>
          <input
              type="text"
              pattern={"[0-9]{5}"}
              name="zip-code"
              id="zip-code"
              className="block bg-gray-600 outline-none border-0 p-0 text-gray-200 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="90210"
          />
      </div>
  )

}

export default Input;