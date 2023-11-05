import DefaultLayout from "../components/templates/DefaultLayout";

const LandingPage = () => {
    return (
        <DefaultLayout>
            <section className="section section-hero">
                <div className="container">
                    <div className="switcher">
                        <div className="section-hero__content | flow">
                            <h1 className="heading-1">Welcome to <span className="clr-brand-accent-400">BrandBoosters</span></h1>
                            <p>Dedicated to boosting your brand’s visibility and success that uses the latest strategies & techniques to
                                help you reach your target audience and achieve your goals.</p>
                            <div className="section-hero__ctas | flex-group">
                                <a href="" className="button" data-type="primary">Join now</a>
                                <a href="" className="button">Learn more</a>
                            </div>
                        </div>
                        <div className="section-hero__image">
                            <img src="/images/group-on-computer.webp" alt="A group three people seeing a computer" className="hero-image | border-radius-2" />
                        </div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
}

export default LandingPage;