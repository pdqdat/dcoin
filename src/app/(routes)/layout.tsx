import React from "react";

// Components
import Header from "@/components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />

            <div className="mt-4">{children}</div>
        </div>
    );
};

export default MainLayout;
