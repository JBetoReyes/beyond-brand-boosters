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
    const switcherCssProperties = {
        "--switcher-column-gap": "5.5625rem", "--switcher-row-gap": "3.5rem", "--switcher-basis": "52.5rem"
    } as React.CSSProperties
    return (
        <div className="switcher" style={switcherCssProperties as React.CSSProperties}>
            <div className="tabbed-table | flow" style={{ "--flow-spacer": "3.75rem" } as React.CSSProperties}>
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