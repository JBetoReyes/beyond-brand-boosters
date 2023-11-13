import PricingTable, { PricingTableProps } from "../components/organisms/PricingTable";

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
    }
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
        </main>
    )
}

export default PricingPage;