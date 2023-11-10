import "../sass/pages/about-us/index.scss";

const AboutUsPage = () => {
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
        </main>
    );
}

export default AboutUsPage;