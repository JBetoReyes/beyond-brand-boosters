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
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AboutUsPage;