import { Outlet } from "@tanstack/react-router";
import SiteHeader from "../organisms/SiteHeader";
import SiteFooter from "../organisms/SiteFooter";

const DefaultLayout = () => {
    return (<>
        <SiteHeader />
        <Outlet />
        <SiteFooter />
    </>);
};

export default DefaultLayout;