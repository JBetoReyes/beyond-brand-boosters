import SiteNav from "./SiteNav";


const SiteHeader = () => {
    return (
        <header className="site-header">
            <div className="container" data-type="wide">
                <div className="site-header__inner">
                    <img src="/images/logo.svg" alt="" className="logo" />
                    <SiteNav />
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;