import { ReactNode } from "react";
import SiteHeader from "../organisms/SiteHeader";
import SiteFooter from "../organisms/SiteFooter";

type DefaultLayoutProps = {
    children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (<>
        <SiteHeader />
        {children}
        <SiteFooter />
    </>);
};

export default DefaultLayout;