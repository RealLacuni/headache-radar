import {ChangeEvent, FormEvent} from "react";

type TabsProps = {
    tabs: TabItem[],
    selectedTab: TabItem,
    setSelectedTab: (tab: TabItem) => void
}
type TabItem = {
    name: string,
    href: string
}


const Tabs = (props: TabsProps) => {

    // update the current tab when selection is changed
    const handleChange = (event: ChangeEvent<HTMLSelectElement> ) => {
        const selectedTabName = event.target.value;
        const selectedTab = props.tabs.find((tab) => tab.name === selectedTabName);

        if (selectedTab) {
            props.setSelectedTab(selectedTab);
        }
    };

    const handleClick = (selectedTab: TabItem) => (event: FormEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        props.setSelectedTab(selectedTab);
    };


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
                    defaultValue={props.selectedTab.name}
                    onChange={handleChange}
                >
                    {props.tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-900">
                    <nav className="-mb-px flex space-x-4" aria-label="Tabs">
                        {props.tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                onClick={handleClick(tab)}
                                className={`${props.selectedTab.name == tab.name ? 'border-secondary-200 text-secondary-200' : 'border-transparent text-primary-100 hover:text-gray-200 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                aria-current={props.selectedTab.name == tab.name ? 'page' : undefined}
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
