"use client";

import { DeviceProvider } from "@/context";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollTopBtn from "@/components/scrollTopBtn";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DeviceProvider>
            <Header />
            <section className="kidi-wrap">
                <div id="container">{children}</div>
            </section>
            <Footer />
            <ScrollTopBtn />
        </DeviceProvider>
    );
}
