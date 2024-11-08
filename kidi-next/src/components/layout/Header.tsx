// src/components/layout/Header.tsx
"use client";

import { useDevice } from "@/context/DeviceCheckContext";
import dynamic from "next/dynamic";

const MobileHeader = dynamic(() => import("@/components/layout/HeaderMobile"), {
    loading: () => <div>Loading...</div>,
});

const DesktopHeader = dynamic(() => import("@/components/layout/HeaderPc"), {
    loading: () => <div>Loading...</div>,
});

export default function Header() {
    const { isMobile } = useDevice();

    return (
        <header
            id="header"
            className={`header ${isMobile ? "" : "web-header"}`}
        >
            {isMobile ? <MobileHeader /> : <DesktopHeader />}
        </header>
    );
}
