export type TestimonialCardProps = {
    rating: number;
    testimonial: string;
    image: string;
    name: string;
    role: string;
    company: string;
};

const TestimonialCard = ({ rating, testimonial, image, name, role, company }: TestimonialCardProps) => {
    return (
        <div className="testimonial-card | switcher" style={{ "--switcher-basis": "49.75rem" } as React.CSSProperties}>
            <div className="testimonial-card__content | flow" style={{ "--flow-spacer": "2rem" } as React.CSSProperties}>
                <p className="clr-neutral-400">Testimonial</p>
                <div className="rating-stars" style={{ "--rating-star-value": rating } as React.CSSProperties} />
                <blockquote className="testimonial-card__quote | fs-500 fw-regular clr-neutral-700 margin-block-start-400">{testimonial}</blockquote>
                <div className="testimonial-card__personal-info | fs-300">
                    <p className="testimonial-card__name | fw-bold">{name}</p>
                    <p className="testimonial-card__role-company">
                        <span className="testimonial-card__role">{role}</span>, <span className="testimonial-card__company">{company}</span>
                    </p>
                </div>
            </div>
            <div className="testimonial-card__image-container">
                <img className="testimonial-card__image | round-but-left-bottom" src={image} alt="A girl in red smiling" />
            </div>
        </div>
    );
};

export default TestimonialCard;