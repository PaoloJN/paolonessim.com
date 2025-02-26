import React from "react";
import { Breadcrumb } from "@/components/breadcrumb";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="items-center container py-12 md:py-10">
            <Breadcrumb />
            {children}
        </div>
    );
}
