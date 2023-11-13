export type PricingCardProps = {
    type: "Basic" | "Standard" | "Premium";
    price: number;
    description: string;
    features: string[]
};

const PricingCard = ({ type, price, description, features }: PricingCardProps) => {
    return (
        <div className="pricing-card | flow bg-brand-primary-100 padding-6 text-center border-radius-2" style={{ "--flow-spacer": "0.625rem" } as React.CSSProperties}>
            <div className="pricing-card__type">{type}</div>
            <div className="pricing-card__price-container">
                <span className="pricing-card__price | fs-600 fw-bold ff-accent">${price}</span>/month
            </div>
            <div className="pricing-card__description | fs-300">{description}</div>
            <ul className="pricing-card__features | flow text-left padding-block-6 margin-0">
                {features.map((feature) => {
                    return (
                        <li className="pricing-card__item">
                            <svg className="pricing-card__checkmark | clr-brand-accent-400" viewBox="0 0 100 100">
                                <use xlinkHref="#checkmark"></use>
                            </svg>
                            {feature}
                        </li>
                    )
                })}
            </ul>
            <a href="" className="button | pricing-card__button" data-type="primary">Get started</a>
            <svg width="0" height="0" >
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="checkmark">
                    <path d="M23.2345 1.48034L20.9488 0.340088L11.1844 19.914L1.90563 15.2854L0.765381 17.5712L12.3299 23.3401L23.2345 1.48034Z" fill="currentColor" />
                </symbol>
            </svg>
        </div>
    );
};

export default PricingCard;