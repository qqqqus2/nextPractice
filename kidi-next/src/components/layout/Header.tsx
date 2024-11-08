"use client";

import { useDevice } from "@/context/DeviceCheckContext";
import dynamic from "next/dynamic";

const MobileHeader = dynamic(() => import("@/components/layout/HeaderMobile"), {
    loading: () => <div></div>,
});

const DesktopHeader = dynamic(() => import("@/components/layout/HeaderPc"), {
    loading: () => <div></div>,
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
