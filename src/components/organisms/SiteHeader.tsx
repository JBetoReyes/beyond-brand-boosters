import { Link } from "@tanstack/react-router";
import SiteNav from "./SiteNav";

const SiteHeader = () => {
    return (
        <header className="site-header">
            <div className="container" data-type="wide">
                <div className="site-header__inner">
                    <Link to="/beyond-brand-boosters/">
                        <img src="./images/logo.svg" alt="" className="logo" />
                    </Link>
                    <SiteNav />
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;