


const Input = () => {

  return (
      <div className="border bg-slate-200 border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-secondary-600 focus-within:border-secondary-600">
          <label htmlFor="zip-code" className="block text-xs font-medium text-gray-900">
              Zip Code
          </label>
          <input
              type="number"
              name="zip-code"
              id="zip-code"
              className="block bg-slate-200 outline-none w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="90210"
          />
      </div>
  )

}

export default Input;