

const SiteHeader = () => {
    return (
        <header className="site-header">
            <div className="container" data-type="wide">
                <div className="site-header__inner">
                    <img src="/images/logo.svg" alt="" className="logo" />
                    <nav aria-label="primary navigation">
                        <ul className="nav | flex-group">
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;