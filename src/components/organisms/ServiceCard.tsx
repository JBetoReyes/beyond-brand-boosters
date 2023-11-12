export type ServiceCardProps = {
    iconClass: "text-icon" | "speech-icon" | "graph-icon" | "arrows-icon";
    title: string;
    content: string;
};

const ServiceCard = ({ iconClass, title, content }: ServiceCardProps) => {
    return (
        <div className="service-card | flow" style={{ "--flow-spacer": "0.625rem" } as React.CSSProperties}>
            <div className={`service-card__image ${iconClass}`} />
            <h3 className="heading-3">{title}</h3>
            <p className="fs-300">{content}</p>
        </div>
    );
}

export default ServiceCard;
