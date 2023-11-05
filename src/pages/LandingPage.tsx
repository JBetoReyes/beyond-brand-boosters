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
                            <img className="hero-image | border-radius-2" src="/images/group-on-computer.webp" alt="A group three people seeing a computer" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section about-us | bg-brand-primary-700 clr-neutral-000">
                <div className="container">
                    <div className="switcher">
                        <div className="about-us__content | flow">
                            <h2 className="heading-2 | clr-neutral-000">About Us</h2>
                            <p>BrandBoosters was founded with the mission of <span className="fw-bold">helping businesses of all sizes</span> achieve their marketing goals by working closely with each client to <span className="fw-bold">develop a customized strategy that delivers result</span> </p>
                            <div className="about-us__ctas">
                                <a href="" className="button" data-type="accent">Learn more about us</a>
                            </div>
                        </div>
                        <div className="about-us__image">
                            <img className="round-top | bg-brand-primary-200" src="/images/girl-on-phone.webp" alt="girl on phone" />
                        </div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
}

export default LandingPage;