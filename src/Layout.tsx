import { ReactNode } from "react";
import NavBar from "@/components/nav-bar";
import {AuthProvider} from "@/lib/Store.tsx";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="app-layout">
            <AuthProvider>
                <NavBar />
            <main>{children}</main>
            </AuthProvider>
        </div>
    );
};

export default Layout;
