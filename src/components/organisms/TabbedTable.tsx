import { useState } from "react";
import Tab from "./Tab";

export type TabbedTableTab = {
    label: string;
    content: string;
}

export type TabbedTableProps = {
    tabs: TabbedTableTab[];
};

const TabbedTable = ({ tabs = [] }: TabbedTableProps) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="switcher">
            <div className="tabbed-table | flow">
                <h2 className="heading-2 clr-neutral-000">Feature benefits</h2>
                <ul className="tabbed-table__tabs">
                    {tabs.map(({ label }, index) => (
                        <Tab key={label} label={label} isActive={index === activeTab} onClick={() => setActiveTab(index)} />
                    ))}
                </ul>
            </div>
            <div className="tabbed-table__content | vertical-centered">
                <p>{tabs[activeTab].content}</p>
            </div>
        </div>
    );
};

export default TabbedTable;