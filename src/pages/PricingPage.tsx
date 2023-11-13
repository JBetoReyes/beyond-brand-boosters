import CompareTable, { ComparableTableColumn, CompareTableRow } from "../components/organisms/CompareTable";
import PricingTable, { PricingTableProps } from "../components/organisms/PricingTable";

type ColumnsNames = "Basic" | "Standard" | "Premium";

const PricingPage = () => {
    const pricingTable: PricingTableProps = {
        cards: [{
            type: "Basic",
            price: 199,
            description: "Ideal for startups",
            features: [
                "Up to 8 pieces of content per month",
                "Basic ad campaign",
                "Basic social media presence",
                "Monthly reports and insights",
            ]
        }, {
            type: "Standard",
            price: 399,
            description: "Ideal for growing businesses",
            features: [
                "Up to 16 pieces of content per month",
                "Standard ad campaign",
                "Standard social media presence",
                "Monthly reports and insights",
                "Brand analysis"
            ]
        }, {
            type: "Premium",
            price: 999,
            description: "Ideal for large campaigns",
            features: [
                "Up to 32 pieces of content per month",
                "Premium ad campaign",
                "Premium social media presence",
                "Monthly reports and insights",
                "Brand analysis",
                "Influencer marketing"
            ]
        }]
    };
    const compareTableColumns: ComparableTableColumn<ColumnsNames>[] = [{
        columnTitle: "Basic",
        price: 199,
    }, {
        columnTitle: "Standard",
        price: 399,
    }, {
        columnTitle: "Premium",
        price: 999,
    }];

    const compareTableRows: CompareTableRow<ColumnsNames>[] = [{
        rowTitle: "30-day free trial",
        rowData: {
            Basic: true,
            Standard: true,
            Premium: true,
        }
    }, {
        rowTitle: "Chat support 24/7",
        rowData: {
            Basic: true,
            Standard: true,
            Premium: true,
        }
    }, {
        rowTitle: "Multiple team members",
        rowData: {
            Basic: false,
            Standard: true,
            Premium: true,
        }
    }, {
        rowTitle: "Brand Analysis",
        rowData: {
            Basic: false,
            Standard: true,
            Premium: true,
        }
    }, {
        rowTitle: "Influencer Marketing",
        rowData: {
            Basic: false,
            Standard: false,
            Premium: true,
        }
    }];
    return (
        <main className="pricing-page">
            <section className="section-pricing | section">
                <div className="container" data-type="wide">
                    <div className="section-pricing__layout | flow" style={{ "--flow-spacer": "3.75rem" } as React.CSSProperties}>
                        <h1 className="heading-1 | text-center">Flexible Plans</h1>
                        <PricingTable cards={pricingTable.cards} />
                    </div>
                </div>
            </section>
            <section className="section-compare-table | section">
                <div className="container" data-type="wide">
                    <CompareTable
                        title="Compare Plans"
                        columns={compareTableColumns}
                        dataRows={compareTableRows}
                        style={{ "--compare-table-columns": compareTableColumns.length + 1 } as React.CSSProperties}
                    />
                </div>
            </section>
        </main>
    )
}

export default PricingPage;