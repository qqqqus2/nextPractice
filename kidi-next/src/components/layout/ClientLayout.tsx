"use client";

import { DeviceProvider } from "@/context";
import Header from "@/components/layout/Header";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DeviceProvider>
            <Header />
            <main>{children}</main>
        </DeviceProvider>
    );
}
