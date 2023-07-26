
type TabsProps = {
    tabs : TabItem[],
    setSelectedTab: (tab: TabItem) => void
}
type TabItem =         {
    name: string,
    href: string,
    current: boolean
}



 const Tabs = ({tabs} : TabsProps) => {

    // update the current tab when selection is changed



  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-white bg-gray-700 border-gray-600 focus:outline-none focus:ring-white focus:border-primary-800 sm:text-sm rounded-md"
          defaultValue={tabs.find((tab) => tab.current)?.name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-primary-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={`${tab.current? 'border-indigo-500 text-red-500' : 'border-transparent text-primary-100 hover:text-gray-200 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Tabs
