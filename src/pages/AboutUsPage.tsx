import ServiceCard, { ServiceCardProps } from "../components/organisms/ServiceCard";
import TabbedTable, { TabbedTableTab } from "../components/organisms/TabbedTable";
import TestimonialCard from "../components/organisms/TestimonialCard";
import "../sass/pages/about-us/index.scss";

const AboutUsPage = () => {
    const tabs: TabbedTableTab[] = [
        {
            label: "Content Creation",
            content: "BrandBoosters content creation service is designed to help you engage with your audience and drive engagement. Our team of creatives produces high-quality content that resonates with your target audience and helps you stand out from the competition. By leveraging our content creation services, you can ensure that your brands message is communicated effectively and consistently across all channels."
        }, {
            label: "Targeted Advertising",
            content: "BrandBoosters targeted advertising service is designed to help you reach your target audience and drive engagement. Our team of experts will work with you to create a custom campaign that will reach your target audience and drive engagement. We will help you create a campaign that is tailored to your needs and budget."
        }, {
            label: "Social Media",
            content: "BrandBoosters social media management service is designed to help you manage your social media presence and drive engagement. Our team of experts will work with you to create a custom campaign that will reach your target audience and drive engagement. We will help you create a campaign that is tailored to your needs and budget."
        }, {
            label: "Analytics",
            content: "BrandBoosters analytics service is designed to help you measure the effectiveness of your marketing efforts. Our team of experts will work with you to create a custom campaign that will reach your target audience and drive engagement. We will help you create a campaign that is tailored to your needs and budget."
        }
    ];
    const serviceCards: ServiceCardProps[] = [{
        iconClass: "text-icon",
        title: "Content Creation",
        content: "High-quality content that resonates with your audience and drives engagement."
    }, {
        iconClass: "speech-icon",
        title: "Social Media",
        content: "Let us handle your social media presence and engage with your audience on a personal level."
    }, {
        iconClass: "arrows-icon",
        title: "Targeted Advertising",
        content: "Reach your ideal customers with precision through our targeted advertising campaigns."
    }, {
        iconClass: "graph-icon",
        title: "Analytics",
        content: "Stay on top of your campaigns performance with our detailed analytics and reporting."
    }];
    return (
        <main className="about-us-page">
            <section className="section section-hero">
                <div className="container" data-type="wide">
                    <div className="section-hero__layout | flow" style={{ "--flow-spacer": "3.75rem" } as React.CSSProperties}>
                        <h1 className="heading-1 | text-center">How we work</h1>
                        <div className="section-hero__image-container">
                            <img className="section-hero__image | border-radius-2" src="/beyond-brand-boosters/images/video-placeholder.webp" alt="A group of people having a good time" />
                            <a href="#" className="section-hero__image-button button border-radius-5" data-type="accent"> Watch the video</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-benefits | section bg-md-brand-primary-100">
                <div className="container" data-type="wide">
                    <div className="switcher flex-md-row-reverse" style={{ "--switcher-basis": "42rem" } as React.CSSProperties}>
                        <div className="section-benefits__layout | flow vertical-centered">
                            <h2 className="heading-2">
                                Benefits of working with us
                            </h2>
                            <p>BrandBoosters offers a range of features to help you achieve your marketing goals. Our targeted advertising, social media management, content creation, and advanced analytics and reporting services ensure that your marketing efforts are effective and efficient. With BrandBoosters, you can trust that your brand is in good hands.</p>
                        </div>
                        <div className="section-benefits__image-container">
                            <img className="section-benefits__image | round bg-brand-primary-200" src="/beyond-brand-boosters/images/phone-in-hand.webp" alt="A group of people working together" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section | section-benefits-features bg-brand-primary-700 clr-neutral-000">
                <div className="container" data-type="wide">
                    <TabbedTable tabs={tabs} />
                </div>
            </section>
            <section className="section | section-services">
                <div className="container | flow" data-type="narrow" style={{ "--flow-spacer": "4.125rem" } as React.CSSProperties}>
                    <h2 className="heading-2">What we can do for you</h2>
                    <div className="grid-auto-fit" style={{ "--grid-column-gap": "3.65625rem", "--grid-row-gap": "2.415rem" } as React.CSSProperties}>
                        {serviceCards.map(({ iconClass, title, content }) => {
                            return (
                                <ServiceCard key={iconClass} iconClass={iconClass} title={title} content={content} />
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="section | section-testimonial bg-brand-primary-100">
                <div className="container" data-type="narrow">
                    <TestimonialCard
                        rating={5}
                        testimonial="“BrandBoosters has been a game-changer for our marketing efforts. Their targeted advertising and social media management services have helped us reach our ideal customers and engage with our audience.“"
                        image="/beyond-brand-boosters/images/girl-smiling.webp"
                        name="Sarah Johnson"
                        role="Marketing Director"
                        company="GreenLeaf Publications"
                    />
                </div>
            </section>
        </main>
    );
}

export default AboutUsPage;