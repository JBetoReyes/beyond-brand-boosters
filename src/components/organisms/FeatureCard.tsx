export type FeatureCardProps = {
    title: string;
    content: string;
    url: string;
    backgroundImage: "book" | "advertising-icon" | "social-media-icon" | "analytics-icon";
    backgroundImagePosition: "left" | "bottom-right";
    backgroundColor: "accent" | "yellow" | "pink" | "cyan";
}

const FeatureCard = (props: FeatureCardProps) => {
    const { title, content, url, backgroundImage, backgroundImagePosition, backgroundColor } = props;
    const colors = {
        accent: {
            backgroundColor: "bg-brand-accent-100",
            linkTextColor: "clr-brand-accent-700",
        },
        yellow: {
            backgroundColor: "bg-yellow-300",
            linkTextColor: "clr-yellow-500",
        },
        pink: {
            backgroundColor: "bg-pink-300",
            linkTextColor: "clr-pink-500",
        },
        cyan: {
            backgroundColor: "bg-cyan-300",
            linkTextColor: "clr-cyan-500",
        }
    }
    const color = colors[backgroundColor];
    return (
        <div className={`card feature-card ${color.backgroundColor} ${backgroundImage}`} data-position={backgroundImagePosition}>
            <h3 className="feature-card__heading card__heading | heading-3">{title}</h3>
            <p className="feature-card__content">{content}</p>
            <div className="feature-card__footer">
                <a className={`${color.linkTextColor}`} href={url}>Try now</a>
            </div>
        </div>
    );
}

export default FeatureCard