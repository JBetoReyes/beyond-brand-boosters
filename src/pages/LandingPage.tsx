import { Link } from "@tanstack/react-router";
import FeatureCard, { FeatureCardProps } from "../components/organisms/FeatureCard";
import "../sass/pages/landing/index.scss";

const LandingPage = () => {
    const featureCards: FeatureCardProps[] = [{
        title: "Content Creation",
        content: "High-quality content that resonates with your audience and drives engagement.",
        url: "/",
        backgroundImage: "book",
        backgroundColor: "accent",
        backgroundImagePosition: "bottom-right"
    }, {
        title: "Targeted Advertising",
        content: "Reach your ideal customers with precision through our targeted advertising campaigns.",
        url: "/images/advertising-icon.svg",
        backgroundImage: "advertising-icon",
        backgroundColor: "yellow",
        backgroundImagePosition: "left"
    }, {
        title: "Social Media",
        content: "Let us handle your social media presence and engage with your audience on a personal level.",
        url: "/",
        backgroundImage: "social-media-icon",
        backgroundColor: "pink",
        backgroundImagePosition: "bottom-right"
    }, {
        title: "Analytics",
        content: "Stay on top of your campaign's performance with our detailed analytics and reporting.",
        url: "/",
        backgroundImage: "analytics-icon",
        backgroundColor: "cyan",
        backgroundImagePosition: "left"
    }];
    return (
        <main className="landing-page">
            <section className="section section-hero">
                <div className="container" data-type="wide">
                    <div className="switcher">
                        <div className="section-hero__content | flow vertical-centered">
                            <h1 className="heading-1">Welcome to <span className="clr-brand-accent-400">BrandBoosters</span></h1>
                            <p>Dedicated to boosting your brand’s visibility and success that uses the latest strategies & techniques to
                                help you reach your target audience and achieve your goals.</p>
                            <div className="section-hero__ctas | flex-group">
                                <a href="" className="button" data-type="primary">Join now</a>
                                <a href="" className="button">Learn more</a>
                            </div>
                        </div>
                        <div className="section-hero__image-container">
                            <img className="section-hero__image | border-radius-2" src="./images/group-on-computer.webp" alt="A group three people seeing a computer" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section about-us | bg-brand-primary-700 clr-neutral-000">
                <div className="container">
                    <div className="switcher">
                        <div className="about-us__content | flow vertical-centered">
                            <h2 className="heading-2 | clr-neutral-000">About Us</h2>
                            <p>BrandBoosters was founded with the mission of <span className="fw-bold">helping businesses of all sizes</span> achieve their marketing goals by working closely with each client to <span className="fw-bold">develop a customized strategy that delivers result</span> </p>
                            <div className="about-us__ctas">
                                <Link to="/beyond-brand-boosters/about-us" className="button" data-type="accent">Learn more about us</Link>
                            </div>
                        </div>
                        <div className="about-us__image | full-height-image" data-position="right" style={{ "--space-top": "1.25rem" } as React.CSSProperties}>
                            <img className="round-top | bg-brand-primary-200" src="./images/girl-on-phone.webp" alt="girl on phone" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section features">
                <div className="container | flow" style={{ "--flow-spacer": "1.375rem" } as React.CSSProperties}>
                    <h2 className="heading-2 | text-center">Features</h2>
                    <div className="features__content | offset-grid">
                        {featureCards.map((featureCard, index) => {
                            return (
                                <FeatureCard key={index} {...featureCard} />
                            );
                        })
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LandingPage;