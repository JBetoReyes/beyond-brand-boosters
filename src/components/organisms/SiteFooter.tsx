import SiteNav from "./SiteNav";

const SiteFooter = () => {
    return (
        <footer className="site-footer">
            <div className="container | underline" data-type="wide">
                <SiteNav />
            </div>
            <div className="fine-print | fs-200 text-center">
                © 2023 Brand, Inc. •
                <a href="">Privacy </a>•
                <a href="">Terms </a>•
                <a href="">Sitemap</a>
            </div>
        </footer>
    );
}

export default SiteFooter;