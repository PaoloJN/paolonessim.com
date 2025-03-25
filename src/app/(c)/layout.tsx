import React from "react";
import { Breadcrumb } from "@/components/breadcrumb";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="container items-center space-y-10 md:space-y-12">
            <Breadcrumb />
            {children}
        </section>
    );
}
