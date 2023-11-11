import TabbedTable, { TabbedTableTab } from "../components/organisms/TabbedTable";
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
    ]
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
                <div className="container">
                    <div className="switcher">
                        <TabbedTable tabs={tabs} />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AboutUsPage;