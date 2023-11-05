import { ReactNode } from "react";
import SiteHeader from "../organisms/SiteHeader";

type DefaultLayoutProps = {
    children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (<>
        <SiteHeader />
        {children}
    </>);
};

export default DefaultLayout;