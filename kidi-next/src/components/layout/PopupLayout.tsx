"use client";

import { DeviceProvider } from "@/context";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DeviceProvider>{children}</DeviceProvider>;
}
