import PricingCard, { PricingCardProps } from "./PricingCard";

export type PricingTableProps = {
    cards: PricingCardProps[];
};

const PricingTable = ({ cards }: PricingTableProps) => {
    return (
        <div className="pricing-table">
            <div className="pricing-table__card-list | grid-auto-fit" style={{ "--grid-auto-fit-min": "19.6875rem" } as React.CSSProperties}>
                {cards.map((card) => {
                    return (
                        <PricingCard
                            key={card.type}
                            type={card.type}
                            price={card.price}
                            description={card.description}
                            features={card.features}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default PricingTable;